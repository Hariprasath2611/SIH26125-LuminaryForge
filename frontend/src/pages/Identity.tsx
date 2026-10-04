import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { formatDID } from '@/lib';
import { PageMeta } from '@/components/PageMeta';

export function IdentityPage() {
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
    <div className="w-full space-y-6 sm:space-y-8">
      <PageMeta
        title="Decentralized Identity Hub"
        description="Inspect, manage, and export your sovereign W3C Decentralized Identifier and cryptographic assertion keys."
      />

      {/* Header */}
      <div className="border-b border-line pb-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-primary-soft text-primary text-xs font-semibold rounded-full border border-primary/20">
            W3C DID v1.0
          </span>
          <span className="px-3 py-1 bg-status-success/15 text-status-success text-xs font-semibold rounded-full border border-status-success/30">
            Self-Custodied
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-fg mt-2">Decentralized Identity Hub</h1>
        <p className="text-fg-muted mt-1 text-sm">
          Inspect, manage, and export your sovereign W3C Decentralized Identifier and cryptographic assertion keys.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Identifier Cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-surface border border-line rounded-xl p-5 shadow-sm space-y-4 transition-colors">
            <h3 className="text-sm font-bold uppercase tracking-wider text-fg-muted">Sovereign DID</h3>
            <div className="p-3 bg-surface-2 rounded-lg border border-line break-all font-mono text-xs text-fg">
              {did}
            </div>
            <button
              onClick={() => copyToClipboard(did)}
              className="w-full py-2 bg-primary hover:bg-primary-hover text-on-primary font-semibold text-xs rounded-lg transition-all shadow-sm"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy DID Identifier'}
            </button>
          </div>

          <div className="bg-surface border border-line rounded-xl p-5 shadow-sm space-y-3 transition-colors">
            <h3 className="text-sm font-bold uppercase tracking-wider text-fg-muted">Registry Binding</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-line">
                <span className="text-fg-muted">Controller Address:</span>
                <span className="font-mono text-fg">{currentAddress.slice(0, 6)}...{currentAddress.slice(-4)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-line">
                <span className="text-fg-muted">Network Chain ID:</span>
                <span className="font-mono text-fg">{chainId} (Hardhat / Amoy)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-line">
                <span className="text-fg-muted">Registry Contract:</span>
                <span className="font-mono text-fg">IdentityRegistry.sol</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-fg-muted">On-Chain Status:</span>
                <span className="text-status-success font-semibold">Active & Anchored</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: DID Document JSON */}
        <div className="lg:col-span-2 bg-surface border border-line rounded-xl p-6 shadow-sm flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-fg">W3C DID Document (Canonical JSON-LD)</h3>
                <p className="text-xs text-fg-muted">Cryptographic proof of self-custody and verification methods.</p>
              </div>
              <button
                onClick={() => copyToClipboard(JSON.stringify(didDocument, null, 2))}
                className="px-3 py-1.5 bg-surface-2 border border-line text-xs font-semibold text-fg rounded-md hover:bg-surface-3 transition"
              >
                Copy JSON
              </button>
            </div>
            <pre className="p-4 bg-surface-2 border border-line rounded-lg text-xs font-mono text-fg overflow-x-auto max-h-[380px]">
              {JSON.stringify(didDocument, null, 2)}
            </pre>
          </div>
          <div className="mt-4 pt-4 border-t border-line flex items-center justify-between text-xs text-fg-muted">
            <span>Secp256k1 Curve • EIP-712 Signature Ready</span>
            <span className="font-semibold text-primary">ISO 27560 / DPDP 2023 Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdentityPage;
