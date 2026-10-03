# Platform Overview: What is Bharosa (भरोसा)?

## Executive Summary
**Bharosa** is an enterprise-grade decentralized sovereign identity and attribute-based access control (ABAC) platform designed for high-assurance credential verification, cryptographic digital assets, and zero-knowledge compliance.

The platform bridges decentralized identifiers (W3C DIDs), on-chain verifiable credential anchors, soulbound or access-controlled data vaults on IPFS, and time-bounded cryptographic access grants.

---

## Core Architecture Principles

1. **Decentralized Ground Truth**:
   - All state authority (DIDs, credential status, access grants, revocations, and audit anchors) originates on-chain (Ethereum / Polygon / EVM-compatible networks) and on IPFS.
   - The centralized database functions solely as a performant read-through cache and mirror for rapid indexing. It stores **no private keys**, **no decrypted file contents**, and **no plaintext PII**.

2. **Self-Sovereign Identity (SSI)**:
   - Users authenticate using their wallet or Web3 identity (e.g., via Ethereum addresses or DIDs like `did:ethr:chainId:0x...`).
   - Every credential issued is anchored cryptographically, allowing trustless, third-party independent verification without vendor lock-in.

3. **Attribute-Based Access Control (ABAC)**:
   - Access to confidential documents or identity data is governed by dynamic conditions (user role, requested purpose, expiration window, and cryptographic attestations).
   - Grants are time-bounded and immediately revocable on-chain.

4. **Zero-Knowledge Privacy**:
   - Verifiers can validate boolean conditions (e.g., "Is age >= 18?", "Is accredited in Maharashtra?") using Zero-Knowledge Proofs (ZKPs) without inspecting the underlying identity attributes or document contents.

---

## Strict Copilot Authority Boundary
The Bharosa Copilot is an **in-app advisory assistant**. Under no circumstances does the Copilot hold authority:
- ❌ **Cannot sign transactions** on behalf of users.
- ❌ **Cannot execute on-chain state changes** (cannot grant access, revoke grants, or register DIDs).
- ❌ **Cannot issue credentials**.
- ❌ **Cannot read private keys, seed phrases, or wrapped keys**.
- ❌ **Cannot inspect decrypted file contents or raw private asset data**.

Every real-world action proposed by the Copilot is delivered as an **Action Card** (an intent) in the user interface. The user must review every prefilled detail and explicitly confirm with their connected Web3 wallet.
