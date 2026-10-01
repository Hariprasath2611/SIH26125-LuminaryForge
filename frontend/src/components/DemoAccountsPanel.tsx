import React, { useState, useEffect } from 'react';
import { User, School, Building2, Check, Zap, HelpCircle } from 'lucide-react';
import { env } from '../config/env';

export interface DemoAccount {
  id: string;
  name: string;
  role: 'STUDENT' | 'ISSUER' | 'VERIFIER';
  address: string;
  privateKey: string;
  description: string;
  badge: string;
}

export const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    id: 'student',
    name: 'Alice Sharma',
    role: 'STUDENT',
    address: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    privateKey: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
    description: 'B.Tech Student · DTU Class of 2026',
    badge: 'Holder / Student',
  },
  {
    id: 'university',
    name: 'Delhi Tech University',
    role: 'ISSUER',
    address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    description: 'Accredited Issuer · Whitelisted on IdentityRegistry',
    badge: 'Trusted Issuer',
  },
  {
    id: 'employer',
    name: 'TechCorp Verifier',
    role: 'VERIFIER',
    address: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
    privateKey: '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a',
    description: 'Hiring Partner · Requesting Background Verification',
    badge: 'Third-Party Verifier',
  },
];

export function DemoAccountsPanel() {
  const [activeId, setActiveId] = useState<string>('student');
  const [isDemoMode, setIsDemoMode] = useState<boolean>(env.DEMO_MODE);
  const [showGuide, setShowGuide] = useState<boolean>(false);

  useEffect(() => {
    if (!env.DEMO_MODE) {
      setIsDemoMode(false);
      return;
    }

    const saved = localStorage.getItem('bharosa_demo_account');
    if (saved) {
      setActiveId(saved);
    } else {
      localStorage.setItem('bharosa_demo_account', 'student');
      localStorage.setItem('bharosa_active_address', DEMO_ACCOUNTS[0].address);
    }
  }, []);

  const switchAccount = (acc: DemoAccount) => {
    setActiveId(acc.id);
    localStorage.setItem('bharosa_demo_account', acc.id);
    localStorage.setItem('bharosa_active_address', acc.address);
    localStorage.setItem('bharosa_active_private_key', acc.privateKey);
    // Dispatch global event for listeners across pages
    window.dispatchEvent(new CustomEvent('bharosa:account-changed', { detail: acc }));
  };

  if (!isDemoMode) return null;

  return (
    <div className="bg-[#ECFCCB] border-b border-lime-300 py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left: Indicator */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-600"></span>
          </span>
          <span className="font-extrabold text-[#1A2E05] flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-lime-700" />
            ENTERPRISE TEST ROLES:
          </span>
          <span className="text-[#4D6B2A] hidden sm:inline">
            Pre-configured wallets (Polygon Amoy Testnet)
          </span>
        </div>

        {/* Center: Account Switcher */}
        <div className="flex items-center gap-2">
          {DEMO_ACCOUNTS.map((acc) => {
            const isActive = activeId === acc.id;
            return (
              <button
                key={acc.id}
                onClick={() => switchAccount(acc)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
                  isActive
                    ? 'bg-lime-600 text-white border-lime-700 shadow-sm scale-105'
                    : 'bg-white text-[#1A2E05] border-lime-300 hover:bg-lime-50'
                }`}
              >
                {acc.role === 'STUDENT' && <User className="w-3.5 h-3.5" />}
                {acc.role === 'ISSUER' && <School className="w-3.5 h-3.5" />}
                {acc.role === 'VERIFIER' && <Building2 className="w-3.5 h-3.5" />}
                <span>{acc.name.split(' ')[0]}</span>
                <span className={`text-[10px] ${isActive ? 'text-lime-100' : 'text-[#4D6B2A]'}`}>
                  ({acc.badge.split(' ')[0]})
                </span>
                {isActive && <Check className="w-3 h-3 text-white ml-0.5" />}
              </button>
            );
          })}
        </div>

        {/* Right: Quick Guide */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="flex items-center gap-1 text-[11px] text-[#4D6B2A] hover:text-[#1A2E05] font-semibold underline underline-offset-2"
          >
            <HelpCircle className="w-3 h-3" />
            Platform Architecture Flow
          </button>
        </div>
      </div>

      {/* Collapsible Architecture Flow */}
      {showGuide && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-lime-300/60 text-xs text-[#1A2E05] grid grid-cols-1 md:grid-cols-4 gap-3 bg-white p-3 rounded-lg border border-lime-200">
          <div className="p-2 bg-lime-50 rounded border border-lime-200">
            <div className="font-bold text-lime-900">1. University (Issuer)</div>
            <p className="text-[11px] text-[#4D6B2A] mt-0.5">
              Switch to <b>University</b> → Go to <b>/issuer</b> → Issue or anchor Alice's B.Tech Degree on-chain.
            </p>
          </div>
          <div className="p-2 bg-lime-50 rounded border border-lime-200">
            <div className="font-bold text-lime-900">2. Student (Holder)</div>
            <p className="text-[11px] text-[#4D6B2A] mt-0.5">
              Switch to <b>Alice</b> → View <b>/credentials</b> & <b>/assets</b> (AES encrypt) → Prove <b>/zk</b> predicate.
            </p>
          </div>
          <div className="p-2 bg-lime-50 rounded border border-lime-200">
            <div className="font-bold text-lime-900">3. Employer (Verifier)</div>
            <p className="text-[11px] text-[#4D6B2A] mt-0.5">
              Switch to <b>TechCorp</b> → Go to <b>/verifier</b> → File request → Decrypt Alice's research paper!
            </p>
          </div>
          <div className="p-2 bg-lime-50 rounded border border-lime-200">
            <div className="font-bold text-lime-900">4. Public & Security</div>
            <p className="text-[11px] text-[#4D6B2A] mt-0.5">
              Check <b>/public-verify</b> (zero login) and test <b>/security</b> multi-guardian social recovery!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
