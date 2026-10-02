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
    <section id="why-us" className="py-20 sm:py-28 bg-[#F7FBEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#65A30D] bg-[#ECFCCB] px-4 py-1.5 rounded-full mb-3 border border-[#D9F99D]">
            <Sparkles className="w-3.5 h-3.5 text-[#65A30D]" />
            <span>Cryptographic Superiority</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-anton text-[#1A2E05] uppercase tracking-wide mb-4 leading-tight">
            Why Bharosa Outclasses Legacy Identity
          </h2>
          <p className="text-sm sm:text-base text-[#4D6B2A] leading-relaxed max-w-2xl mx-auto">
            See how sovereign zero-knowledge architecture compares against centralized government portals and corporate cloud silos.
          </p>
        </div>

        {/* 3 Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="bg-[#FFFFFF] border-2 border-[#ECFCCB] hover:border-[#84CC16] p-7 sm:p-8 rounded-3xl shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-anton text-xl text-[#1A2E05] uppercase tracking-wide mb-2.5">
                Zero-Knowledge Privacy
              </h3>
              <p className="text-xs sm:text-sm text-[#4D6B2A] leading-relaxed">
                Prove your graduation, age over 21, or professional license without revealing your grades, birthdate,
                or confidential personal identification numbers.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#ECFCCB]/60 text-[10px] font-bold text-[#65A30D] uppercase tracking-wider">
              Circom 2.1 + Groth16
            </div>
          </div>

          <div className="bg-[#FFFFFF] border-2 border-[#ECFCCB] hover:border-[#84CC16] p-7 sm:p-8 rounded-3xl shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center mb-5">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="font-anton text-xl text-[#1A2E05] uppercase tracking-wide mb-2.5">
                Uncensorable IPFS Custody
              </h3>
              <p className="text-xs sm:text-sm text-[#4D6B2A] leading-relaxed">
                Files are encrypted locally on your device with AES-256-GCM before ever touching the network. Pinned to
                IPFS content-addressed storage for eternal, tamper-evident availability.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#ECFCCB]/60 text-[10px] font-bold text-[#65A30D] uppercase tracking-wider">
              AES-256-GCM + Helia Pinning
            </div>
          </div>

          <div className="bg-[#FFFFFF] border-2 border-[#ECFCCB] hover:border-[#84CC16] p-7 sm:p-8 rounded-3xl shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-anton text-xl text-[#1A2E05] uppercase tracking-wide mb-2.5">
                Zero-Gas Meta-Transactions
              </h3>
              <p className="text-xs sm:text-sm text-[#4D6B2A] leading-relaxed">
                Users never need MATIC or gas tokens to register their DID or accept credentials. Our EIP-2771
                forwarder relayer sponsors transaction execution seamlessly.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#ECFCCB]/60 text-[10px] font-bold text-[#65A30D] uppercase tracking-wider">
              EIP-2771 / EIP-712 Relayer
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#FFFFFF] border border-[#ECFCCB] rounded-3xl shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 bg-[#FFFFFF] border-b border-[#ECFCCB] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold font-anton text-[#1A2E05] uppercase tracking-wide">
                Feature-By-Feature Protocol Comparison
              </h3>
              <p className="text-xs sm:text-sm text-[#4D6B2A] mt-1">
                Built according to W3C Decentralized Identifier and OpenID Foundation specifications.
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold text-[#1A2E05] bg-[#ECFCCB] px-3 py-1 rounded-full border border-[#84CC16]/60">
              Polygon Amoy Native
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#ECFCCB] bg-[#F7FBEF] text-[11px] font-bold text-[#1A2E05] uppercase tracking-wider">
                  <th className="py-4 sm:py-5 px-5 sm:px-6">Capability</th>
                  <th className="py-4 sm:py-5 px-5 sm:px-6 bg-[#ECFCCB]/60 text-[#1A2E05] border-x border-[#D9F99D]">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#65A30D]" />
                      <span>Bharosa Protocol (Web3)</span>
                    </div>
                  </th>
                  <th className="py-4 sm:py-5 px-5 sm:px-6 text-stone-600">Centralized Government Portal</th>
                  <th className="py-4 sm:py-5 px-5 sm:px-6 text-stone-600">Web2 Cloud Storage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECFCCB] text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F7FBEF]/60 transition-colors">
                    <td className="py-4 sm:py-5 px-5 sm:px-6 font-semibold text-[#1A2E05]">{row.feature}</td>
                    <td className="py-4 sm:py-5 px-5 sm:px-6 bg-[#ECFCCB]/30 font-bold text-[#1A2E05] border-x border-[#D9F99D]">
                      <div className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-[#65A30D] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{row.bharosa}</span>
                      </div>
                    </td>
                    <td className="py-4 sm:py-5 px-5 sm:px-6 text-[#4D6B2A] text-xs sm:text-sm">
                      <div className="flex items-start space-x-2">
                        <X className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span>{row.digilocker}</span>
                      </div>
                    </td>
                    <td className="py-4 sm:py-5 px-5 sm:px-6 text-[#4D6B2A] text-xs sm:text-sm">
                      <div className="flex items-start space-x-2">
                        <X className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span>{row.web2}</span>
                      </div>
                    </td>
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
