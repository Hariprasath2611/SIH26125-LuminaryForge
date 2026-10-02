import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const signers = await ethers.getSigners();
  const admin = signers[0];       // 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  const priya = signers[1];       // 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
  const chennaiUniv = signers[2]; // 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
  const techCorp = signers[3];    // 0x90F79bf6EB2c4f870365E785982E1f101E93b906
  const arjun = signers[4];       // 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65

  console.log(`========================================================================`);
  console.log(`[Seed-Demo] Starting Comprehensive 5-User Demo Data Seeding on Local Chain...`);
  console.log(`========================================================================`);
  console.log(`1. Admin (Deployer):        ${admin.address}`);
  console.log(`2. Priya Sharma (Holder):   ${priya.address}`);
  console.log(`3. Chennai Univ (Issuer):   ${chennaiUniv.address}`);
  console.log(`4. TechCorp HR (Verifier):  ${techCorp.address}`);
  console.log(`5. Arjun Mehta (Holder):    ${arjun.address}\n`);

  // Load deployment addresses
  const deployPath = path.join(__dirname, "../deployments/localhost.json");
  if (!fs.existsSync(deployPath)) {
    throw new Error(`Deployment file not found at ${deployPath}. Run 'npm run deploy' first.`);
  }

  const deployData = JSON.parse(fs.readFileSync(deployPath, "utf-8"));
  const addresses = deployData.addresses;

  // Contracts
  const identityRegistry = await ethers.getContractAt("IdentityRegistry", addresses.IdentityRegistry, admin);
  const ownershipRegistry = await ethers.getContractAt("OwnershipRegistry", addresses.OwnershipRegistry, admin);
  const accessControl = await ethers.getContractAt("BharosaAccessControl", addresses.AccessControl, admin);

  const now = Math.floor(Date.now() / 1000);

  // -------------------------------------------------------------
  // 1. CHENNAI UNIVERSITY: Whitelist as Trusted Issuer
  // -------------------------------------------------------------
  const isWhitelisted = await identityRegistry.isIssuerTrusted(chennaiUniv.address);
  if (!isWhitelisted) {
    console.log(`[Seed-Demo] Adding Chennai University as trusted issuer...`);
    const tx = await identityRegistry.connect(admin).addIssuer(chennaiUniv.address);
    await tx.wait();
    console.log(`[Seed-Demo] ✓ Chennai University approved as trusted issuer.`);
  } else {
    console.log(`[Seed-Demo] ✓ Chennai University already approved as trusted issuer.`);
  }

  // -------------------------------------------------------------
  // 2. REGISTER DIDs FOR PARTICIPANTS
  // -------------------------------------------------------------
  const registerDIDSafe = async (userSigner: any, name: string) => {
    const didHash = ethers.keccak256(ethers.toUtf8Bytes(`did:ethr:31337:${userSigner.address.toLowerCase()}`));
    try {
      const tx = await identityRegistry.connect(userSigner).registerDID(
        didHash,
        userSigner.address,
        `bafkreididmetadata_${name.toLowerCase()}`
      );
      await tx.wait();
      console.log(`[Seed-Demo] ✓ Registered DID for ${name}: ${didHash}`);
    } catch (err: any) {
      if (err.message?.includes("DIDAlreadyRegistered") || err.message?.includes("ControllerAlreadyBound")) {
        console.log(`[Seed-Demo] ✓ DID for ${name} already registered.`);
      } else {
        console.log(`[Seed-Demo] Note on ${name} DID:`, err.message?.split('\n')[0]);
      }
    }
  };

  await registerDIDSafe(priya, "PriyaSharma");
  await registerDIDSafe(chennaiUniv, "ChennaiUniversity");
  await registerDIDSafe(techCorp, "TechCorpHr");
  await registerDIDSafe(arjun, "ArjunMehta");

  // -------------------------------------------------------------
  // 3. CHENNAI UNIVERSITY: 3 Credentials Issued, 1 Revoked
  // -------------------------------------------------------------
  const anchorSafe = async (credId: string, subject: string, expiry: number) => {
    const credHash = ethers.keccak256(ethers.toUtf8Bytes(credId));
    try {
      const verifyRes = await identityRegistry.verifyCredential(credHash);
      if (!verifyRes.valid && !verifyRes.revoked) {
        const tx = await identityRegistry.connect(chennaiUniv).anchorCredential(credHash, subject, expiry);
        await tx.wait();
        console.log(`[Seed-Demo] ✓ Anchored credential ${credId}`);
      }
    } catch (e: any) {
      if (!e.message?.includes("CredentialAlreadyAnchored")) {
        console.log(`[Seed-Demo] Credential anchor notice (${credId}):`, e.message?.split('\n')[0]);
      }
    }
    return credHash;
  };

  // Credential 1: Priya's B.Tech Degree (Active)
  const cred1 = await anchorSafe(
    `urn:uuid:chennai-btech-2026-cs|${priya.address.toLowerCase()}|9.4`,
    priya.address,
    now + 365 * 24 * 3600
  );

  // Credential 2: Arjun's Data Science Certificate (Active)
  const cred2 = await anchorSafe(
    `urn:uuid:chennai-datasci-cert-2026|${arjun.address.toLowerCase()}|8.8`,
    arjun.address,
    now + 180 * 24 * 3600
  );

  // Credential 3: Revoked Legacy Diploma
  const cred3 = await anchorSafe(
    `urn:uuid:chennai-revoked-diploma-2025|0x1111111111111111111111111111111111111111|7.2`,
    "0x1111111111111111111111111111111111111111",
    now + 90 * 24 * 3600
  );

  // Revoke Credential 3
  try {
    const verifyRes = await identityRegistry.verifyCredential(cred3);
    if (!verifyRes.revoked) {
      const revokeTx = await identityRegistry.connect(chennaiUniv).revokeCredential(cred3);
      await revokeTx.wait();
      console.log(`[Seed-Demo] ✓ Revoked credential 3 (1 revoked as required).`);
    } else {
      console.log(`[Seed-Demo] ✓ Credential 3 already revoked.`);
    }
  } catch (e: any) {
    console.log(`[Seed-Demo] Revocation notice:`, e.message?.split('\n')[0]);
  }

  // -------------------------------------------------------------
  // 4. PRIYA SHARMA: Encrypted Certificate Asset & Access Grants
  // -------------------------------------------------------------
  let priyaAssetId: string = ethers.ZeroHash;
  try {
    const contentHash = ethers.keccak256(ethers.toUtf8Bytes("B.Tech Degree in Computer Science & Engineering - Priya Sharma"));
    const tx = await ownershipRegistry.connect(priya).registerAsset(
      "bafkreiciphertextpriyadegree01",
      contentHash,
      "bafkreibpriyametadata01",
      false // non-soulbound
    );
    const receipt = await tx.wait();
    // Retrieve emitted AssetRegistered event
    for (const log of receipt?.logs || []) {
      try {
        const parsed = ownershipRegistry.interface.parseLog(log);
        if (parsed?.name === "AssetRegistered") {
          priyaAssetId = parsed.args.assetId;
          break;
        }
      } catch {}
    }
    console.log(`[Seed-Demo] ✓ Priya registered encrypted certificate asset: ${priyaAssetId}`);
  } catch (err: any) {
    console.log(`[Seed-Demo] Priya asset notice:`, err.message?.split('\n')[0]);
  }

  // -------------------------------------------------------------
  // 5. TECHCORP HR: Pending Request & Active Grant (expiring soon)
  // -------------------------------------------------------------
  if (priyaAssetId && priyaAssetId !== ethers.ZeroHash) {
    try {
      const reqTx = await accessControl.connect(techCorp).requestAccess(
        priyaAssetId,
        "VERIFIER",
        "Technical Hiring Background Verification"
      );
      await reqTx.wait();
      console.log(`[Seed-Demo] ✓ TechCorp filed access request for Priya's credential.`);
    } catch (err: any) {
      console.log(`[Seed-Demo] Request notice:`, err.message?.split('\n')[0]);
    }

    try {
      const grantTx = await accessControl.connect(priya).grantAccess(
        priyaAssetId,
        techCorp.address,
        "VERIFIER",
        "Technical Hiring Background Verification",
        now - 3600,         // started 1 hour ago
        now + 2 * 3600,     // expiring soon (in 2 hours)
        "bafkreibwrappedkeytechcorp01"
      );
      await grantTx.wait();
      console.log(`[Seed-Demo] ✓ Priya granted active access to TechCorp (expiring soon).`);
    } catch (err: any) {
      console.log(`[Seed-Demo] Grant notice:`, err.message?.split('\n')[0]);
    }
  }

  console.log(`\n========================================================================`);
  console.log(`[Seed-Demo] Seeding complete! All 5 demo personas are live on-chain.`);
  console.log(`========================================================================\n`);
}

main().catch((error) => {
  console.error("[Seed-Demo] Error:", error);
  process.exitCode = 1;
});
