import { expect } from "chai";
import { ethers } from "hardhat";
import { BharosaAccessControl, OwnershipRegistry } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("BharosaAccessControl", () => {
  let accessControl: BharosaAccessControl;
  let ownershipRegistry: OwnershipRegistry;
  let admin: SignerWithAddress;
  let owner: SignerWithAddress;
  let grantee: SignerWithAddress;
  let thirdParty: SignerWithAddress;

  let assetId: string;
  const wrappedKeyCID = "QmWrappedAESKeyBlobPinnedOnIPFSForGrantee";

  beforeEach(async () => {
    [admin, owner, grantee, thirdParty] = await ethers.getSigners();

    const OwnershipRegistryFactory = await ethers.getContractFactory("OwnershipRegistry");
    ownershipRegistry = (await OwnershipRegistryFactory.deploy(admin.address)) as OwnershipRegistry;
    await ownershipRegistry.waitForDeployment();

    const AccessControlFactory = await ethers.getContractFactory("BharosaAccessControl");
    accessControl = (await AccessControlFactory.deploy(
      admin.address,
      await ownershipRegistry.getAddress()
    )) as BharosaAccessControl;
    await accessControl.waitForDeployment();

    // Register test asset owned by `owner`
    const cid = "QmEncryptedCiphertextCID";
    const contentHash = ethers.keccak256(ethers.toUtf8Bytes("GradeSheetContentData"));
    const metadataCID = "QmAssetMetadataCID";

    const tx = await ownershipRegistry.connect(owner).registerAsset(cid, contentHash, metadataCID, false);
    const receipt = await tx.wait();
    const event = receipt?.logs.find((log: any) => {
      try {
        return ownershipRegistry.interface.parseLog(log)?.name === "AssetRegistered";
      } catch {
        return false;
      }
    });
    const parsed = ownershipRegistry.interface.parseLog(event!);
    assetId = parsed?.args.assetId;
  });

  describe("Request and Grant Lifecycle", () => {
    it("should allow a verifier to request access", async () => {
      await expect(accessControl.connect(grantee).requestAccess(assetId, "EMPLOYER", "Background Verification"))
        .to.emit(accessControl, "AccessRequested")
        .withArgs(assetId, grantee.address, "EMPLOYER", "Background Verification", (val: any) => val > 0);

      const req = await accessControl.getRequest(assetId, grantee.address);
      expect(req.requester).to.equal(grantee.address);
      expect(req.role).to.equal("EMPLOYER");
      expect(req.fulfilled).to.be.false;
    });

    it("should allow asset owner to grant ABAC access", async () => {
      const now = (await ethers.provider.getBlock("latest"))!.timestamp;
      const notBefore = now;
      const expiresAt = now + 86400; // 24 hours

      await expect(
        accessControl
          .connect(owner)
          .grantAccess(assetId, grantee.address, "EMPLOYER", "Background Check", notBefore, expiresAt, wrappedKeyCID)
      )
        .to.emit(accessControl, "AccessGranted")
        .withArgs(assetId, grantee.address, "EMPLOYER", "Background Check", notBefore, expiresAt, wrappedKeyCID, (v: any) => v > 0);

      const [permitted, keyCID] = await accessControl.checkAccess(assetId, grantee.address, "EMPLOYER");
      expect(permitted).to.be.true;
      expect(keyCID).to.equal(wrappedKeyCID);
    });

    it("should revert if a non-owner attempts to grant access", async () => {
      const now = (await ethers.provider.getBlock("latest"))!.timestamp;
      await expect(
        accessControl
          .connect(thirdParty)
          .grantAccess(assetId, grantee.address, "EMPLOYER", "Illegal Grant", now, now + 3600, wrappedKeyCID)
      ).to.be.revertedWithCustomError(accessControl, "NotAssetOwner");
    });
  });

  describe("ABAC Invariant Checks", () => {
    let now: number;
    let notBefore: number;
    let expiresAt: number;

    beforeEach(async () => {
      now = (await ethers.provider.getBlock("latest"))!.timestamp;
      notBefore = now + 100; // starts in 100 seconds
      expiresAt = now + 500; // ends in 500 seconds

      await accessControl
        .connect(owner)
        .grantAccess(assetId, grantee.address, "VERIFIER", "Audit", notBefore, expiresAt, wrappedKeyCID);
    });

    it("INVARIANT: Before notBefore, access is NEVER permitted", async () => {
      const [permitted] = await accessControl.checkAccess(assetId, grantee.address, "VERIFIER");
      expect(permitted).to.be.false;
    });

    it("Permitted when within the exact active time window", async () => {
      await ethers.provider.send("evm_increaseTime", [150]);
      await ethers.provider.send("evm_mine", []);

      const [permitted, key] = await accessControl.checkAccess(assetId, grantee.address, "VERIFIER");
      expect(permitted).to.be.true;
      expect(key).to.equal(wrappedKeyCID);
    });

    it("INVARIANT: Expired grant is NEVER permitted", async () => {
      await ethers.provider.send("evm_increaseTime", [600]);
      await ethers.provider.send("evm_mine", []);

      const [permitted] = await accessControl.checkAccess(assetId, grantee.address, "VERIFIER");
      expect(permitted).to.be.false;
    });

    it("INVARIANT: Role mismatch is NEVER permitted", async () => {
      await ethers.provider.send("evm_increaseTime", [150]);
      await ethers.provider.send("evm_mine", []);

      const [permitted] = await accessControl.checkAccess(assetId, grantee.address, "DIFFERENT_ROLE");
      expect(permitted).to.be.false;
    });

    it("INVARIANT: Revoked grant is NEVER permitted", async () => {
      await ethers.provider.send("evm_increaseTime", [150]);
      await ethers.provider.send("evm_mine", []);

      expect((await accessControl.checkAccess(assetId, grantee.address, "VERIFIER"))[0]).to.be.true;

      await expect(accessControl.connect(owner).revokeAccess(assetId, grantee.address))
        .to.emit(accessControl, "AccessRevoked")
        .withArgs(assetId, grantee.address, owner.address, (val: any) => val > 0);

      const [permittedAfterRevocation] = await accessControl.checkAccess(assetId, grantee.address, "VERIFIER");
      expect(permittedAfterRevocation).to.be.false;
    });
  });

  describe("Gasless EIP-712 grantWithSig", () => {
    it("should allow meta-tx relayer to execute grant with owner signature", async () => {
      const now = (await ethers.provider.getBlock("latest"))!.timestamp;
      const notBefore = now;
      const expiresAt = now + 7200;
      const deadline = now + 3600;
      const nonce = await accessControl.nonces(owner.address);

      const domain = {
        name: "BharosaAccessControl",
        version: "1",
        chainId: (await ethers.provider.getNetwork()).chainId,
        verifyingContract: await accessControl.getAddress(),
      };

      const types = {
        GrantAccess: [
          { name: "assetId", type: "bytes32" },
          { name: "grantee", type: "address" },
          { name: "role", type: "string" },
          { name: "purpose", type: "string" },
          { name: "notBefore", type: "uint64" },
          { name: "expiresAt", type: "uint64" },
          { name: "wrappedKeyCID", type: "string" },
          { name: "nonce", type: "uint256" },
          { name: "deadline", type: "uint256" },
        ],
      };

      const value = {
        assetId,
        grantee: grantee.address,
        role: "AUDITOR",
        purpose: "Compliance Check",
        notBefore,
        expiresAt,
        wrappedKeyCID,
        nonce,
        deadline,
      };

      const signature = await owner.signTypedData(domain, types, value);

      // Third party (relayer) submits transaction
      await expect(
        accessControl
          .connect(thirdParty)
          .grantWithSig(
            owner.address,
            assetId,
            grantee.address,
            "AUDITOR",
            "Compliance Check",
            notBefore,
            expiresAt,
            wrappedKeyCID,
            deadline,
            signature
          )
      )
        .to.emit(accessControl, "AccessGranted")
        .withArgs(assetId, grantee.address, "AUDITOR", "Compliance Check", notBefore, expiresAt, wrappedKeyCID, (v: any) => v > 0);

      const [permitted, key] = await accessControl.checkAccess(assetId, grantee.address, "AUDITOR");
      expect(permitted).to.be.true;
      expect(key).to.equal(wrappedKeyCID);
    });
  });

  describe("Access Usage Audit Trail", () => {
    it("should log access usage when permitted and revert when unauthorized", async () => {
      const now = (await ethers.provider.getBlock("latest"))!.timestamp;
      await accessControl
        .connect(owner)
        .grantAccess(assetId, grantee.address, "EMPLOYER", "Job Interview", now, now + 3600, wrappedKeyCID);

      await expect(accessControl.connect(grantee).recordAccessUsage(assetId, "EMPLOYER"))
        .to.emit(accessControl, "AccessUsed")
        .withArgs(assetId, grantee.address, "EMPLOYER", (val: any) => val > 0);

      await expect(
        accessControl.connect(thirdParty).recordAccessUsage(assetId, "EMPLOYER")
      ).to.be.revertedWith("Access not permitted");
    });
  });
});
