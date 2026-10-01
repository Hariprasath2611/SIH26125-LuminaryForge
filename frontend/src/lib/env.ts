import { z } from 'zod';

/**
 * Zod Schema for Client Environment Variables (Vite + React 18)
 * All client-exposed variables must begin with VITE_
 */
const envSchema = z.object({
  VITE_APP_NAME: z.string().default('Bharosa'),
  VITE_DEMO_MODE: z.string().optional().default('true').transform((v) => v === 'true'),
  VITE_API_URL: z.string().default('/v1'),
  VITE_CHAIN_ID: z.string().optional().default('31337').transform((v) => Number(v) || 31337),
  VITE_RPC_URL: z.string().default('http://127.0.0.1:8545'),
  VITE_AMOY_RPC_URL: z.string().default('https://rpc-amoy.polygon.technology'),
  VITE_ARBITRUM_SEPOLIA_RPC_URL: z.string().default('https://sepolia-rollup.arbitrum.io/rpc'),
  VITE_IPFS_GATEWAY: z.string().default('https://ipfs.io/ipfs/'),
  // STRICT: No hardcoded fallback. If missing or undefined, omit WalletConnect
  VITE_WALLETCONNECT_PROJECT_ID: z.string().optional(),
  VITE_CONTRACT_IDENTITY_REGISTRY: z.string().optional().default(''),
  VITE_CONTRACT_ACCESS_CONTROL: z.string().optional().default(''),
  VITE_CONTRACT_OWNERSHIP_REGISTRY: z.string().optional().default(''),
  VITE_CONTRACT_SOCIAL_RECOVERY: z.string().optional().default(''),
  VITE_CONTRACT_ZK_VERIFIER: z.string().optional().default(''),
});

const parsed = envSchema.safeParse(import.meta.env);
if (!parsed.success) {
  console.error('[Bharosa] Critical configuration error: Invalid environment variables:', parsed.error.format());
  throw new Error('Critical configuration error: Invalid environment variables');
}

export const env = {
  APP_NAME: parsed.data.VITE_APP_NAME,
  DEMO_MODE: parsed.data.VITE_DEMO_MODE,
  API_URL: parsed.data.VITE_API_URL,
  CHAIN_ID: parsed.data.VITE_CHAIN_ID,
  RPC_URL: parsed.data.VITE_RPC_URL,
  AMOY_RPC_URL: parsed.data.VITE_AMOY_RPC_URL,
  ARBITRUM_SEPOLIA_RPC_URL: parsed.data.VITE_ARBITRUM_SEPOLIA_RPC_URL,
  IPFS_GATEWAY: parsed.data.VITE_IPFS_GATEWAY,
  WALLETCONNECT_PROJECT_ID: parsed.data.VITE_WALLETCONNECT_PROJECT_ID || '',
  CONTRACT_IDENTITY_REGISTRY: parsed.data.VITE_CONTRACT_IDENTITY_REGISTRY,
  CONTRACT_ACCESS_CONTROL: parsed.data.VITE_CONTRACT_ACCESS_CONTROL,
  CONTRACT_OWNERSHIP_REGISTRY: parsed.data.VITE_CONTRACT_OWNERSHIP_REGISTRY,
  CONTRACT_SOCIAL_RECOVERY: parsed.data.VITE_CONTRACT_SOCIAL_RECOVERY,
  CONTRACT_ZK_VERIFIER: parsed.data.VITE_CONTRACT_ZK_VERIFIER,
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
} as const;

export default env;
