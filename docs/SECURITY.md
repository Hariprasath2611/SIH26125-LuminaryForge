# Platform Security Architecture
**BHAROSA (भरोसा)** · Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE

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
