import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAccount, useChainId } from 'wagmi';
import { useAuth } from '../../hooks/useAuth';
import { Menu, Wallet, Bell, Check, Copy } from 'lucide-react';
import { NotificationsBell } from './NotificationsBell';

interface TopbarProps {
  onOpenMobileMenu: () => void;
}

const ROUTE_INFO: Record<string, { title: string; breadcrumb: string }> = {
  '/dashboard': { title: 'Dashboard', breadcrumb: 'Home / Dashboard' },
  '/identity': { title: 'Identity & DID', breadcrumb: 'Home / Identity' },
  '/credentials': { title: 'Credentials', breadcrumb: 'Home / Credentials' },
  '/assets': { title: 'Encrypted Assets', breadcrumb: 'Home / Assets' },
  '/zk': { title: 'Zero-Knowledge Proofs', breadcrumb: 'Home / ZK Proofs' },
  '/access': { title: 'Access Control', breadcrumb: 'Home / Access' },
  '/recovery': { title: 'Social Recovery', breadcrumb: 'Home / Recovery' },
  '/audit': { title: 'Audit Trail', breadcrumb: 'Home / Audit Log' },
  '/security': { title: 'Security Center', breadcrumb: 'Home / Security Center' },
  '/issuer': { title: 'Issuer Portal', breadcrumb: 'Portals / Issuer' },
  '/verifier': { title: 'Verifier Portal', breadcrumb: 'Portals / Verifier' },
  '/admin': { title: 'Admin Console', breadcrumb: 'Portals / Admin' },
  '/public-verify': { title: 'Public Verifier', breadcrumb: 'Home / Public Verify' },
};

export function Topbar({ onOpenMobileMenu }: TopbarProps) {
  const location = useLocation();
  const { address } = useAccount();
  const chainId = useChainId();
  const { activeDemoAccount } = useAuth();
  const [copied, setCopied] = useState<boolean>(false);

  const route = ROUTE_INFO[location.pathname] || {
    title: 'Dashboard',
    breadcrumb: 'Home / Dashboard',
  };

  const walletAddr =
    address || activeDemoAccount?.walletAddress || '0xAB12B589dD623F8b820980590aC6F2A57345c9F4';

  const shortAddr = `${walletAddr.slice(0, 6)}...${walletAddr.slice(-4)}`;

  const networkName = chainId === 31337 ? 'Hardhat Node' : 'Polygon Amoy';

  const handleCopyWallet = () => {
    navigator.clipboard.writeText(walletAddr);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <header className="sticky top-0 z-20 h-18 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] px-4 sm:px-8 flex items-center justify-between">
      {/* Left: Mobile Trigger & Page Title with Breadcrumb */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onOpenMobileMenu}
          className="md:hidden p-2 rounded-xl text-stone-600 hover:text-[#1A2E05] hover:bg-stone-100 transition-colors"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#1A2E05] tracking-tight leading-tight">
            {route.title}
          </h1>
          <p className="text-xs text-stone-400 font-medium mt-0.5">
            {route.breadcrumb}
          </p>
        </div>
      </div>

      {/* Right: Network Pill, Demo Wallet Pill, Notifications */}
      <div className="flex items-center space-x-2.5 sm:space-x-3">
        {/* Network Pill */}
        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-200 bg-white text-xs font-semibold text-stone-700 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
          <span>{networkName}</span>
        </div>

        {/* Demo Wallet Pill */}
        <button
          type="button"
          onClick={handleCopyWallet}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-200 bg-white hover:border-[#84CC16] text-xs font-semibold text-stone-700 shadow-2xs transition-colors cursor-pointer group"
          title="Click to copy wallet address"
        >
          <Wallet className="w-3.5 h-3.5 text-stone-500 group-hover:text-[#65A30D]" />
          <span>Demo wallet · {shortAddr}</span>
          {copied ? (
            <Check className="w-3.5 h-3.5 text-[#65A30D]" />
          ) : (
            <Copy className="w-3 h-3 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </button>

        {/* Notifications Bell */}
        <NotificationsBell />
      </div>
    </header>
  );
}

export default Topbar;
