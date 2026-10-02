import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { StatusFooter } from '../components/StatusFooter';
import { DemoModeBanner } from '../components/common/DemoModeBanner';

export function PublicLayout() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';

  if (isLanding) {
    return (
      <>
        <DemoModeBanner />
        <Outlet />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FBEF] text-[#1A2E05]">
      <DemoModeBanner />
      {/* Sleek Public Header for verification subpages */}
      <header className="h-16 bg-[#FFFFFF] border-b border-[#ECFCCB] px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2.5 group">
            <img
              src="/logos/bharosa-mark.png"
              alt="Bharosa Logo"
              className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-anton text-xl tracking-wide text-[#1A2E05] uppercase">Bharosa</span>
          </Link>
          <span className="text-stone-300">/</span>
          <span className="text-xs font-semibold text-[#4D6B2A]">Public Verification</span>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="hidden sm:inline-flex items-center text-xs font-semibold text-[#4D6B2A] hover:text-[#1A2E05] px-3 py-1.5 rounded-lg hover:bg-[#F7FBEF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Home
          </Link>
          <Link
            to="/app"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
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
    </div>
  );
}

export default PublicLayout;
