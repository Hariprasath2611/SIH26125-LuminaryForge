import React, { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { StatusFooter } from '../components/StatusFooter';
import { DemoModeBanner } from '../components/common/DemoModeBanner';
import { CopilotButton, CopilotPanel } from '../components/copilot';
import { ThemeToggle } from '../components/ThemeToggle';

export function PublicLayout() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';
  const [copilotOpen, setCopilotOpen] = useState<boolean>(false);

  if (isLanding) {
    return (
      <>
        <DemoModeBanner />
        <Outlet />
        {/* Floating Copilot Button & Panel on Landing Page */}
        <CopilotButton
          isOpen={copilotOpen}
          onClick={() => setCopilotOpen((prev) => !prev)}
        />
        <CopilotPanel
          isOpen={copilotOpen}
          onClose={() => setCopilotOpen(false)}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg text-fg transition-colors">
      <DemoModeBanner />
      {/* Sleek Public Header for verification subpages */}
      <header className="h-16 bg-surface border-b border-line px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30 transition-colors">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2.5 group">
            <img
              src="/logos/bharosa-mark.png"
              alt="Bharosa Logo"
              className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-anton text-xl tracking-wide text-fg uppercase">Bharosa</span>
          </Link>
          <span className="text-fg-subtle">/</span>
          <span className="text-xs font-semibold text-fg-muted">Public Verification</span>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="hidden sm:inline-flex items-center text-xs font-semibold text-fg-muted hover:text-fg px-3 py-1.5 rounded-lg hover:bg-surface-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Home
          </Link>
          <ThemeToggle />
          <Link
            to="/app"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-on-primary font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
          >
            <span>Launch App</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <StatusFooter />

      {/* Floating Copilot Button & Panel on Public Pages */}
      <CopilotButton
        isOpen={copilotOpen}
        onClick={() => setCopilotOpen((prev) => !prev)}
      />
      <CopilotPanel
        isOpen={copilotOpen}
        onClose={() => setCopilotOpen(false)}
      />
    </div>
  );
}

export default PublicLayout;
