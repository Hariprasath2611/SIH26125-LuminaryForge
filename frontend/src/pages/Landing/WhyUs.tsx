import React from 'react';
import { Sparkles, HardDrive, Zap, Check, X, ShieldCheck } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Data Ownership & Custody',
    bharosa: 'User holds private keys & encrypted shards',
    digilocker: 'Government centralized server repository',
    web2: 'Corporate cloud (Google, Microsoft, AWS)',
  },
  {
    feature: 'Selective Disclosure (ZK)',
    bharosa: 'Groth16 SNARKs prove facts with zero data leak',
    digilocker: 'Raw full document transmitted to verifier',
    web2: 'Full PDF / Image shared with 3rd parties',
  },
  {
    feature: 'Censorship Resistance',
    bharosa: 'Decentralized Polygon Amoy + IPFS pin',
    digilocker: 'Subject to administrative revoking/locking',
    web2: 'Account ban results in complete data loss',
  },
  {
    feature: 'Key Loss & Recovery',
    bharosa: 'Decentralized Multi-Guardian Social Recovery',
    digilocker: 'Aadhaar OTP + centralized admin reset',
    web2: 'Email reset or unrecoverable lockouts',
  },
  {
    feature: 'Verification Speed & Gas',
    bharosa: '<50ms mathematically, 0 gas (Relayer)',
    digilocker: 'Slow API endpoints & server rate limits',
    web2: 'Proprietary enterprise OAuth/APIs',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-[#F7FBEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#65A30D] bg-[#ECFCCB] px-3.5 py-1.5 rounded-full">
            Cryptographic Superiority
          </span>
          <h2 className="text-4xl sm:text-5xl font-anton text-[#1A2E05] uppercase tracking-wide mt-3 mb-4">
            Why Bharosa Outclasses Legacy Identity
          </h2>
          <p className="text-base text-[#4D6B2A] leading-relaxed">
            See how sovereign zero-knowledge architecture compares against government portals and cloud silos.
          </p>
        </div>

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#FFFFFF] border-2 border-[#ECFCCB] hover:border-[#84CC16] p-8 rounded-3xl shadow-sm transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-[#1A2E05] uppercase tracking-wide mb-2">
              Zero-Knowledge Privacy
            </h3>
            <p className="text-xs text-[#4D6B2A] leading-relaxed">
              Prove your graduation, age over 21, or professional license without revealing your grades, birthdate,
              or confidential personal identification numbers.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border-2 border-[#ECFCCB] hover:border-[#84CC16] p-8 rounded-3xl shadow-sm transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center mb-5">
              <HardDrive className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-[#1A2E05] uppercase tracking-wide mb-2">
              Uncensorable IPFS Custody
            </h3>
            <p className="text-xs text-[#4D6B2A] leading-relaxed">
              Files are encrypted locally on your device with AES-256-GCM before ever touching the network. Pinned to
              IPFS content-addressed storage for eternal, tamper-evident availability.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border-2 border-[#ECFCCB] hover:border-[#84CC16] p-8 rounded-3xl shadow-sm transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center mb-5">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-[#1A2E05] uppercase tracking-wide mb-2">
              Zero-Gas Meta-Transactions
            </h3>
            <p className="text-xs text-[#4D6B2A] leading-relaxed">
              Users never need MATIC or gas tokens to register their DID or accept credentials. Our Biconomy /
              EIP-2771 forwarder relayer sponsors transaction execution seamlessly.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#FFFFFF] border border-[#ECFCCB] rounded-3xl shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 bg-[#FFFFFF] border-b border-[#ECFCCB]">
            <h3 className="text-2xl font-bold font-anton text-[#1A2E05] uppercase tracking-wide">
              Feature-By-Feature Protocol Comparison
            </h3>
            <p className="text-xs sm:text-sm text-[#4D6B2A] mt-1">
              Built according to W3C Decentralized Identifier and OpenID Foundation standards.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#ECFCCB] bg-[#F7FBEF] text-[11px] font-bold text-[#1A2E05] uppercase tracking-wider">
                  <th className="py-4 px-6">Capability</th>
                  <th className="py-4 px-6 bg-[#ECFCCB]/60 text-[#1A2E05] border-x border-[#D9F99D]">
                    Bharosa Protocol (Web3)
                  </th>
                  <th className="py-4 px-6">Centralized Digilocker</th>
                  <th className="py-4 px-6">Web2 Cloud Storage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECFCCB] text-xs">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F7FBEF]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#1A2E05]">{row.feature}</td>
                    <td className="py-4 px-6 bg-[#ECFCCB]/30 font-bold text-[#1A2E05] border-x border-[#D9F99D]">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#65A30D] shrink-0" />
                        <span>{row.bharosa}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#4D6B2A]">{row.digilocker}</td>
                    <td className="py-4 px-6 text-[#4D6B2A]">{row.web2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
