import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { DEMO_USERS, DemoAccount } from '../../lib/demoAccounts';
import { Sparkles, Loader2, ArrowRight, AlertTriangle, ShieldCheck, UserCheck, School, Building2, ShieldAlert } from 'lucide-react';

interface QuickDemoLoginProps {
  onSuccess?: () => void;
  className?: string;
}

const ROLE_ICONS: Record<string, React.ElementType> = {
  HOLDER: UserCheck,
  ISSUER: School,
  VERIFIER: Building2,
  ADMIN: ShieldAlert,
};

const ROLE_BADGE_COLORS: Record<string, string> = {
  HOLDER: 'bg-[#ECFCCB] text-[#4D6B2A] border-[#D9F99D]',
  ISSUER: 'bg-[#FEF08A] text-[#854D0E] border-[#FDE047]',
  VERIFIER: 'bg-[#E0E7FF] text-[#3730A3] border-[#C7D2FE]',
  ADMIN: 'bg-[#FEE2E2] text-[#991B1B] border-[#FECACA]',
};

export function QuickDemoLogin({ onSuccess, className = '' }: QuickDemoLoginProps) {
  const { signInWithDemo } = useAuth();
  const navigate = useNavigate();

  const [loadingUser, setLoadingUser] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Dead-code elimination safeguard in production
  if (import.meta.env.VITE_DEMO_MODE !== 'true') {
    return null;
  }

  const handleSelectDemoUser = async (demoUser: DemoAccount) => {
    setError(null);
    setLoadingUser(demoUser.id);
    setLoadingStep(`Signing in as ${demoUser.name.split(' ')[0]}…`);

    try {
      setLoadingStep(`Authenticating with Firebase custom token…`);
      await new Promise((r) => setTimeout(r, 200));

      setLoadingStep(`Preparing silent demo wallet signer (${demoUser.walletAddress.slice(0, 6)}…)…`);
      await signInWithDemo(demoUser.id);

      setLoadingStep(`Ready! Loading dashboard…`);
      await new Promise((r) => setTimeout(r, 150));

      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/dashboard', { replace: true });
      }
    } catch (err: any) {
      console.error('[QuickDemoLogin] Error:', err);
      setError(err?.message || 'Failed to initialize demo session. Ensure backend is running.');
      setLoadingUser(null);
      setLoadingStep('');
    }
  };

  return (
    <div className={`w-full mb-8 bg-[#FFFFFF] border-2 border-[#D9F99D] rounded-3xl p-5 sm:p-6 shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#ECFCCB]">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#84CC16] text-[#1A2E05] flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4 fill-[#1A2E05]" />
          </div>
          <div>
            <h2 className="font-anton text-lg text-[#1A2E05] uppercase tracking-wide">
              Quick Demo Login
            </h2>
            <p className="text-[11px] text-[#4D6B2A]">
              One click to sign in with pre-seeded on-chain accounts &amp; silent browser wallet
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#ECFCCB] text-[#4D6B2A] uppercase tracking-wider border border-[#D9F99D]">
          DEMO MODE
        </span>
      </div>

      {/* Error state */}
      {error && (
        <div className="mt-4 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start space-x-2.5">
          <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold">Demo Login Error</p>
            <p className="text-[11px] mt-0.5">{error}</p>
          </div>
          <button
            onClick={() => setError(null)}
            className="text-[11px] text-red-700 underline font-semibold"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Loading Progress State */}
      {loadingUser && (
        <div className="mt-4 p-4 rounded-2xl bg-[#F7FBEF] border border-[#84CC16] flex items-center justify-center space-x-3 animate-in fade-in duration-150">
          <Loader2 className="w-5 h-5 text-[#84CC16] animate-spin" />
          <span className="text-xs font-semibold text-[#1A2E05]">{loadingStep}</span>
        </div>
      )}

      {/* Cards List */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {DEMO_USERS.map((user) => {
          const Icon = ROLE_ICONS[user.persona] || UserCheck;
          const badgeClass = ROLE_BADGE_COLORS[user.persona] || 'bg-[#ECFCCB] text-[#4D6B2A]';
          const isCurrentLoading = loadingUser === user.id;

          return (
            <button
              key={user.id}
              onClick={() => handleSelectDemoUser(user)}
              disabled={!!loadingUser}
              aria-label={`Log in as ${user.name}, ${user.role}`}
              className="text-left p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#ECFCCB] hover:border-[#84CC16] hover:bg-[#F7FBEF]/60 transition-all hover:-translate-y-0.5 shadow-2xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#84CC16] disabled:opacity-50 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      {user.initials}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1A2E05] group-hover:text-[#65A30D] transition-colors leading-tight">
                        {user.name}
                      </p>
                      <p className="text-[10px] text-stone-400 font-mono">
                        {user.walletAddress.slice(0, 6)}...{user.walletAddress.slice(-4)}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${badgeClass}`}>
                    {user.role}
                  </span>
                </div>

                <p className="text-[11px] text-[#4D6B2A] line-clamp-2 leading-relaxed">
                  {user.description}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-[#F7FBEF] flex items-center justify-between text-[11px] text-[#65A30D] font-semibold group-hover:text-[#1A2E05]">
                <span>{isCurrentLoading ? 'Launching…' : 'Enter as ' + user.name.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Divider */}
      <div className="relative mt-6 text-center">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-[#ECFCCB]" />
        </div>
        <div className="relative flex justify-center text-[11px] uppercase tracking-wider font-semibold">
          <span className="bg-[#FFFFFF] px-3 text-[#4D6B2A]">
            or sign in with your own account
          </span>
        </div>
      </div>
    </div>
  );
}
