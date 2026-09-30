# BHAROSA (भरोसा)
### Decentralized Verifiable Identity, Encrypted Asset Custody & Zero-Knowledge Platform
**Smart India Hackathon 2026** · **Problem Statement:** SIH26125 · **Team:** LUMINARYFORGE

---

## 🏆 For Judges & Evaluators

Welcome! BHAROSA is built for zero-friction evaluation. You can run the entire platform locally with zero configuration edits or use the hosted demo link.

- **Hosted Demo Link (Backup):** [https://bharosa.vercel.app](https://bharosa.vercel.app)
- **Backend API URL:** [https://bharosa-api.onrender.com/v1](https://bharosa-api.onrender.com/v1)
- **Target Chains:** Polygon Amoy (`80002`) & Arbitrum Sepolia (`421614`)

---

### Quickstart (Clean Machine)

#### Prerequisites
- **Node.js:** `>= 20.0.0`
- **Docker:** (Optional, for 1-command containerized run)

---

### Option 1: One Command (Docker)
```bash
docker compose up --build
```
> Starts: Local Chain (Hardhat 31337 on `:8545`), auto-deploys all 6 contracts, seeds demo accounts, Postgres (`:5432`), Redis (`:6379`), IPFS Kubo (`:5001`), Express Backend (`:3001`), and Next.js Frontend (`:3000`).  
> **Open:** [http://localhost:3000](http://localhost:3000)

---

### Option 2: Local Run (No Docker Required)
Open your terminal and run:
```bash
# Step 1: Install dependencies and copy .env.example -> .env
npm run setup

# Step 2: In Terminal 1 - Start local Hardhat chain, deploy contracts & seed demo data
npm run chain

# Step 3: In Terminal 2 - Start backend API & workers (:3001)
npm run backend

# Step 4: In Terminal 3 - Start Next.js frontend (:3000)
npm run frontend
```
*(Or run `npm run demo` to start chain, backend, and frontend concurrently).*

---

### Pre-Funded Demo Accounts (No MetaMask Required!)
The app includes a top **Judge Demo Accounts Panel** with one-click persona switching:

| Persona | Role | Pre-Funded Address | Primary Actions to Evaluate |
| :--- | :---: | :--- | :--- |
| 🎓 **Alice Sharma** | **Student / Holder** | `0x70997970C51812dc3A010C7d01b50e0d17dc79C8` | View degree in `/credentials`, encrypt paper in `/assets`, prove `/zk` qualification. |
| 🏛️ **Demo University** | **Issuer** | `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266` | Issue & anchor degree in `/issuer`, whitelist issuers in `/admin`. |
| 💼 **TechCorp** | **Verifier** | `0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC` | File request in `/verifier`, unwrap ECIES key, decrypt Alice's research paper. |

*Note: MetaMask and WalletConnect are also fully supported.*

---

### 3-Minute Evaluation Walkthrough

1. **Step 1 (Issue Degree):**
   - Click **"University"** in top demo panel.
   - Go to **`/issuer`** → Click **"Anchor & Issue Credential"**.
   - See canonical EIP-712 signature and on-chain anchor commit.
2. **Step 2 (Self-Custody & Encrypted Asset Vault):**
   - Click **"Alice"** in top demo panel.
   - Check **`/credentials`** to inspect the issued degree W3C JSON.
   - Go to **`/assets`** → Select sample PDF → Watch 5-step client-side AES-256-GCM encryption & IPFS pinning.
3. **Step 3 (Verifier Access & Decryption):**
   - Click **"TechCorp"** in top demo panel.
   - Go to **`/verifier`** → Click **"Unwrap Key & Decrypt Plaintext"**.
   - Watch the PDF draft decrypt directly in browser memory with **SHA-256 integrity match ✓**.
4. **Step 4 (Zero-Knowledge & Social Recovery):**
   - Switch back to **"Alice"**.
   - Go to **`/zk`** → Set predicate `CGPA >= 7.50` → Click **"Generate Groth16 Proof"**.
   - Verify on BN254 elliptic curve **without disclosing Alice's 9.40 score**.
   - Go to **`/recovery`** to observe M-of-N social recovery with 2-minute safety timelock.

---

### Troubleshooting Table

| Issue / Symptom | Probable Cause | Instant Resolution |
| :--- | :--- | :--- |
| **Port 3000 / 3001 / 8545 in use** | Lingering background process | Windows: `Stop-Process -Id (Get-NetTCPConnection -LocalPort <PORT>).OwningProcess -Force`<br>Linux/Mac: `lsof -ti:<PORT> \| xargs kill -9` |
| **RPC node not reachable** | Chain not started before frontend | Run `npm run chain` in a separate terminal or ensure Hardhat is up on `http://127.0.0.1:8545`. |
| **IPFS node offline** | Docker not running Kubo | In `DEMO_MODE=true`, the SDK and API automatically utilize an in-memory IPFS cluster simulator so all uploads and pinning succeed! |
| **Database not running** | PostgreSQL not started locally | In `DEMO_MODE=true`, backend falls back to an in-memory audit store so all tests and endpoints run with zero DB dependency. |

---

## 📁 3-Project Layout Overview

```
bharosa/
├─ frontend/                       # Next.js 14 App Router + Tailwind (White + Lime Green #84CC16)
│  ├─ src/app/(public)/            # Landing (/), Public Verify (/public-verify)
│  ├─ src/app/(app)/               # Dashboard, Identity, Issuer, Credentials, Assets, Access, Verifier, ZK, Recovery, Admin, Audit
│  ├─ src/components/              # Header, DemoAccountsPanel, StatusFooter, Providers
│  ├─ src/lib/                     # Browser-side Crypto (AES-GCM, ECIES), DID, IPFS, ZK prover, API-client, Contracts
│  ├─ src/contracts/               # ABIs + deployed addresses (auto-written by blockchain deploy script)
│  ├─ public/zk/                   # Groth16 circuit wasm + zkey
│  ├─ .env.example  package.json  README.md
├─ backend/                        # Node 20 + Express + TypeScript
│  ├─ src/(routes|controllers|services|middleware|workers|lib|config)/
│  ├─ src/contracts/               # ABIs + addresses (auto-written by deploy script)
│  ├─ prisma/                      # Schema, migrations, seed
│  ├─ .env.example  package.json  Dockerfile  render.yaml  README.md
├─ blockchain/                     # Hardhat (Solidity 0.8.24)
│  ├─ contracts/                   # 6 Core Smart Contracts
│  ├─ test/                        # 43 Smart contract unit & integration tests
│  ├─ scripts/                     # deploy.ts, seed-demo.ts
│  ├─ circuits/                    # credential_predicate.circom (Circom 2)
│  ├─ hardhat.config.ts  .env.example  package.json  README.md
├─ docs/                           # ARCHITECTURE, SECURITY, THREAT_MODEL, API, DEMO, DECISIONS, AUDIT_CHECKLIST
├─ docker-compose.yml              # Single-command containerized stack
├─ package.json                    # Root coordinator scripts
└─ README.md
```

---

## 🧪 Running All Test Suites

To run all 96 unit, integration, and ZK tests across all three projects:
```bash
npm test
```
- **Blockchain Contracts:** 43 / 43 Hardhat tests passing
- **Backend API & Relayer:** 24 / 24 Vitest tests passing
- **Frontend Crypto & Hero Flow:** 28 / 28 Vitest tests passing (including 10-step full platform flow)

---

## 📜 Compliance & Regulatory Standards

- **India DPDP Act 2023:** Enforces Notice, Purpose Limitation, Right to Revocation, and Storage Limitation via smart contract ABAC time-bounds.
- **ISO/IEC 27560:2023:** Machine-readable JSON and printable digital consent receipts with cryptographic asset and purpose binding.
- **W3C DID v1.0 & W3C VC v1.1:** Fully standardized decentralized identifiers and verifiable credentials with EIP-712 assertion proofs.
- **NIST SP 800-162:** Formal Attribute-Based Access Control preventing unauthorized lateral data access.

---

## 👥 Team & Submission Information
- **Event:** Smart India Hackathon 2026
- **Problem Statement ID:** SIH26125
- **Team Name:** LUMINARYFORGE
- **Lead Developer:** D Hariprasath (`@Hariprasath2611`)
- **License:** MIT License
