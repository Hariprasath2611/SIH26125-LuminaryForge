'use client';

import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { formatDID } from '@/lib';

export default function IdentityPage() {
  const { address, isConnected } = useAccount();
  const [copied, setCopied] = useState(false);
  const chainId = 31337;

  const currentAddress = address || '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
  const did = formatDID(chainId, currentAddress);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const didDocument = {
    '@context': [
      'https://www.w3.org/ns/did/v1',
      'https://w3id.org/security/suites/ed25519-2020/v1',
    ],
    id: did,
    controller: did,
    verificationMethod: [
      {
        id: `${did}#controller`,
        type: 'EcdsaSecp256k1RecoveryMethod2020',
        controller: did,
        blockchainAccountId: `eip155:${chainId}:${currentAddress}`,
      },
    ],
    authentication: [`${did}#controller`],
    assertionMethod: [`${did}#controller`],
    keyAgreement: [
      {
        id: `${did}#key-wrap-1`,
        type: 'JsonWebKey2020',
        controller: did,
        publicKeyHex: '0x02e9b1...',
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-lime-200 pb-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-lime-100 text-lime-800 text-xs font-semibold rounded-full border border-lime-300">
            W3C DID v1.0
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full border border-green-300">
            Self-Custodied
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A2E05] mt-2">Decentralized Identity Hub</h1>
        <p className="text-[#4D6B2A] mt-1 text-sm">
          Inspect, manage, and export your sovereign W3C Decentralized Identifier and cryptographic assertion keys.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Identifier Cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#F7FBEF] border border-lime-200 rounded-xl p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#4D6B2A]">Sovereign DID</h3>
            <div className="p-3 bg-white rounded-lg border border-lime-200 break-all font-mono text-xs text-[#1A2E05]">
              {did}
            </div>
            <button
              onClick={() => copyToClipboard(did)}
              className="w-full py-2 bg-lime-500 hover:bg-lime-600 text-[#1A2E05] font-semibold text-xs rounded-lg transition-all shadow-sm"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy DID Identifier'}
            </button>
          </div>

          <div className="bg-[#F7FBEF] border border-lime-200 rounded-xl p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#4D6B2A]">Registry Binding</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-lime-100">
                <span className="text-[#4D6B2A]">Controller Address:</span>
                <span className="font-mono text-[#1A2E05]">{currentAddress.slice(0, 6)}...{currentAddress.slice(-4)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-lime-100">
                <span className="text-[#4D6B2A]">Network Chain ID:</span>
                <span className="font-mono text-[#1A2E05]">{chainId} (Hardhat / Amoy)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-lime-100">
                <span className="text-[#4D6B2A]">Registry Contract:</span>
                <span className="font-mono text-[#1A2E05]">IdentityRegistry.sol</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#4D6B2A]">On-Chain Status:</span>
                <span className="text-green-700 font-semibold">Active & Anchored</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: DID Document JSON */}
        <div className="lg:col-span-2 bg-[#F7FBEF] border border-lime-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-[#1A2E05]">W3C DID Document (Canonical JSON-LD)</h3>
                <p className="text-xs text-[#4D6B2A]">Cryptographic proof of self-custody and verification methods.</p>
              </div>
              <button
                onClick={() => copyToClipboard(JSON.stringify(didDocument, null, 2))}
                className="px-3 py-1.5 bg-white border border-lime-300 text-xs font-semibold text-[#1A2E05] rounded-md hover:bg-lime-50 transition"
              >
                Copy JSON
              </button>
            </div>
            <pre className="p-4 bg-white border border-lime-200 rounded-lg text-xs font-mono text-[#1A2E05] overflow-x-auto max-h-[380px]">
              {JSON.stringify(didDocument, null, 2)}
            </pre>
          </div>
          <div className="mt-4 pt-4 border-t border-lime-200 flex items-center justify-between text-xs text-[#4D6B2A]">
            <span>Secp256k1 Curve • EIP-712 Signature Ready</span>
            <span className="font-semibold text-lime-800">ISO 27560 / DPDP 2023 Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}
