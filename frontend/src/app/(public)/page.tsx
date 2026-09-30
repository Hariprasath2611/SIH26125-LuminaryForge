import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Key,
  Award,
  FileCheck2,
  Sparkles,
  Zap,
  CheckCircle2,
  Shield,
  ArrowUpRight,
  Check,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full bg-white text-[#0C2518] overflow-hidden">
      
      {/* =========================================================================
          HERO SECTION (Matches Reference Layout: Split Left Copy + Right Collage)
          ========================================================================= */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Subtle decorative dot grid background */}
        <div className="absolute top-6 left-1/3 w-64 h-64 bg-[radial-gradient(#C6F432_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-40 pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Tag with Two Green Capsule Dots */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7FBEF] border border-lime-200">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0C2518]"></span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0C2518]">
                Elevate Trust with Web3 Cryptography
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0C2518] leading-[1.12]">
              Empowering Your Sovereign Trust with Digital Cryptography
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#4D6B2A] leading-relaxed max-w-xl">
              Self-sovereign identity (DID), client-side AES-256-GCM encrypted asset custody, and mathematical Groth16 zero-knowledge verification anchored on Polygon Amoy.
            </p>

            {/* CTAs matching reference pill button & link */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0C2518] text-[#C6F432] text-sm font-bold shadow-md hover:bg-[#18442D] hover:scale-102 transition-all"
              >
                Explore Platform <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/public-verify"
                className="text-sm font-bold text-[#0C2518] underline underline-offset-4 hover:text-[#84CC16] transition"
              >
                Verify Any Credential →
              </Link>
            </div>
          </div>

          {/* Right Column: Organic Asymmetric Photo Mosaic & Rotating Starburst Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Mosaic Grid matching the reference layout */}
              <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
                
                {/* Photo 1: Top Right (Rounded top-right and bottom-left) */}
                <div className="col-span-7 col-start-6 relative overflow-hidden rounded-tr-[48px] rounded-bl-[48px] rounded-tl-2xl rounded-br-2xl shadow-lg border-2 border-white aspect-[4/3]">
                  <Image
                    src="/images/hero-team.jpg"
                    alt="Cybersecurity Team"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition duration-500"
                    priority
                  />
                </div>

                {/* Photo 2: Left Middle (Students with research) */}
                <div className="col-span-6 relative overflow-hidden rounded-tl-[48px] rounded-br-[48px] rounded-tr-2xl rounded-bl-2xl shadow-lg border-2 border-white aspect-[4/3] -mt-8">
                  <Image
                    src="/images/research-collab.jpg"
                    alt="University Researchers"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>

                {/* Photo 3: Bottom Right (Auditor review) */}
                <div className="col-span-6 relative overflow-hidden rounded-2xl shadow-lg border-2 border-white aspect-[4/3] -mt-6">
                  <Image
                    src="/images/security-auditor.jpg"
                    alt="Security Auditor"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>
              </div>

              {/* Signature Rotating Circular Starburst Badge (from reference image) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0C2518] text-[#C6F432] p-2 flex items-center justify-center shadow-xl border-2 border-[#C6F432] hover:scale-105 transition-transform duration-300">
                  {/* Rotating Circular Text SVG */}
                  <svg className="w-full h-full animate-[spin_16s_linear_infinite]" viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[9.5px] font-black uppercase tracking-[2px] fill-[#C6F432]">
                      <textPath href="#circlePath">
                        ✦ 100% SOVEREIGN · ZERO HONEYPOT ✦
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Arrow */}
                  <div className="absolute w-8 h-8 rounded-full bg-[#C6F432] text-[#0C2518] flex items-center justify-center font-bold">
                    <ArrowUpRight className="w-5 h-5 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* Decorative Lime Sparkles */}
              <div className="absolute -top-3 right-6 text-[#84CC16] animate-pulse">
                <Sparkles className="w-6 h-6 fill-[#84CC16]" />
              </div>
              <div className="absolute -bottom-2 left-4 text-[#84CC16] animate-pulse">
                <Sparkles className="w-5 h-5 fill-[#84CC16]" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MARQUEE TICKER (Matches Reference Design: Dark Green Bar with Starbursts)
          ========================================================================= */}
      <section className="w-full bg-[#0C2518] py-4 overflow-hidden border-y border-[#18442D]">
        <div className="flex items-center gap-8 whitespace-nowrap text-white font-extrabold text-sm sm:text-base tracking-wide uppercase">
          <div className="flex items-center gap-8 shrink-0 animate-[marquee_25s_linear_infinite]">
            <span>Self-Sovereign Identity</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>Client Encrypted IPFS</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>Zero-Knowledge Proofs</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>W3C Verifiable Credentials</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>ABAC Access Control</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>Gasless Meta-Transactions</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>M-of-N Social Recovery</span>
            <span className="text-[#C6F432] text-xl">❋</span>
          </div>
          <div className="flex items-center gap-8 shrink-0 animate-[marquee_25s_linear_infinite]" aria-hidden="true">
            <span>Self-Sovereign Identity</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>Client Encrypted IPFS</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>Zero-Knowledge Proofs</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>W3C Verifiable Credentials</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>ABAC Access Control</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>Gasless Meta-Transactions</span>
            <span className="text-[#C6F432] text-xl">❋</span>
            <span>M-of-N Social Recovery</span>
            <span className="text-[#C6F432] text-xl">❋</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT / CAPABILITIES (Matches Reference Layout with Progress Bars)
          ========================================================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7FBEF] border border-lime-200">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0C2518]"></span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0C2518]">
              About Bharosa
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0C2518] tracking-tight">
            Engineered for Mathematical Privacy & Zero-Knowledge Security
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Double Photo with Badge */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-lime-200">
                <Image
                  src="/images/research-collab.jpg"
                  alt="Student Credentials"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-lime-200">
                <Image
                  src="/images/security-auditor.jpg"
                  alt="Protocol Auditor"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Capability Progress Bars */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <p className="text-sm sm:text-base text-[#4D6B2A] leading-relaxed">
              Traditional web applications store your documents and personal records in centralized databases—creating honeypots for data leaks. Bharosa inverts this model: all encryption keys and ZK proofs are generated client-side inside your browser before anything ever touches the decentralized network.
            </p>

            {/* 3 Progress Bars matching reference design */}
            <div className="space-y-4 pt-2">
              
              {/* Progress 1 */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold text-[#0C2518]">
                  <span>Client-Side Cryptographic Entropy</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-2.5 bg-[#F0F7E6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#84CC16] rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              {/* Progress 2 */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold text-[#0C2518]">
                  <span>Zero-Knowledge Proof Verification Speed</span>
                  <span>98%</span>
                </div>
                <div className="w-full h-2.5 bg-[#F0F7E6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#84CC16] rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>

              {/* Progress 3 */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold text-[#0C2518]">
                  <span>Smart Contract Immutability & Safety</span>
                  <span>95%</span>
                </div>
                <div className="w-full h-2.5 bg-[#F0F7E6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#84CC16] rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

            </div>

            {/* Button */}
            <div className="pt-2">
              <Link
                href="/security"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0C2518] text-[#C6F432] text-xs font-bold shadow-md hover:bg-[#18442D] transition"
              >
                Explore Security Center <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4-Stat Metric Row (Matches Reference: 3k+, 200+, 350+, 16+) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-lime-200 mt-16 text-center">
          
          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl font-black text-[#0C2518]">100%</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16]"></span>
            </div>
            <span className="text-xs text-[#4D6B2A] font-semibold">Sovereign Key Ownership</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl font-black text-[#0C2518]">0 Gas</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16]"></span>
            </div>
            <span className="text-xs text-[#4D6B2A] font-semibold">Sponsored User Fees</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl font-black text-[#0C2518]">256-Bit</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16]"></span>
            </div>
            <span className="text-xs text-[#4D6B2A] font-semibold">AES-GCM Local Entropy</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl font-black text-[#0C2518]">14+</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16]"></span>
            </div>
            <span className="text-xs text-[#4D6B2A] font-semibold">Audited Protocol Subsystems</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CORE PILLARS (Matches Reference: Dark Forest Green with Lime Highlight Card)
          ========================================================================= */}
      <section className="w-full bg-[#0C2518] py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18442D] border border-[#C6F432]/30 text-xs font-bold text-[#C6F432]">
                <div className="w-2 h-2 rounded-full bg-[#C6F432]"></div>
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                Next-Gen Decentralized Trust Architecture
              </h2>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0C2518] text-xs font-bold hover:bg-[#C6F432] transition shrink-0"
            >
              Explore All Modules <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Pillar Cards Row (Card 2 is Highlighted Lime Green) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Dark Card */}
            <div className="bg-[#123624] border border-[#1e5438] rounded-3xl p-5 flex flex-col justify-between space-y-5 hover:border-[#C6F432]/50 transition duration-300">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero-team.jpg"
                    alt="Self-Sovereign Identity"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-bold text-white">Self-Sovereign DID</h3>
                  <p className="text-xs text-[#A7D18C] leading-relaxed">
                    Cryptographic DIDs owned by users without central database gatekeepers, passwords, or honeypot risk.
                  </p>
                </div>
              </div>
              <Link
                href="/identity"
                className="w-full py-2.5 rounded-full bg-[#18442D] hover:bg-[#205b3c] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition"
              >
                Decentralized Identity <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: HIGHLIGHTED VIBRANT LIME CARD (Directly matches the middle card in user's image!) */}
            <div className="bg-[#C6F432] text-[#0C2518] rounded-3xl p-7 flex flex-col justify-between space-y-6 shadow-2xl scale-102 border-2 border-white">
              <div className="space-y-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#0C2518] text-[#C6F432] flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0C2518]/70">Zero-Knowledge Module</span>
                  <h3 className="text-2xl font-black text-[#0C2518] mt-1">Zero-Knowledge Predicates</h3>
                </div>
                <p className="text-xs font-semibold text-[#0C2518]/80 leading-relaxed">
                  Generate Circom 2 Groth16 cryptographic SNARK proofs on-the-fly. Mathematically prove eligibility (e.g. age ≥ 18 or CGPA ≥ 7.5) without revealing underlying private documents.
                </p>
              </div>

              <Link
                href="/zk"
                className="w-full py-3 rounded-full bg-[#0C2518] text-[#C6F432] text-xs font-extrabold flex items-center justify-center gap-2 hover:bg-[#18442D] shadow-md transition"
              >
                Generate ZK Proof <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Dark Card */}
            <div className="bg-[#123624] border border-[#1e5438] rounded-3xl p-5 flex flex-col justify-between space-y-5 hover:border-[#C6F432]/50 transition duration-300">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/research-collab.jpg"
                    alt="Encrypted Asset Custody"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-bold text-white">Client-Encrypted Assets</h3>
                  <p className="text-xs text-[#A7D18C] leading-relaxed">
                    Browser AES-256-GCM encryption with IPFS pinning and ECIES time-bound key delegation for zero data disclosure.
                  </p>
                </div>
              </div>
              <Link
                href="/assets"
                className="w-full py-2.5 rounded-full bg-[#18442D] hover:bg-[#205b3c] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition"
              >
                Open Asset Vault <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
