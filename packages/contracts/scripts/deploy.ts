import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`[Deploy] Deploying contracts with deployer: ${deployer.address}`);

  const balance = await ethers.provider.getBalance(deployer.address);
  console.log(`[Deploy] Deployer balance: ${ethers.formatEther(balance)} ETH`);

  // 1. Deploy IdentityRegistry
  const IdentityRegistry = await ethers.getContractFactory("IdentityRegistry");
  const identityRegistry = await IdentityRegistry.deploy(deployer.address);
  await identityRegistry.waitForDeployment();
  const identityRegistryAddress = await identityRegistry.getAddress();
  console.log(`[Deploy] IdentityRegistry deployed to: ${identityRegistryAddress}`);

  // 2. Deploy OwnershipRegistry
  const OwnershipRegistry = await ethers.getContractFactory("OwnershipRegistry");
  const ownershipRegistry = await OwnershipRegistry.deploy(deployer.address);
  await ownershipRegistry.waitForDeployment();
  const ownershipRegistryAddress = await ownershipRegistry.getAddress();
  console.log(`[Deploy] OwnershipRegistry deployed to: ${ownershipRegistryAddress}`);

  // 3. Deploy AccessControl (ABAC)
  const AccessControl = await ethers.getContractFactory("BharosaAccessControl");
  const accessControl = await AccessControl.deploy(deployer.address, ownershipRegistryAddress);
  await accessControl.waitForDeployment();
  const accessControlAddress = await accessControl.getAddress();
  console.log(`[Deploy] BharosaAccessControl deployed to: ${accessControlAddress}`);

  // 4. Deploy SocialRecovery
  const SocialRecovery = await ethers.getContractFactory("SocialRecovery");
  const socialRecovery = await SocialRecovery.deploy(deployer.address, identityRegistryAddress);
  await socialRecovery.waitForDeployment();
  const socialRecoveryAddress = await socialRecovery.getAddress();
  console.log(`[Deploy] SocialRecovery deployed to: ${socialRecoveryAddress}`);

  // 5. Deploy AuditAnchor
  const AuditAnchor = await ethers.getContractFactory("AuditAnchor");
  const auditAnchor = await AuditAnchor.deploy(deployer.address);
  await auditAnchor.waitForDeployment();
  const auditAnchorAddress = await auditAnchor.getAddress();
  console.log(`[Deploy] AuditAnchor deployed to: ${auditAnchorAddress}`);

  // 6. Deploy Groth16 Verifier and ZKCredentialVerifier
  const MockGroth16Verifier = await ethers.getContractFactory("MockGroth16Verifier");
  const mockVerifier = await MockGroth16Verifier.deploy();
  await mockVerifier.waitForDeployment();
  const mockVerifierAddress = await mockVerifier.getAddress();
  console.log(`[Deploy] MockGroth16Verifier deployed to: ${mockVerifierAddress}`);

  const ZKCredentialVerifier = await ethers.getContractFactory("ZKCredentialVerifier");
  const zkVerifier = await ZKCredentialVerifier.deploy(
    deployer.address,
    mockVerifierAddress,
    identityRegistryAddress
  );
  await zkVerifier.waitForDeployment();
  const zkVerifierAddress = await zkVerifier.getAddress();
  console.log(`[Deploy] ZKCredentialVerifier deployed to: ${zkVerifierAddress}`);

  // Configure demo university issuer
  console.log(`[Deploy] Adding deployer as trusted issuer for demo...`);
  const addIssuerTx = await identityRegistry.addIssuer(deployer.address);
  await addIssuerTx.wait();
  console.log(`[Deploy] Deployer added as trusted issuer.`);

  // Save deployment addresses to JSON file
  const deployments = {
    network: (await ethers.provider.getNetwork()).name,
    chainId: Number((await ethers.provider.getNetwork()).chainId),
    deployedAt: new Date().toISOString(),
    deployer: deployer.address,
    contracts: {
      IdentityRegistry: identityRegistryAddress,
      OwnershipRegistry: ownershipRegistryAddress,
      AccessControl: accessControlAddress,
      SocialRecovery: socialRecoveryAddress,
      AuditAnchor: auditAnchorAddress,
      Groth16Verifier: mockVerifierAddress,
      ZKCredentialVerifier: zkVerifierAddress,
    },
  };

  const outputDir = path.join(__dirname, "../deployments");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, "localhost.json");
  fs.writeFileSync(outputPath, JSON.stringify(deployments, null, 2));
  console.log(`[Deploy] Deployment artifact saved to ${outputPath}`);
}

main().catch((error) => {
  console.error("[Deploy] Deployment failed:", error);
  process.exitCode = 1;
});
