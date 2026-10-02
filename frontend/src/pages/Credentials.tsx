import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Download,
  Share2,
  ExternalLink,
  QrCode,
  Copy,
  Check,
  Eye,
  FileBadge2,
} from 'lucide-react';
import { formatDID } from '@/lib';
import { PageMeta } from '@/components/PageMeta';

export function CredentialsPage() {
  const { address, chainId } = useAccount();
  const currentChainId = chainId || 31337;
  const userAddress = address || '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
  const userDID = formatDID(currentChainId, userAddress);

  const [selectedVC, setSelectedVC] = useState<any | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);

  const credentials = [
    {
      id: 'urn:uuid:dtu-degree-2026-cs',
      type: ['VerifiableCredential', 'UniversityDegreeCredential'],
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Delhi Technological University',
      cgpa: 9.4,
      gradYear: 2026,
      issuanceDate: '2026-06-15T10:00:00.000Z',
      issuer: {
        id: 'did:ethr:31337:0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
        address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
        name: 'Delhi Technological University',
      },
      credentialSubject: {
        id: userDID,
        degree: 'Bachelor of Technology in Computer Science',
        cgpa: 9.4,
        graduationYear: 2026,
      },
      proof: {
        type: 'EthereumEip712Signature2021',
        created: '2026-06-15T10:00:00.000Z',
        proofPurpose: 'assertionMethod',
        verificationMethod: 'did:ethr:31337:0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266#controller',
        proofValue:
          '0x7a8b9c1d2e3f405162738495a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b56c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d1b',
      },
    },
    {
      id: 'urn:uuid:national-web3-fellowship',
      type: ['VerifiableCredential', 'ProfessionalExcellenceCredential'],
      title: 'National Digital Identity & Cryptography Fellowship',
      institution: 'Ministry of Electronics & Information Technology',
      cgpa: null,
      gradYear: 2026,
      issuanceDate: '2026-09-29T18:00:00.000Z',
      issuer: {
        id: 'did:ethr:31337:0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
        address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
        name: 'Digital India Governance Council',
      },
      credentialSubject: {
        id: userDID,
        award: 'Distinguished Fellow in Sovereign Cryptography',
        organization: 'Enterprise Trust Consortium',
      },
      proof: {
        type: 'EthereumEip712Signature2021',
        created: '2026-09-29T18:00:00.000Z',
        proofPurpose: 'assertionMethod',
        verificationMethod: 'did:ethr:31337:0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266#controller',
        proofValue:
          '0x8b9c0d1e2f3a4b56c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b07a8b9c1d2e3f405162738495a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b51c',
      },
    },
  ];

  const handleExportJSON = (vc: any) => {
    const blob = new Blob([JSON.stringify(vc, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${vc.id.replace(/:/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = (vc: any) => {
    const url = `${window.location.origin}/public-verify?vc=${encodeURIComponent(
      JSON.stringify(vc)
    )}`;
    setShareUrl(url);
  };

  const copyShareUrl = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      <PageMeta
        title="My Credential Wallet"
        description="W3C Verifiable Credentials owned by your DID. Tamper-evident, portable, and verifiable."
      />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface p-6 rounded-2xl border border-border">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2.5">
            <Award className="w-7 h-7 text-primary-hover" />
            My Credential Wallet
          </h1>
          <p className="text-xs text-text-muted mt-1">
            W3C Verifiable Credentials owned by your DID. Tamper-evident, portable, and verifiable without contacting the university.
          </p>
        </div>

        <Link to="/issuer" className="btn-secondary self-start sm:self-auto text-xs">
          Issuer Console →
        </Link>
      </div>

      {/* Credentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {credentials.map((vc) => (
          <div key={vc.id} className="card-bharosa p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/20 text-primary-hover border border-primary/40 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  EIP-712 Verified
                </span>
                <span className="text-[11px] text-text-muted font-medium">
                  Issued: {new Date(vc.issuanceDate).toLocaleDateString()}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text leading-tight">{vc.title}</h3>
                <p className="text-xs text-text-muted font-semibold mt-1">{vc.institution}</p>
              </div>

              <div className="bg-surface p-3 rounded-xl border border-border space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-text-muted">Holder DID:</span>
                  <span className="font-mono text-[11px] truncate max-w-[180px]">{userDID}</span>
                </div>
                {vc.cgpa && (
                  <div className="flex justify-between">
                    <span className="text-text-muted">Grade / CGPA:</span>
                    <span className="font-bold text-text">{vc.cgpa} / 10.0</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-text-muted">On-Chain Anchor:</span>
                  <span className="text-status-success font-semibold">Active & Immutable ✓</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-border flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => setSelectedVC(vc)}
                className="btn-secondary flex-1 py-1.5 text-xs"
              >
                <Eye className="w-3.5 h-3.5 mr-1" /> Inspect
              </button>
              <button
                onClick={() => handleExportJSON(vc)}
                className="btn-secondary flex-1 py-1.5 text-xs"
              >
                <Download className="w-3.5 h-3.5 mr-1" /> Export
              </button>
              <button
                onClick={() => handleShare(vc)}
                className="btn-primary flex-1 py-1.5 text-xs"
              >
                <Share2 className="w-3.5 h-3.5 mr-1" /> Share
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Share / QR Modal */}
      {shareUrl && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="card-bharosa p-6 max-w-md w-full bg-white space-y-4 shadow-lime-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary-hover" /> Share Credential
              </h3>
              <button
                onClick={() => setShareUrl(null)}
                className="text-text-muted hover:text-text font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-text-muted">
              Anyone with this link can verify the authenticity, signature, and on-chain anchor without logging in.
            </p>

            <div className="flex justify-center p-4 bg-surface rounded-xl border border-border">
              <QrCode className="w-32 h-32 text-text" />
            </div>

            <div className="flex items-center gap-2 bg-surface p-2 rounded-xl border border-border">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="bg-transparent text-xs font-mono flex-1 focus:outline-none truncate"
              />
              <button onClick={copyShareUrl} className="btn-primary py-1 px-3 text-xs">
                {copied ? <Check className="w-3.5 h-3.5 mr-1 text-status-success" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inspect W3C JSON Modal */}
      {selectedVC && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="card-bharosa p-6 max-w-2xl w-full bg-white space-y-4 shadow-lime-lg max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base flex items-center gap-2">
                <FileBadge2 className="w-5 h-5 text-primary-hover" /> W3C Verifiable Credential Payload
              </h3>
              <button
                onClick={() => setSelectedVC(null)}
                className="text-text-muted hover:text-text font-bold"
              >
                ✕
              </button>
            </div>

            <pre className="flex-1 overflow-auto bg-surface p-4 rounded-xl border border-border text-[11px] font-mono text-text">
              {JSON.stringify(selectedVC, null, 2)}
            </pre>

            <div className="flex justify-end gap-2 pt-2 border-t border-border">
              <button
                onClick={() => handleExportJSON(selectedVC)}
                className="btn-secondary text-xs py-2"
              >
                <Download className="w-4 h-4 mr-1" /> Download JSON
              </button>
              <button
                onClick={() => setSelectedVC(null)}
                className="btn-primary text-xs py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CredentialsPage;
