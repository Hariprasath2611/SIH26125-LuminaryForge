import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { DemoModeBanner } from '../components/common/DemoModeBanner';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#F7FBEF] flex flex-col justify-between text-[#1A2E05]">
      <DemoModeBanner />
      {/* Top Simple Navigation Header */}
      <header className="p-4 sm:p-6 flex items-center justify-between max-w-6xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logos/bharosa-logo.png"
            alt="Bharosa - भरोसा"
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <Link
          to="/public-verify"
          className="text-xs font-bold text-[#4D6B2A] hover:text-[#0C2518] transition flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/60"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" /> Public Proof Verifier
        </Link>
      </header>

      {/* Main Centered Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 my-4">
        <div className="w-full max-w-xl bg-white rounded-3xl border border-[#D9EBB5] shadow-lime p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-[#4D6B2A] border-t border-[#D9EBB5]/50">
        Bharosa Sovereign Trust Protocol · Production-Grade Cryptographic Identity
      </footer>
    </div>
  );
}

export default AuthLayout;
