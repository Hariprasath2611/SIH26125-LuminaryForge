const fs = require('fs');
const path = require('path');

const PAGES = [
  {
    src: 'frontend/src/app/(app)/assets/page.tsx',
    dest: 'frontend/src/pages/Assets.tsx',
    title: 'Client-Encrypted Asset Vault',
    desc: 'Browser AES-256-GCM encryption with IPFS pinning and smart contract ownership registry.',
  },
  {
    src: 'frontend/src/app/(app)/access/page.tsx',
    dest: 'frontend/src/pages/Access.tsx',
    title: 'ABAC Access Control Delegation',
    desc: 'Attribute-based access control with ECIES cryptographic key wrapping and time-bound grants.',
  },
  {
    src: 'frontend/src/app/(app)/zk/page.tsx',
    dest: 'frontend/src/pages/ZK.tsx',
    title: 'Zero-Knowledge Predicate Prover',
    desc: 'Circom 2 & SnarkJS Groth16 zero-knowledge proof generation and on-chain verification.',
  },
  {
    src: 'frontend/src/app/(app)/recovery/page.tsx',
    dest: 'frontend/src/pages/Recovery.tsx',
    title: 'M-of-N Social Recovery',
    desc: 'Guardian-based decentralized recovery for lost private keys with timelock protection.',
  },
  {
    src: 'frontend/src/app/(app)/audit/page.tsx',
    dest: 'frontend/src/pages/AuditLog.tsx',
    title: 'Immutable Security Audit Trail',
    desc: 'Tamper-evident append-only on-chain audit log with SHA-256 integrity verification.',
  },
  {
    src: 'frontend/src/app/(app)/security/page.tsx',
    dest: 'frontend/src/pages/SecurityCenter.tsx',
    title: 'Security Center & Emergency Freeze',
    desc: 'Real-time threat monitoring and Quick-Lock smart contract emergency response.',
  },
  {
    src: 'frontend/src/app/(app)/issuer/page.tsx',
    dest: 'frontend/src/pages/Issuer.tsx',
    title: 'Accredited Issuer Portal',
    desc: 'Issue, sign with EIP-712, and anchor W3C Verifiable Credentials on Polygon Amoy.',
  },
  {
    src: 'frontend/src/app/(app)/verifier/page.tsx',
    dest: 'frontend/src/pages/Verifier.tsx',
    title: 'Verifier & Relying Party Portal',
    desc: 'Request selective disclosures and verify zero-knowledge cryptographic proofs.',
  },
  {
    src: 'frontend/src/app/(app)/admin/page.tsx',
    dest: 'frontend/src/pages/Admin.tsx',
    title: 'Protocol Administration Console',
    desc: 'Manage accredited institutions, smart contract parameters, and relayer treasury.',
  },
];

for (const p of PAGES) {
  const fullSrc = path.resolve(p.src);
  const fullDest = path.resolve(p.dest);

  if (!fs.existsSync(fullSrc)) {
    console.warn(`File not found: ${fullSrc}`);
    continue;
  }

  let code = fs.readFileSync(fullSrc, 'utf8');

  // 1. Remove 'use client'
  code = code.replace(/^['"]use client['"];?\r?\n/m, '');

  // 2. Replace Next navigation / link imports
  let routerImports = [];
  if (code.includes("from 'next/link'") || code.includes('from "next/link"')) {
    code = code.replace(/import\s+Link\s+from\s+['"]next\/link['"];?\r?\n/g, '');
    routerImports.push('Link');
  }
  if (code.includes("from 'next/navigation'") || code.includes('from "next/navigation"')) {
    if (code.includes('useRouter')) routerImports.push('useNavigate');
    if (code.includes('usePathname')) routerImports.push('useLocation');
    if (code.includes('useSearchParams')) routerImports.push('useSearchParams');
    code = code.replace(/import\s+\{[^}]*\}\s+from\s+['"]next\/navigation['"];?\r?\n/g, '');
  }

  // 3. Add react-router-dom import if needed
  if (routerImports.length > 0) {
    const uniqueImports = Array.from(new Set(routerImports)).join(', ');
    code = `import { ${uniqueImports} } from 'react-router-dom';\n` + code;
  }

  // 4. Replace useRouter with useNavigate
  code = code.replace(/\bconst\s+router\s*=\s*useRouter\(\);?/g, 'const navigate = useNavigate();');
  code = code.replace(/\brouter\.push\(/g, 'navigate(');
  code = code.replace(/\brouter\.replace\(/g, 'navigate(');

  // 5. Replace <Link href= with <Link to=
  code = code.replace(/<Link\s+href=/g, '<Link to=');

  // 6. Replace process.env.NEXT_PUBLIC_*
  let needsEnv = false;
  if (code.includes('process.env.NEXT_PUBLIC_')) {
    needsEnv = true;
    code = code.replace(/process\.env\.NEXT_PUBLIC_API_URL/g, 'env.API_URL');
    code = code.replace(/process\.env\.NEXT_PUBLIC_DEMO_MODE/g, 'String(env.DEMO_MODE)');
    code = code.replace(/process\.env\.NEXT_PUBLIC_CHAIN_ID/g, 'env.CHAIN_ID');
    code = code.replace(/process\.env\.NEXT_PUBLIC_RPC_URL/g, 'env.RPC_URL');
    code = code.replace(/process\.env\.NEXT_PUBLIC_AMOY_RPC_URL/g, 'env.AMOY_RPC_URL');
    code = code.replace(/process\.env\.NEXT_PUBLIC_CONTRACT_IDENTITY_REGISTRY/g, 'env.CONTRACT_IDENTITY_REGISTRY');
    code = code.replace(/process\.env\.NEXT_PUBLIC_CONTRACT_ACCESS_CONTROL/g, 'env.CONTRACT_ACCESS_CONTROL');
    code = code.replace(/process\.env\.NEXT_PUBLIC_CONTRACT_OWNERSHIP_REGISTRY/g, 'env.CONTRACT_OWNERSHIP_REGISTRY');
    code = code.replace(/process\.env\.NEXT_PUBLIC_CONTRACT_SOCIAL_RECOVERY/g, 'env.CONTRACT_SOCIAL_RECOVERY');
    code = code.replace(/process\.env\.NEXT_PUBLIC_CONTRACT_ZK_VERIFIER/g, 'env.CONTRACT_ZK_VERIFIER');
  }

  // 7. Add env & PageMeta imports
  let prepend = "import { PageMeta } from '@/components/PageMeta';\n";
  if (needsEnv) {
    prepend = "import { env } from '@/config/env';\n" + prepend;
  }
  code = prepend + code;

  // 8. Inject <PageMeta /> after the first container div in return
  const metaTag = `\n      <PageMeta title="${p.title}" description="${p.desc}" />`;
  code = code.replace(
    /(return\s*\(\s*<div[^>]*>)/,
    `$1${metaTag}`
  );

  fs.writeFileSync(fullDest, code, 'utf8');
  console.log(`Migrated: ${p.dest}`);
}

console.log('All remaining pages successfully migrated.');
