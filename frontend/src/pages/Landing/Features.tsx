import React from 'react';
import {
  UserCheck,
  Lock,
  Sparkles,
  Key,
  Users,
  FileClock,
  AlertTriangle,
  Zap,
} from 'lucide-react';

const FEATURES = [
  {
    icon: UserCheck,
    title: 'W3C Decentralized Identifiers',
    desc: 'Self-governed did:bharosa IDs anchored on Polygon Amoy. You own your public key directory without ICANN or DNS centralization.',
  },
  {
    icon: Lock,
    title: 'Client-Side AES-256-GCM',
    desc: 'All documents, certificates, and identity files are encrypted directly in the browser with keys derived from your wallet signature before IPFS upload.',
  },
  {
    icon: Sparkles,
    title: 'Groth16 Zero-Knowledge SNARKs',
    desc: 'Mathematical zk-SNARK circuits (compiled with Circom & SnarkJS) that evaluate claims and proofs on bn128 with zero plaintext exposure.',
  },
  {
    icon: Key,
    title: 'Cryptographic ABAC Delegation',
    desc: 'Attribute-Based Access Control granting time-bound, permission-scoped decryption tokens to specific third-party organizations.',
  },
  {
    icon: Users,
    title: 'Multi-Guardian Social Recovery',
    desc: 'Never lose your identity. Designate 3 trusted guardians (colleagues, family, devices) to restore your master DID if your key is compromised.',
  },
  {
    icon: FileClock,
    title: 'Immutable On-Chain Audit Trail',
    desc: 'Tamper-evident log of credential issuance, revocations, and verifications recorded on the blockchain for indisputable legal compliance.',
  },
  {
    icon: AlertTriangle,
    title: 'Instant Emergency Freeze',
    desc: 'One-click Quick-Lock security mode that instantly pauses your DID and rejects all outgoing verifications if suspicious activity is detected.',
  },
  {
    icon: Zap,
    title: 'Gasless Meta-Transactions',
    desc: 'Biconomy / EIP-2771 forwarder relayer enables users to onboard, generate DIDs, and accept credentials completely free of gas tokens.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#65A30D] bg-[#ECFCCB] px-3.5 py-1.5 rounded-full">
            Engineering & Security
          </span>
          <h2 className="text-4xl sm:text-5xl font-anton text-[#1A2E05] uppercase tracking-wide mt-3 mb-4">
            Production-Grade Cryptographic Architecture
          </h2>
          <p className="text-base text-[#4D6B2A] leading-relaxed">
            Every layer of Bharosa is hardened with mathematical guarantees, zero-trust primitives, and enterprise scalability.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl bg-[#F7FBEF] border border-[#ECFCCB] hover:border-[#84CC16] hover:bg-[#FFFFFF] transition-all hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#ECFCCB] text-[#65A30D] group-hover:bg-[#84CC16] group-hover:text-[#1A2E05] flex items-center justify-center mb-5 transition-colors shadow-2xs">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="font-anton text-lg text-[#1A2E05] uppercase tracking-wide mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs text-[#4D6B2A] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#ECFCCB]/60 flex items-center text-[10px] font-bold text-[#65A30D] uppercase tracking-wider">
                  <span>Cryptographic Primitive</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
