# Bharosa Blockchain
### EVM Smart Contracts (Solidity 0.8.24) & Circom 2 zk-SNARKs
**Smart India Hackathon 2026** · **PS SIH26125** · **Team LUMINARYFORGE**

This service contains the core on-chain infrastructure for the Bharosa platform:
- `IdentityRegistry.sol`: W3C DID document and credential canonical anchor registry with issuer whitelisting.
- `BharosaAccessControl.sol`: Attribute-Based Access Control (NIST SP 800-162) with time windows and EIP-712 gasless `grantWithSig`.
- `OwnershipRegistry.sol`: ERC-1155 sovereign asset registry with soulbound token minting and emergency pause.
- `SocialRecovery.sol`: M-of-N multi-guardian identity recovery with 48h/2m safety timelock.
- `AuditAnchor.sol`: Single and batch Merkle root anchoring for tamper-evident audit logs.
- `ZKCredentialVerifier.sol`: Groth16 pairing verifier for zero-knowledge qualification proofs on the BN254 curve.
- `circuits/credential_predicate.circom`: Circom 2 circuit for confidential predicate checks.

---

## Quickstart

### Prerequisites
- Node.js `>= 20.0.0`
- npm or pnpm

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Compile contracts
npm run compile

# 3. Run full test suite (43 tests)
npm test

# 4. Start local Hardhat node
npm run node

# 5. Deploy contracts (auto-exports ABIs to frontend/ and backend/)
npm run deploy

# 6. Seed demo accounts, credential, and asset
npm run seed
```

### Auto-Export Targets
After running `npm run deploy`, the deployment script automatically:
1. Writes contract ABIs + addresses to `frontend/src/contracts/`
2. Writes contract ABIs + addresses to `backend/src/contracts/`
3. Copies ZK circuit wasm + zkey files to `frontend/public/zk/`
