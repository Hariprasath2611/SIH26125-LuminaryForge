import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Sparkles,
  CheckCircle2,
  FileCheck2,
  Award,
  Fingerprint,
  Layers,
  Cpu,
} from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[radial-gradient(#84CC16_2px,transparent_2px)] [background-size:24px_24px] opacity-25 pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#ECFCCB]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#ECFCCB] border border-[#D9F99D] shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1A2E05]">
              Polygon Amoy &bull; Zero-Knowledge Sovereign Identity
            </span>
          </div>

          {/* Big Bold Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-anton tracking-tight text-[#1A2E05] uppercase leading-[1.02]">
            Trust, Owned <br />
            <span className="text-[#65A30D] underline decoration-[#84CC16]/60 decoration-wavy decoration-2">
              By You.
            </span>
          </h1>

          {/* Explanatory Subtext with improved typography & line height */}
          <p className="text-base sm:text-lg lg:text-xl text-[#4D6B2A] leading-relaxed max-w-2xl font-normal">
            Eliminate centralized identity breaches and surveillance. Bharosa unites W3C Decentralized Identifiers (DID),
            client-side AES-256-GCM encrypted IPFS custody, and mathematical Groth16 zero-knowledge verification on Polygon.
          </p>

          {/* CTA Buttons with lush padding, high contrast & micro-interactions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/app"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lime-glow hover:-translate-y-0.5 group"
            >
              <span>Launch App</span>
              <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[#ECFCCB] hover:bg-[#D9F99D] text-[#1A2E05] font-bold text-sm border-2 border-[#84CC16] transition-all duration-200 shadow-xs hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 mr-2 text-[#65A30D] fill-[#84CC16]" />
              <span>Explore Roles</span>
            </Link>

            <Link
              to="/public-verify"
              className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[#FFFFFF] hover:bg-[#F7FBEF] text-[#1A2E05] font-bold text-sm border border-[#D9EBB5] transition-all duration-200 shadow-xs hover:-translate-y-0.5"
            >
              <FileCheck2 className="w-4 h-4 mr-2 text-[#65A30D]" />
              <span>Verify Credential</span>
            </Link>
          </div>

          {/* Live Protocol Proof Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#ECFCCB]">
            <div className="p-3.5 rounded-2xl bg-[#F7FBEF] border border-[#ECFCCB]/80 space-y-1">
              <p className="font-anton text-2xl text-[#1A2E05]">100%</p>
              <p className="text-xs text-[#4D6B2A] font-semibold">Client Encrypted</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#F7FBEF] border border-[#ECFCCB]/80 space-y-1">
              <p className="font-anton text-2xl text-[#1A2E05]">0 GAS</p>
              <p className="text-xs text-[#4D6B2A] font-semibold">Sponsored Relayer</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#F7FBEF] border border-[#ECFCCB]/80 space-y-1">
              <p className="font-anton text-2xl text-[#1A2E05]">&lt; 50ms</p>
              <p className="text-xs text-[#4D6B2A] font-semibold">ZK Verification</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#F7FBEF] border border-[#ECFCCB]/80 space-y-1">
              <p className="font-anton text-2xl text-[#1A2E05]">W3C</p>
              <p className="text-xs text-[#4D6B2A] font-semibold">Standard DIDs</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Visual Showcase Collage */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="relative mx-auto max-w-lg space-y-5">
            {/* Card 1: Verifiable Credential Preview */}
            <div className="bg-[#FFFFFF] border-2 border-[#D9F99D] rounded-3xl p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 relative transform hover:-translate-y-1">
              <div className="flex items-center justify-between pb-4 border-b border-[#ECFCCB]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shadow-xs">
                    <Award className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#1A2E05] uppercase tracking-wide">
                      Degree of Engineering
                    </h3>
                    <p className="text-[11px] text-[#4D6B2A] font-medium">
                      Delhi Technological University (DTU)
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-[#ECFCCB] text-[#1A2E05] border border-[#84CC16] flex items-center gap-1 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" /> VALID
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs bg-[#F7FBEF] p-4 rounded-2xl border border-[#ECFCCB]">
                <div>
                  <span className="text-[#4D6B2A] block text-[10px] uppercase font-bold tracking-wider">
                    Holder DID
                  </span>
                  <span className="text-[#1A2E05] font-mono font-bold truncate block mt-0.5">
                    did:ethr:0x7099...79C8
                  </span>
                </div>
                <div>
                  <span className="text-[#4D6B2A] block text-[10px] uppercase font-bold tracking-wider">
                    Digital Signature
                  </span>
                  <span className="text-[#1A2E05] font-mono font-bold truncate block mt-0.5">
                    EIP-712 ECDSA ✓
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Zero-Knowledge Privacy Proof Floating Card */}
            <div className="bg-[#FFFFFF] border-2 border-[#84CC16] rounded-3xl p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 relative sm:ml-6 transform hover:-translate-y-1">
              <div className="flex items-center justify-between pb-3 border-b border-[#ECFCCB]">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#84CC16] text-[#1A2E05] flex items-center justify-center shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#1A2E05] uppercase tracking-wide">
                      Groth16 Zero-Knowledge Proof
                    </h4>
                    <p className="text-[10px] text-[#4D6B2A]">bn128 Pairing Curve</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#65A30D] bg-[#ECFCCB] px-2 py-0.5 rounded-full border border-[#D9F99D]">
                  Circom 2.1
                </span>
              </div>

              <div className="space-y-2.5 mt-3.5 text-xs">
                <div className="flex items-center justify-between bg-[#F7FBEF] px-3.5 py-2.5 rounded-xl border border-[#ECFCCB]">
                  <span className="text-[#4D6B2A] text-xs font-medium">Qualification: CGPA &ge; 7.50</span>
                  <span className="text-xs font-extrabold text-[#16A34A] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> PROVEN TRUE
                  </span>
                </div>
                <div className="flex items-center justify-between bg-[#F7FBEF] px-3.5 py-2.5 rounded-xl border border-[#ECFCCB]">
                  <span className="text-[#4D6B2A] text-xs font-medium">Private Score (9.40)</span>
                  <span className="text-[11px] font-bold text-[#4D6B2A] bg-stone-200/80 px-2 py-0.5 rounded font-mono">
                    [CONFIDENTIAL]
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Encrypted Asset Storage Badge */}
            <div className="bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl p-4 sm:p-5 shadow-xs flex items-center justify-between hover:border-[#84CC16] transition-colors">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center">
                  <Lock className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#1A2E05] uppercase tracking-wide">
                    AES-256-GCM Vault Custody
                  </p>
                  <p className="text-[11px] text-[#4D6B2A]">Key derived in browser WebCrypto</p>
                </div>
              </div>
              <span className="text-[11px] font-black text-[#1A2E05] bg-[#ECFCCB] px-3 py-1.5 rounded-xl border border-[#84CC16]">
                IPFS Pinned
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
