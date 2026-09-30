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
  Mail,
  MapPin,
  ExternalLink,
  Github,
} from 'lucide-react';

const PRIMARY_NAV = [
  { label: 'Dashboard', href: '/dashboard', icon: ShieldCheck },
  { label: 'Identity', href: '/identity', icon: User },
  { label: 'Credentials', href: '/credentials', icon: Award },
  { label: 'Asset Vault', href: '/assets', icon: Lock },
  { label: 'ZK Proofs', href: '/zk', icon: Sparkles },
];

const SECONDARY_NAV = [
  { label: 'ABAC Access Control', href: '/access', icon: Key, desc: 'Decentralized time-bound access delegation' },
  { label: 'Issuer Portal', href: '/issuer', icon: School, desc: 'Accredited credential issuance' },
  { label: 'Verifier Portal', href: '/verifier', icon: Building2, desc: 'Third-party verification requests' },
  { label: 'Public Verifier', href: '/public-verify', icon: ShieldCheck, desc: 'Instant zero-login proof check' },
  { label: 'Social Recovery', href: '/recovery', icon: UserCheck, desc: 'Guardian key restoration' },
  { label: 'Audit Trail', href: '/audit', icon: FileClock, desc: 'Immutable on-chain event log' },
  { label: 'Security Center', href: '/security', icon: AlertTriangle, desc: 'Quick-Lock emergency freeze' },
  { label: 'Admin Console', href: '/admin', icon: Settings, desc: 'Protocol parameters & whitelist' },
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
      {/* Top Utility Bar (Matches Reference Design: Dark Green with Lime Cutout on Right) */}
      <div className="w-full bg-[#0C2518] text-[#E2F7C2] text-[11px] font-medium border-b border-[#18442D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          
          {/* Left Info: Contact & Network */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1">
            <span className="flex items-center gap-1.5 whitespace-nowrap text-[#C6F432]">
              <span className="w-2 h-2 rounded-full bg-[#C6F432] animate-pulse"></span>
              Polygon Amoy Active (80002)
            </span>
            <span className="hidden sm:flex items-center gap-1 text-[#A7D18C] whitespace-nowrap">
              <Mail className="w-3 h-3 text-[#C6F432]" /> contact@bharosa.network
            </span>
          </div>

          {/* Right Cutout Pill (Vibrant Electric Lime Accent) */}
          <div className="flex items-center gap-3">
            <div className="bg-[#C6F432] text-[#0C2518] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl flex items-center gap-2 shadow-xs text-[11px]">
              <span className="hidden sm:inline">100% Self-Sovereign</span>
              <a
                href="https://github.com/Hariprasath2611/SIH26125-LuminaryForge"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition flex items-center gap-1"
                title="GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-2 gap-4">
            
            {/* Logo and Brand with Signature Capsule Icon */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 rounded-2xl bg-[#0C2518] border border-[#C6F432]/40 flex items-center justify-center text-[#C6F432] shadow-sm transition group-hover:scale-105 shrink-0">
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-5 rounded-full bg-[#C6F432]"></div>
                  <div className="w-2.5 h-3 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-[#0C2518] leading-tight">
                  Bharosa
                </span>
                <span className="text-[10px] font-bold text-[#4D6B2A] tracking-wider leading-none uppercase">
                  Sovereign Trust Platform
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1.5 bg-[#F7FBEF] px-3 py-1.5 rounded-full border border-lime-200">
              {PRIMARY_NAV.map((item) => {
                const Icon = item.icon;
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[#0C2518] text-[#C6F432] shadow-xs scale-102'
                        : 'text-[#1A2E05] hover:text-[#0C2518] hover:bg-lime-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Portals & Tools Dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  onClick={() => setMoreOpen(!moreOpen)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                    isSecondaryActive || moreOpen
                      ? 'bg-[#0C2518] text-[#C6F432] shadow-xs'
                      : 'text-[#1A2E05] hover:bg-lime-100'
                  }`}
                >
                  <span>Portals & Tools</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? 'rotate-180 text-[#C6F432]' : ''}`} />
                </button>

                {moreOpen && (
                  <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl border border-lime-200 shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[10px] font-extrabold text-[#4D6B2A] uppercase px-3 py-1.5 tracking-wider">
                      Enterprise Modules
                    </div>
                    <div className="space-y-1">
                      {SECONDARY_NAV.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMoreOpen(false)}
                            className={`flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs transition ${
                              isActive
                                ? 'bg-[#0C2518] text-[#C6F432] font-bold'
                                : 'text-[#1A2E05] hover:bg-[#F7FBEF]'
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg border shrink-0 mt-0.5 ${
                              isActive ? 'bg-[#18442D] border-[#C6F432] text-[#C6F432]' : 'bg-[#F7FBEF] border-lime-200 text-[#4D6B2A]'
                            }`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-xs">{item.label}</span>
                              <span className={`text-[10px] leading-tight ${isActive ? 'text-[#C6F432]/80' : 'text-[#4D6B2A]'}`}>{item.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Controls: Gasless Switch & Connect Button */}
            <div className="flex items-center gap-2.5 shrink-0">
              
              {/* Gasless Relayer Pill */}
              <button
                type="button"
                onClick={() => setShowTreasuryModal(true)}
                className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                  gaslessMode
                    ? 'bg-[#ECFCCB] text-[#0C2518] border-[#A3E635] shadow-xs hover:bg-[#d9f99d]'
                    : 'bg-surface text-text-muted border-border hover:bg-surface-2'
                }`}
                title="Zero-Gas Relayer Management"
              >
                <Zap className={`w-3.5 h-3.5 ${gaslessMode ? 'text-lime-700 fill-lime-600' : 'text-text-muted'}`} />
                <span className="hidden md:inline">Gasless:</span>
                <span>{gaslessMode ? '0 Gas' : 'Off'}</span>
              </button>

              {/* Web3 Wallet Connect */}
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
                className="xl:hidden p-2 rounded-xl bg-[#F7FBEF] border border-lime-200 text-[#0C2518] hover:bg-[#ECFCCB] transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#0C2518]" /> : <Menu className="w-5 h-5 text-[#0C2518]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-lime-200 bg-white px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            {/* Gasless Switch for Mobile */}
            <div className="flex items-center justify-between p-3 bg-[#F7FBEF] rounded-xl border border-lime-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-lime-700 fill-lime-600" />
                <span className="text-xs font-bold text-[#0C2518]">Zero-Gas Meta-Transactions</span>
              </div>
              <button
                onClick={() => setGaslessMode(!gaslessMode)}
                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  gaslessMode ? 'bg-[#0C2518] text-[#C6F432] border-[#0C2518]' : 'bg-white text-text-muted border-border'
                }`}
              >
                {gaslessMode ? 'ACTIVE (FREE)' : 'DISABLED'}
              </button>
            </div>

            {/* Core Pages */}
            <div className="space-y-1">
              <div className="text-[10px] font-extrabold text-[#4D6B2A] uppercase px-2 tracking-wider">
                Core Modules
              </div>
              <div className="grid grid-cols-2 gap-2">
                {PRIMARY_NAV.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-bold transition ${
                        isActive
                          ? 'bg-[#0C2518] text-[#C6F432] shadow-xs'
                          : 'bg-[#F7FBEF] text-[#0C2518] hover:bg-[#ECFCCB]'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0 text-lime-600" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Portals & Security */}
            <div className="space-y-1 pt-2 border-t border-lime-200">
              <div className="text-[10px] font-extrabold text-[#4D6B2A] uppercase px-2 tracking-wider">
                Portals & Administration
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                          ? 'bg-[#0C2518] text-[#C6F432] font-bold border border-[#C6F432]'
                          : 'bg-[#F7FBEF] text-[#0C2518] hover:bg-[#ECFCCB] border border-transparent'
                      }`}
                    >
                      <div className="p-1.5 rounded-lg bg-white border border-lime-200 text-lime-700 shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-xs">{item.label}</span>
                        <span className="text-[10px] text-[#4D6B2A] leading-tight">{item.desc}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0C2518] text-[#C6F432] text-xs font-bold shadow-md"
              >
                Launch Dashboard App
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Relayer Treasury & Gasless Settings Modal */}
      {showTreasuryModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border-2 border-lime-300 shadow-2xl max-w-md w-full p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-lime-600 fill-lime-500" />
                <h3 className="font-black text-base text-[#0C2518]">
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
