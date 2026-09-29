import { expect } from "chai";
import { ethers } from "hardhat";
import { IdentityRegistry } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("IdentityRegistry", () => {
  let identityRegistry: IdentityRegistry;
  let admin: SignerWithAddress;
  let issuer: SignerWithAddress;
  let holder: SignerWithAddress;
  let verifier: SignerWithAddress;
  let other: SignerWithAddress;

  const testDID = ethers.keccak256(ethers.toUtf8Bytes("did:ethr:31337:0xHolder"));
  const metadataCID = "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco";

  beforeEach(async () => {
    [admin, issuer, holder, verifier, other] = await ethers.getSigners();
    const IdentityRegistryFactory = await ethers.getContractFactory("IdentityRegistry");
    identityRegistry = (await IdentityRegistryFactory.deploy(admin.address)) as IdentityRegistry;
    await identityRegistry.waitForDeployment();
  });

  describe("DID Lifecycle", () => {
    it("should allow a controller to register their DID", async () => {
      await expect(identityRegistry.connect(holder).registerDID(testDID, holder.address, metadataCID))
        .to.emit(identityRegistry, "DIDRegistered")
        .withArgs(testDID, holder.address, metadataCID, (val: any) => val > 0);

      const didRecord = await identityRegistry.getDID(testDID);
      expect(didRecord.controller).to.equal(holder.address);
      expect(didRecord.metadataCID).to.equal(metadataCID);
      expect(didRecord.active).to.be.true;

      const controllerDID = await identityRegistry.getDIDByController(holder.address);
      expect(controllerDID.didHash).to.equal(testDID);
    });

    it("should revert if another party tries to register a DID for someone else without admin role", async () => {
      await expect(
        identityRegistry.connect(other).registerDID(testDID, holder.address, metadataCID)
      ).to.be.revertedWithCustomError(identityRegistry, "UnauthorizedController");
    });

    it("should revert registering a duplicate DID or duplicate controller", async () => {
      await identityRegistry.connect(holder).registerDID(testDID, holder.address, metadataCID);

      // Duplicate DID hash
      await expect(
        identityRegistry.connect(admin).registerDID(testDID, other.address, metadataCID)
      ).to.be.revertedWithCustomError(identityRegistry, "DIDAlreadyRegistered");

      // Duplicate controller
      const secondDID = ethers.keccak256(ethers.toUtf8Bytes("did:ethr:31337:0xSecond"));
      await expect(
        identityRegistry.connect(holder).registerDID(secondDID, holder.address, metadataCID)
      ).to.be.revertedWithCustomError(identityRegistry, "ControllerAlreadyBound");
    });

    it("should allow controller to update metadata CID", async () => {
      await identityRegistry.connect(holder).registerDID(testDID, holder.address, metadataCID);
      const newCID = "QmNewMetadataCIDForWrappingPublicKeyAndEndpoints";

      await expect(identityRegistry.connect(holder).updateMetadata(testDID, newCID))
        .to.emit(identityRegistry, "DIDMetadataUpdated")
        .withArgs(testDID, newCID, (val: any) => val > 0);

      const record = await identityRegistry.getDID(testDID);
      expect(record.metadataCID).to.equal(newCID);
    });

    it("should allow controller to update controller address", async () => {
      await identityRegistry.connect(holder).registerDID(testDID, holder.address, metadataCID);

      await expect(identityRegistry.connect(holder).updateController(testDID, other.address))
        .to.emit(identityRegistry, "DIDControllerUpdated")
        .withArgs(testDID, holder.address, other.address, (val: any) => val > 0);

      const record = await identityRegistry.getDID(testDID);
      expect(record.controller).to.equal(other.address);

      // Old controller no longer maps
      await expect(identityRegistry.getDIDByController(holder.address)).to.be.revertedWithCustomError(
        identityRegistry,
        "DIDNotRegistered"
      );
      // New controller maps
      const newMapping = await identityRegistry.getDIDByController(other.address);
      expect(newMapping.didHash).to.equal(testDID);
    });

    it("should allow deactivating a DID", async () => {
      await identityRegistry.connect(holder).registerDID(testDID, holder.address, metadataCID);

      await expect(identityRegistry.connect(holder).deactivateDID(testDID))
        .to.emit(identityRegistry, "DIDDeactivatedEvent")
        .withArgs(testDID, (val: any) => val > 0);

      const record = await identityRegistry.getDID(testDID);
      expect(record.active).to.be.false;

      // Updating a deactivated DID must revert
      await expect(
        identityRegistry.connect(holder).updateMetadata(testDID, "QmAnother")
      ).to.be.revertedWithCustomError(identityRegistry, "DIDDeactivated");
    });
  });

  describe("Trusted Issuers", () => {
    it("should allow admin to add and remove trusted issuers", async () => {
      expect(await identityRegistry.isIssuerTrusted(issuer.address)).to.be.false;

      await expect(identityRegistry.connect(admin).addIssuer(issuer.address))
        .to.emit(identityRegistry, "IssuerAdded")
        .withArgs(issuer.address, admin.address, (val: any) => val > 0);

      expect(await identityRegistry.isIssuerTrusted(issuer.address)).to.be.true;

      await expect(identityRegistry.connect(admin).removeIssuer(issuer.address))
        .to.emit(identityRegistry, "IssuerRemoved")
        .withArgs(issuer.address, admin.address, (val: any) => val > 0);

      expect(await identityRegistry.isIssuerTrusted(issuer.address)).to.be.false;
    });

    it("should prevent non-admin from managing issuers", async () => {
      await expect(
        identityRegistry.connect(other).addIssuer(issuer.address)
      ).to.be.revertedWithCustomError(identityRegistry, "AccessControlUnauthorizedAccount");
    });
  });

  describe("Credential Anchoring & Verification", () => {
    const credHash = ethers.keccak256(ethers.toUtf8Bytes("Degree:BTech:ComputerScience:CGPA9.4"));

    beforeEach(async () => {
      await identityRegistry.connect(admin).addIssuer(issuer.address);
    });

    it("should allow a trusted issuer to anchor a credential", async () => {
      const now = (await ethers.provider.getBlock("latest"))!.timestamp;
      const expiry = now + 86400 * 365; // 1 year

      await expect(identityRegistry.connect(issuer).anchorCredential(credHash, holder.address, expiry))
        .to.emit(identityRegistry, "CredentialAnchored")
        .withArgs(credHash, issuer.address, holder.address, expiry, (val: any) => val > 0);

      const res = await identityRegistry.verifyCredential(credHash);
      expect(res.valid).to.be.true;
      expect(res.issuer).to.equal(issuer.address);
      expect(res.subject).to.equal(holder.address);
      expect(res.expiry).to.equal(expiry);
      expect(res.revoked).to.be.false;
    });

    it("INVARIANT: Non-trusted issuer can NEVER anchor a credential", async () => {
      await expect(
        identityRegistry.connect(other).anchorCredential(credHash, holder.address, 0)
      ).to.be.revertedWithCustomError(identityRegistry, "UnauthorizedIssuer");
    });

    it("INVARIANT: Revoked credential is NEVER valid", async () => {
      await identityRegistry.connect(issuer).anchorCredential(credHash, holder.address, 0);
      expect((await identityRegistry.verifyCredential(credHash)).valid).to.be.true;

      await expect(identityRegistry.connect(issuer).revokeCredential(credHash))
        .to.emit(identityRegistry, "CredentialRevoked")
        .withArgs(credHash, issuer.address, (val: any) => val > 0);

      const res = await identityRegistry.verifyCredential(credHash);
      expect(res.valid).to.be.false;
      expect(res.revoked).to.be.true;

      // Second revocation must revert
      await expect(
        identityRegistry.connect(issuer).revokeCredential(credHash)
      ).to.be.revertedWithCustomError(identityRegistry, "CredentialAlreadyRevoked");
    });

    it("INVARIANT: Expired credential is NEVER valid", async () => {
      const now = (await ethers.provider.getBlock("latest"))!.timestamp;
      const expiry = now + 10; // 10 seconds

      await identityRegistry.connect(issuer).anchorCredential(credHash, holder.address, expiry);
      expect((await identityRegistry.verifyCredential(credHash)).valid).to.be.true;

      // Advance EVM time past expiry
      await ethers.provider.send("evm_increaseTime", [20]);
      await ethers.provider.send("evm_mine", []);

      const res = await identityRegistry.verifyCredential(credHash);
      expect(res.valid).to.be.false;
      expect(res.revoked).to.be.false;
    });

    it("Unknown credential returns valid = false", async () => {
      const randomHash = ethers.keccak256(ethers.toUtf8Bytes("randomUnknown"));
      const res = await identityRegistry.verifyCredential(randomHash);
      expect(res.valid).to.be.false;
      expect(res.issuer).to.equal(ethers.ZeroAddress);
    });
  });

  describe("Pausable & Security", () => {
    it("should allow pauser role to pause and block mutations", async () => {
      await identityRegistry.connect(admin).pause();
      await expect(
        identityRegistry.connect(holder).registerDID(testDID, holder.address, metadataCID)
      ).to.be.revertedWithCustomError(identityRegistry, "EnforcedPause");

      await identityRegistry.connect(admin).unpause();
      await expect(
        identityRegistry.connect(holder).registerDID(testDID, holder.address, metadataCID)
      ).to.emit(identityRegistry, "DIDRegistered");
    });
  });
});
