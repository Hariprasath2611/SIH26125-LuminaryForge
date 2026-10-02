import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Send,
  Lock,
  Share2,
  CheckCircle2,
  ArrowRight,
  Database,
  EyeOff,
  Sparkles,
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'ISSUE',
    subtitle: 'Accredited Issuance',
    desc: 'Authorized institutions (universities, employers, government entities) sign W3C-compliant digital credentials using on-chain accredited signing keys.',
    badge: 'ECDSA secp256k1',
  },
  {
    step: '02',
    title: 'OWN',
    subtitle: 'Client Encrypted Custody',
    desc: 'Credentials and documents are encrypted directly in your browser using AES-256-GCM. The encrypted ciphertext is pinned to IPFS. Only your wallet holds the decryption keys.',
    badge: 'AES-256-GCM + IPFS',
  },
  {
    step: '03',
    title: 'SHARE',
    subtitle: 'Selective Privacy Proofs',
    desc: 'Generate Zero-Knowledge SNARK proofs (Groth16) or create time-bound, cryptographically restricted access tokens for specific third parties without giving away master files.',
    badge: 'Groth16 SNARKs',
  },
  {
    step: '04',
    title: 'VERIFY',
    subtitle: 'Instant Cryptographic Verification',
    desc: 'Third-party verifiers check the mathematical proof directly on Polygon or via the public verifier in under 50 milliseconds. No API calls or database lookups required.',
    badge: '<50ms Verifiable',
  },
];

export function About() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#ECFCCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#65A30D] bg-[#ECFCCB] px-4 py-1.5 rounded-full mb-3 border border-[#D9F99D]">
            <Sparkles className="w-3.5 h-3.5 text-[#65A30D]" />
            <span>The Sovereign Shift</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-anton text-[#1A2E05] uppercase tracking-wide mb-4 leading-tight">
            How Bharosa Replaces Centralized Vulnerability
          </h2>
          <p className="text-sm sm:text-base text-[#4D6B2A] leading-relaxed max-w-2xl mx-auto">
            Centralized databases create single points of failure, surveillance tracking, and catastrophic breach liability.
            Bharosa puts the individual in direct, mathematical ownership of their identity and assets.
          </p>
        </div>

        {/* Problem vs Solution Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {/* Centralized Problem */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-red-50/60 border border-red-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shadow-xs">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-100 text-red-700 border border-red-200">
                  Legacy Risk Model
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-anton text-red-950 uppercase tracking-wide mb-4">
                The Centralized Flaw
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-red-900/85">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-black text-base leading-none mt-0.5 shrink-0">&times;</span>
                  <span>Central server data breaches expose millions of personal records simultaneously in single incidents.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-black text-base leading-none mt-0.5 shrink-0">&times;</span>
                  <span>Platforms can unilaterally freeze, revoke, or delete your credentials and certificates without consent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-black text-base leading-none mt-0.5 shrink-0">&times;</span>
                  <span>Verifiers receive full plaintext documents, violating data minimization principles and privacy regulations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-black text-base leading-none mt-0.5 shrink-0">&times;</span>
                  <span>Identity providers log every time you authenticate, compiling behavioral tracking dossiers without your insight.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bharosa Sovereign Solution */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#ECFCCB]/30 border-2 border-[#84CC16] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#84CC16]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#84CC16] text-[#1A2E05] flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#ECFCCB] text-[#1A2E05] border border-[#84CC16]">
                  Cryptographic Sovereign
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-anton text-[#1A2E05] uppercase tracking-wide mb-4">
                The Bharosa Sovereign Solution
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#1A2E05]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#65A30D] shrink-0 mt-0.5" />
                  <span>Zero-knowledge proofs mathematically verify facts without ever disclosing sensitive plaintext records.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#65A30D] shrink-0 mt-0.5" />
                  <span>End-to-end client encryption: neither Bharosa servers nor IPFS nodes can read or inspect your files.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#65A30D] shrink-0 mt-0.5" />
                  <span>Polygon Amoy immutable smart contracts guarantee that credentials cannot be altered or fabricated.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#65A30D] shrink-0 mt-0.5" />
                  <span>Social recovery guardians ensure you never permanently lose access to your sovereign identity and vault.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4-Step Interactive Lifecycle */}
        <div className="bg-[#F7FBEF] border border-[#ECFCCB] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#65A30D] bg-white px-3 py-1 rounded-full border border-[#ECFCCB]">
              Deterministic Protocol Flow
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-anton text-[#1A2E05] uppercase tracking-wide mt-2">
              The 4-Step Trust Lifecycle
            </h3>
            <p className="text-xs sm:text-sm text-[#4D6B2A] mt-2 leading-relaxed">
              From accredited issuance to zero-knowledge verification in 4 sovereign steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {STEPS.map((s, idx) => (
              <div
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between ${
                  activeStep === idx
                    ? 'bg-[#FFFFFF] border-[#84CC16] shadow-md -translate-y-1 ring-2 ring-[#84CC16]/20'
                    : 'bg-[#FFFFFF]/70 border-[#ECFCCB] hover:bg-[#FFFFFF] hover:border-[#84CC16]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-anton text-3xl transition-colors ${activeStep === idx ? 'text-[#65A30D]' : 'text-[#84CC16]'}`}>
                      {s.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-[#ECFCCB] text-[#1A2E05] px-2 py-0.5 rounded border border-[#D9F99D]">
                      {s.badge}
                    </span>
                  </div>
                  <h4 className="font-anton text-lg text-[#1A2E05] uppercase tracking-wide mb-1">{s.title}</h4>
                  <p className="text-xs font-bold text-[#65A30D] mb-2">{s.subtitle}</p>
                  <p className="text-xs text-[#4D6B2A] leading-relaxed">{s.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#ECFCCB]/60 flex items-center justify-between text-[11px] font-semibold text-[#65A30D]">
                  <span>Step {idx + 1} of 4</span>
                  <div className={`w-2 h-2 rounded-full ${activeStep === idx ? 'bg-[#84CC16]' : 'bg-[#ECFCCB]'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
