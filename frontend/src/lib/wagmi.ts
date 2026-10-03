import { getDefaultConfig, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { injectedWallet } from '@rainbow-me/rainbowkit/wallets';
import { createConfig, http } from 'wagmi';
import { hardhat, polygonAmoy, arbitrumSepolia } from 'wagmi/chains';
import { env } from './env';

const isPlaceholderProjectId = env.WALLETCONNECT_PROJECT_ID === '3fcc6bba0f1de962dcbdae11bd9cee4d';
const hasProjectId = Boolean(
  env.WALLETCONNECT_PROJECT_ID &&
  env.WALLETCONNECT_PROJECT_ID.trim().length > 0 &&
  !isPlaceholderProjectId
);

export const wagmiConfig = hasProjectId
  ? getDefaultConfig({
      appName: env.APP_NAME,
      projectId: env.WALLETCONNECT_PROJECT_ID,
      chains: [hardhat, polygonAmoy, arbitrumSepolia],
      transports: {
        [hardhat.id]: http(env.RPC_URL),
        [polygonAmoy.id]: http(env.AMOY_RPC_URL),
        [arbitrumSepolia.id]: http(env.ARBITRUM_SEPOLIA_RPC_URL),
      },
      ssr: false,
    })
  : createConfig({
      chains: [hardhat, polygonAmoy, arbitrumSepolia],
      connectors: connectorsForWallets(
        [
          {
            groupName: 'Browser / Injected',
            wallets: [injectedWallet],
          },
        ],
        {
          appName: env.APP_NAME,
          projectId: '00000000000000000000000000000000',
        }
      ),
      transports: {
        [hardhat.id]: http(env.RPC_URL),
        [polygonAmoy.id]: http(env.AMOY_RPC_URL),
        [arbitrumSepolia.id]: http(env.ARBITRUM_SEPOLIA_RPC_URL),
      },
      ssr: false,
    });

export default wagmiConfig;
