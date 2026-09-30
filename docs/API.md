# Backend REST API Specification
**BHAROSA (भरोसा)** · Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE

Base URL: `http://localhost:3001/v1` (Local) / `https://bharosa-api.onrender.com/v1` (Cloud)

---

## Endpoints

### 1. System Health & Readiness
- `GET /healthz`
  - Returns: `{ status: "ok", service: "bharosa-backend", chain: "ok", ipfs: "ok", db: "ok", demoMode: true }`
- `GET /readyz`
  - Returns: `{ ready: true, service: "bharosa-api" }`

### 2. SIWE Authentication (`/v1/auth`)
- `GET /v1/auth/nonce`
  - Returns: `{ nonce: string }` (Single-use, 5m TTL)
- `POST /v1/auth/verify`
  - Payload: `{ message: string, signature: string }`
  - Returns: `{ token: string, user: { address: string, did: string } }`

### 3. Public Credential Verification (`/v1/verify`)
- `POST /v1/verify/credential`
  - Payload: Full W3C Verifiable Credential JSON
  - Returns 5-point verification checklist breakdown (Signature, Issuer Whitelist, On-Chain Anchor, Revocation Status, Expiration).

### 4. Gasless Relayer Paymaster (`/v1/relayer`)
- `GET /v1/relayer/treasury`
  - Returns: Relayer wallet address, balance (ETH/MATIC), sponsored tx count, and policy.
- `POST /v1/relayer/sponsor`
  - Payload: `{ owner, assetId, grantee, role, notBefore, expiresAt, deadline, signature }`
  - Submits `grantWithSig` to `BharosaAccessControl.sol` paying gas from treasury.

### 5. IPFS Cluster Health (`/v1/ipfs`)
- `GET /v1/ipfs/health`
  - Returns node ping and replication status across `delhi-primary-01`, `mumbai-edge-02`, and `bangalore-edge-03`.
- `POST /v1/ipfs/upload`
  - Multipart upload for ciphertext blobs.

### 6. Audit & Indexer (`/v1/audit`)
- `GET /v1/audit/export?format=json`
  - Returns complete immutable event log export with on-chain block anchors.
- `GET /v1/stats`
  - Platform statistics (total DIDs, credentials, encrypted assets, active grants).
