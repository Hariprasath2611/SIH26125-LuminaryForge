import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, useReconnect } from 'wagmi';
import { RainbowKitProvider, lightTheme, darkTheme } from '@rainbow-me/rainbowkit';
import { wagmiConfig } from '../lib/wagmi';
import { useTheme } from '../providers/ThemeProvider';
import '@rainbow-me/rainbowkit/styles.css';

function WagmiDeferredReconnect() {
  const { reconnect } = useReconnect();
  useEffect(() => {
    reconnect();
  }, [reconnect]);
  return null;
}

export function Web3Providers({ children }: { children: React.ReactNode }) {
  const { resolved } = useTheme();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 5000,
          },
        },
      })
  );

  const rainbowTheme =
    resolved === 'dark'
      ? darkTheme({
          accentColor: '#84CC16',
          accentColorForeground: '#0B1207',
          borderRadius: 'medium',
          fontStack: 'system',
          overlayBlur: 'small',
        })
      : lightTheme({
          accentColor: '#84CC16',
          accentColorForeground: '#1A2E05',
          borderRadius: 'medium',
          fontStack: 'system',
          overlayBlur: 'small',
        });

  return (
    <WagmiProvider config={wagmiConfig} reconnectOnMount={false}>
      <QueryClientProvider client={queryClient}>
        <WagmiDeferredReconnect />
        <RainbowKitProvider theme={rainbowTheme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Web3Providers;
