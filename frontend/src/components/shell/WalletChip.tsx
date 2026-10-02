import React, { useState } from 'react';
import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { Wallet, Copy, Check, ChevronDown, Network, ExternalLink } from 'lucide-react';

export function WalletChip() {
  const { address, isConnected } = useAccount();
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

  if (!isConnected || !address) {
    return (
      <button
        onClick={openConnectModal}
        className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-semibold text-xs transition-all shadow-sm"
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
          className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-[#ECFCCB] hover:bg-[#D9F99D] text-[#1A2E05] text-xs font-medium border border-[#D9F99D] transition-colors"
          title="Switch Network"
        >
          <Network className="w-3 h-3 text-[#65A30D]" />
          <span className="hidden sm:inline max-w-[80px] truncate">{chainName}</span>
          <ChevronDown className="w-3 h-3 text-[#4D6B2A]" />
        </button>

        {networkDropdown && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setNetworkDropdown(false)} />
            <div className="absolute right-0 mt-2 w-48 bg-[#FFFFFF] border border-[#ECFCCB] rounded-xl shadow-lg p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
              <div className="px-2 py-1 text-[10px] font-bold text-[#65A30D] uppercase tracking-wider">
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
                      ? 'bg-[#ECFCCB] font-bold text-[#1A2E05]'
                      : 'text-[#4D6B2A] hover:bg-[#F7FBEF] hover:text-[#1A2E05]'
                  }`}
                >
                  <span className="truncate">{chain.name}</span>
                  {chain.id === chainId && <Check className="w-3 h-3 text-[#65A30D]" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Address Chip */}
      <div
        onClick={copyAddress}
        className="cursor-pointer group flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#FFFFFF] border border-[#ECFCCB] hover:border-[#84CC16] text-[#1A2E05] text-xs font-mono transition-all shadow-xs"
        title="Click to copy address"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"></span>
        </span>
        <span className="font-semibold">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        {copied ? (
          <Check className="w-3.5 h-3.5 text-[#65A30D]" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-[#4D6B2A] group-hover:text-[#1A2E05] transition-colors" />
        )}
      </div>
    </div>
  );
}
