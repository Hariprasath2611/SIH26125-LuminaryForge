import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { hardhat, polygonAmoy, arbitrumSepolia } from 'wagmi/chains';
import { env } from '../config/env';

export const wagmiConfig = getDefaultConfig({
  appName: env.APP_NAME,
  projectId: env.WALLETCONNECT_PROJECT_ID,
  chains: [hardhat, polygonAmoy, arbitrumSepolia],
  transports: {
    [hardhat.id]: http(env.RPC_URL),
    [polygonAmoy.id]: http(env.AMOY_RPC_URL),
    [arbitrumSepolia.id]: http(env.ARBITRUM_SEPOLIA_RPC_URL),
  },
  ssr: false,
});
