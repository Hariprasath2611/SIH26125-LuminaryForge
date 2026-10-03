# Verification Engine & Failure Diagnostics

## The 4-Tier Verification Pipeline
Bharosa executes a multi-stage cryptographic and on-chain verification pipeline whenever a document, credential, or presentation is evaluated.

### Stage 1: Document Integrity & Merkle / Hash Check (`INTEGRITY_CHECK`)
- **What it checks**: Computes the cryptographic hash (SHA-256) of the submitted document or claims tree and compares it against the recorded anchor hash.
- **Pass condition**: Computed hash matches the anchor hash exactly.
- **Common Failure Causes**:
  - File tampering: even a single modified byte or metadata modification produces a completely different SHA-256 digest.
  - Incomplete file download or corrupted upload.

### Stage 2: Issuer Cryptographic Signature (`SIGNATURE_VALIDITY`)
- **What it checks**: Recovers the signer's public key from the ECDSA/Ed25519 digital signature embedded in the credential.
- **Pass condition**: Signature mathematically verifies against the declared issuer address or DID.
- **Common Failure Causes**:
  - Credential claims altered after signing.
  - Invalid signature format or corrupted public key.

### Stage 3: Trusted Issuer Registry Status (`TRUSTED_ISSUER`)
- **What it checks**: Queries the on-chain `TrustedIssuerRegistry` smart contract to confirm if the signing issuer address is authorized and active.
- **Pass condition**: `registry.isTrustedIssuer(issuerAddress) == true`.
- **Common Failure Causes**:
  - Self-signed credentials from unaccredited parties.
  - Issuer suspended or decommissioned by governance.

### Stage 4: On-Chain Anchor & Revocation Evaluation (`REVOCATION_STATUS`)
- **What it checks**: Queries the `CredentialRegistry` contract to verify that the credential's unique hash was properly anchored and has not been revoked.
- **Pass condition**: Anchor exists, block timestamp < expiration timestamp, and `revoked == false`.
- **Common Failure Causes**:
  - Credential revoked by the issuer (e.g., student expelled or employee terminated).
  - Credential has expired past its valid life window.
  - Credential hash was never submitted or anchored to the blockchain.

---

## Copilot Diagnostic Guidance
When a user asks *"Why did verification fail?"*, the Copilot:
1. Queries the structured check results of the verification report via `explain_verification(reportId)`.
2. Identifies the specific failing stage (`INTEGRITY_CHECK`, `SIGNATURE_VALIDITY`, `TRUSTED_ISSUER`, or `REVOCATION_STATUS`).
3. Explains the exact cryptographic reason in simple, plain language.
4. **Security Guarantee**: The Copilot NEVER reads, logs, or outputs private file contents or sensitive personal data while explaining the failure.
