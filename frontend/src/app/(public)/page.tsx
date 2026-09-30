import React from 'react';
import Link from 'next/link';
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
  ShieldAlert,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden w-full flex-1 flex flex-col justify-center items-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(132,204,22,0.18),rgba(255,255,255,0))] pointer-events-none -z-10" />

      <main className="w-full max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Protocol Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-primary/30 text-text shadow-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
            Enterprise Sovereign Trust Protocol
          </span>
          <span className="text-border">·</span>
          <span className="text-xs font-semibold text-primary-hover">Polygon Amoy & L2</span>
        </div>

        {/* Hero Title & Subheading */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-text leading-[1.1]">
            Bharosa <span className="text-primary-hover font-bold inline-block">(भरोसा)</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary-hover tracking-tight">
            Trust, Owned by You.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Self-sovereign verifiable identity, client-encrypted decentralized asset custody, 
            attribute-based access delegation (ABAC), and zero-knowledge verification anchored on-chain.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
          <Link
            href="/dashboard"
            className="btn-primary w-full sm:w-auto px-7 py-3 text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            Launch Platform <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
          <Link
            href="/public-verify"
            className="btn-secondary w-full sm:w-auto px-6 py-3 text-sm font-bold shadow-xs hover:border-primary transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-primary-hover mr-1.5" /> Verify Credential
          </Link>
        </div>

        {/* Trust Guarantees Strip */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-text-muted">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-status-success" /> Zero Central Honeypots
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-status-success" /> AES-256-GCM Client Encryption
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-status-success" /> W3C & EIP-712 Standard
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-status-success" /> Circom 2 Groth16 ZK-Proofs
          </span>
        </div>

        {/* 4 Feature Pillars (Responsive: 1 col on mobile, 2 cols on tablet, 4 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-8 w-full text-left">
          
          <div className="card-bharosa p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-surface-2 border border-primary/30 flex items-center justify-center text-primary-hover font-bold shadow-xs">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-text">Self-Sovereign DID</h3>
                <p className="text-xs text-text-muted leading-relaxed mt-1">
                  Holders own their decentralized identifiers (W3C DID). No centralized server, passwords, or data breach honeypots.
                </p>
              </div>
            </div>
          </div>

          <div className="card-bharosa p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-surface-2 border border-primary/30 flex items-center justify-center text-primary-hover font-bold shadow-xs">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-text">Client Encrypted</h3>
                <p className="text-xs text-text-muted leading-relaxed mt-1">
                  AES-256-GCM in-browser cryptography. Plaintext never leaves client RAM; ciphertext is pinned to IPFS.
                </p>
              </div>
            </div>
          </div>

          <div className="card-bharosa p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-surface-2 border border-primary/30 flex items-center justify-center text-primary-hover font-bold shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-text">Verifiable Credentials</h3>
                <p className="text-xs text-text-muted leading-relaxed mt-1">
                  W3C standard with EIP-712 cryptographic proofs signed by accredited institutional authority keys.
                </p>
              </div>
            </div>
          </div>

          <div className="card-bharosa p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-surface-2 border border-primary/30 flex items-center justify-center text-primary-hover font-bold shadow-xs">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-text">ABAC Access Control</h3>
                <p className="text-xs text-text-muted leading-relaxed mt-1">
                  Time-bound, role-based access delegation using ECIES key re-encryption with 1-click on-chain revocation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
