export interface DemoAccount {
  id: string;
  uid: string;
  email: string;
  name: string;
  role: string;
  persona: 'HOLDER' | 'ISSUER' | 'VERIFIER' | 'ADMIN';
  description: string;
  walletAddress: `0x${string}`;
  privateKey: `0x${string}`;
  initials: string;
}

export const IS_DEMO_MODE = import.meta.env.VITE_DEMO_MODE === 'true';

export const DEMO_USERS: DemoAccount[] = IS_DEMO_MODE
  ? [
  {
    id: 'priya',
    uid: 'demo-priya-sharma',
    email: 'priya.sharma@bharosa.demo',
    name: 'Priya Sharma',
    role: 'Student (Holder)',
    persona: 'HOLDER',
    description: 'DID registered, 1 credential from the university, 1 encrypted certificate asset, one pending access request from TechCorp',
    walletAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    privateKey: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
    initials: 'PS',
  },
  {
    id: 'chennai',
    uid: 'demo-chennai-univ',
    email: 'dean.chennai@bharosa.demo',
    name: 'Chennai University',
    role: 'Issuer',
    persona: 'ISSUER',
    description: 'Approved as trusted issuer, 3 credentials issued, 1 revoked',
    walletAddress: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
    privateKey: '0x5de4111afa1a4b94908f83103eb2173f1a4a48e4b2f761bd5709b10f842196fa',
    initials: 'CU',
  },
  {
    id: 'techcorp',
    uid: 'demo-techcorp-hr',
    email: 'hr.techcorp@bharosa.demo',
    name: 'TechCorp HR',
    role: 'Verifier / Employer',
    persona: 'VERIFIER',
    description: 'DID registered, one active grant from Priya (expiring soon), one rejected request',
    walletAddress: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
    privateKey: '0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6',
    initials: 'TC',
  },
  {
    id: 'arjun',
    uid: 'demo-arjun-mehta',
    email: 'arjun.mehta@bharosa.demo',
    name: 'Arjun Mehta',
    role: 'Student (Holder)',
    persona: 'HOLDER',
    description: 'DID registered, empty wallet, for "start from scratch" demos',
    walletAddress: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
    privateKey: '0x47e179ec34004871170e4b1ec414db315a4b760e886cd3d675ab96ff4e069d49',
    initials: 'AM',
  },
  {
    id: 'admin',
    uid: 'demo-bharosa-admin',
    email: 'admin@bharosa.demo',
    name: 'Bharosa Admin',
    role: 'Admin',
    persona: 'ADMIN',
    description: 'ADMIN_ROLE on-chain, sees the security alerts and issuer management',
    walletAddress: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    initials: 'BA',
  }
] : [];
