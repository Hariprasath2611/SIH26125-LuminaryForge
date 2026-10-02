import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollVelocity } from '../../components/common/ScrollVelocity';

export function Hero() {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works') || document.getElementById('about');
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
      className="relative pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 w-full bg-[#FFFFFF] bg-grid-dots overflow-hidden"
    >
      {/* Background Radial Glows */}
      <div className="absolute top-1/3 -left-24 w-96 h-96 rounded-full bg-[#84CC16]/12 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#84CC16]/15 blur-3xl pointer-events-none" />

      {/* Decorative Wireframe Hexagons precisely matching the design */}
      {/* 1. Wireframe Hexagon overlapping top-left badge */}
      <svg
        className="absolute top-24 left-[280px] sm:left-[320px] w-14 h-14 text-[#84CC16]/40 pointer-events-none select-none hidden sm:block animate-float"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" />
      </svg>

      {/* 2. Wireframe Hexagon on the far left next to 'Trust' */}
      <svg
        className="absolute top-44 -left-4 sm:left-4 lg:left-8 w-16 h-16 text-[#84CC16]/40 pointer-events-none select-none animate-float-delayed-1"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" />
      </svg>

      {/* 3. Wireframe Hexagon at top-right above the circle */}
      <svg
        className="absolute top-20 right-10 sm:right-24 lg:right-32 w-16 h-16 text-[#84CC16]/45 pointer-events-none select-none animate-float"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" />
      </svg>

      {/* 4. Wireframe Hexagon at bottom-center near badges */}
      <svg
        className="absolute bottom-28 left-[45%] lg:left-[48%] w-11 h-11 text-[#84CC16]/40 pointer-events-none select-none hidden md:block animate-float-delayed-2"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-6 text-left animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFCCB] text-xs font-semibold text-[#1A2E05] mb-6 shadow-xs border border-[#D9F99D]">
              <span>Smart India Hackathon 2026 &middot; SIH26125</span>
            </div>

            {/* Main Title strictly matching user screenshot */}
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold tracking-tight text-[#111827] leading-[1.08] mb-6 font-sans">
              Trust, owned <br />
              <span className="inline-block bg-[#84CC16] text-[#111827] px-4 py-1 sm:px-5 sm:py-1.5 rounded-2xl mt-1.5 font-sans">
                by you.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#374151] leading-relaxed max-w-lg mb-8 font-normal font-sans">
              Own your identity, prove it instantly to anyone, and share documents with full control. No central database to breach, no certificate to forge.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                to="/app"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#84CC16] hover:bg-[#72b510] text-[#111827] font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-100"
              >
                Launch App
              </Link>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#FFFFFF] hover:bg-[#F9FAFB] text-[#111827] font-semibold text-sm border-2 border-[#111827] transition-all duration-200 shadow-2xs hover:scale-105 active:scale-100"
              >
                See how it works
              </button>
            </div>

            {/* "Built for" Row */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#4D6B2A]">
              <span className="font-semibold text-stone-500 mr-1">Built for</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 font-semibold text-[#111827] shadow-2xs">
                Students
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 font-semibold text-[#111827] shadow-2xs">
                Universities
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 font-semibold text-[#111827] shadow-2xs">
                Employers
              </span>
            </div>
          </div>

          {/* Right Column: Circular Graphic with Hexagon & 3 Badges */}
          <div className="lg:col-span-6 flex items-center justify-center relative py-6 lg:py-10">
            {/* Outer Circular Container */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[430px] md:h-[430px] rounded-full border-2 border-dashed border-[#84CC16]/60 bg-[#ECFCCB]/40 flex items-center justify-center">
              {/* Spinning Subtle Dashed Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#84CC16]/30 animate-spin-slow pointer-events-none" />

              {/* Center Hexagon Shield Graphic matching user screenshot */}
              <div className="w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center transition-transform hover:scale-105 duration-300 cursor-pointer">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full drop-shadow-md select-none"
                >
                  {/* Outer Hexagon Border with Gap */}
                  <polygon
                    points="100,12 178,57 178,143 100,188 22,143 22,57"
                    fill="none"
                    stroke="#72B510"
                    strokeWidth="8"
                    strokeLinejoin="round"
                  />
                  {/* Inner Solid Hexagon */}
                  <polygon
                    points="100,26 166,64 166,136 100,174 34,136 34,64"
                    fill="#84CC16"
                    strokeLinejoin="round"
                  />
                  {/* Dark Center Checkmark */}
                  <path
                    d="M65 105 L88 128 L138 78"
                    fill="none"
                    stroke="#111827"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Floating Badge 1: Credential verified (Top-Left) */}
              <div className="absolute top-6 left-0 sm:top-8 sm:-left-3 bg-[#FFFFFF] border border-[#ECFCCB] rounded-full px-4 py-2 shadow-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#111827] hover:scale-105 transition-transform duration-200 animate-float cursor-default">
                <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] shrink-0" />
                <span>Credential verified</span>
              </div>

              {/* Floating Badge 2: Hash matches on-chain (Right) */}
              <div className="absolute top-[48%] -right-4 sm:-right-8 -translate-y-1/2 bg-[#FFFFFF] border border-[#ECFCCB] rounded-full px-4 py-2 shadow-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#111827] hover:scale-105 transition-transform duration-200 animate-float-delayed-1 cursor-default">
                <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] shrink-0" />
                <span>Hash matches on-chain</span>
              </div>

              {/* Floating Badge 3: Access expires in 7 days (Bottom-Left) */}
              <div className="absolute bottom-6 left-0 sm:bottom-10 sm:-left-2 bg-[#FFFFFF] border border-[#ECFCCB] rounded-full px-4 py-2 shadow-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#111827] hover:scale-105 transition-transform duration-200 animate-float-delayed-2 cursor-default">
                <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] shrink-0" />
                <span>Access expires in 7 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Capability Ticker with React Bits ScrollVelocity */}
      <div className="pt-16 sm:pt-20 overflow-hidden">
        <ScrollVelocity
          texts={[
            <span className="inline-flex items-center gap-8 sm:gap-12 text-sm sm:text-base font-bold text-[#111827] tracking-wide">
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-extrabold text-lg">• •</span> W3C DIDs
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-extrabold text-lg">• •</span> Verifiable Credentials
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-extrabold text-lg">• •</span> Zero-Knowledge Proofs
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-extrabold text-lg">• •</span> IPFS Storage
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-extrabold text-lg">• •</span> Layer-2 Blockchain
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-extrabold text-lg">• •</span> On-chain ABAC
              </span>
            </span>
          ]}
          velocity={35}
          numCopies={4}
          className="text-[#111827]"
        />
      </div>
    </section>
  );
}

export default Hero;
