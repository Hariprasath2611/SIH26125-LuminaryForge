import { expect } from "chai";
import { ethers } from "hardhat";
import { AuditAnchor } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("AuditAnchor", () => {
  let auditAnchor: AuditAnchor;
  let admin: SignerWithAddress;
  let auditor: SignerWithAddress;
  let unauthorizedUser: SignerWithAddress;

  beforeEach(async () => {
    [admin, auditor, unauthorizedUser] = await ethers.getSigners();
    const Factory = await ethers.getContractFactory("AuditAnchor");
    auditAnchor = (await Factory.deploy(admin.address)) as AuditAnchor;
    await auditAnchor.waitForDeployment();

    const AUDITOR_ROLE = await auditAnchor.AUDITOR_ROLE();
    await auditAnchor.connect(admin).grantRole(AUDITOR_ROLE, auditor.address);
  });

  it("should anchor a Merkle root and verify log inclusion", async () => {
    // Generate simple 2-leaf Merkle tree
    const leafA = ethers.keccak256(ethers.toUtf8Bytes("LogRecordA:AccessGranted:Asset1:User1"));
    const leafB = ethers.keccak256(ethers.toUtf8Bytes("LogRecordB:AccessRevoked:Asset1:User1"));

    // Standard OpenZeppelin / sorted pair Merkle root
    const [left, right] = [leafA, leafB].sort();
    const root = ethers.keccak256(ethers.concat([left, right]));

    await expect(
      auditAnchor.connect(auditor).anchorMerkleRoot(root, 2, "ipfs://QmBatchAuditLogArchiveCID")
    )
      .to.emit(auditAnchor, "MerkleRootAnchored")
      .withArgs(0, root, 2, auditor.address, "ipfs://QmBatchAuditLogArchiveCID", (val: any) => val > 0);

    // Proof for leafA is [leafB]
    const proofForA = [leafB];
    const isIncluded = await auditAnchor.verifyLogIncluded(leafA, proofForA, 0);
    expect(isIncluded).to.be.true;

    // Tampered leaf
    const fakeLeaf = ethers.keccak256(ethers.toUtf8Bytes("FakeLogTamperedRecord"));
    const isFakeIncluded = await auditAnchor.verifyLogIncluded(fakeLeaf, proofForA, 0);
    expect(isFakeIncluded).to.be.false;

    // Getters
    expect(await auditAnchor.getAnchorCount()).to.equal(1);
    const anchorRecord = await auditAnchor.getAnchor(0);
    expect(anchorRecord.merkleRoot).to.equal(root);
    const latest = await auditAnchor.latestAnchor();
    expect(latest.merkleRoot).to.equal(root);
  });

  it("Reverts when accessing out of bounds anchor index", async () => {
    await expect(auditAnchor.getAnchor(99)).to.be.revertedWithCustomError(auditAnchor, "IndexOutOfBounds");
  });

  it("Unauthorized user cannot anchor Merkle roots", async () => {
    const randomRoot = ethers.keccak256(ethers.toUtf8Bytes("root"));
    await expect(
      auditAnchor.connect(unauthorizedUser).anchorMerkleRoot(randomRoot, 10, "")
    ).to.be.revertedWithCustomError(auditAnchor, "AccessControlUnauthorizedAccount");
  });
});
