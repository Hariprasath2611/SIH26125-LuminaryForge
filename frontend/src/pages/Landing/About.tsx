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
    <section id="about" className="py-20 bg-[#FFFFFF] border-y border-[#ECFCCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#65A30D] bg-[#ECFCCB] px-3.5 py-1.5 rounded-full">
            The Sovereign Shift
          </span>
          <h2 className="text-4xl sm:text-5xl font-anton text-[#1A2E05] uppercase tracking-wide mt-3 mb-4">
            How Bharosa Replaces Centralized Vulnerability
          </h2>
          <p className="text-base text-[#4D6B2A] leading-relaxed">
            Centralized databases create single points of failure, tracking cookies, and data breach liability.
            Bharosa puts the individual in direct, cryptographic ownership of their identity and data.
          </p>
        </div>

        {/* Problem vs Solution Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Centralized Problem */}
          <div className="p-8 rounded-3xl bg-red-50/50 border border-red-200">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-5">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-anton text-red-950 uppercase tracking-wide mb-3">
              The Centralized Flaw
            </h3>
            <ul className="space-y-3 text-sm text-red-900/80">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">&times;</span>
                Central server data breaches expose millions of personal records simultaneously.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">&times;</span>
                Platforms can unilaterally freeze, revoke, or delete your credentials without consent.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">&times;</span>
                Verifiers receive full plaintext documents, violating data minimization principles.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">&times;</span>
                Identity providers log every time you authenticate, compiling behavioral tracking dossiers.
              </li>
            </ul>
          </div>

          {/* Bharosa Sovereign Solution */}
          <div className="p-8 rounded-3xl bg-[#ECFCCB]/40 border-2 border-[#84CC16]">
            <div className="w-12 h-12 rounded-2xl bg-[#84CC16] text-[#1A2E05] flex items-center justify-center mb-5 shadow-xs">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold font-anton text-[#1A2E05] uppercase tracking-wide mb-3">
              The Bharosa Sovereign Solution
            </h3>
            <ul className="space-y-3 text-sm text-[#1A2E05]">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#65A30D] mr-2 shrink-0 mt-0.5" />
                Zero-knowledge proofs mathematically verify facts without ever disclosing sensitive plaintext.
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#65A30D] mr-2 shrink-0 mt-0.5" />
                End-to-end client encryption: neither Bharosa servers nor IPFS nodes can read your files.
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#65A30D] mr-2 shrink-0 mt-0.5" />
                Polygon Amoy immutable smart contracts guarantee that credentials cannot be altered or fabricated.
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#65A30D] mr-2 shrink-0 mt-0.5" />
                Social recovery guardians ensure you never permanently lose access to your sovereign identity.
              </li>
            </ul>
          </div>
        </div>

        {/* 4-Step Interactive Lifecycle */}
        <div className="bg-[#F7FBEF] border border-[#ECFCCB] rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-anton text-[#1A2E05] uppercase tracking-wide">
              The 4-Step Trust Lifecycle
            </h3>
            <p className="text-xs sm:text-sm text-[#4D6B2A] mt-2">
              From accredited issuance to zero-knowledge verification in 4 sovereign steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, idx) => (
              <div
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                  activeStep === idx
                    ? 'bg-[#FFFFFF] border-[#84CC16] shadow-md -translate-y-1'
                    : 'bg-[#FFFFFF]/60 border-[#ECFCCB] hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-anton text-3xl text-[#84CC16]">{s.step}</span>
                  <span className="text-[10px] font-mono font-bold bg-[#ECFCCB] text-[#4D6B2A] px-2 py-0.5 rounded">
                    {s.badge}
                  </span>
                </div>
                <h4 className="font-anton text-lg text-[#1A2E05] uppercase tracking-wide mb-1">{s.title}</h4>
                <p className="text-xs font-semibold text-[#65A30D] mb-2">{s.subtitle}</p>
                <p className="text-xs text-[#4D6B2A] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
