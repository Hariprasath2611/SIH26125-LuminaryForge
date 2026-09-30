'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ShieldCheck, Shield, Key, Award, Lock, FileClock, AlertTriangle, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: Shield },
  { label: 'Credentials', href: '/credentials', icon: Award },
  { label: 'ZK Proofs', href: '/zk', icon: Sparkles },
  { label: 'Assets', href: '/assets', icon: Lock },
  { label: 'Access Control', href: '/access', icon: Key },
  { label: 'Audit Log', href: '/audit', icon: FileClock },
  { label: 'Security Center', href: '/security', icon: AlertTriangle },
];

export function Header() {
  const pathname = usePathname();

  return (
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
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
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

        {/* Wallet Connect & SIH Pill */}
        <div className="flex items-center gap-3">
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
  );
}
