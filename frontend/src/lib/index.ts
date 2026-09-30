/**
 * Bharosa Core Library (Browser-Side Crypto, DID, IPFS, ZK, API-Client & Contracts)
 * Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE
 */

export const BHAROSA_VERSION = '1.0.0';
export const SUPPORTED_CHAIN_IDS = [31337, 80002, 421614] as const;

export * from './crypto';
export * from './did';
export * from './ipfs';
export * from './contracts';
export * from './contracts/client';
export * from './api';
export * from './api-client';
export * from './zk/prover';
