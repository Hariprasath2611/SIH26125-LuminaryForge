# Platform Security Architecture
**BHAROSA (भरोसा)** · Enterprise Sovereign Self-Custody & Cryptographic Security

---

## 1. Security Philosophy: Sovereign Self-Custody

Bharosa follows the principle of **Zero-Trust Backend**:
- The backend helper service holds no user private keys and cannot mutate access controls or impersonate identity controllers.
- Even if the backend server is compromised or offline, all credentials remain verifiable directly on Polygon/Arbitrum, and encrypted assets remain decryptable by authorized keyholders.

---

## 2. In-Depth Cryptographic Controls

### A. Client-Side AES-256-GCM
- **Key Generation:** Generated inside the WebCrypto subtle API as a non-extractable CryptoKey (or exported only for ECIES wrapping).
- **Initialization Vector:** Unique 12-byte (96-bit) cryptographically secure random value (`crypto.getRandomValues`) per file. Reusing IVs under GCM is fatal; Bharosa enforces single-use random IVs.
- **Additional Authenticated Data (AAD):** `assetId` and `version` are passed into the GCM AAD buffer. Alteration of metadata or asset IDs causes cryptographic authentication tag rejection.

### B. ECIES secp256k1 Key Wrapping
- **Ephemeral Keypair:** Sender generates an ephemeral secp256k1 scalar `r` and point `R = r * G`.
- **Shared Secret:** Computed via ECDH: `S = r * P_recipient`.
- **Key Derivation:** HKDF-SHA256 with info tag `bharosa:ecies:aes-key-wrap` derives a 256-bit symmetric wrap key.
- **Key Envelope:** Encrypted using AES-256-GCM. Decryptable only by holder of the recipient's private key.

### C. Smart Contract Defenses
- **Reentrancy Protection:** All state-changing methods in `BharosaAccessControl.sol` and `OwnershipRegistry.sol` follow the Checks-Effects-Interactions pattern and OpenZeppelin `ReentrancyGuard`.
- **Emergency Circuit Breaker:** Admin can pause `OwnershipRegistry.sol` during active threats, freezing transfers and token mints.
- **Social Recovery Safety Timelock:** 48h (production) or 2 min (demo mode) timelock prevents malicious guardians from hijacking accounts without owner intervention.

---

## 3. Content Security Policy (CSP) & Web Worker Sandboxing

In the React 18 + Vite static architecture:
- **Static SPA Trade-Off:** Because the frontend is compiled into immutable static content bundles (`dist/assets/*.js`), dynamic per-request HTML generation nonces are not applicable. Instead, CSP strictly restricts `script-src` to `'self'` and `'wasm-unsafe-eval'` for Circom WebAssembly proof evaluation.
- **Worker Sandboxing:** Zero-knowledge proof synthesis is executed inside dedicated web workers scoped via `worker-src 'self' blob:`, ensuring heavy elliptic curve computations cannot block the main thread and preventing UI freeze.
- **Permissions-Policy:** Strict hardware lock-down (`camera=(), microphone=(), geolocation=()`) blocks unauthorized device sensor access.
- **Frame Ancestors:** Set to `'none'` to unconditionally prevent clickjacking and framing attacks across all routes.

---

## 4. Hybrid Firebase & SIWE Cryptographic Identity Binding

Bharosa bridges standard Web2 user management with non-custodial Web3 sovereignty through a zero-trust model:
- **ID Token Verification:** In production, backend validates RS256 Firebase tokens using official Google public key sets via `firebase-admin`. In development/demo, mock tokens are verified against strict schema constraints.
- **SIWE EIP-4361 Binding:** Wallets cannot be spoofed. Account linking requires an active, unexpired cryptographic SIWE signature generated from a backend nonce. The backend recovers the signer's public address on-chain and binds it immutably to the `Account` record.
- **Wallet Mismatch Protection:** If a user logs into a Firebase account previously bound to wallet `0xA`, but their browser extension is currently set to wallet `0xB`, the frontend halts transactions and presents a clear anti-mismatch warning with an explicit unlinking path.
- **Key Zeroization on Logout:** When a user logs out, the application purges local session tokens, unmounts Web3 wallet connectors, clears all in-memory cryptographic AES and wrapping keys, and wipes TanStack Query caches to prevent memory retention attacks.

