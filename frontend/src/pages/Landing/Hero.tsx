import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Sparkles,
  Zap,
  CheckCircle2,
  FileCheck2,
  Award,
  Key,
} from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative radial pattern */}
      <div className="absolute top-12 left-1/3 w-72 h-72 bg-[radial-gradient(#84CC16_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-30 pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFCCB] border border-[#D9F99D]">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1A2E05]">
              Polygon Amoy &bull; Zero-Knowledge Protocol
            </span>
          </div>

          {/* Big Bold Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-anton tracking-tight text-[#1A2E05] uppercase leading-[1.05]">
            Trust, owned by you.
          </h1>

          {/* Explanatory Subtext */}
          <p className="text-base sm:text-lg text-[#4D6B2A] leading-relaxed max-w-2xl font-normal">
            Eliminate centralized identity breaches and data tracking. Bharosa unites W3C Decentralized Identifiers (DID),
            client-side AES-256-GCM encrypted IPFS custody, and mathematical Groth16 zero-knowledge verification.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/app"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-sm uppercase tracking-wider transition-all shadow-md group"
            >
              <span>Launch App</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              to="/public-verify"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-[#FFFFFF] hover:bg-[#ECFCCB] text-[#1A2E05] font-bold text-sm border border-[#D9F99D] transition-colors shadow-xs"
            >
              <FileCheck2 className="w-4 h-4 mr-2 text-[#65A30D]" />
              <span>Verify Credential</span>
            </Link>
          </div>

          {/* Live Protocol Proof Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#ECFCCB]">
            <div className="space-y-0.5">
              <p className="font-anton text-xl text-[#1A2E05]">100%</p>
              <p className="text-xs text-[#4D6B2A] font-medium">Client Encrypted</p>
            </div>
            <div className="space-y-0.5">
              <p className="font-anton text-xl text-[#1A2E05]">0 GAS</p>
              <p className="text-xs text-[#4D6B2A] font-medium">Sponsored Relayer</p>
            </div>
            <div className="space-y-0.5">
              <p className="font-anton text-xl text-[#1A2E05]">&lt; 50ms</p>
              <p className="text-xs text-[#4D6B2A] font-medium">ZK Verification</p>
            </div>
            <div className="space-y-0.5">
              <p className="font-anton text-xl text-[#1A2E05]">W3C</p>
              <p className="text-xs text-[#4D6B2A] font-medium">Standard DIDs</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Visual Showcase Collage */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md space-y-4">
            {/* Card 1: Verifiable Credential Preview */}
            <div className="bg-[#FFFFFF] border-2 border-[#ECFCCB] rounded-3xl p-5 shadow-lg relative transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between pb-3 border-b border-[#F7FBEF]">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1A2E05] uppercase">Degree of Engineering</h3>
                    <p className="text-[10px] text-[#4D6B2A]">Indian Institute of Technology</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ECFCCB] text-[#65A30D] flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> VALID
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-mono bg-[#F7FBEF] p-3 rounded-xl">
                <div>
                  <span className="text-[#4D6B2A] block text-[9px] uppercase font-sans">Holder DID</span>
                  <span className="text-[#1A2E05] font-semibold truncate block">did:bharosa:0x89A...42c</span>
                </div>
                <div>
                  <span className="text-[#4D6B2A] block text-[9px] uppercase font-sans">Issuer Signature</span>
                  <span className="text-[#1A2E05] font-semibold truncate block">ECDSA secp256k1</span>
                </div>
              </div>
            </div>

            {/* Card 2: Zero-Knowledge Privacy Proof Floating Card */}
            <div className="bg-[#FFFFFF] border-2 border-[#D9F99D] rounded-3xl p-5 shadow-md relative sm:ml-6 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-[#84CC16] text-[#1A2E05] flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold text-[#1A2E05] uppercase">Groth16 Zero-Knowledge Proof</h4>
                </div>
                <span className="text-[9px] font-mono text-[#65A30D] bg-[#ECFCCB] px-1.5 py-0.5 rounded">
                  bn128 Curve
                </span>
              </div>

              <div className="space-y-1.5 mt-2 text-xs">
                <div className="flex items-center justify-between bg-[#F7FBEF] px-2.5 py-1.5 rounded-lg">
                  <span className="text-[#4D6B2A] text-[11px]">Age Requirement &ge; 21</span>
                  <span className="text-[11px] font-bold text-[#65A30D] flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> PROVEN TRUE
                  </span>
                </div>
                <div className="flex items-center justify-between bg-[#F7FBEF] px-2.5 py-1.5 rounded-lg">
                  <span className="text-[#4D6B2A] text-[11px]">Exact Date of Birth</span>
                  <span className="text-[11px] font-bold text-stone-500 bg-stone-200 px-1.5 py-0.2 rounded font-mono">
                    [REDACTED]
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Encrypted Asset Storage Badge */}
            <div className="bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl p-4 shadow-sm flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1A2E05]">AES-256-GCM Vault</p>
                  <p className="text-[10px] text-[#4D6B2A]">Key derived from wallet signature</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#65A30D] bg-[#ECFCCB] px-2 py-1 rounded-lg">
                IPFS Pinned
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
