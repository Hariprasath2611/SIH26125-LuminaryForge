import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { DemoModeBanner } from '../components/common/DemoModeBanner';
import { ThemeToggle } from '../components/ThemeToggle';
import { Logo } from '../components/common/Logo';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between text-fg transition-colors duration-200">
      <DemoModeBanner />
      {/* Top Navigation Header */}
      <header className="p-4 sm:p-6 flex items-center justify-between max-w-6xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo size={40} showText={true} />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/public-verify"
            className="text-xs font-bold text-fg-muted hover:text-fg transition flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-surface-2"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Public Proof Verifier
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Centered Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 my-4">
        <div className="w-full max-w-xl bg-surface-3 rounded-3xl border border-line shadow-card p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-fg-muted border-t border-line">
        Bharosa Sovereign Trust Protocol · Production-Grade Cryptographic Identity
      </footer>
    </div>
  );
}

export default AuthLayout;
