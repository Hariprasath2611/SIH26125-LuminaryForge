# Bharosa Enterprise Frontend
### React 18 + Vite 5 + TypeScript + Tailwind CSS (White + Lime Green Theme)

The frontend is a sovereign, enterprise-grade client-side cryptographic application built with:
- **Architecture:** React 18 + Vite 5 + React Router v6 + TanStack Query + Wagmi / RainbowKit.
- **Design System:** Strict White + Lime Green (`#84CC16`), `color-scheme: light`, responsive layout, WCAG AA compliant.
- **Role Switcher:** Role switching panel for exploring organizational personas (Student / University / Employer / Auditor / Admin).
- **In-Browser Cryptography:** WebCrypto AES-256-GCM file encryption, ECIES secp256k1 key encapsulation, and SnarkJS Groth16 zero-knowledge qualification verification.
- **Routes:**
  - Public: Landing page (`/`) and Zero-Login Verification (`/public-verify`).
  - Enterprise App: Dashboard (`/dashboard`), Identity Hub (`/identity`), Issuer Console (`/issuer`), Credentials Wallet (`/credentials`), Assets Vault (`/assets`), ABAC Access Control (`/access`), Verifier Review (`/verifier`), Social Recovery (`/recovery`), Security Center (`/security`), Audit Logs (`/audit`), Admin Governance (`/admin`).

---

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Run test suite
npm test

# 3. Start development server (:3000)
npm run dev

# 4. Production build
npm run build
```

---

## Deployment (Vercel / Node.js Static Hosting)

1. Deploy using Vite preset with output directory `dist`.
2. Configure Environment Variables:
   - `VITE_API_URL` = URL of backend service (e.g. `https://api.bharosa.io/v1` or `/v1` via reverse proxy)
   - `VITE_CHAIN_ID` = `80002` (Polygon Amoy) or `421614` (Arbitrum Sepolia) or `31337` (Localhost)
   - `VITE_RPC_URL` = RPC endpoint URL
   - `VITE_WALLETCONNECT_PROJECT_ID` = WalletConnect Project ID
