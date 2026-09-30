'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  CheckCircle2,
  Settings,
  User,
  School,
  Building2,
  UserCheck,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

const PRIMARY_NAV = [
  { label: 'Dashboard', href: '/dashboard', icon: Shield },
  { label: 'Identity', href: '/identity', icon: User },
  { label: 'Credentials', href: '/credentials', icon: Award },
  { label: 'Assets', href: '/assets', icon: Lock },
  { label: 'Access', href: '/access', icon: Key },
  { label: 'ZK Proofs', href: '/zk', icon: Sparkles },
];

const SECONDARY_NAV = [
  { label: 'Issuer Portal', href: '/issuer', icon: School, desc: 'Issue & sign credentials' },
  { label: 'Verifier Portal', href: '/verifier', icon: Building2, desc: 'Third-party data requests' },
  { label: 'Social Recovery', href: '/recovery', icon: UserCheck, desc: 'Guardian key restoration' },
  { label: 'Audit Trail', href: '/audit', icon: FileClock, desc: 'Immutable ledger events' },
  { label: 'Security Center', href: '/security', icon: AlertTriangle, desc: 'Emergency Quick-Lock' },
  { label: 'Admin Console', href: '/admin', icon: Settings, desc: 'Whitelisting & protocol settings' },
];

export function Header() {
  const pathname = usePathname();
  const [gaslessMode, setGaslessMode] = useState<boolean>(true);
  const [showTreasuryModal, setShowTreasuryModal] = useState<boolean>(false);
  const [moreOpen, setMoreOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMoreOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isSecondaryActive = SECONDARY_NAV.some(
    (item) => pathname === item.href || pathname?.startsWith(item.href)
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2">
            
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-surface-2 border border-primary/40 flex items-center justify-center text-primary-hover shadow-xs transition group-hover:scale-105 shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary-hover" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-text leading-tight whitespace-nowrap">
                  Bharosa
                </span>
                <span className="text-[10px] font-semibold text-text-muted tracking-wider leading-none whitespace-nowrap hidden sm:inline">
                  भरोसा · Sovereign Trust
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Bar (Hidden on tablet/mobile < xl) */}
            <nav className="hidden xl:flex items-center gap-1 bg-surface px-2.5 py-1.5 rounded-full border border-border">
              {PRIMARY_NAV.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/dashboard' && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-primary text-text font-bold shadow-xs'
                        : 'text-text-muted hover:text-text hover:bg-surface-2'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    {item.label}
                  </Link>
                );
              })}

              {/* More / Portals Dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => setMoreOpen(!moreOpen)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                    isSecondaryActive || moreOpen
                      ? 'bg-primary text-text font-bold shadow-xs'
                      : 'text-text-muted hover:text-text hover:bg-surface-2'
                  }`}
                >
                  <span>Portals & Tools</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                </button>

                {moreOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl border border-border shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[10px] font-bold text-text-muted uppercase px-3 py-1.5">
                      Specialized Portals
                    </div>
                    <div className="space-y-0.5">
                      {SECONDARY_NAV.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || pathname?.startsWith(item.href);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMoreOpen(false)}
                            className={`flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs transition ${
                              isActive
                                ? 'bg-surface-2 text-text font-bold'
                                : 'text-text hover:bg-surface'
                            }`}
                          >
                            <div className="p-1.5 rounded-lg bg-surface border border-border text-primary-hover shrink-0 mt-0.5">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-semibold text-text">{item.label}</span>
                              <span className="text-[10px] text-text-muted leading-tight">{item.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Controls (Gasless, Wallet, Hamburger) */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Gasless Relayer Toggle Pill */}
              <button
                type="button"
                onClick={() => setShowTreasuryModal(true)}
                className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold border transition ${
                  gaslessMode
                    ? 'bg-lime-50 text-status-success border-primary/50 shadow-xs hover:bg-lime-100'
                    : 'bg-surface text-text-muted border-border hover:bg-surface-2'
                }`}
                title="Manage EIP-4337 Gasless Relayer"
              >
                <Zap className={`w-3.5 h-3.5 ${gaslessMode ? 'text-status-success fill-status-success' : 'text-text-muted'}`} />
                <span className="hidden md:inline">Gasless:</span>
                <span>{gaslessMode ? '0 Gas' : 'Off'}</span>
              </button>

              {/* Web3 Wallet Connect Button */}
              <div className="scale-90 sm:scale-100 origin-right">
                <ConnectButton
                  showBalance={false}
                  accountStatus={{
                    smallScreen: 'avatar',
                    largeScreen: 'avatar',
                  }}
                  chainStatus="icon"
                />
              </div>

              {/* Mobile / Tablet Menu Button (Visible < xl) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl bg-surface border border-border text-text hover:bg-surface-2 transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-text" /> : <Menu className="w-5 h-5 text-text" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-border bg-white px-4 pt-3 pb-6 space-y-4 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            {/* Gasless Switch for Mobile */}
            <div className="flex items-center justify-between p-3 bg-surface rounded-xl border border-border">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-status-success fill-status-success" />
                <span className="text-xs font-bold text-text">Zero-Gas Relayer:</span>
              </div>
              <button
                onClick={() => setGaslessMode(!gaslessMode)}
                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  gaslessMode ? 'bg-primary text-text border-primary-hover' : 'bg-white text-text-muted border-border'
                }`}
              >
                {gaslessMode ? 'ACTIVE (FREE)' : 'DISABLED'}
              </button>
            </div>

            {/* Core Pages */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-text-muted uppercase px-2">Core Platform</div>
              <div className="grid grid-cols-2 gap-1.5">
                {PRIMARY_NAV.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition ${
                        isActive
                          ? 'bg-primary text-text font-bold shadow-xs'
                          : 'bg-surface text-text hover:bg-surface-2'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0 text-primary-hover" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Portals & Security */}
            <div className="space-y-1 pt-2 border-t border-border">
              <div className="text-[10px] font-bold text-text-muted uppercase px-2">Portals & Administration</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {SECONDARY_NAV.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl text-xs transition ${
                        isActive
                          ? 'bg-surface-2 text-text font-bold border border-primary/40'
                          : 'bg-surface text-text hover:bg-surface-2 border border-transparent'
                      }`}
                    >
                      <div className="p-1 rounded-lg bg-white border border-border text-primary-hover shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-text">{item.label}</span>
                        <span className="text-[10px] text-text-muted leading-tight">{item.desc}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
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
                className="text-text-muted hover:text-text text-sm font-bold p-1"
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
                  <span className="text-text-muted">Network:</span>
                  <span className="font-bold text-text">Polygon Amoy (80002)</span>
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
