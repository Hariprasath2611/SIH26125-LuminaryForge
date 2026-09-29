# Architecture & Technical Decisions (ADR)
Platform: **Bharosa (भरोसा)** - Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE

This log captures all architectural, cryptographic, and security design decisions made during the development of Bharosa.

---

## ADR 001: Monorepo Structure & Package Tooling
- **Date:** 2026-09-29
- **Decision:** Use `pnpm` workspaces for monorepo package orchestration with distinct separation of concerns:
  - `apps/web`: Next.js 14 App Router frontend
  - `apps/api`: Express.js + Prisma + Redis backend helper & security indexing service
  - `packages/contracts`: Hardhat smart contracts (Solidity ^0.8.24) with OpenZeppelin
  - `packages/circuits`: Circom 2 + SnarkJS Groth16 zk-SNARK circuits
  - `packages/sdk`: Isomorphic TypeScript SDK for crypto (AES-256-GCM, ECIES, HKDF), DID/VC management, and contract bindings
- **Rationale:** Strict modularity prevents leaking private keys or node-only modules into client bundles, while providing code reusability across web, API, and worker processes.

---

## ADR 002: Design System - Light Only Theme (White + Lime Green)
- **Date:** 2026-09-29
- **Decision:** Enforce a strict light-only aesthetic. Absolutely zero dark mode or theme switches.
- **Palette Tokens:**
  - Background: `#FFFFFF`
  - Surface: `#F7FBEF`
  - Surface 2: `#ECFCCB`
  - Primary: `#84CC16` (Lime 500)
  - Primary Hover: `#65A30D` (Lime 600)
  - Primary Soft: `#A3E635` (Lime 400)
  - Ring / Focus: `#BEF264` (Lime 300)
  - Text Primary: `#1A2E05`
  - Text Muted: `#4D6B2A`
  - Border: `#D9EBB5`
  - Status: Success `#16A34A`, Warning `#F59E0B`, Error `#DC2626`, Info `#0EA5E9`
- **Accessibility:** Primary buttons use `#1A2E05` dark text on lime backgrounds to satisfy WCAG AA contrast ratio (> 4.5:1), as white on lime fails contrast requirements.

---

## ADR 003: Backend Role as Non-Authoritative Helper Layer
- **Date:** 2026-09-29
- **Decision:** The API service (`apps/api`) is strictly an indexing, notification, and relayer helper. It holds no user private keys, cannot grant access, and cannot forge credentials.
- **Rationale:** In the event of backend downtime or compromise, credential verification and asset decryption continue to function end-to-end directly from Polygon/Arbitrum RPC and IPFS gateways.

---

## ADR 004: Hardhat Cancun Target & OpenZeppelin v5 Support
- **Date:** 2026-09-29
- **Decision:** Target `evmVersion: "cancun"` in Hardhat compiler configuration.
- **Rationale:** OpenZeppelin Contracts v5 utilizes the `mcopy` EVM opcode for efficient memory copy operations in bytes and arrays utilities. Cancun EVM enables this natively.

---

## ADR 005: ABAC Contract Namespace Isolation
- **Date:** 2026-09-29
- **Decision:** Name the attribute-based access control engine `BharosaAccessControl` to avoid identifier collision with OpenZeppelin's internal `AccessControl` base contract.
- **Rationale:** Preserves explicit inheritance while eliminating compiler symbol ambiguity.

---

## ADR 006: Redis Cache with In-Memory Resilient Fallback
- **Date:** 2026-09-29
- **Decision:** Provide an automatic in-memory fallback store in `apps/api/src/lib/redis.ts` if Redis is unreachable or when running standalone unit tests.
- **Rationale:** Guarantees zero test failures and fast local execution without requiring Redis to be pre-started during contract or CI test phases.

---

## ADR 007: SIWE (EIP-4361) Replay Attack Protection
- **Date:** 2026-09-29
- **Decision:** Store SIWE nonces with 5-minute TTL and delete them atomically upon successful signature verification.
- **Rationale:** Ensures nonces are strictly single-use and invalidates any attempted replay of signed messages.

---

## ADR 008: AES-256-GCM + ECIES secp256k1 Hybrid Cryptosystem for Assets
- **Date:** 2026-09-29
- **Decision:** Encrypt files using AES-256-GCM with unique 96-bit random IVs and AAD binding (`assetId:version`). Delegate file keys using ECIES on secp256k1 with ephemeral ECDH and domain-separated HKDF-SHA256 (`bharosa:ecies:aes-key-wrap`).
- **Rationale:** Guarantees authenticated encryption at rest on IPFS, zero plaintext exposure, and cryptographically bound access rights without storing private keys in browser local storage.

---

## ADR 009: W3C Verifiable Credentials with Canonical EIP-712 Anchor Hash
- **Date:** 2026-09-29
- **Decision:** Model all credentials under W3C VC Data Model v1.1 and sign using EIP-712 structured data (`BharosaCredentialRegistry`). Hash the canonical sorted representation for on-chain anchoring into `IdentityRegistry`.
- **Rationale:** Enables instant, zero-contact off-chain verification by verifiers while anchoring immutable proof of issuance and revocation status on-chain.

---

## ADR 010: Event Indexer Mirror & Resilient In-Memory Fallback
- **Date:** 2026-09-29
- **Decision:** Build an idempotent event indexer (`apps/api/src/workers/indexer.ts`) that listens to contract events on Polygon/Hardhat and mirrors them to Postgres. Provide an in-memory fallback store in `apps/api/src/lib/db-fallback.ts` and BigInt serialization polyfill.
- **Rationale:** Proves the database is 100% rebuildable from chain logs via `pnpm reindex` while guaranteeing the API and test suites operate reliably even without a running local database.

---

## ADR 011: Webpack Ignore for Optional Wagmi/RainbowKit Submodules
- **Date:** 2026-09-29
- **Decision:** Use Next.js `webpack.IgnorePlugin` to ignore optional `@x402/*` packages imported by Coinbase Smart Wallet submodules.
- **Rationale:** Eliminates spurious Next.js production build module-not-found warnings and ensures seamless build without heavy unused mobile dependencies.


