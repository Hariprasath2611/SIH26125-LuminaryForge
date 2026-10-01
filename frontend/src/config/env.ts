/**
 * Client Environment Configuration (Vite + import.meta.env)
 * All environment variables must be prefixed with VITE_
 */

export const env = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Bharosa',
  DEMO_MODE: import.meta.env.VITE_DEMO_MODE === 'true',
  API_URL: import.meta.env.VITE_API_URL || '/v1',
  CHAIN_ID: Number(import.meta.env.VITE_CHAIN_ID) || 31337,
  RPC_URL: import.meta.env.VITE_RPC_URL || 'http://127.0.0.1:8545',
  AMOY_RPC_URL: import.meta.env.VITE_AMOY_RPC_URL || 'https://rpc-amoy.polygon.technology',
  ARBITRUM_SEPOLIA_RPC_URL:
    import.meta.env.VITE_ARBITRUM_SEPOLIA_RPC_URL || 'https://sepolia-rollup.arbitrum.io/rpc',
  IPFS_GATEWAY: import.meta.env.VITE_IPFS_GATEWAY || 'https://ipfs.io/ipfs/',
  WALLETCONNECT_PROJECT_ID:
    import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '3a8170812b534d0ff9d794f168faebeb',
  CONTRACT_IDENTITY_REGISTRY: import.meta.env.VITE_CONTRACT_IDENTITY_REGISTRY || '',
  CONTRACT_ACCESS_CONTROL: import.meta.env.VITE_CONTRACT_ACCESS_CONTROL || '',
  CONTRACT_OWNERSHIP_REGISTRY: import.meta.env.VITE_CONTRACT_OWNERSHIP_REGISTRY || '',
  CONTRACT_SOCIAL_RECOVERY: import.meta.env.VITE_CONTRACT_SOCIAL_RECOVERY || '',
  CONTRACT_ZK_VERIFIER: import.meta.env.VITE_CONTRACT_ZK_VERIFIER || '',
} as const;

export default env;
