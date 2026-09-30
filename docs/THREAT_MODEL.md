# Threat Model & Risk Analysis (STRIDE)
**BHAROSA (भरोसा)** · Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE

---

## 1. STRIDE Assessment Matrix

| Threat Category | Identified Attack Vector | Mitigation in Bharosa |
| :--- | :--- | :--- |
| **Spoofing** | Attacker attempts to forge a university degree or impersonate an issuer. | W3C VCs require EIP-712 cryptographic signature from a whitelisted issuer address on `IdentityRegistry.sol`. |
| **Tampering** | 1-bit modification to encrypted PDF ciphertext on IPFS. | AES-256-GCM 128-bit authentication tag mismatch reverts decryption instantly; on-chain SHA-256 integrity hash verification fails. |
| **Repudiation** | Issuer denies issuing or revoking a credential. | All issuance and revocation events emit indexed logs and are committed to `IdentityRegistry.sol` and `AuditAnchor.sol`. |
| **Information Disclosure** | Employer snooping on raw student CGPA or DOB during application screening. | Circom 2 Groth16 ZK circuit proves `CGPA >= threshold` without disclosing raw score to verifier. |
| **Denial of Service** | Flooding relayer paymaster with transaction spam. | In-memory token bucket rate limiting (25 requests/hour per address), gas price caps, and EIP-712 deadline validation. |
| **Elevation of Privilege** | Rogue guardian trying to hijack user's DID controller key. | M-of-N consensus threshold required; 48-hour safety timelock enables owner to execute `cancelRecovery()`. |
