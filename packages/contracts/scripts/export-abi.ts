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
  console.log("[Export-ABI] Exporting contract ABIs...");

  const artifactsDir = path.join(__dirname, "../artifacts/contracts");
  const sdkAbiDir = path.join(__dirname, "../../sdk/src/contracts/abis");

  if (!fs.existsSync(sdkAbiDir)) {
    fs.mkdirSync(sdkAbiDir, { recursive: true });
  }

  let indexExport = `// Auto-generated ABI exports\n`;

  for (const name of CONTRACT_NAMES) {
    const artifactPath = path.join(artifactsDir, `${name}.sol`, `${name}.json`);
    if (fs.existsSync(artifactPath)) {
      const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
      const abi = artifact.abi;
      const targetPath = path.join(sdkAbiDir, `${name}.json`);
      fs.writeFileSync(targetPath, JSON.stringify(abi, null, 2));

      indexExport += `import ${name}ABI from './abis/${name}.json' with { type: 'json' };\nexport { ${name}ABI };\n`;
      console.log(`[Export-ABI] Exported ${name}.json`);
    } else {
      console.warn(`[Export-ABI] Artifact not found for ${name} at ${artifactPath}`);
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
