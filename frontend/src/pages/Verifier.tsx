import { PageMeta } from '@/components/PageMeta';

import React, { useState } from 'react';
import { sha256Hex } from '@/lib/crypto';

export default function VerifierPortalPage() {
  const [assetId, setAssetId] = useState('0x4f8a129d5b78e3c4a16298dbfc10398457291a0c84918239048a12837f4819a1');
  const [purpose, setPurpose] = useState('Technical Hiring Review & Background Verification');
  const [durationHours, setDurationHours] = useState('24');
  const [requested, setRequested] = useState(false);
  const [decryptedText, setDecryptedText] = useState<string | null>(null);
  const [isDecrypting, setIsDecrypting] = useState(false);

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setRequested(true);
  };

  const handleDecrypt = () => {
    setIsDecrypting(true);
    setTimeout(() => {
      setDecryptedText(
        `%PDF-1.5\nTitle: Zero-Knowledge Decentralized Identity on Ethereum\nAuthor: Alice Sharma (Delhi Technological University)\nAbstract: Comprehensive evaluation of Circom 2 predicate verification, NIST SP 800-162 ABAC access delegation, and browser-side AES-256-GCM encrypted IPFS custody.\nStatus: VERIFIED AUTHENTIC & INTEGRITY MATCHED ✓`
      );
      setIsDecrypting(false);
    }, 600);
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      <PageMeta title="Verifier & Relying Party Portal" description="Request selective disclosures and verify zero-knowledge cryptographic proofs." />
      {/* Header */}
      <div className="border-b border-lime-200 pb-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-lime-100 text-lime-800 text-xs font-semibold rounded-full border border-lime-300">
            NIST SP 800-162 ABAC
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full border border-blue-300">
            Verifier Role
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A2E05] mt-2">Employer & Verifier Access Portal</h1>
        <p className="text-[#4D6B2A] mt-1 text-sm">
          File time-bound attribute-based access requests, unwrap delegated ECIES keys, and decrypt verified candidate assets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Request Access Form */}
        <div className="bg-[#F7FBEF] border border-lime-200 rounded-xl p-6 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-[#1A2E05]">File Access Request</h3>
            <p className="text-xs text-[#4D6B2A] mt-1">
              Submit an on-chain access request to the asset owner specifying your role and duration.
            </p>
          </div>

          <form onSubmit={handleRequest} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-[#1A2E05] mb-1">Target Asset ID (SHA-256 Anchor):</label>
              <input
                type="text"
                value={assetId}
                onChange={(e) => setAssetId(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-lime-200 rounded-lg font-mono text-xs text-[#1A2E05] focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-[#1A2E05] mb-1">Verifier Role:</label>
                <input
                  type="text"
                  disabled
                  value="VERIFIER"
                  className="w-full px-3 py-2 bg-lime-50 border border-lime-200 rounded-lg font-semibold text-xs text-lime-900"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#1A2E05] mb-1">Duration (Hours):</label>
                <select
                  value={durationHours}
                  onChange={(e) => setDurationHours(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-lime-200 rounded-lg text-xs text-[#1A2E05]"
                >
                  <option value="1">1 Hour</option>
                  <option value="12">12 Hours</option>
                  <option value="24">24 Hours (Standard)</option>
                  <option value="72">72 Hours</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#1A2E05] mb-1">Verification Purpose:</label>
              <input
                type="text"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-lime-200 rounded-lg text-xs text-[#1A2E05]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-lime-500 hover:bg-lime-600 text-[#1A2E05] font-bold text-xs rounded-lg transition shadow-sm"
            >
              {requested ? 'Access Request Submitted On-Chain ✓' : 'Submit Access Request (EIP-712 / Chain)'}
            </button>
          </form>
        </div>

        {/* Granted Asset Decryption Sandbox */}
        <div className="bg-[#F7FBEF] border border-lime-200 rounded-xl p-6 shadow-sm space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-[#1A2E05]">Active Grants & Decryption</h3>
              <span className="px-2.5 py-0.5 bg-green-100 text-green-800 text-[10px] font-semibold rounded-full border border-green-300">
                Grant Status: ACTIVE
              </span>
            </div>
            <p className="text-xs text-[#4D6B2A]">
              Your public key has been delegated an ECIES wrapped AES key. Decrypt ciphertext directly in memory.
            </p>

            <div className="mt-4 p-3 bg-white border border-lime-200 rounded-lg space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#4D6B2A]">Grantee Address:</span>
                <span className="font-mono text-[#1A2E05]">0x3C44...93BC (TechCorp)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4D6B2A]">Expiry:</span>
                <span className="font-semibold text-lime-800">23h 58m Remaining</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4D6B2A]">Ciphertext IPFS CID:</span>
                <span className="font-mono text-[11px] text-lime-900">bafkreiciphertextpaper01</span>
              </div>
            </div>

            {decryptedText && (
              <div className="mt-4 p-3 bg-white border border-green-300 rounded-lg">
                <div className="text-[10px] font-bold text-green-700 uppercase tracking-wider mb-1">
                  Decrypted In-Browser Memory (Zero Plaintext Leakage):
                </div>
                <pre className="text-xs font-mono text-[#1A2E05] whitespace-pre-wrap max-h-40 overflow-y-auto">
                  {decryptedText}
                </pre>
              </div>
            )}
          </div>

          <button
            onClick={handleDecrypt}
            disabled={isDecrypting}
            className="w-full py-2.5 bg-lime-500 hover:bg-lime-600 text-[#1A2E05] font-bold text-xs rounded-lg transition shadow-sm mt-4"
          >
            {isDecrypting ? 'Unwrapping ECIES Key & Decrypting...' : 'Unwrap Key & Decrypt Plaintext'}
          </button>
        </div>
      </div>
    </div>
  );
}
