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

            {/* Main Title with Anton SC font */}
            <h1 className="font-anton text-5xl sm:text-6xl lg:text-[76px] tracking-wide text-[#111827] leading-[1.06] mb-6 uppercase">
              Trust, owned <br />
              <span className="inline-block bg-[#84CC16] text-[#111827] px-4 py-1 sm:px-6 sm:py-1.5 rounded-2xl sm:rounded-3xl mt-2 font-anton uppercase shadow-sm">
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

          {/* Right Column: 3D Product-Animation Brand Film with Floating Badges */}
          <div className="lg:col-span-6 flex items-center justify-center relative py-4 lg:py-6">
            {/* 16:9 Widescreen 3D Brand Film Player Container */}
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-video rounded-3xl overflow-hidden border border-[#84CC16]/40 bg-[#F7FBEF] shadow-xl shadow-[#84CC16]/10 group transition-all duration-300 hover:shadow-2xl hover:shadow-[#84CC16]/20 hover:border-[#84CC16]/70">
              {/* Seamless Studio Backdrop Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#84CC16]/10 via-transparent to-[#F7FBEF]/60 pointer-events-none z-10" />

              {/* 3D Product-Animation Brand Film Video (Constant-speed tracking shot along lime path) */}
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/hero-brand-film-3d.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/videos/hero-brand-film.webm" type="video/webm" />
                <source src="/videos/hero-brand-film.mp4" type="video/mp4" />
                {/* Fallback image if video is unsupported */}
                <img
                  src="/images/hero-brand-film-3d.jpg"
                  alt="Minimal 3D product animation: lime-green shield seal, frosted glass cards, and glowing lime path"
                  className="w-full h-full object-cover"
                />
              </video>

              {/* Subtle glass reflection sheen */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent pointer-events-none z-10" />
            </div>

            {/* Floating Badge 1: Credential verified (Top-Left) */}
            <div className="absolute -top-3 left-2 sm:-top-4 sm:left-4 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#ECFCCB] rounded-full px-4 py-2 shadow-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#111827] hover:scale-105 transition-transform duration-200 animate-float cursor-default z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] shrink-0 shadow-xs" />
              <span>Credential verified</span>
            </div>

            {/* Floating Badge 2: Hash matches on-chain (Right) */}
            <div className="absolute top-[48%] -right-3 sm:-right-6 -translate-y-1/2 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#ECFCCB] rounded-full px-4 py-2 shadow-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#111827] hover:scale-105 transition-transform duration-200 animate-float-delayed-1 cursor-default z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] shrink-0 shadow-xs" />
              <span>Hash matches on-chain</span>
            </div>

            {/* Floating Badge 3: Access expires in 7 days (Bottom-Left) */}
            <div className="absolute -bottom-3 left-2 sm:-bottom-4 sm:left-4 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#ECFCCB] rounded-full px-4 py-2 shadow-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#111827] hover:scale-105 transition-transform duration-200 animate-float-delayed-2 cursor-default z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] shrink-0 shadow-xs" />
              <span>Access expires in 7 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Capability Ticker with React Bits ScrollVelocity */}
      <div className="pt-16 sm:pt-20 overflow-hidden">
        <ScrollVelocity
          texts={[
            <span className="inline-flex items-center gap-8 sm:gap-12 font-anton text-base sm:text-lg tracking-wider text-[#111827] uppercase">
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-sans font-extrabold text-lg">• •</span> W3C DIDs
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-sans font-extrabold text-lg">• •</span> Verifiable Credentials
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-sans font-extrabold text-lg">• •</span> Zero-Knowledge Proofs
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-sans font-extrabold text-lg">• •</span> IPFS Storage
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-sans font-extrabold text-lg">• •</span> Layer-2 Blockchain
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1 text-[#84CC16] font-sans font-extrabold text-lg">• •</span> On-chain ABAC
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
