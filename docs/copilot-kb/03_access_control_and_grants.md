# Access Control & ABAC Grants in Bharosa

## Overview of Attribute-Based Access Control (ABAC)
Bharosa replaces brittle, centralized access control lists with decentralized, cryptographically enforced Attribute-Based Access Control (ABAC). Access rights are evaluated based on dynamic attributes:
- **Subject**: Who is requesting access? (Verified DID / Wallet address)
- **Resource**: Which encrypted asset or credential is being accessed?
- **Action**: Read, verify, or re-encrypt.
- **Context**: Time window (start/end timestamp), permitted purpose, and legal/compliance parameters.

---

## The Grant Lifecycle

1. **Access Request**:
   - A prospective grantee (e.g., an employer's HR department) submits an on-chain or off-chain `AccessRequest`.
   - The request contains: `assetId`, `requesterAddress`, `requestedRole`, `purpose`, and `durationDays`.

2. **Holder Review**:
   - The asset owner views pending requests on the **Access Control** dashboard.
   - The owner can accept, reject, or modify the grant parameters (e.g., narrowing the duration from 30 days to 7 days).

3. **Cryptographic Grant Execution**:
   - The owner signs an on-chain transaction calling `grantAccess(assetId, grantee, role, purposeHash, expiryTimestamp)`.
   - For encrypted assets, the owner's client generates a re-encryption key or decrypts a symmetric data key with the grantee's public key, allowing the grantee to decrypt the IPFS ciphertext during the grant window.

4. **Instant Revocation**:
   - The owner can revoke access at any point prior to expiration by calling `revokeAccess(grantId)`.
   - Once revoked, the relayer and verification gateways will immediately reject any subsequent decryption or access requests for that grantee.

---

## Role of the Copilot in Grants
When a user asks the Copilot: *"Prepare a grant for TechCorp HR for 7 days"*, the Copilot:
1. Calls the `prefill_grant` intent tool.
2. Formats a structured **Action Card** showing:
   - Target Asset
   - Grantee Address / Identifier
   - Intended Role & Purpose
   - Duration (7 days)
3. Directs the user to the Access Control page with the form prefilled.
4. **Important**: The Copilot NEVER signs or executes the transaction. The user retains sole authority and must confirm the transaction in their connected Web3 wallet.
