# 3-Minute Hackathon Demo Script
**BHAROSA (भरोसा)** · Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE

This guide allows any judge to run through the entire platform in under 3 minutes using the pre-funded **Demo Accounts Panel** at the top of the screen (no MetaMask installation required).

---

### Step 1: Institutional Issuer Issues Degree (45s)
1. In the top bar, click **"University"** (`0xf39f...2266`).
2. Navigate to **Issuer Console** (`/issuer`).
3. Fill in student DID: `did:ethr:31337:0x70997970c51812dc3a010c7d01b50e0d17dc79c8`.
4. Degree: `Bachelor of Technology in Computer Science`, CGPA: `9.40`.
5. Click **"Anchor & Issue Credential"**.
6. Observe the instant cryptographic EIP-712 signature and on-chain anchor commit.

### Step 2: Student Encrypts & Stores Research Paper (45s)
1. In the top bar, switch to **"Alice"** (Student - `0x7099...79C8`).
2. Navigate to **Credentials** (`/credentials`) to verify the degree arrived in self-custody.
3. Navigate to **Assets** (`/assets`).
4. Select sample research draft PDF.
5. Watch the 5-step stepper: SHA-256 hash computed -> AES-256-GCM encryption in browser memory -> ciphertext pinned to IPFS -> token minted on `OwnershipRegistry.sol`.

### Step 3: Verifier Requests & Decrypts Asset (45s)
1. Switch to **"TechCorp"** (Employer - `0x3C44...93BC`).
2. Navigate to **Verifier Portal** (`/verifier`).
3. Observe the active 24h grant approved by Alice.
4. Click **"Unwrap Key & Decrypt Plaintext"**.
5. Observe the plaintext rendered directly in browser memory with **SHA-256 integrity match ✓**.

### Step 4: Zero-Knowledge Qualification & Social Recovery (45s)
1. Switch back to **"Alice"**.
2. Navigate to **ZK Proofs** (`/zk`).
3. Set predicate: `CGPA >= 7.50`.
4. Click **"Generate Groth16 Proof"**.
5. Observe the zero-knowledge proof verify on the BN254 elliptic curve **without disclosing Alice's 9.40 score**!
6. Navigate to **Recovery** (`/recovery`) to review the M-of-N social recovery guardian consensus.
