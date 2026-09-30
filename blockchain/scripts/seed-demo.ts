import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const [university, student, employer] = await ethers.getSigners();
  console.log(`[Seed-Demo] Starting demo data seeding on local chain...`);
  console.log(`[Seed-Demo] University (Issuer): ${university.address}`);
  console.log(`[Seed-Demo] Student (Holder):    ${student.address}`);
  console.log(`[Seed-Demo] Employer (Verifier): ${employer.address}`);

  // Load deployment addresses
  const deployPath = path.join(__dirname, "../deployments/localhost.json");
  if (!fs.existsSync(deployPath)) {
    throw new Error(`Deployment file not found at ${deployPath}. Run 'npm run deploy' first.`);
  }

  const deployData = JSON.parse(fs.readFileSync(deployPath, "utf-8"));
  const addresses = deployData.addresses;

  // Contracts
  const identityRegistry = await ethers.getContractAt("IdentityRegistry", addresses.IdentityRegistry, university);
  const ownershipRegistry = await ethers.getContractAt("OwnershipRegistry", addresses.OwnershipRegistry, student);
  const accessControl = await ethers.getContractAt("BharosaAccessControl", addresses.AccessControl, student);

  // 1. Whitelist University if not already
  const isWhitelisted = await identityRegistry.isTrustedIssuer(university.address);
  if (!isWhitelisted) {
    console.log(`[Seed-Demo] Adding University as trusted issuer...`);
    const tx = await identityRegistry.addIssuer(university.address);
    await tx.wait();
  }

  // 2. Student registers DID
  const studentDidHash = ethers.keccak256(ethers.toUtf8Bytes(`did:ethr:31337:${student.address.toLowerCase()}`));
  try {
    const studentIdentity = await identityRegistry.connect(student);
    const regTx = await studentIdentity.registerDID(studentDidHash, student.address, "bafkreistudentmetadata01");
    await regTx.wait();
    console.log(`[Seed-Demo] Registered Student DID on-chain.`);
  } catch (err: any) {
    if (err.message?.includes("DIDAlreadyRegistered")) {
      console.log(`[Seed-Demo] Student DID already registered.`);
    } else {
      console.log(`[Seed-Demo] Student DID notice:`, err.message || err);
    }
  }

  // 3. University anchors sample B.Tech Degree Credential
  const credentialHash = ethers.keccak256(ethers.toUtf8Bytes(`urn:uuid:dtu-degree-2026-cs|${student.address.toLowerCase()}|9.4`));
  const now = Math.floor(Date.now() / 1000);
  const expiration = now + 365 * 24 * 3600; // 1 year
  try {
    const anchorTx = await identityRegistry.anchorCredential(
      credentialHash,
      student.address,
      expiration,
      "bafkreibdegreecredential01"
    );
    await anchorTx.wait();
    console.log(`[Seed-Demo] Anchored University Degree Credential on-chain.`);
  } catch (err: any) {
    console.log(`[Seed-Demo] Degree anchor notice:`, err.message || err);
  }

  // 4. Student mints sample encrypted research paper asset
  const sampleAssetHash = ethers.keccak256(ethers.toUtf8Bytes("Zero-Knowledge Decentralized Identity on Ethereum - Alice Sharma"));
  try {
    const mintTx = await ownershipRegistry.registerAsset(
      sampleAssetHash,
      "bafkreiciphertextpaper01",
      false // transferable
    );
    await mintTx.wait();
    console.log(`[Seed-Demo] Registered sample research paper asset on OwnershipRegistry.`);
  } catch (err: any) {
    console.log(`[Seed-Demo] Asset mint notice:`, err.message || err);
  }

  // 5. Employer requests access, Student grants 24h access
  try {
    const employerAccess = accessControl.connect(employer);
    const reqTx = await employerAccess.requestAccess(
      sampleAssetHash,
      "VERIFIER",
      "Technical Hiring Review & Background Verification",
      24
    );
    await reqTx.wait();
    console.log(`[Seed-Demo] Employer requested access.`);

    const grantTx = await accessControl.grantAccess(
      sampleAssetHash,
      employer.address,
      "VERIFIER",
      now - 60, // active starting 1 min ago
      now + 24 * 3600 // 24 hours
    );
    await grantTx.wait();
    console.log(`[Seed-Demo] Student granted 24h active access to Employer.`);
  } catch (err: any) {
    console.log(`[Seed-Demo] Access grant notice:`, err.message || err);
  }

  console.log(`[Seed-Demo] Demo seeding completed successfully! All accounts and state ready.`);
}

main().catch((error) => {
  console.error("[Seed-Demo] Error:", error);
  process.exitCode = 1;
});
