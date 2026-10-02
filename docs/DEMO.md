# Quick Demo Login & 3-Minute Hackathon Demo Script
**BHAROSA (भरोसा)** · Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE

This guide allows any judge or evaluator to test the platform instantly in under 3 minutes using the **Quick Demo Login** panel (no wallet extension popup, no manual configuration required).

---

## 1. Quick Demo Personas (Pre-Seeded)

When running with `VITE_DEMO_MODE=true` and `DEMO_MODE=true`, the `/login` screen displays 5 pre-configured demo cards. Clicking any card signs in via Firebase custom token and initializes a silent in-browser signer (`DemoWalletConnector`):

| Persona | Role | Pre-Seeded State & Key Invariants |
| :--- | :--- | :--- |
| **Priya Sharma** | Student (Holder) | DID registered, 1 credential from Chennai University, 1 encrypted certificate asset on IPFS, 1 pending access request from TechCorp. |
| **Chennai University** | Issuer | Approved trusted issuer on-chain (`BharosaAccessControl`), 3 credentials issued, 1 revoked. |
| **TechCorp HR** | Verifier / Employer | DID registered, 1 active grant from Priya (expiring soon), 1 rejected request. |
| **Arjun Mehta** | Student (Holder) | DID registered, clean empty wallet for "start from scratch" onboarding demo. |
| **Bharosa Admin** | Admin | `ADMIN_ROLE` on-chain, monitors security alerts, emergency freeze, and issuer approvals. |

---

## 2. 3-Minute Judging Walkthrough

### Step 1: Institutional Issuer Issues Degree (45s)
1. On `/login`, click **Chennai University** (or use the **"Switch demo user"** menu in the top bar).
2. Lands directly on `/dashboard` with wallet connected silently.
3. Open **Issuer Console** (`/issuer`).
4. Notice 3 credentials already issued (1 revoked).
5. Fill in student DID for Arjun: `did:bharosa:0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65`.
6. Degree: `Bachelor of Technology in Computer Science`, CGPA: `9.40`.
7. Click **"Anchor & Issue Credential"**.
8. The credential is signed and anchored on-chain with zero popup friction!

### Step 2: Student Checks Credentials & Encrypts Research Paper (45s)
1. In the top bar, open the profile menu and click **Switch demo user** -> select **Priya Sharma**.
2. Swaps user & signer without a full page reload.
3. Navigate to **Credentials** (`/credentials`) to inspect Priya's verified university degree.
4. Navigate to **Assets** (`/assets`).
5. Observe the pre-seeded certificate asset. Select another PDF/file to test client-side encryption.
6. Encryption runs client-side (AES-256-GCM + ECIES), pins ciphertext to IPFS, and mints asset on `OwnershipRegistry.sol`.

### Step 3: Verifier Inspects Active Grant & Decrypts Asset (45s)
1. Switch demo user to **TechCorp HR**.
2. Navigate to **Verifier Portal** (`/verifier`) or **Access Management** (`/access`).
3. View the active grant from Priya Sharma.
4. Click **"Unwrap Key & Decrypt Plaintext"**.
5. The decryption key is unwrapped via ECDH + HKDF, and plaintext is verified with cryptographic SHA-256 integrity match.

### Step 4: Zero-Knowledge Qualification & Admin Controls (45s)
1. Switch demo user back to **Priya Sharma**.
2. Navigate to **ZK Proofs** (`/zk`).
3. Select predicate: `CGPA >= 7.50` (Priya's actual CGPA: 9.40).
4. Click **"Generate Groth16 Proof"**. Proof generates in Web Worker and verifies on-chain BN254 pairing verifier without revealing exact score!
5. Switch demo user to **Bharosa Admin**.
6. Navigate to **Security Center** (`/security`) to review system alerts, audit logs, and test the **"Reset Demo Data"** action.

---

## 3. Security & Safety Guards

- **Triple Guard Active:** Demo mode is disabled automatically on all EVM mainnet chain IDs (`1, 10, 56, 137, 8453, 42161`). If `DEMO_MODE=true` on mainnet, both frontend and backend abort at startup with critical error logs.
- **Dead-Code Elimination:** When building production bundles without demo mode (`VITE_DEMO_MODE=false`), Rollup/Vite strips all demo account definitions and private keys.
- **Audit Logging:** Every demo login is tagged with `isDemo=true` and logged to the backend audit log.
