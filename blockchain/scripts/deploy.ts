import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

const CONTRACT_NAMES = [
  "IdentityRegistry",
  "BharosaAccessControl",
  "OwnershipRegistry",
  "SocialRecovery",
  "AuditAnchor",
  "ZKCredentialVerifier",
  "MockGroth16Verifier",
];

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

  // Whitelist deployer (University)
  console.log(`[Deploy] Whitelisting deployer as trusted issuer...`);
  const tx = await identityRegistry.addIssuer(deployer.address);
  await tx.wait();
  console.log(`[Deploy] Deployer whitelisted.`);

  const network = await ethers.provider.getNetwork();
  const chainId = Number(network.chainId);

  // Extract ABIs
  const abis: Record<string, any> = {};
  const artifactsDir = path.join(__dirname, "../artifacts/contracts");

  for (const name of CONTRACT_NAMES) {
    // Find artifact
    let artifactPath = "";
    if (name === "BharosaAccessControl") {
      artifactPath = path.join(artifactsDir, "AccessControl.sol", `${name}.json`);
    } else if (name === "MockGroth16Verifier") {
      artifactPath = path.join(artifactsDir, "ZKCredentialVerifier.sol", `${name}.json`);
    } else {
      artifactPath = path.join(artifactsDir, `${name}.sol`, `${name}.json`);
    }

    if (fs.existsSync(artifactPath)) {
      const art = JSON.parse(fs.readFileSync(artifactPath, "utf-8"));
      abis[name] = art.abi;
    }
  }

  const deploymentData = {
    network: network.name,
    chainId,
    deployedAt: new Date().toISOString(),
    deployer: deployer.address,
    addresses: {
      IdentityRegistry: identityRegistryAddress,
      OwnershipRegistry: ownershipRegistryAddress,
      AccessControl: accessControlAddress,
      SocialRecovery: socialRecoveryAddress,
      AuditAnchor: auditAnchorAddress,
      MockGroth16Verifier: mockVerifierAddress,
      ZKCredentialVerifier: zkVerifierAddress,
    },
    abis,
  };

  // Target 1: blockchain/deployments/
  const localDeploymentsDir = path.join(__dirname, "../deployments");
  if (!fs.existsSync(localDeploymentsDir)) fs.mkdirSync(localDeploymentsDir, { recursive: true });
  fs.writeFileSync(path.join(localDeploymentsDir, "localhost.json"), JSON.stringify(deploymentData, null, 2));

  // Target 2: frontend/src/contracts/
  const frontendContractsDir = path.join(__dirname, "../../frontend/src/contracts");
  if (!fs.existsSync(frontendContractsDir)) fs.mkdirSync(frontendContractsDir, { recursive: true });
  fs.writeFileSync(
    path.join(frontendContractsDir, "contracts.json"),
    JSON.stringify(deploymentData, null, 2)
  );

  const frontendTsExport = `// Auto-generated by blockchain deploy script
import contractsData from './contracts.json';

export const DEPLOYED_ADDRESSES = contractsData.addresses;
export const CONTRACT_ABIS = contractsData.abis;
export const CHAIN_ID = contractsData.chainId;
export default contractsData;
`;
  fs.writeFileSync(path.join(frontendContractsDir, "index.ts"), frontendTsExport);
  console.log(`[Deploy] Exported ABIs + addresses to frontend/src/contracts/`);

  // Target 3: backend/src/contracts/
  const backendContractsDir = path.join(__dirname, "../../backend/src/contracts");
  if (!fs.existsSync(backendContractsDir)) fs.mkdirSync(backendContractsDir, { recursive: true });
  fs.writeFileSync(
    path.join(backendContractsDir, "contracts.json"),
    JSON.stringify(deploymentData, null, 2)
  );
  fs.writeFileSync(path.join(backendContractsDir, "index.ts"), frontendTsExport);
  console.log(`[Deploy] Exported ABIs + addresses to backend/src/contracts/`);

  // Target 4: Copy ZK artifacts to frontend/public/zk/
  const frontendZkDir = path.join(__dirname, "../../frontend/public/zk");
  if (!fs.existsSync(frontendZkDir)) fs.mkdirSync(frontendZkDir, { recursive: true });

  const circuitsBuildDir = path.join(__dirname, "../circuits/build");
  if (fs.existsSync(circuitsBuildDir)) {
    const files = fs.readdirSync(circuitsBuildDir);
    for (const f of files) {
      fs.copyFileSync(path.join(circuitsBuildDir, f), path.join(frontendZkDir, f));
    }
    console.log(`[Deploy] Copied ZK circuit artifacts to frontend/public/zk/`);
  } else {
    // Write sample/mock circuit verification key metadata if build dir not present
    const mockVk = {
      protocol: "groth16",
      curve: "bn128",
      nPublic: 3,
      vk_alpha_1: ["0x1", "0x2", "0x1"],
      vk_beta_2: [["0x1", "0x2"], ["0x3", "0x4"], ["0x1", "0x0"]],
      vk_gamma_2: [["0x1", "0x2"], ["0x3", "0x4"], ["0x1", "0x0"]],
      vk_delta_2: [["0x1", "0x2"], ["0x3", "0x4"], ["0x1", "0x0"]],
      vk_alphabeta_12: [],
      IC: [["0x1", "0x2", "0x1"], ["0x3", "0x4", "0x1"]],
    };
    fs.writeFileSync(path.join(frontendZkDir, "verification_key.json"), JSON.stringify(mockVk, null, 2));
    console.log(`[Deploy] Initialized ZK verification key in frontend/public/zk/`);
  }

  console.log(`[Deploy] Deployment and artifact export completed successfully.`);
}

main().catch((error) => {
  console.error("[Deploy] Deployment failed:", error);
  process.exitCode = 1;
});
