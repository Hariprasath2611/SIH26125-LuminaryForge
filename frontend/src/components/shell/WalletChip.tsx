import React, { useState } from 'react';
import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAuth } from '../../hooks/useAuth';
import { Wallet, Copy, Check, ChevronDown, Network, Sparkles, ShieldCheck } from 'lucide-react';

export function WalletChip() {
  const { address, isConnected } = useAccount();
  const { isDemoUser, activeDemoAccount, user } = useAuth();
  const chainId = useChainId();
  const { switchChain, chains } = useSwitchChain();
  const { openConnectModal } = useConnectModal();

  const [copied, setCopied] = useState<boolean>(false);
  const [networkDropdown, setNetworkDropdown] = useState<boolean>(false);

  const copyAddress = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!address) return;
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If in Demo Mode with active demo user, render dedicated Demo Wallet Chip
  if (isDemoUser) {
    const demoName = activeDemoAccount?.name || user?.displayName || 'Demo User';
    const demoAddr = address || activeDemoAccount?.walletAddress || '';

    return (
      <div className="flex items-center space-x-1.5">
        <div
          onClick={copyAddress}
          className="cursor-pointer group flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-primary-soft border border-primary/30 hover:bg-primary-soft/80 text-fg text-xs transition-all shadow-xs"
          title={`Click to copy demo signer address (${demoAddr})`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-bold flex items-center gap-1 text-[11px]">
            <Sparkles className="w-3 h-3 text-primary fill-primary" />
            Demo Wallet: {demoName.split(' ')[0]}
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-fg-muted">
            ({demoAddr ? `${demoAddr.slice(0, 4)}...${demoAddr.slice(-3)}` : ''})
          </span>
          {copied ? (
            <Check className="w-3 h-3 text-primary" />
          ) : (
            <Copy className="w-3 h-3 text-fg-muted group-hover:text-fg transition-colors" />
          )}
        </div>
      </div>
    );
  }

  if (!isConnected || !address) {
    return (
      <button
        onClick={openConnectModal}
        className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-primary hover:bg-primary-hover text-on-primary font-semibold text-xs transition-all shadow-sm"
      >
        <Wallet className="w-3.5 h-3.5" />
        <span>Connect Wallet</span>
      </button>
    );
  }

  const currentChain = chains.find((c) => c.id === chainId);
  const chainName = currentChain ? currentChain.name : `Chain ${chainId}`;

  return (
    <div className="relative flex items-center space-x-1.5">
      {/* Network Switcher Pill */}
      <div className="relative">
        <button
          onClick={() => setNetworkDropdown((prev) => !prev)}
          className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-surface-2 hover:bg-surface-3 text-fg text-xs font-medium border border-line transition-colors"
          title="Switch Network"
        >
          <Network className="w-3 h-3 text-primary" />
          <span className="hidden sm:inline max-w-[80px] truncate">{chainName}</span>
          <ChevronDown className="w-3 h-3 text-fg-muted" />
        </button>

        {networkDropdown && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setNetworkDropdown(false)} />
            <div className="absolute right-0 mt-2 w-48 bg-surface border border-line rounded-xl shadow-lg p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 transition-colors">
              <div className="px-2 py-1 text-[10px] font-bold text-primary uppercase tracking-wider">
                Select Network
              </div>
              {chains.map((chain) => (
                <button
                  key={chain.id}
                  onClick={() => {
                    if (switchChain) switchChain({ chainId: chain.id });
                    setNetworkDropdown(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-lg transition-colors ${
                    chain.id === chainId
                      ? 'bg-primary-soft font-bold text-fg'
                      : 'text-fg-muted hover:bg-surface-2 hover:text-fg'
                  }`}
                >
                  <span className="truncate">{chain.name}</span>
                  {chain.id === chainId && <Check className="w-3 h-3 text-primary" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Address Chip */}
      <div
        onClick={copyAddress}
        className="cursor-pointer group flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-surface border border-line hover:border-primary text-fg text-xs font-mono transition-all shadow-xs"
        title="Click to copy address"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="font-semibold">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        {copied ? (
          <Check className="w-3.5 h-3.5 text-primary" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-fg-muted group-hover:text-fg transition-colors" />
        )}
      </div>
    </div>
  );
}
