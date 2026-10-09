import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAccount, useChainId } from 'wagmi';
import { useAuth } from '@/hooks/useAuth';
import { formatDID } from '@/lib';
import { PageMeta } from '@/components/PageMeta';
import {
  Award,
  FileText,
  KeyRound,
  Clock,
  Check,
  Share2,
  Upload,
  Copy,
  QrCode,
  ShieldCheck,
  X,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export function DashboardPage() {
  const navigate = useNavigate();
  const { address } = useAccount();
  const chainId = useChainId();
  const { user, activeDemoAccount } = useAuth();

  const [copied, setCopied] = useState<boolean>(false);
  const [showQR, setShowQR] = useState<boolean>(false);
  const [requestStatus, setRequestStatus] = useState<'pending' | 'approved' | 'declined'>('pending');
  const [grantRevoked, setGrantRevoked] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const userName =
    activeDemoAccount?.name ||
    (user && 'displayName' in user && user.displayName ? user.displayName : 'Priya Sharma');

  const userFirstName = userName.split(' ')[0] || 'Priya';

  const userAddress =
    address || activeDemoAccount?.walletAddress || '0xAB12B589dD623F8b820980590aC6F2A57345c9F4';

  const currentChainId = chainId || 80002;
  const userDID = formatDID(currentChainId, userAddress);
  const shortDID = `did:ethr:${currentChainId}:${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    showToast('DID copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApprove = () => {
    setRequestStatus('approved');
    showToast('Access granted to TechCorp HR · Encrypted key shared');
  };

  const handleDecline = () => {
    setRequestStatus('declined');
    showToast('Access request declined');
  };

  const handleRevoke = () => {
    if (window.confirm('Are you sure you want to revoke access to Degree Certificate for TechCorp HR?')) {
      setGrantRevoked(true);
      showToast('Grant revoked · Smart contract access cancelled');
    }
  };

  return (
    <div className="w-full space-y-6 select-none font-['Plus_Jakarta_Sans',sans-serif]">
      <PageMeta
        title="Bharosa | Dashboard"
        description="Self-sovereign identity overview, encrypted assets, and cryptographic verifiable credentials."
      />

      {/* Floating Action Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1A2E05] text-[#F7FBEF] border border-[#84CC16] px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 text-xs font-bold animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. Greeting Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-[30px] font-extrabold text-[#1A2E05] tracking-tight leading-snug">
            Welcome back, {userFirstName}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-1.5 font-medium leading-relaxed">
            You own your identity. {requestStatus === 'pending' ? 'One access request is waiting for your decision.' : 'All pending requests have been resolved.'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/credentials')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-[#1A2E05] font-semibold text-sm transition-all shadow-2xs cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-stone-500" />
            <span>Share a credential</span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/assets')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-sm transition-all shadow-xs cursor-pointer"
          >
            <Upload className="w-4 h-4 text-[#1A2E05]" />
            <span>Upload an asset</span>
          </button>
        </div>
      </div>

      {/* 2. 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Credentials */}
        <Link
          to="/credentials"
          className="bg-white border border-[#E5E7EB] hover:border-[#D9EBB5] rounded-2xl p-5 shadow-xs transition-all hover:-translate-y-0.5 group block"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-stone-600">Credentials</span>
            <div className="w-9 h-9 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D] group-hover:scale-105 transition-transform">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A2E05]">1</div>
          <div className="mt-1 text-xs text-stone-500 font-medium">B.Tech Degree · valid</div>
        </Link>

        {/* Encrypted assets */}
        <Link
          to="/assets"
          className="bg-white border border-[#E5E7EB] hover:border-[#D9EBB5] rounded-2xl p-5 shadow-xs transition-all hover:-translate-y-0.5 group block"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-stone-600">Encrypted assets</span>
            <div className="w-9 h-9 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D] group-hover:scale-105 transition-transform">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A2E05]">2</div>
          <div className="mt-1 text-xs text-stone-500 font-medium">Stored on IPFS</div>
        </Link>

        {/* Active grants */}
        <Link
          to="/access"
          className="bg-white border border-[#E5E7EB] hover:border-[#D9EBB5] rounded-2xl p-5 shadow-xs transition-all hover:-translate-y-0.5 group block"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-stone-600">Active grants</span>
            <div className="w-9 h-9 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D] group-hover:scale-105 transition-transform">
              <KeyRound className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A2E05]">
            {grantRevoked ? 0 : 1}
          </div>
          <div className="mt-1 text-xs text-stone-500 font-medium">
            {grantRevoked ? 'No active delegations' : 'Expires in 2 days'}
          </div>
        </Link>

        {/* Pending requests */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-stone-600">Pending requests</span>
            <div className="w-9 h-9 rounded-full bg-[#84CC16] flex items-center justify-center text-[#1A2E05]">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#1A2E05]">
            {requestStatus === 'pending' ? 1 : 0}
          </div>
          <div className="mt-1 text-xs text-stone-500 font-medium">
            {requestStatus === 'pending' ? 'Needs your review' : 'All requests reviewed'}
          </div>
        </div>
      </div>

      {/* 3. Main Two-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card: Access request waiting */}
          {requestStatus === 'pending' ? (
            <div className="bg-white border border-[#E5E7EB] border-l-[5px] border-l-[#84CC16] rounded-2xl p-6 shadow-xs relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D]">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#1A2E05] tracking-tight leading-snug">Access request waiting</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFCCB] text-[#4D6B2A] text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  12 min ago
                </span>
              </div>

              <p className="text-base text-[#1A2E05] mb-4">
                <strong className="font-extrabold">TechCorp HR</strong> wants to view{' '}
                <strong className="font-extrabold">Transcript.pdf</strong>
              </p>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#F7FBEF] border border-stone-200 text-xs font-semibold text-stone-700">
                  Role: Employer
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#F7FBEF] border border-stone-200 text-xs font-semibold text-stone-700">
                  Purpose: Hiring verification
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#F7FBEF] border border-stone-200 text-xs font-semibold text-stone-700">
                  Access for 7 days
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <button
                  type="button"
                  onClick={handleApprove}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-sm transition-all shadow-xs cursor-pointer"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Approve and sign</span>
                </button>

                <button
                  type="button"
                  onClick={handleDecline}
                  className="px-6 py-2.5 rounded-full bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 font-semibold text-sm transition-all cursor-pointer"
                >
                  Decline
                </button>
              </div>

              <p className="text-xs text-stone-500 font-normal">
                You confirm in your wallet. You can revoke anytime.
              </p>
            </div>
          ) : (
            <div className="bg-[#F7FBEF] border border-[#D9EBB5] rounded-2xl p-6 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#84CC16] text-[#1A2E05] flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A2E05]">
                    {requestStatus === 'approved' ? 'Request Approved' : 'Request Declined'}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {requestStatus === 'approved'
                      ? 'TechCorp HR has been granted 7-day access to Transcript.pdf.'
                      : 'You declined access for TechCorp HR.'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setRequestStatus('pending')}
                className="text-xs text-[#65A30D] hover:underline font-bold cursor-pointer"
              >
                Reset demo state
              </button>
            </div>
          )}

          {/* Card: Recent activity */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D]">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-[17px] font-bold text-[#1A2E05] tracking-tight leading-snug">Recent activity</h3>
              </div>
              <Link
                to="/audit"
                className="text-xs font-bold text-stone-600 hover:text-[#1A2E05] transition-colors"
              >
                View audit log
              </Link>
            </div>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2E05] tracking-tight leading-snug">Access requested</h4>
                    <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                      TechCorp HR asked to view Transcript.pdf
                    </p>
                  </div>
                </div>
                <span className="text-xs text-stone-400 font-medium shrink-0 ml-4">12 min ago</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D] shrink-0">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2E05] tracking-tight leading-snug">Access granted</h4>
                    <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                      Degree Certificate shared with TechCorp HR for 7 days
                    </p>
                  </div>
                </div>
                <span className="text-xs text-stone-400 font-medium shrink-0 ml-4">5 days ago</span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D] shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2E05] tracking-tight leading-snug">Asset registered</h4>
                    <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                      Transcript.pdf encrypted and anchored on-chain
                    </p>
                  </div>
                </div>
                <span className="text-xs text-stone-400 font-medium shrink-0 ml-4">6 days ago</span>
              </div>

              {/* Item 4 */}
              <div className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D] shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2E05] tracking-tight leading-snug">Credential received</h4>
                    <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                      B.Tech Degree issued by Chennai University
                    </p>
                  </div>
                </div>
                <span className="text-xs text-stone-400 font-medium shrink-0 ml-4">6 days ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card: Verified Identity (Forest Green Card) */}
          <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[#1C3A13] via-[#142B0D] to-[#0D1D09] text-white shadow-md">
            {/* Hexagon Watermark */}
            <svg
              viewBox="0 0 100 100"
              className="absolute -right-4 -top-4 w-36 h-36 opacity-25 pointer-events-none text-[#84CC16]"
              fill="none"
              stroke="currentColor"
            >
              <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" strokeWidth="3" />
              <polygon points="50,15 83,33 83,67 50,85 17,67 17,33" strokeWidth="2" />
              <polygon points="50,26 73,39 73,61 50,74 27,61 27,39" strokeWidth="1.5" />
            </svg>

            {/* Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84CC16] text-[#1A2E05] text-[11px] font-extrabold uppercase tracking-wider shadow-2xs">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>VERIFIED IDENTITY</span>
            </div>

            {/* Name & Subtitle */}
            <h3 className="text-2xl font-extrabold text-white mt-4 tracking-tight leading-snug">{userName}</h3>
            <p className="text-xs text-[#A3E635] font-medium mt-1 leading-normal">Your decentralized ID (DID)</p>

            {/* DID Box */}
            <div className="bg-[#223E17]/60 border border-[#3E6B2A]/60 rounded-xl px-3.5 py-2.5 mt-4 font-mono text-xs text-[#D9F99D] truncate">
              {shortDID}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5 mt-4">
              <button
                type="button"
                onClick={() => copyToClipboard(userDID)}
                className="bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-xs rounded-xl px-4 py-2 inline-flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowQR(true)}
                className="bg-transparent border border-white/25 hover:bg-white/10 text-white font-semibold text-xs rounded-xl px-4 py-2 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Show QR</span>
              </button>
            </div>
          </div>

          {/* Card: Your setup */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-[17px] font-bold text-[#1A2E05] tracking-tight leading-snug">Your setup</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#1A2E05]">DID registered on-chain</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#1A2E05]">
                  Wallet linked to your account
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#1A2E05]">
                  Encryption key published
                </span>
              </div>
            </div>
          </div>

          {/* Card: Active grant */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D]">
                  <KeyRound className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-[17px] font-bold text-[#1A2E05] tracking-tight leading-snug">Active grant</h3>
              </div>
              <Link
                to="/access"
                className="text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors"
              >
                Manage
              </Link>
            </div>

            {!grantRevoked ? (
              <div>
                <h4 className="text-base font-bold text-[#1A2E05] tracking-tight mt-1 leading-snug">Degree Certificate</h4>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  Shared with TechCorp HR · Hiring verification
                </p>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-stone-100 my-3.5 overflow-hidden">
                  <div className="h-full rounded-full bg-[#84CC16] w-[75%]" />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-medium">Expires in 2 days</span>
                  <button
                    type="button"
                    onClick={handleRevoke}
                    className="font-bold text-red-600 hover:text-red-700 cursor-pointer"
                  >
                    Revoke
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-2 text-xs text-stone-400 font-medium">
                No active grants at this time.
              </div>
            )}
          </div>

          {/* Card: No security alerts */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[#65A30D] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1A2E05] tracking-tight leading-snug">No security alerts</h4>
              <p className="text-xs text-stone-500 mt-0.5 leading-normal">Your account looks healthy.</p>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal Dialog */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A2E05]/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-[#ECFCCB] text-center relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center mx-auto mb-3">
              <QrCode className="w-6 h-6" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#1A2E05] tracking-tight leading-snug">Your DID QR Code</h3>
            <p className="text-xs text-stone-500 mt-1.5 max-w-xs mx-auto leading-relaxed">
              Scan with any W3C compliant wallet or verifier to resolve your decentralized identity.
            </p>

            {/* QR Mockup */}
            <div className="my-5 p-4 bg-white border-2 border-dashed border-[#D9F99D] rounded-2xl inline-block shadow-xs">
              <div className="w-48 h-48 bg-[#F7FBEF] rounded-xl flex items-center justify-center relative p-3">
                {/* SVG QR Code Simulation */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#1A2E05]" fill="currentColor">
                  {/* Outer corner squares */}
                  <rect x="5" y="5" width="26" height="26" rx="4" />
                  <rect x="9" y="9" width="18" height="18" rx="2" fill="white" />
                  <rect x="13" y="13" width="10" height="10" rx="1" />

                  <rect x="69" y="5" width="26" height="26" rx="4" />
                  <rect x="73" y="9" width="18" height="18" rx="2" fill="white" />
                  <rect x="77" y="13" width="10" height="10" rx="1" />

                  <rect x="5" y="69" width="26" height="26" rx="4" />
                  <rect x="9" y="73" width="18" height="18" rx="2" fill="white" />
                  <rect x="13" y="77" width="10" height="10" rx="1" />

                  {/* Interior data matrix points */}
                  <rect x="36" y="8" width="8" height="8" rx="1" />
                  <rect x="48" y="15" width="8" height="8" rx="1" />
                  <rect x="38" y="28" width="6" height="6" rx="1" />
                  <rect x="52" y="32" width="10" height="10" rx="1" />
                  <rect x="15" y="42" width="8" height="8" rx="1" />
                  <rect x="28" y="48" width="8" height="8" rx="1" />
                  <rect x="42" y="46" width="16" height="16" rx="2" />
                  <rect x="64" y="44" width="8" height="8" rx="1" />
                  <rect x="78" y="52" width="12" height="12" rx="1" />
                  <rect x="38" y="68" width="8" height="8" rx="1" />
                  <rect x="52" y="74" width="10" height="10" rx="1" />
                  <rect x="68" y="70" width="8" height="8" rx="1" />
                  <rect x="80" y="80" width="10" height="10" rx="1" />
                </svg>
              </div>
            </div>

            <div className="p-2.5 bg-[#F7FBEF] border border-[#ECFCCB] rounded-xl font-mono text-[11px] text-[#4D6B2A] break-all text-left mb-4">
              {userDID}
            </div>

            <button
              onClick={() => copyToClipboard(userDID)}
              className="w-full py-2.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-xs transition-colors shadow-xs"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy DID String'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
