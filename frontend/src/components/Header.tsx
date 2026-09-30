'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  ShieldCheck,
  Shield,
  Key,
  Award,
  Lock,
  FileClock,
  AlertTriangle,
  Sparkles,
  Zap,
  HardDrive,
  CheckCircle2,
  ExternalLink,
  Settings,
  User,
  School,
  Building2,
  UserCheck,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: Shield },
  { label: 'Identity', href: '/identity', icon: User },
  { label: 'Issuer', href: '/issuer', icon: School },
  { label: 'Credentials', href: '/credentials', icon: Award },
  { label: 'ZK Proofs', href: '/zk', icon: Sparkles },
  { label: 'Assets', href: '/assets', icon: Lock },
  { label: 'Access', href: '/access', icon: Key },
  { label: 'Verifier', href: '/verifier', icon: Building2 },
  { label: 'Recovery', href: '/recovery', icon: UserCheck },
  { label: 'Audit', href: '/audit', icon: FileClock },
  { label: 'Security', href: '/security', icon: AlertTriangle },
  { label: 'Admin', href: '/admin', icon: Settings },
];

export function Header() {
  const pathname = usePathname();
  const [gaslessMode, setGaslessMode] = useState<boolean>(true);
  const [showTreasuryModal, setShowTreasuryModal] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b-2 border-primary/30 px-4 lg:px-8 py-3 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-surface-2 border border-primary/40 flex items-center justify-center text-primary-hover shadow-sm transition group-hover:scale-105">
              <ShieldCheck className="w-6 h-6 text-primary-hover" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-text leading-tight">
                Bharosa
              </span>
              <span className="text-[10px] font-semibold text-text-muted tracking-wider leading-none">
                भरोसा · Trust Owned by You
              </span>
            </div>
          </Link>

          {/* Navigation Bar */}
          <nav className="hidden md:flex items-center gap-1 bg-surface px-3 py-1.5 rounded-full border border-border">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== '/dashboard' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                    isActive
                      ? 'bg-primary text-text font-bold shadow-sm'
                      : 'text-text-muted hover:text-text hover:bg-surface-2'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Wallet Connect & Gasless Relayer Pill */}
          <div className="flex items-center gap-2.5">
            {/* Gasless Relayer Toggle Button */}
            <button
              type="button"
              onClick={() => setShowTreasuryModal(true)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border transition ${
                gaslessMode
                  ? 'bg-lime-100 text-status-success border-primary shadow-xs hover:bg-lime-200'
                  : 'bg-surface text-text-muted border-border hover:bg-surface-2'
              }`}
              title="Click to manage EIP-4337 Gasless Relayer"
            >
              <Zap className={`w-3.5 h-3.5 ${gaslessMode ? 'text-status-success fill-status-success' : 'text-text-muted'}`} />
              <span className="hidden sm:inline">Gasless:</span>
              <span>{gaslessMode ? 'ON (0 Gas)' : 'OFF'}</span>
            </button>

            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 bg-surface-2 text-[11px] font-bold text-text-muted rounded-full border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
              SIH26125
            </div>

            <ConnectButton
              showBalance={false}
              accountStatus="avatar"
              chainStatus="icon"
            />
          </div>
        </div>
      </header>

      {/* Relayer Treasury & Gasless Settings Modal */}
      {showTreasuryModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border-2 border-primary/40 shadow-xl max-w-md w-full p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-status-success fill-status-success" />
                <h3 className="font-bold text-base text-text">
                  Gasless Relayer & Treasury
                </h3>
              </div>
              <button
                onClick={() => setShowTreasuryModal(false)}
                className="text-text-muted hover:text-text text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Toggle switch */}
              <div className="flex items-center justify-between p-3.5 bg-surface rounded-xl border border-border">
                <div className="space-y-0.5">
                  <div className="font-bold text-text">Sponsor User Gas Fees</div>
                  <div className="text-[11px] text-text-muted">
                    Sign EIP-712 meta-transactions for ₹0 gas
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={gaslessMode}
                    onChange={(e) => setGaslessMode(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-surface-2 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Relayer Stats */}
              <div className="p-4 bg-lime-50 border border-primary/30 rounded-xl space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Relayer Status:</span>
                  <span className="font-bold text-status-success flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Operational (100% Uptime)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Treasury Gas Reserve:</span>
                  <span className="font-bold text-text font-mono">99.85 MATIC / ETH</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Total Sponsored Txs:</span>
                  <span className="font-bold text-text">185 transactions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">User Fee:</span>
                  <span className="font-bold text-status-success font-mono">0.00 MATIC (Free)</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-text-muted uppercase">Relayer Paymaster Contract:</span>
                <div className="p-2 bg-surface rounded font-mono text-[10px] break-all border border-border text-text">
                  0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowTreasuryModal(false)}
                className="btn-primary text-xs px-5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
