import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollVelocity } from '../../components/common/ScrollVelocity';

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
      className="relative pt-32 pb-14 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-[#FFFFFF] bg-grid-dots"
    >
      {/* Decorative Wireframe Hexagons */}
      <svg
        className="absolute top-20 left-8 sm:left-14 w-16 h-16 text-[#84CC16]/30 pointer-events-none select-none animate-float"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" />
      </svg>
      <svg
        className="absolute top-24 left-[300px] w-12 h-12 text-[#84CC16]/25 pointer-events-none select-none hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" />
      </svg>
      <svg
        className="absolute top-16 right-10 sm:right-24 w-16 h-16 text-[#84CC16]/35 pointer-events-none select-none animate-float-delayed-1"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" />
      </svg>
      <svg
        className="absolute bottom-28 left-[45%] w-10 h-10 text-[#84CC16]/30 pointer-events-none select-none hidden sm:block animate-float-delayed-2"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" />
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-6 text-left animate-in fade-in slide-in-from-bottom-2 duration-500">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFCCB] text-xs font-semibold text-[#1A2E05] mb-6 shadow-xs border border-[#D9F99D]">
            <span>Smart India Hackathon 2026 &middot; SIH26125</span>
          </div>

          {/* Main Title using Anton SC font */}
          <h1 className="font-anton text-5xl sm:text-6xl lg:text-[76px] tracking-wide text-[#1A2E05] leading-[1.06] mb-6 uppercase">
            Trust, owned <br />
            <span className="inline-block bg-[#84CC16] text-[#1A2E05] px-4 py-1 sm:px-6 sm:py-1.5 rounded-2xl sm:rounded-3xl mt-2 font-anton uppercase shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform cursor-default">
              by you.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#374151] leading-relaxed max-w-lg mb-8 font-normal">
            Own your identity, prove it instantly to anyone, and share documents with full control. No central database to breach, no certificate to forge.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              to="/app"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#84CC16] hover:bg-[#72b510] text-[#1A2E05] font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Launch App
            </Link>

            <button
              type="button"
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#F9FAFB] text-[#1A2E05] font-semibold text-sm border border-neutral-300 transition-all duration-200 shadow-2xs hover:-translate-y-0.5 active:translate-y-0"
            >
              See how it works
            </button>
          </div>

          {/* "Built for" Row */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#4D6B2A]">
            <span className="font-medium text-stone-500 mr-1">Built for</span>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#D9F99D] font-semibold text-[#1A2E05] shadow-2xs">
              Students
            </span>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#D9F99D] font-semibold text-[#1A2E05] shadow-2xs">
              Universities
            </span>
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#D9F99D] font-semibold text-[#1A2E05] shadow-2xs">
              Employers
            </span>
          </div>
        </div>

        {/* Right Column: Circular Interactive Badge Graphic with Animations */}
        <div className="lg:col-span-6 flex items-center justify-center relative py-6 lg:py-10">
          {/* Animated Ambient Glow */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#84CC16]/15 blur-3xl pointer-events-none" />

          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-[#84CC16]/50 bg-[#ECFCCB]/30 flex items-center justify-center">
            {/* Spinning Dashed Ring Animation */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#84CC16]/40 animate-spin-slow pointer-events-none" />

            {/* Center Bharosa Logo Mark with Floating Effect */}
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 flex items-center justify-center transition-transform hover:scale-105 duration-300 animate-pulse-ring cursor-pointer">
              <img
                src="/logos/bharosa-mark.png"
                alt="Bharosa Sovereign Mark"
                className="w-full h-full object-contain drop-shadow-md select-none"
              />
            </div>

            {/* Floating Badge 1: Credential verified (Top-Left) with floating animation */}
            <div className="absolute top-6 left-0 sm:top-8 sm:-left-2 bg-[#FFFFFF] border border-[#ECFCCB] rounded-full px-4 py-2 shadow-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1A2E05] hover:scale-105 transition-transform duration-200 animate-float cursor-default">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] shrink-0"></span>
              <span>Credential verified</span>
            </div>

            {/* Floating Badge 2: Hash matches on-chain (Right) with staggered float */}
            <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-[#FFFFFF] border border-[#ECFCCB] rounded-full px-4 py-2 shadow-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1A2E05] hover:scale-105 transition-transform duration-200 animate-float-delayed-1 cursor-default">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] shrink-0"></span>
              <span>Hash matches on-chain</span>
            </div>

            {/* Floating Badge 3: Access expires in 7 days (Bottom-Left) with counter-float */}
            <div className="absolute bottom-8 left-0 sm:bottom-12 sm:-left-2 bg-[#FFFFFF] border border-[#ECFCCB] rounded-full px-4 py-2 shadow-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1A2E05] hover:scale-105 transition-transform duration-200 animate-float-delayed-2 cursor-default">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] shrink-0"></span>
              <span>Access expires in 7 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Capability Ticker with React Bits ScrollVelocity */}
      <div className="pt-16 sm:pt-24 border-t border-[#ECFCCB]/80 overflow-hidden">
        <ScrollVelocity
          texts={[
            <span className="inline-flex items-center gap-8 sm:gap-12 text-xs sm:text-sm font-bold text-[#1A2E05] tracking-wide uppercase">
              <span className="hover:text-[#65A30D] transition-colors cursor-pointer flex items-center gap-2">
                <span className="flex gap-1 text-[#84CC16]">• •</span> W3C DIDs
              </span>
              <span className="hover:text-[#65A30D] transition-colors cursor-pointer flex items-center gap-2">
                <span className="flex gap-1 text-[#84CC16]">• •</span> Verifiable Credentials
              </span>
              <span className="hover:text-[#65A30D] transition-colors cursor-pointer flex items-center gap-2">
                <span className="flex gap-1 text-[#84CC16]">• •</span> Zero-Knowledge Proofs
              </span>
              <span className="hover:text-[#65A30D] transition-colors cursor-pointer flex items-center gap-2">
                <span className="flex gap-1 text-[#84CC16]">• •</span> IPFS Storage
              </span>
              <span className="hover:text-[#65A30D] transition-colors cursor-pointer flex items-center gap-2">
                <span className="flex gap-1 text-[#84CC16]">• •</span> Layer-2 Blockchain
              </span>
              <span className="hover:text-[#65A30D] transition-colors cursor-pointer flex items-center gap-2">
                <span className="flex gap-1 text-[#84CC16]">• •</span> On-chain ABAC
              </span>
            </span>
          ]}
          velocity={35}
          numCopies={4}
          className="text-[#1A2E05]"
        />
      </div>
    </section>
  );
}

export default Hero;
