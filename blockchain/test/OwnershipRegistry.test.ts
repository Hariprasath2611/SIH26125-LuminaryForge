import { expect } from "chai";
import { ethers } from "hardhat";
import { OwnershipRegistry } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("OwnershipRegistry", () => {
  let ownershipRegistry: OwnershipRegistry;
  let admin: SignerWithAddress;
  let owner: SignerWithAddress;
  let recipient: SignerWithAddress;
  let other: SignerWithAddress;

  const sampleCID = "QmEncryptedDocCID123456789";
  const contentHash = ethers.keccak256(ethers.toUtf8Bytes("PlainTextOriginalFileDocument"));
  const metadataCID = "QmMetadataDescriptorCID";

  beforeEach(async () => {
    [admin, owner, recipient, other] = await ethers.getSigners();
    const Factory = await ethers.getContractFactory("OwnershipRegistry");
    ownershipRegistry = (await Factory.deploy(admin.address)) as OwnershipRegistry;
    await ownershipRegistry.waitForDeployment();
  });

  describe("Asset Registration", () => {
    it("should register a transferable asset and mint ERC1155 1-of-1 token", async () => {
      const tx = await ownershipRegistry.connect(owner).registerAsset(sampleCID, contentHash, metadataCID, false);
      const receipt = await tx.wait();

      const event = receipt?.logs.find((log: any) => {
        try {
          return ownershipRegistry.interface.parseLog(log)?.name === "AssetRegistered";
        } catch {
          return false;
        }
      });
      const parsed = ownershipRegistry.interface.parseLog(event!);
      const assetId = parsed?.args.assetId;

      expect(await ownershipRegistry.ownerOf(assetId)).to.equal(owner.address);

      const asset = await ownershipRegistry.getAsset(assetId);
      expect(asset.cid).to.equal(sampleCID);
      expect(asset.contentHash).to.equal(contentHash);
      expect(asset.isSoulbound).to.be.false;

      // ERC1155 balance check
      expect(await ownershipRegistry.balanceOf(owner.address, assetId)).to.equal(1);
    });

    it("should register a soulbound credential asset", async () => {
      const tx = await ownershipRegistry.connect(owner).registerAsset(sampleCID, contentHash, metadataCID, true);
      const receipt = await tx.wait();
      const parsed = ownershipRegistry.interface.parseLog(receipt!.logs[1]);
      const assetId = parsed?.args.assetId;

      const asset = await ownershipRegistry.getAsset(assetId);
      expect(asset.isSoulbound).to.be.true;
    });
  });

  describe("Ownership Transfer", () => {
    it("should transfer transferable asset to a new owner", async () => {
      const tx = await ownershipRegistry.connect(owner).registerAsset(sampleCID, contentHash, metadataCID, false);
      const receipt = await tx.wait();
      const assetId = ownershipRegistry.interface.parseLog(receipt!.logs[1])?.args.assetId;

      await expect(ownershipRegistry.connect(owner).transferOwnership(assetId, recipient.address))
        .to.emit(ownershipRegistry, "OwnershipTransferred")
        .withArgs(assetId, owner.address, recipient.address, (val: any) => val > 0);

      expect(await ownershipRegistry.ownerOf(assetId)).to.equal(recipient.address);
      expect(await ownershipRegistry.balanceOf(recipient.address, assetId)).to.equal(1);
      expect(await ownershipRegistry.balanceOf(owner.address, assetId)).to.equal(0);
    });

    it("INVARIANT: Soulbound asset can NEVER be transferred", async () => {
      const tx = await ownershipRegistry.connect(owner).registerAsset(sampleCID, contentHash, metadataCID, true);
      const receipt = await tx.wait();
      const assetId = ownershipRegistry.interface.parseLog(receipt!.logs[1])?.args.assetId;

      await expect(
        ownershipRegistry.connect(owner).transferOwnership(assetId, recipient.address)
      ).to.be.revertedWithCustomError(ownershipRegistry, "SoulboundAssetCannotBeTransferred");
    });

    it("Non-owner cannot transfer asset", async () => {
      const tx = await ownershipRegistry.connect(owner).registerAsset(sampleCID, contentHash, metadataCID, false);
      const receipt = await tx.wait();
      const assetId = ownershipRegistry.interface.parseLog(receipt!.logs[1])?.args.assetId;

      await expect(
        ownershipRegistry.connect(other).transferOwnership(assetId, recipient.address)
      ).to.be.revertedWithCustomError(ownershipRegistry, "NotAssetOwner");
    });
  });

  describe("Integrity & Hash Verification", () => {
    it("should verify correct content hash and detect tampering", async () => {
      const tx = await ownershipRegistry.connect(owner).registerAsset(sampleCID, contentHash, metadataCID, false);
      const receipt = await tx.wait();
      const assetId = ownershipRegistry.interface.parseLog(receipt!.logs[1])?.args.assetId;

      // Authentic hash
      const [matchedAuthentic] = await ownershipRegistry.verifyHash.staticCall(assetId, contentHash);
      expect(matchedAuthentic).to.be.true;

      // Tampered file hash
      const tamperedHash = ethers.keccak256(ethers.toUtf8Bytes("MaliciousTamperedData"));
      const [matchedTampered] = await ownershipRegistry.verifyHash.staticCall(assetId, tamperedHash);
      expect(matchedTampered).to.be.false;
    });
  });
});
