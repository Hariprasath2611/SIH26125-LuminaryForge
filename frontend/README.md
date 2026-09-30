# Bharosa Frontend
### Next.js 14 App Router + TypeScript + Tailwind CSS (White + Lime Green Theme)
**Smart India Hackathon 2026** · **PS SIH26125** · **Team LUMINARYFORGE**

The frontend is a sovereign, client-side cryptographic dashboard built with:
- **Design System:** Strict White + Lime Green (`#84CC16`), `color-scheme: light` (no dark mode), WCAG AA compliant.
- **Judge Demo Mode:** Top floating panel with one-click persona switching (Student / University / Employer) without requiring MetaMask.
- **In-Browser Cryptography:** WebCrypto AES-256-GCM file encryption, ECIES secp256k1 key encapsulation, and SnarkJS Groth16 zero-knowledge qualification verification.
- **Route Layout:**
  - `(public)/`: Landing page (`/`) and Zero-Login Public Verification (`/public-verify`).
  - `(app)/`: Dashboard, Identity Hub, Issuer Console, Credentials Wallet, Assets Vault, ABAC Access Control, Verifier Review, Social Recovery, Security Center, Audit Logs, Admin Governance.

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

## Deployment to Vercel

1. Import project repository into Vercel.
2. Set **Root Directory** to `frontend`.
3. Configure Environment Variables:
   - `NEXT_PUBLIC_API_URL` = URL of deployed backend service (e.g. `https://bharosa-api.onrender.com/v1`)
   - `NEXT_PUBLIC_CHAIN_ID` = `80002` (Polygon Amoy) or `421614` (Arbitrum Sepolia)
   - `NEXT_PUBLIC_RPC_URL` = RPC endpoint URL
   - `NEXT_PUBLIC_DEMO_MODE` = `false` (for production) or `true` (for demo)
