import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, Zap, Sparkles, ShieldCheck } from 'lucide-react';
import { WalletChip } from './WalletChip';
import { UserMenu } from './UserMenu';
import { NotificationsBell } from './NotificationsBell';
import { ThemeToggle } from '../ThemeToggle';

interface TopbarProps {
  onOpenMobileMenu: () => void;
}

const ROUTE_TITLES: Record<string, { title: string; subtitle: string }> = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Self-Sovereign Identity Overview' },
  '/identity': { title: 'Identity & DID', subtitle: 'W3C DID Document & Cryptographic Keys' },
  '/credentials': { title: 'Verifiable Credentials', subtitle: 'Cryptographically Signed Attestations' },
  '/assets': { title: 'Encrypted Asset Vault', subtitle: 'Zero-Knowledge File & Secret Storage' },
  '/zk': { title: 'Zero-Knowledge Proofs', subtitle: 'Selective Disclosure & Privacy Verification' },
  '/access': { title: 'Access Control', subtitle: 'Decentralized Time-Bound Delegation' },
  '/recovery': { title: 'Social Recovery', subtitle: 'Multi-Guardian Key Restitution' },
  '/audit': { title: 'Audit Trail', subtitle: 'Immutable On-Chain Event History' },
  '/security': { title: 'Security Center', subtitle: 'Emergency Freeze & Anti-Tamper' },
  '/issuer': { title: 'Issuer Portal', subtitle: 'Accredited Credential Authoring' },
  '/verifier': { title: 'Verifier Portal', subtitle: 'Instant Verification Gateway' },
  '/admin': { title: 'Admin Console', subtitle: 'Protocol Governance & Parameters' },
  '/onboarding': { title: 'Identity Onboarding', subtitle: 'Generate DID & Cryptographic Keypair' },
  '/connect-wallet': { title: 'Connect Wallet', subtitle: 'Cryptographic Key Gate' },
};

export function Topbar({ onOpenMobileMenu }: TopbarProps) {
  const location = useLocation();
  const [gaslessActive, setGaslessActive] = useState<boolean>(true);

  // Match title from route path
  const routeInfo = ROUTE_TITLES[location.pathname] || {
    title: 'Bharosa Protocol',
    subtitle: 'Decentralized Trust Network',
  };

  return (
    <header className="sticky top-0 z-20 h-16 bg-surface/90 backdrop-blur-md border-b border-line px-4 sm:px-6 flex items-center justify-between transition-colors">
      {/* Left: Mobile trigger & Page title */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onOpenMobileMenu}
          className="md:hidden p-2 rounded-xl text-fg-muted hover:text-fg hover:bg-surface-2 transition-colors"
          aria-label="Open navigation drawer"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="font-anton text-lg sm:text-xl tracking-wide text-fg uppercase leading-tight">
            {routeInfo.title}
          </h1>
          <p className="hidden sm:block text-[11px] text-fg-muted font-medium leading-none">
            {routeInfo.subtitle}
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Gasless Mode Pill */}
        <button
          onClick={() => setGaslessActive(!gaslessActive)}
          className={`hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
            gaslessActive
              ? 'bg-primary-soft text-fg border-primary/30'
              : 'bg-surface-2 text-fg-muted border-line'
          }`}
          title="Sponsored transactions via EIP-2771 Forwarder"
        >
          <Zap className={`w-3.5 h-3.5 ${gaslessActive ? 'text-primary fill-primary' : 'text-fg-subtle'}`} />
          <span>{gaslessActive ? 'Gasless Active' : 'Self-Pay Gas'}</span>
        </button>

        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Notifications */}
        <NotificationsBell />

        {/* Wallet Chip */}
        <WalletChip />

        {/* User Menu */}
        <UserMenu />
      </div>
    </header>
  );
}
