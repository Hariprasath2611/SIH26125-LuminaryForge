import React from 'react';
import { ShieldCheck, ArrowRight, Lock, Key, Award, FileCheck2 } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 max-w-6xl mx-auto">
      {/* Brand Header */}
      <div className="flex items-center gap-3 mb-6 bg-surface px-4 py-2 rounded-full border border-border">
        <ShieldCheck className="w-5 h-5 text-primary" />
        <span className="text-xs uppercase tracking-widest font-bold text-text-muted">
          Smart India Hackathon 2026 · PS SIH26125 · Team LUMINARYFORGE
        </span>
      </div>

      <div className="text-center space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Bharosa <span className="text-primary font-normal block md:inline">(भरोसा)</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted font-medium">
          Trust, Owned by You.
        </p>
        <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
          Self-sovereign identity, decentralized access control (ABAC), browser-encrypted IPFS storage,
          and Zero-Knowledge credential verification anchored immutably on-chain.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <a href="/dashboard" className="btn-primary">
          Launch App <ArrowRight className="w-4 h-4 ml-1" />
        </a>
        <a href="/public-verify" className="btn-secondary">
          Verify a Credential
        </a>
      </div>

      {/* Hero Feature Strip */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 w-full">
        <div className="card-bharosa p-5 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-primary-hover font-bold">
            <Key className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base">Self-Sovereign DID</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            Holders control their DID. No central login server, passwords, or data breach honeypots.
          </p>
        </div>

        <div className="card-bharosa p-5 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-primary-hover font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base">Client Encrypted</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            AES-256-GCM browser encryption. Keys never leave memory. Stored securely on IPFS.
          </p>
        </div>

        <div className="card-bharosa p-5 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-primary-hover font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base">Verifiable Credentials</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            W3C standard with EIP-712 cryptographic proofs signed by university authorities.
          </p>
        </div>

        <div className="card-bharosa p-5 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center text-primary-hover font-bold">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-base">ABAC Access Control</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            Time-bound, role-based access delegation with one-click on-chain instant revocation.
          </p>
        </div>
      </div>
    </main>
  );
}
