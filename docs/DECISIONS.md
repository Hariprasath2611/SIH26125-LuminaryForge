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
