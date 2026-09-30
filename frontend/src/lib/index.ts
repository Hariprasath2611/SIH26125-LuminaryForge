/**
 * Bharosa Enterprise Core Library (Client-Side Cryptography, DID, IPFS, ZK, API-Client & Smart Contracts)
 * Decentralized Self-Sovereign Identity & Zero-Knowledge Custody Infrastructure
 */

export const BHAROSA_VERSION = '1.0.0';
export const SUPPORTED_CHAIN_IDS = [31337, 80002, 421614] as const;

export * from './crypto';
export * from './did';
export * from './ipfs';
export * from './contracts';
export * from './contracts/client';
export * from './api';
export * from './zk/prover';
