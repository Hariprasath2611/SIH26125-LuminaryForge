import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { hardhat, polygonAmoy, arbitrumSepolia } from 'wagmi/chains';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '3a8170812b534d0ff9d794f168faebeb';

export const wagmiConfig = getDefaultConfig({
  appName: 'Bharosa (भरोसा)',
  projectId,
  chains: [hardhat, polygonAmoy, arbitrumSepolia],
  transports: {
    [hardhat.id]: http(process.env.NEXT_PUBLIC_RPC_URL || 'http://127.0.0.1:8545'),
    [polygonAmoy.id]: http(process.env.NEXT_PUBLIC_AMOY_RPC_URL || 'https://rpc-amoy.polygon.technology'),
    [arbitrumSepolia.id]: http(
      process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL || 'https://sepolia-rollup.arbitrum.io/rpc'
    ),
  },
  ssr: true,
});
