import * as fs from "fs";
import * as path from "path";

const CONTRACTS: { name: string; file: string }[] = [
  { name: "IdentityRegistry", file: "IdentityRegistry.sol" },
  { name: "BharosaAccessControl", file: "AccessControl.sol" },
  { name: "OwnershipRegistry", file: "OwnershipRegistry.sol" },
  { name: "SocialRecovery", file: "SocialRecovery.sol" },
  { name: "AuditAnchor", file: "AuditAnchor.sol" },
  { name: "ZKCredentialVerifier", file: "ZKCredentialVerifier.sol" },
  { name: "MockGroth16Verifier", file: "ZKCredentialVerifier.sol" },
];

async function main() {
  console.log("[Export-ABI] Exporting contract ABIs...");

  const artifactsDir = path.join(__dirname, "../artifacts/contracts");
  const sdkAbiDir = path.join(__dirname, "../../sdk/src/contracts/abis");

  if (!fs.existsSync(sdkAbiDir)) {
    fs.mkdirSync(sdkAbiDir, { recursive: true });
  }

  let indexExport = `// Auto-generated ABI exports\n`;

  for (const item of CONTRACTS) {
    const artifactPath = path.join(artifactsDir, item.file, `${item.name}.json`);
    if (fs.existsSync(artifactPath)) {
      const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
      const abi = artifact.abi;
      const targetPath = path.join(sdkAbiDir, `${item.name}.json`);
      fs.writeFileSync(targetPath, JSON.stringify(abi, null, 2));

      indexExport += `import ${item.name}ABI from './abis/${item.name}.json';\nexport { ${item.name}ABI };\n`;
      console.log(`[Export-ABI] Exported ${item.name}.json`);
    } else {
      console.warn(`[Export-ABI] Artifact not found for ${item.name} at ${artifactPath}`);
    }
  }

  const contractsIndexPath = path.join(__dirname, "../../sdk/src/contracts/index.ts");
  fs.writeFileSync(contractsIndexPath, indexExport);
  console.log(`[Export-ABI] Written SDK contract exports to ${contractsIndexPath}`);
}

main().catch((err) => {
  console.error("[Export-ABI] Failed:", err);
  process.exitCode = 1;
});
