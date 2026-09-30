import { expect } from "chai";
import { ethers } from "hardhat";
import { SocialRecovery, IdentityRegistry } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("SocialRecovery", () => {
  let socialRecovery: SocialRecovery;
  let identityRegistry: IdentityRegistry;
  let admin: SignerWithAddress;
  let account: SignerWithAddress;
  let g1: SignerWithAddress;
  let g2: SignerWithAddress;
  let g3: SignerWithAddress;
  let proposedNewOwner: SignerWithAddress;
  let outsider: SignerWithAddress;

  beforeEach(async () => {
    [admin, account, g1, g2, g3, proposedNewOwner, outsider] = await ethers.getSigners();

    const IdentityFactory = await ethers.getContractFactory("IdentityRegistry");
    identityRegistry = (await IdentityFactory.deploy(admin.address)) as IdentityRegistry;
    await identityRegistry.waitForDeployment();

    const SocialFactory = await ethers.getContractFactory("SocialRecovery");
    socialRecovery = (await SocialFactory.deploy(
      admin.address,
      await identityRegistry.getAddress()
    )) as SocialRecovery;
    await socialRecovery.waitForDeployment();

    // Setup 2-of-3 guardians
    await socialRecovery
      .connect(account)
      .setupGuardians([g1.address, g2.address, g3.address], 2);
  });

  describe("Guardian Configuration", () => {
    it("should configure guardians and threshold correctly", async () => {
      const [guardians, threshold] = await socialRecovery.getGuardians(account.address);
      expect(guardians).to.deep.equal([g1.address, g2.address, g3.address]);
      expect(threshold).to.equal(2);
    });

    it("should revert if threshold is 0 or greater than guardians count", async () => {
      await expect(
        socialRecovery.connect(account).setupGuardians([g1.address], 2)
      ).to.be.revertedWithCustomError(socialRecovery, "InvalidThreshold");
    });
  });

  describe("Recovery Flow", () => {
    it("should allow a guardian to initiate recovery", async () => {
      await expect(socialRecovery.connect(g1).initiateRecovery(account.address, proposedNewOwner.address))
        .to.emit(socialRecovery, "RecoveryInitiated")
        .withArgs(account.address, proposedNewOwner.address, g1.address, (val: any) => val > 0);

      const session = await socialRecovery.getRecoverySession(account.address);
      expect(session.active).to.be.true;
      expect(session.approvalsCount).to.equal(1);
      expect(session.proposedNewOwner).to.equal(proposedNewOwner.address);
    });

    it("Non-guardian cannot initiate recovery", async () => {
      await expect(
        socialRecovery.connect(outsider).initiateRecovery(account.address, proposedNewOwner.address)
      ).to.be.revertedWithCustomError(socialRecovery, "NotAGuardian");
    });

    it("should require threshold approvals and timelock completion to finalize", async () => {
      // 1. G1 initiates (1 approval)
      await socialRecovery.connect(g1).initiateRecovery(account.address, proposedNewOwner.address);

      // Attempting to finalize with 1 of 2 approvals must revert
      await expect(
        socialRecovery.connect(g1).finalizeRecovery(account.address)
      ).to.be.revertedWithCustomError(socialRecovery, "ThresholdNotMet");

      // 2. G2 approves (2 of 2 approvals met)
      await expect(socialRecovery.connect(g2).approveRecovery(account.address, proposedNewOwner.address))
        .to.emit(socialRecovery, "RecoveryApproved")
        .withArgs(account.address, g2.address, 2, 2);

      // Timelock still active (demo mode: 2 minutes)
      await expect(
        socialRecovery.connect(g1).finalizeRecovery(account.address)
      ).to.be.revertedWithCustomError(socialRecovery, "TimelockStillActive");

      // Fast forward past 2-minute demo timelock
      await ethers.provider.send("evm_increaseTime", [130]);
      await ethers.provider.send("evm_mine", []);

      // Finalize recovery
      await expect(socialRecovery.connect(g1).finalizeRecovery(account.address))
        .to.emit(socialRecovery, "RecoveryFinalized")
        .withArgs(account.address, account.address, proposedNewOwner.address);

      const session = await socialRecovery.getRecoverySession(account.address);
      expect(session.active).to.be.false;
      expect(session.executed).to.be.true;
    });

    it("Account owner can cancel an unauthorized recovery attempt", async () => {
      await socialRecovery.connect(g1).initiateRecovery(account.address, proposedNewOwner.address);

      await expect(socialRecovery.connect(account).cancelRecovery(account.address))
        .to.emit(socialRecovery, "RecoveryCancelled")
        .withArgs(account.address, account.address);

      const session = await socialRecovery.getRecoverySession(account.address);
      expect(session.active).to.be.false;
    });
  });
});
