import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-6 text-left">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#ECFCCB]/90 border border-[#D9F99D] text-xs font-semibold text-[#1A2E05] mb-6 shadow-2xs">
            <span>Smart India Hackathon 2026 &middot; SIH26125</span>
          </div>

          {/* Main Title with green highlight box */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A2E05] leading-[1.08] mb-6">
            Trust, owned <br />
            <span className="inline-block bg-[#84CC16] text-[#1A2E05] px-4 py-0.5 rounded-2xl sm:rounded-3xl mt-1.5">
              by you.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#3E5622] leading-relaxed max-w-xl mb-8">
            Own your identity, prove it instantly to anyone, and share documents with full control.
            No central database to breach, no certificate to forge.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              to="/app"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#84CC16] hover:bg-[#72b510] text-[#1A2E05] font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Launch App
            </Link>

            <button
              type="button"
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F7FBEF] text-[#1A2E05] font-bold text-sm border-2 border-[#84CC16] transition-all duration-200 shadow-xs hover:-translate-y-0.5"
            >
              See how it works
            </button>
          </div>
        </div>

        {/* Right Column: Circular Interactive Badge Graphic */}
        <div className="lg:col-span-6 flex items-center justify-center relative py-6 lg:py-10">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-[#84CC16]/60 bg-[#ECFCCB]/35 flex items-center justify-center">
            {/* Center Bharosa Logo Mark */}
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 flex items-center justify-center transition-transform hover:scale-105 duration-300">
              <img
                src="/logos/bharosa-mark.png"
                alt="Bharosa Sovereign Mark"
                className="w-full h-full object-contain drop-shadow-md select-none"
              />
            </div>

            {/* Floating Badge 1: Credential verified (Top-Left) */}
            <div className="absolute top-4 left-0 sm:top-8 sm:-left-4 bg-[#FFFFFF] border border-[#ECFCCB] rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1A2E05] hover:scale-105 transition-transform duration-200">
              <span className="w-2.5 h-2.5 rounded-full bg-[#65A30D] shrink-0"></span>
              <span>Credential verified</span>
            </div>

            {/* Floating Badge 2: Hash matches on-chain (Right) */}
            <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-[#FFFFFF] border border-[#ECFCCB] rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1A2E05] hover:scale-105 transition-transform duration-200">
              <span className="w-2.5 h-2.5 rounded-full bg-[#65A30D] shrink-0"></span>
              <span>Hash matches on-chain</span>
            </div>

            {/* Floating Badge 3: Access expires in 7 days (Bottom-Left) */}
            <div className="absolute bottom-6 left-0 sm:bottom-10 sm:-left-2 bg-[#FFFFFF] border border-[#ECFCCB] rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1A2E05] hover:scale-105 transition-transform duration-200">
              <span className="w-2.5 h-2.5 rounded-full bg-[#65A30D] shrink-0"></span>
              <span>Access expires in 7 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Capability Ticker */}
      <div className="pt-14 sm:pt-20 border-t border-[#ECFCCB]/80 flex flex-wrap items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-[#1A2E05]">
        <span className="hover:text-[#65A30D] transition-colors cursor-default">W3C DIDs</span>
        <span className="hover:text-[#65A30D] transition-colors cursor-default">Verifiable Credentials</span>
        <span className="hover:text-[#65A30D] transition-colors cursor-default">Zero-Knowledge Proofs</span>
        <span className="hover:text-[#65A30D] transition-colors cursor-default">IPFS Storage</span>
        <span className="hover:text-[#65A30D] transition-colors cursor-default">Layer-2 Blockchain</span>
        <span className="hover:text-[#65A30D] transition-colors cursor-default">On-chain ABAC</span>
      </div>
    </section>
  );
}

export default Hero;

