import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Sparkles, RefreshCw, ShieldAlert } from 'lucide-react';

export function DemoModeBanner() {
  const { isDemoUser, account, refreshAccount } = useAuth();
  const [resetting, setResetting] = React.useState(false);
  const [resetSuccess, setResetSuccess] = React.useState(false);

  if (import.meta.env.VITE_DEMO_MODE !== 'true') {
    return null;
  }

  const handleReset = async () => {
    setResetting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000/v1'}/demo/reset`, {
        method: 'POST',
      });
      if (res.ok) {
        setResetSuccess(true);
        await refreshAccount();
        setTimeout(() => setResetSuccess(false), 3000);
      }
    } catch (e) {
      console.error('Reset error:', e);
    } finally {
      setResetting(false);
    }
  };

  return (
    <div className="w-full bg-[#ECFCCB] border-b border-[#84CC16]/60 py-1.5 px-3 sm:px-6 text-[11px] font-semibold text-[#1A2E05] flex items-center justify-between z-40 select-none shadow-2xs">
      <div className="flex items-center space-x-2">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65A30D]"></span>
        </span>
        <span className="uppercase tracking-wider font-bold text-[#65A30D]">DEMO MODE ACTIVE</span>
        <span className="hidden md:inline text-stone-400">&bull;</span>
        <span className="hidden md:inline text-[#4D6B2A]">
          Throwaway test accounts only &bull; EIP-4361 &amp; on-chain contracts live
        </span>
      </div>

      <div className="flex items-center space-x-2">
        {isDemoUser && account?.persona === 'ADMIN' && (
          <button
            onClick={handleReset}
            disabled={resetting}
            className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-lg bg-[#FFFFFF] hover:bg-[#F7FBEF] text-[#1A2E05] border border-[#D9F99D] font-bold text-[10px] transition-colors"
            title="Re-run seed script and restore demo accounts"
          >
            <RefreshCw className={`w-3 h-3 text-[#65A30D] ${resetting ? 'animate-spin' : ''}`} />
            <span>{resetSuccess ? 'Reset Done!' : 'Reset Demo Data'}</span>
          </button>
        )}
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#D9F99D] text-[#1A2E05]">
          Chain 31337
        </span>
      </div>
    </div>
  );
}
