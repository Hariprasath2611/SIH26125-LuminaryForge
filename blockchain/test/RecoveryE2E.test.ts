import { expect } from "chai";
import { ethers } from "hardhat";
import { IdentityRegistry, SocialRecovery } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("Milestone 10: End-to-End Multi-Guardian Social Recovery Lifecycle", () => {
  let identityRegistry: IdentityRegistry;
  let socialRecovery: SocialRecovery;

  let admin: SignerWithAddress;
  let alice: SignerWithAddress; // Lost account
  let bob: SignerWithAddress;   // Proposed new owner
  let guardian1: SignerWithAddress;
  let guardian2: SignerWithAddress;
  let guardian3: SignerWithAddress;

  const metadataCID = "bafkreialiceinitialmetadata1234567890abcdef";

  beforeEach(async () => {
    [admin, alice, bob, guardian1, guardian2, guardian3] = await ethers.getSigners();

    // 1. Deploy IdentityRegistry
    const IdentityFactory = await ethers.getContractFactory("IdentityRegistry");
    identityRegistry = (await IdentityFactory.deploy(admin.address)) as IdentityRegistry;
    await identityRegistry.waitForDeployment();

    // 2. Deploy SocialRecovery wired to IdentityRegistry
    const RecoveryFactory = await ethers.getContractFactory("SocialRecovery");
    socialRecovery = (await RecoveryFactory.deploy(
      admin.address,
      await identityRegistry.getAddress()
    )) as SocialRecovery;
    await socialRecovery.waitForDeployment();

    // Grant SocialRecovery contract ADMIN_ROLE on IdentityRegistry so it can call updateController
    const DEFAULT_ADMIN_ROLE = await identityRegistry.DEFAULT_ADMIN_ROLE();
    await identityRegistry.connect(admin).grantRole(DEFAULT_ADMIN_ROLE, await socialRecovery.getAddress());

    // 3. Alice registers her DID
    const aliceDIDHash = ethers.keccak256(ethers.toUtf8Bytes(`did:ethr:31337:${alice.address.toLowerCase()}`));
    await identityRegistry.connect(alice).registerDID(aliceDIDHash, alice.address, metadataCID);
  });

  it("completes full recovery: 3 guardians configured -> 1 lost key -> 2 approve -> timelock -> finalize -> new controller verified", async () => {
    // A. Alice configures 3 guardians with threshold 2
    const guardiansList = [guardian1.address, guardian2.address, guardian3.address];
    await expect(socialRecovery.connect(alice).setupGuardians(guardiansList, 2))
      .to.emit(socialRecovery, "GuardiansUpdated")
      .withArgs(alice.address, guardiansList, 2);

    // Verify config
    const [storedGuardians, threshold] = await socialRecovery.getGuardians(alice.address);
    expect(storedGuardians).to.deep.equal(guardiansList);
    expect(threshold).to.equal(2n);

    // B. Alice loses her private key. Guardian 1 initiates recovery for Bob
    await expect(socialRecovery.connect(guardian1).initiateRecovery(alice.address, bob.address))
      .to.emit(socialRecovery, "RecoveryInitiated")
      .to.emit(socialRecovery, "RecoveryApproved")
      .withArgs(alice.address, guardian1.address, 1n, 2n);

    // Check intermediate state
    let session = await socialRecovery.getRecoverySession(alice.address);
    expect(session.active).to.be.true;
    expect(session.approvalsCount).to.equal(1n);
    expect(session.proposedNewOwner).to.equal(bob.address);

    // Attempting to finalize before threshold or timelock should revert
    await expect(
      socialRecovery.finalizeRecovery(alice.address)
    ).to.be.revertedWithCustomError(socialRecovery, "ThresholdNotMet");

    // C. Guardian 2 casts second approval (threshold 2 reached!)
    await expect(socialRecovery.connect(guardian2).approveRecovery(alice.address, bob.address))
      .to.emit(socialRecovery, "RecoveryApproved")
      .withArgs(alice.address, guardian2.address, 2n, 2n);

    session = await socialRecovery.getRecoverySession(alice.address);
    expect(session.approvalsCount).to.equal(2n);

    // Attempting to finalize before timelock passes should revert
    await expect(
      socialRecovery.finalizeRecovery(alice.address)
    ).to.be.revertedWithCustomError(socialRecovery, "TimelockStillActive");

    // D. Timelock delay passes (demoMode = true, delay = 2 minutes)
    await ethers.provider.send("evm_increaseTime", [130]);
    await ethers.provider.send("evm_mine", []);

    // E. Anyone or guardian executes finalization
    await expect(socialRecovery.finalizeRecovery(alice.address))
      .to.emit(socialRecovery, "RecoveryFinalized")
      .withArgs(alice.address, alice.address, bob.address);

    // F. Assertions: Bob is now the controller on IdentityRegistry!
    const didRecord = await identityRegistry.getDIDByController(bob.address);
    expect(didRecord.controller).to.equal(bob.address);
    expect(didRecord.active).to.be.true;

    // G. Verify Alice (the lost key) CANNOT mutate the DID anymore
    await expect(
      identityRegistry.connect(alice).updateMetadata(didRecord.didHash, "bafkremalicious")
    ).to.be.revertedWithCustomError(identityRegistry, "UnauthorizedController");

    // H. Verify Bob (new controller) CAN successfully update metadata
    await expect(
      identityRegistry.connect(bob).updateMetadata(didRecord.didHash, "bafkrenewbobmetadata")
    ).to.emit(identityRegistry, "DIDMetadataUpdated");
  });
});
