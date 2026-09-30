# Bharosa Backend
### Express + Prisma + Redis Helper & Security Indexing Service
**Smart India Hackathon 2026** · **PS SIH26125** · **Team LUMINARYFORGE**

The backend is a non-authoritative helper layer providing:
- **SIWE Authentication:** EIP-4361 wallet login with atomic nonce consumption.
- **Gasless Relayer:** EIP-712 sponsored meta-transaction submission (`/v1/relayer/sponsor`).
- **IPFS Health & Pinning Monitor:** Multi-node cluster replication health checker (`/v1/ipfs/health`).
- **Event Indexer:** Idempotent blockchain event listener indexing on-chain state to Postgres.
- **Public Credential Verification:** Zero-login 5-point verification API (`/v1/verify/credential`).
- **Audit Trails:** Immutable audit log exporter (`/v1/audit/export`).
- **Health Checks:** `/healthz` returning status of Chain, IPFS, Database, and Demo Mode.

---

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Run test suite (24 tests across 7 suites)
npm test

# 3. Start development server (:3001)
npm run dev

# 4. Check health endpoint
curl http://localhost:3001/healthz
```
