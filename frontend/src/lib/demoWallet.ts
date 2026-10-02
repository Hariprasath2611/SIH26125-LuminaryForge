import { createConnector } from 'wagmi';
import { privateKeyToAccount } from 'viem/accounts';
import {
  createWalletClient,
  custom,
  http,
  hexToString,
  isHex,
  type EIP1193Provider,
  type EIP1193RequestFn,
} from 'viem';

export function createDemoConnector(privateKey: `0x${string}`) {
  const localAccount = privateKeyToAccount(privateKey);

  return createConnector((config) => {
    let connected = false;

    // Custom EIP-1193 provider for silent local signing
    const request: EIP1193RequestFn = async ({ method, params = [] }: { method: string; params?: any }) => {
      const activeChain = config.chains[0];
      const rpcUrl = activeChain?.rpcUrls?.default?.http?.[0] || 'http://127.0.0.1:8545';

      switch (method) {
        case 'eth_requestAccounts':
        case 'eth_accounts':
          connected = true;
          return [localAccount.address];

        case 'eth_chainId':
          return `0x${(activeChain?.id || 31337).toString(16)}`;

        case 'personal_sign': {
          const [messageRaw, _address] = params as [string, string];
          let messageToSign: string = messageRaw;
          if (isHex(messageRaw)) {
            try {
              messageToSign = hexToString(messageRaw);
            } catch {
              messageToSign = messageRaw;
            }
          }
          const sig = await localAccount.signMessage({ message: messageToSign });
          return sig;
        }

        case 'eth_signTypedData_v4': {
          const [_address, typedDataRaw] = params as [string, string];
          const typedData = typeof typedDataRaw === 'string' ? JSON.parse(typedDataRaw) : typedDataRaw;
          const sig = await localAccount.signTypedData(typedData);
          return sig;
        }

        case 'eth_sendTransaction': {
          const [tx] = params as [any];
          const walletClient = createWalletClient({
            account: localAccount,
            chain: activeChain,
            transport: http(rpcUrl),
          });
          const hash = await walletClient.sendTransaction(tx);
          return hash;
        }

        default: {
          // Forward all read and query methods to the RPC node
          const res = await fetch(rpcUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              jsonrpc: '2.0',
              id: Date.now(),
              method,
              params,
            }),
          });
          const json = await res.json();
          if (json.error) {
            throw new Error(json.error.message || `RPC error for ${method}`);
          }
          return json.result;
        }
      }
    };

    const provider: EIP1193Provider = {
      request,
      on: () => provider,
      removeListener: () => provider,
    };

    return {
      id: 'demo-wallet',
      name: 'Bharosa Demo Signer',
      type: 'demoWallet',
      async connect({ chainId } = {}) {
        connected = true;
        const currentChainId = chainId || config.chains[0]?.id || 31337;
        return {
          accounts: [localAccount.address],
          chainId: currentChainId,
        };
      },
      async disconnect() {
        connected = false;
      },
      async getAccounts() {
        return connected ? [localAccount.address] : [localAccount.address];
      },
      async getChainId() {
        return config.chains[0]?.id || 31337;
      },
      async isAuthorized() {
        return true;
      },
      async getProvider() {
        return provider;
      },
      async getClient({ chainId } = {}) {
        const chain = config.chains.find((c) => c.id === chainId) || config.chains[0];
        return createWalletClient({
          account: localAccount,
          chain,
          transport: custom(provider),
        });
      },
      onAccountsChanged() {},
      onChainChanged() {},
      onDisconnect() {},
    };
  });
}
