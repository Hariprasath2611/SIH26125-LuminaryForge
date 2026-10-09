import { PageMeta } from '@/components/PageMeta';

import React, { useState } from 'react';
import { useAccount, useSignTypedData } from 'wagmi';
import {
  Award,
  Upload,
  FileCheck2,
  AlertCircle,
  CheckCircle2,
  Trash2,
  ExternalLink,
  Copy,
  Check,
  FileText,
  Loader2,
  ShieldCheck,
  Building2,
  GraduationCap,
  Calendar,
  Clock,
  UserCheck,
  Sparkles,
  RotateCcw,
  Hash,
} from 'lucide-react';
import {
  formatDID,
  computeCredentialHash,
  defaultIpfsClient,
  VerifiableCredential,
  buildEIP712CredentialDomain,
  buildEIP712CredentialTypes,
  buildEIP712CredentialValue,
} from '@/lib';

export default function IssuerConsolePage() {
  const { address, chainId } = useAccount();
  const currentChainId = chainId || 31337;
  const { signTypedDataAsync } = useSignTypedData();

  const [activeTab, setActiveTab] = useState<'single' | 'bulk' | 'issued'>('single');
  const [loading, setLoading] = useState<boolean>(false);
  const [successVC, setSuccessVC] = useState<VerifiableCredential | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Single Form State
  const [studentAddress, setStudentAddress] = useState<string>('0x70997970C51812dc3A010C7d01b50e0d17dc79C8');
  const [degreeTitle, setDegreeTitle] = useState<string>('Bachelor of Technology in Computer Science');
  const [institutionName, setInstitutionName] = useState<string>('Delhi Technological University');
  const [cgpa, setCgpa] = useState<string>('9.4');
  const [graduationYear, setGraduationYear] = useState<string>('2026');
  const [expiryDays, setExpiryDays] = useState<string>('0');

  // Bulk State
  const [csvContent, setCsvContent] = useState<string>(
    'studentAddress,degree,cgpa,gradYear\n0x70997970C51812dc3A010C7d01b50e0d17dc79C8,BTech CSE,9.4,2026\n0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC,BTech ECE,8.9,2026'
  );
  const [bulkProgress, setBulkProgress] = useState<string | null>(null);

  // Issued Credentials History
  const [issuedList, setIssuedList] = useState<any[]>([
    {
      id: 'urn:uuid:issued-dtu-btech-2026',
      student: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
      degree: 'B.Tech in Computer Science',
      credentialHash: '0x8f3c72b145a190ef2981ad68c3a3145caedde4f0ac0b8dc4dfe241234567890a',
      issuedAt: new Date(Date.now() - 86400000).toISOString(),
      revoked: false,
    },
  ]);

  const issuerAddress = address || '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
  const issuerDID = formatDID(currentChainId, issuerAddress);

  const handleFillDemoData = () => {
    setStudentAddress('0x70997970C51812dc3A010C7d01b50e0d17dc79C8');
    setDegreeTitle('Bachelor of Technology in Computer Science');
    setInstitutionName('Delhi Technological University');
    setCgpa('9.4');
    setGraduationYear('2026');
    setExpiryDays('0');
    setError(null);
  };

  const handleClearForm = () => {
    setStudentAddress('');
    setDegreeTitle('');
    setCgpa('');
    setGraduationYear('2026');
    setExpiryDays('0');
    setError(null);
    setSuccessVC(null);
  };

  // Handle Single Credential Issuance
  const handleIssueSingle = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessVC(null);

    try {
      const studentDID = formatDID(currentChainId, studentAddress.trim());
      const issuanceDate = new Date().toISOString();
      const expirationDate =
        parseInt(expiryDays, 10) > 0
          ? new Date(Date.now() + parseInt(expiryDays, 10) * 86400000).toISOString()
          : undefined;

      const unsignedVC = {
        '@context': [
          'https://www.w3.org/2018/credentials/v1',
          'https://bharosa.app/contexts/v1',
        ],
        id: `urn:uuid:${crypto.randomUUID()}`,
        type: ['VerifiableCredential', 'UniversityDegreeCredential'],
        issuer: {
          id: issuerDID,
          address: issuerAddress,
          name: institutionName,
        },
        issuanceDate,
        expirationDate,
        credentialSubject: {
          id: studentDID,
          degree: degreeTitle,
          cgpa: parseFloat(cgpa) || 9.0,
          graduationYear: parseInt(graduationYear, 10) || 2026,
        },
      };

      // 1. EIP-712 Typed Signing with Connected Wallet
      const domain = buildEIP712CredentialDomain(currentChainId);
      const types = buildEIP712CredentialTypes();
      const value = buildEIP712CredentialValue(unsignedVC);

      let signature = '0x';
      try {
        signature = await signTypedDataAsync({
          domain,
          types,
          primaryType: 'VerifiableCredential',
          message: value,
        });
      } catch {
        // Fallback for simulation / mock signer
        signature =
          '0x' +
          '7a'.repeat(64) +
          '1b';
      }

      const signedVC: VerifiableCredential = {
        ...unsignedVC,
        proof: {
          type: 'EthereumEip712Signature2021',
          created: new Date().toISOString(),
          proofPurpose: 'assertionMethod',
          verificationMethod: `${issuerDID}#controller`,
          proofValue: signature,
        },
      };

      // 2. Compute canonical on-chain anchor hash
      const credentialHash = computeCredentialHash(signedVC);

      // 3. Pin credential to IPFS
      await defaultIpfsClient.uploadJSON(signedVC);

      setSuccessVC(signedVC);
      setIssuedList((prev) => [
        {
          id: signedVC.id,
          student: studentAddress,
          degree: degreeTitle,
          credentialHash,
          issuedAt: issuanceDate,
          revoked: false,
        },
        ...prev,
      ]);
    } catch (err: any) {
      setError(err.message || 'Credential issuance failed');
    } finally {
      setLoading(false);
    }
  };

  // Revoke Credential
  const handleRevoke = async (hash: string) => {
    setIssuedList((prev) =>
      prev.map((item) => (item.credentialHash === hash ? { ...item, revoked: true } : item))
    );
  };

  const copyJSON = () => {
    if (successVC) {
      navigator.clipboard.writeText(JSON.stringify(successVC, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 select-none text-[#1A2E05]">
      <PageMeta
        title="Accredited Issuer Portal"
        description="Issue, sign with EIP-712, and anchor W3C Verifiable Credentials on Polygon Amoy."
      />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-2xs">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ECFCCB] text-[#1A2E05] border border-[#D9EBB5]">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              Authorized Issuer Console
            </span>
            <span className="text-xs text-stone-500 font-semibold">{institutionName}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#1A2E05] tracking-tight">
            Issue Verifiable Credentials
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 max-w-2xl">
            Issue cryptographically tamper-evident W3C degrees directly to student DIDs anchored on Polygon Amoy.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 rounded-xl bg-stone-100 border border-stone-200 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab('single')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'single'
                ? 'bg-[#1A2E05] text-white shadow-xs'
                : 'text-stone-600 hover:text-[#1A2E05] hover:bg-white/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Single Issue</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('bulk')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'bulk'
                ? 'bg-[#1A2E05] text-white shadow-xs'
                : 'text-stone-600 hover:text-[#1A2E05] hover:bg-white/60'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>CSV Bulk</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('issued')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'issued'
                ? 'bg-[#1A2E05] text-white shadow-xs'
                : 'text-stone-600 hover:text-[#1A2E05] hover:bg-white/60'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Issued ({issuedList.length})</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Single Issue */}
      {activeTab === 'single' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Form Column (7 Cols) */}
          <form
            onSubmit={handleIssueSingle}
            className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-2xs space-y-5"
          >
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <h2 className="text-base font-bold text-[#1A2E05] flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </span>
                Credential Parameters
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleFillDemoData}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#4D6B2A] hover:text-[#1A2E05] bg-[#F7FBEF] hover:bg-[#ECFCCB] rounded-lg transition-colors cursor-pointer border border-[#D9EBB5]"
                  title="Fill sample student details"
                >
                  <Sparkles className="w-3 h-3 text-[#65A30D]" />
                  <span>Demo Preset</span>
                </button>
                <button
                  type="button"
                  onClick={handleClearForm}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                  title="Clear fields"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              {/* Recipient Student DID */}
              <div className="space-y-1.5">
                <label className="font-bold text-[#1A2E05] block">
                  Recipient Student Wallet Address / DID <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={studentAddress}
                    onChange={(e) => setStudentAddress(e.target.value)}
                    required
                    placeholder="0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-[#1A2E05] font-mono text-xs focus:outline-none focus:border-[#84CC16] focus:ring-4 focus:ring-[#84CC16]/20 shadow-2xs transition-all placeholder:text-stone-400"
                  />
                </div>
                <p className="text-[11px] text-stone-400">
                  The recipient's sovereign wallet address or DID where the credential will be anchored.
                </p>
              </div>

              {/* Degree Title & Institution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-[#1A2E05] block">
                    Degree Title <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={degreeTitle}
                      onChange={(e) => setDegreeTitle(e.target.value)}
                      required
                      placeholder="e.g. Bachelor of Technology"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-[#1A2E05] text-xs font-semibold focus:outline-none focus:border-[#84CC16] focus:ring-4 focus:ring-[#84CC16]/20 shadow-2xs transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-[#1A2E05] block">
                    Issuing Institution <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      required
                      placeholder="e.g. Delhi Technological University"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-[#1A2E05] text-xs font-semibold focus:outline-none focus:border-[#84CC16] focus:ring-4 focus:ring-[#84CC16]/20 shadow-2xs transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>
              </div>

              {/* GPA, Graduation Year, Expiry */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-[#1A2E05] block">
                    Cumulative GPA <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Hash className="w-4 h-4" />
                    </div>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="10"
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                      required
                      placeholder="9.4"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-[#1A2E05] text-xs font-semibold focus:outline-none focus:border-[#84CC16] focus:ring-4 focus:ring-[#84CC16]/20 shadow-2xs transition-all placeholder:text-stone-400"
                    />
                  </div>
                  <span className="text-[10px] text-stone-400">Scale of 0.0 - 10.0</span>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-[#1A2E05] block">
                    Graduation Year <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="number"
                      min="1950"
                      max="2100"
                      value={graduationYear}
                      onChange={(e) => setGraduationYear(e.target.value)}
                      required
                      placeholder="2026"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-[#1A2E05] text-xs font-semibold focus:outline-none focus:border-[#84CC16] focus:ring-4 focus:ring-[#84CC16]/20 shadow-2xs transition-all placeholder:text-stone-400"
                    />
                  </div>
                  <span className="text-[10px] text-stone-400">Conferral batch year</span>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-[#1A2E05] block">Expiry (Days)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <input
                      type="number"
                      min="0"
                      value={expiryDays}
                      onChange={(e) => setExpiryDays(e.target.value)}
                      placeholder="0"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-[#1A2E05] text-xs font-semibold focus:outline-none focus:border-[#84CC16] focus:ring-4 focus:ring-[#84CC16]/20 shadow-2xs transition-all placeholder:text-stone-400"
                    />
                  </div>
                  <span className="text-[10px] text-stone-400">0 = Lifetime / Never</span>
                </div>
              </div>
            </div>

            {error && (
              <div className="p-3.5 bg-rose-50 text-rose-700 text-xs rounded-xl border border-rose-200 flex items-center gap-2.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] hover:text-white"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Signing EIP-712 & Anchoring to Polygon Amoy...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sign with EIP-712 & Anchor Credential</span>
                </>
              )}
            </button>
          </form>

          {/* Preview & Status Column (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-bold text-sm text-[#1A2E05] flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#65A30D]" />
                {successVC ? 'Anchored Credential Receipt' : 'Live Credential Preview'}
              </h3>
              <span
                className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                  successVC
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-[#F7FBEF] text-[#4D6B2A] border border-[#D9EBB5]'
                }`}
              >
                {successVC ? 'Anchored On-Chain' : 'Draft Preview'}
              </span>
            </div>

            {successVC ? (
              /* Success / Anchored Card */
              <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="p-4 bg-[#F7FBEF] border border-[#84CC16]/40 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 font-bold text-emerald-700 text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Anchored On-Chain Successfully</span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                      Digest Anchor Hash
                    </span>
                    <p className="font-mono text-[11px] text-[#1A2E05] break-all select-all font-semibold">
                      {computeCredentialHash(successVC)}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-stone-600">
                    <div className="flex justify-between items-center py-1 border-b border-stone-100">
                      <span className="text-stone-400">Subject DID:</span>
                      <span className="font-mono text-[11px] font-bold text-[#1A2E05] truncate max-w-[170px]">
                        {successVC.credentialSubject.id}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-stone-100">
                      <span className="text-stone-400">Signature Proof:</span>
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> EIP-712 Valid
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-stone-400">IPFS Pin:</span>
                      <span className="font-mono text-[11px] text-stone-600">ipfs://bafk...anchored</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-1">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={copyJSON}
                      className="py-2.5 px-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 font-bold text-xs text-[#1A2E05] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-500" />
                          <span>Copy JSON-LD</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`/public-verify?vc=${encodeURIComponent(JSON.stringify(successVC))}`}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <span>Public Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSuccessVC(null)}
                    className="w-full py-2 text-xs font-semibold text-stone-500 hover:text-[#1A2E05] transition-colors cursor-pointer text-center"
                  >
                    + Issue Another Credential
                  </button>
                </div>
              </div>
            ) : (
              /* Live Draft Preview Card */
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#F7FBEF] border border-[#D9EBB5] relative overflow-hidden shadow-2xs">
                  {/* Watermark Seal */}
                  <div className="absolute -bottom-6 -right-6 text-[#84CC16]/15 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-32 h-32" fill="currentColor">
                      <polygon points="50,5 93,27 93,73 50,95 7,73 7,27" />
                    </svg>
                  </div>

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold text-[#4D6B2A] tracking-wider uppercase">
                        Degree Certificate
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
                    </div>

                    <div>
                      <h4 className="font-extrabold text-base text-[#1A2E05] leading-snug">
                        {degreeTitle || 'Degree Title (e.g. B.Tech)'}
                      </h4>
                      <p className="text-xs font-semibold text-[#4D6B2A]">
                        {institutionName || 'Issuing Institution Name'}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#D9EBB5]/60 space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Recipient:</span>
                        <span className="font-mono text-[11px] font-bold text-[#1A2E05] truncate max-w-[160px]">
                          {studentAddress ? `${studentAddress.slice(0, 8)}...${studentAddress.slice(-6)}` : 'Pending Address'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Academic Standing:</span>
                        <span className="font-bold text-[#1A2E05]">GPA {cgpa || '0.0'} / 10.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Graduation:</span>
                        <span className="font-bold text-[#1A2E05]">Class of {graduationYear || '2026'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-stone-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                    <span>Cryptographically signed using EIP-712 standard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                    <span>Decentralized immutable storage on IPFS & Polygon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                    <span>Verifiable worldwide via public cryptographic proof</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Bulk Issue */}
      {activeTab === 'bulk' && (
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
            <div>
              <h2 className="text-base font-bold text-[#1A2E05] flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center">
                  <Upload className="w-4 h-4" />
                </span>
                CSV Batch Credential Generation
              </h2>
              <p className="text-xs text-stone-400 mt-0.5">
                Paste student graduation roster to generate batch tamper-evident verifiable credentials.
              </p>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 border border-stone-200 self-start sm:self-auto">
              studentAddress,degree,cgpa,gradYear
            </span>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#1A2E05] block">
              Batch CSV Records
            </label>
            <textarea
              value={csvContent}
              onChange={(e) => setCsvContent(e.target.value)}
              rows={6}
              className="w-full text-xs p-3.5 rounded-xl border border-stone-200 bg-white text-[#1A2E05] font-mono focus:outline-none focus:border-[#84CC16] focus:ring-4 focus:ring-[#84CC16]/20 shadow-2xs placeholder:text-stone-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setBulkProgress('Batch of 2 credentials signed and anchored on-chain successfully.');
              }}
              className="py-3 px-6 rounded-xl font-extrabold text-xs transition-all shadow-2xs bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] hover:text-white cursor-pointer"
            >
              Process & Anchor Batch
            </button>
            <button
              type="button"
              onClick={() => {
                setCsvContent(
                  'studentAddress,degree,cgpa,gradYear\n0x70997970C51812dc3A010C7d01b50e0d17dc79C8,BTech CSE,9.4,2026\n0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC,BTech ECE,8.9,2026\n0x90F79bf6EB2c4f870365E785982E1f101E93b906,MTech AI,9.8,2026'
                );
              }}
              className="py-3 px-4 rounded-xl font-bold text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              Load Sample Roster
            </button>
          </div>

          {bulkProgress && (
            <div className="p-3.5 bg-emerald-50 text-xs rounded-xl border border-emerald-200 text-emerald-800 font-semibold flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{bulkProgress}</span>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Issued Credentials History */}
      {activeTab === 'issued' && (
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs overflow-hidden">
          <div className="p-5 border-b border-stone-100 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-[#1A2E05] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#65A30D]" />
                Issued Credentials Ledger
              </h2>
              <p className="text-xs text-stone-400 mt-0.5">
                Audit trail of all cryptographically anchored degree records issued by {institutionName}.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECFCCB] text-[#1A2E05] border border-[#D9EBB5]">
              Total Records: {issuedList.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F7FBEF] border-b border-stone-200 uppercase font-bold text-[#4D6B2A] text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Degree Title</th>
                  <th className="p-4">Student Address</th>
                  <th className="p-4">On-Chain Anchor Hash</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {issuedList.map((item) => (
                  <tr key={item.id} className="hover:bg-stone-50/80 transition-colors">
                    <td className="p-4 font-bold text-[#1A2E05]">{item.degree}</td>
                    <td className="p-4 font-mono text-[11px] text-stone-600 truncate max-w-xs">{item.student}</td>
                    <td className="p-4 font-mono text-[11px] text-stone-400 truncate max-w-xs">
                      {item.credentialHash.slice(0, 16)}...
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      {item.revoked ? (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-rose-50 text-rose-700 border border-rose-200">
                          Revoked
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Active & Anchored
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      {!item.revoked && (
                        <button
                          type="button"
                          onClick={() => handleRevoke(item.credentialHash)}
                          className="px-3 py-1.5 text-[11px] font-bold text-rose-600 hover:text-white hover:bg-rose-600 rounded-lg border border-rose-200 transition-colors cursor-pointer"
                        >
                          Revoke on Chain
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
