/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_DEMO_MODE: string;
  readonly VITE_API_URL: string;
  readonly VITE_CHAIN_ID: string;
  readonly VITE_RPC_URL: string;
  readonly VITE_AMOY_RPC_URL: string;
  readonly VITE_ARBITRUM_SEPOLIA_RPC_URL: string;
  readonly VITE_IPFS_GATEWAY: string;
  readonly VITE_WALLETCONNECT_PROJECT_ID?: string;
  readonly VITE_CONTRACT_IDENTITY_REGISTRY?: string;
  readonly VITE_CONTRACT_ACCESS_CONTROL?: string;
  readonly VITE_CONTRACT_OWNERSHIP_REGISTRY?: string;
  readonly VITE_CONTRACT_SOCIAL_RECOVERY?: string;
  readonly VITE_CONTRACT_ZK_VERIFIER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
