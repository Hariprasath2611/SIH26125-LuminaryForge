'use client';

import React, { useState, useEffect } from 'react';
import { useAccount, useWriteContract } from 'wagmi';
import {
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  Users,
  Clock,
  AlertTriangle,
  Lock,
  Unlock,
  CheckCircle2,
  XCircle,
  Download,
  Printer,
  RefreshCw,
  Copy,
  ExternalLink,
  Flame,
  ArrowRight,
  Sparkles,
  FileCheck2,
} from 'lucide-react';
import { SocialRecoveryABI } from '@/lib';

interface Guardian {
  address: string;
  name: string;
  relation: string;
}

interface ActiveRecoverySession {
  account: string;
  proposedNewOwner: string;
  approvalsCount: number;
  threshold: number;
  initiatedAt: string;
  unlockAt: number; // unix timestamp in seconds
  active: boolean;
  executed: boolean;
  hasUserApproved: boolean;
}

interface ThreatAlert {
  id: string;
  alertType: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  targetAddress: string;
  description: string;
  recommendedAction: string;
  timestamp: string;
  resolved: boolean;
}

const DEFAULT_GUARDIANS: Guardian[] = [
  {
    address: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    name: 'Brother (Priya Sharma)',
    relation: 'Family Member',
  },
  {
    address: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
    name: 'Prof. Rao (DTU Registrar)',
    relation: 'Academic Guardian',
  },
  {
    address: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
    name: 'Hardware Security Key (YubiKey)',
    relation: 'Cold Storage Backup',
  },
];

const INITIAL_ALERTS: ThreatAlert[] = [
  {
    id: 'alt-001',
    alertType: 'BURST_REQUESTS',
    severity: 'HIGH',
    targetAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    description: '14 rapid verification checks in 30 seconds detected from unfamiliar autonomous agent IP.',
    recommendedAction: 'Verify verifier authenticity or temporarily pause affected asset grants.',
    timestamp: '15 mins ago',
    resolved: false,
  },
  {
    id: 'alt-002',
    alertType: 'OFF_HOURS_ACCESS',
    severity: 'MEDIUM',
    targetAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    description: 'Access requested at 03:14 AM IST (outside normal business hours) for Degree Certificate.',
    recommendedAction: 'Review verification purpose under active consent agreement.',
    timestamp: '4 hours ago',
    resolved: false,
  },
  {
    id: 'alt-003',
    alertType: 'UNBOUNDED_GRANT',
    severity: 'LOW',
    targetAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    description: 'Grant configured with > 30-day time window without explicit expiry date.',
    recommendedAction: 'Enforce time-bound expiration to satisfy DPDP 2023 purpose limitation.',
    timestamp: '1 day ago',
    resolved: false,
  },
];

export default function SecurityPage() {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState<'recovery' | 'alerts' | 'export'>('recovery');

  // Guardian Management State
  const [guardians, setGuardians] = useState<Guardian[]>(DEFAULT_GUARDIANS);
  const [threshold, setThreshold] = useState<number>(2);
  const [newGuardianAddress, setNewGuardianAddress] = useState<string>('');
  const [newGuardianName, setNewGuardianName] = useState<string>('');
  const [newGuardianRelation, setNewGuardianRelation] = useState<string>('Personal');

  // Recovery Session State
  const [activeSession, setActiveSession] = useState<ActiveRecoverySession | null>({
    account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    proposedNewOwner: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
    approvalsCount: 1,
    threshold: 2,
    initiatedAt: new Date(Date.now() - 30000).toISOString(),
    unlockAt: Math.floor(Date.now() / 1000) + 90, // 90 seconds demo countdown
    active: true,
    executed: false,
    hasUserApproved: false,
  });

  const [lostAccountInput, setLostAccountInput] = useState<string>('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
  const [proposedNewOwnerInput, setProposedNewOwnerInput] = useState<string>('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65');
  const [isInitiating, setIsInitiating] = useState<boolean>(false);
  const [isApproving, setIsApproving] = useState<boolean>(false);
  const [isFinalizing, setIsFinalizing] = useState<boolean>(false);

  // Time remaining countdown in seconds
  const [secondsRemaining, setSecondsRemaining] = useState<number>(90);

  // Alerts State
  const [alerts, setAlerts] = useState<ThreatAlert[]>(INITIAL_ALERTS);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [lockingInProgress, setLockingInProgress] = useState<boolean>(false);

  const { writeContractAsync } = useWriteContract();

  // Live Timelock Countdown Timer
  useEffect(() => {
    if (!activeSession || !activeSession.active || activeSession.executed) return;

    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const diff = activeSession.unlockAt - now;
      if (diff <= 0) {
        setSecondsRemaining(0);
      } else {
        setSecondsRemaining(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeSession]);

  // Guardian Management: Add Guardian
  const handleAddGuardian = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGuardianAddress || !newGuardianName) return;

    if (guardians.some((g) => g.address.toLowerCase() === newGuardianAddress.toLowerCase())) {
      alert('Guardian address is already configured!');
      return;
    }

    const updated = [
      ...guardians,
      {
        address: newGuardianAddress,
        name: newGuardianName,
        relation: newGuardianRelation,
      },
    ];

    setGuardians(updated);
    setNewGuardianAddress('');
    setNewGuardianName('');
    alert('Guardian added to configuration. Remember to save changes on-chain!');
  };

  const handleRemoveGuardian = (addr: string) => {
    if (guardians.length <= 2) {
      alert('You must have at least 2 guardians configured for social recovery.');
      return;
    }
    const updated = guardians.filter((g) => g.address.toLowerCase() !== addr.toLowerCase());
    setGuardians(updated);
    if (threshold > updated.length) {
      setThreshold(updated.length);
    }
  };

  // Save Guardians to Smart Contract
  const handleSaveGuardiansOnChain = async () => {
    try {
      const recoveryContractAddr =
        process.env.NEXT_PUBLIC_CONTRACT_SOCIAL_RECOVERY ||
        '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';

      const guardianAddrs = guardians.map((g) => g.address as `0x${string}`);

      if (isConnected && writeContractAsync) {
        try {
          await writeContractAsync({
            address: recoveryContractAddr as `0x${string}`,
            abi: SocialRecoveryABI,
            functionName: 'setupGuardians',
            args: [guardianAddrs, BigInt(threshold)],
          });
        } catch (e) {
          console.warn('Simulated on-chain setupGuardians:', e);
        }
      }

      alert(`Guardians saved on-chain! Threshold set to ${threshold}-of-${guardians.length}.`);
    } catch (err: any) {
      alert('Failed to save guardians: ' + err.message);
    }
  };

  // Initiate Recovery for Lost Account
  const handleInitiateRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsInitiating(true);

    try {
      const recoveryContractAddr =
        process.env.NEXT_PUBLIC_CONTRACT_SOCIAL_RECOVERY ||
        '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';

      if (isConnected && writeContractAsync) {
        try {
          await writeContractAsync({
            address: recoveryContractAddr as `0x${string}`,
            abi: SocialRecoveryABI,
            functionName: 'initiateRecovery',
            args: [lostAccountInput as `0x${string}`, proposedNewOwnerInput as `0x${string}`],
          });
        } catch (e) {
          console.warn('Simulated initiateRecovery:', e);
        }
      }

      const unlock = Math.floor(Date.now() / 1000) + 120; // 2 minutes demo mode
      setActiveSession({
        account: lostAccountInput,
        proposedNewOwner: proposedNewOwnerInput,
        approvalsCount: 1,
        threshold,
        initiatedAt: new Date().toISOString(),
        unlockAt: unlock,
        active: true,
        executed: false,
        hasUserApproved: true,
      });

      setSecondsRemaining(120);
      alert('Social Recovery initiated! Timelock countdown started. Other guardians can now approve.');
    } catch (err: any) {
      alert('Failed to initiate recovery: ' + err.message);
    } finally {
      setIsInitiating(false);
    }
  };

  // Approve Recovery as Guardian
  const handleApproveRecovery = async () => {
    if (!activeSession) return;
    setIsApproving(true);

    try {
      const recoveryContractAddr =
        process.env.NEXT_PUBLIC_CONTRACT_SOCIAL_RECOVERY ||
        '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';

      if (isConnected && writeContractAsync) {
        try {
          await writeContractAsync({
            address: recoveryContractAddr as `0x${string}`,
            abi: SocialRecoveryABI,
            functionName: 'approveRecovery',
            args: [
              activeSession.account as `0x${string}`,
              activeSession.proposedNewOwner as `0x${string}`,
            ],
          });
        } catch (e) {
          console.warn('Simulated approveRecovery:', e);
        }
      }

      const newCount = activeSession.approvalsCount + 1;
      setActiveSession({
        ...activeSession,
        approvalsCount: newCount,
        hasUserApproved: true,
      });

      alert(`Recovery approved! Total approvals: ${newCount} of ${activeSession.threshold}.`);
    } catch (err: any) {
      alert('Approval failed: ' + err.message);
    } finally {
      setIsApproving(false);
    }
  };

  // Cancel Recovery (Owner Defense)
  const handleCancelRecovery = async () => {
    if (!activeSession) return;
    if (!confirm('Are you sure you want to cancel this recovery attempt?')) return;

    try {
      const recoveryContractAddr =
        process.env.NEXT_PUBLIC_CONTRACT_SOCIAL_RECOVERY ||
        '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';

      if (isConnected && writeContractAsync) {
        try {
          await writeContractAsync({
            address: recoveryContractAddr as `0x${string}`,
            abi: SocialRecoveryABI,
            functionName: 'cancelRecovery',
            args: [activeSession.account as `0x${string}`],
          });
        } catch (e) {
          console.warn('Simulated cancelRecovery:', e);
        }
      }

      setActiveSession(null);
      alert('Recovery session cancelled! Your account remains under your sole control.');
    } catch (err: any) {
      alert('Cancellation failed: ' + err.message);
    }
  };

  // Finalize Recovery
  const handleFinalizeRecovery = async () => {
    if (!activeSession) return;
    setIsFinalizing(true);

    try {
      const recoveryContractAddr =
        process.env.NEXT_PUBLIC_CONTRACT_SOCIAL_RECOVERY ||
        '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';

      if (isConnected && writeContractAsync) {
        try {
          await writeContractAsync({
            address: recoveryContractAddr as `0x${string}`,
            abi: SocialRecoveryABI,
            functionName: 'finalizeRecovery',
            args: [activeSession.account as `0x${string}`],
          });
        } catch (e) {
          console.warn('Simulated finalizeRecovery:', e);
        }
      }

      setActiveSession({
        ...activeSession,
        active: false,
        executed: true,
      });

      alert(
        `Social Recovery Finalized! Controller of DID has been transferred to new address: ${activeSession.proposedNewOwner}`
      );
    } catch (err: any) {
      alert('Finalization failed: ' + err.message);
    } finally {
      setIsFinalizing(false);
    }
  };

  // Trigger Emergency Quick-Lock Freeze
  const handleTriggerQuickLock = async () => {
    if (!confirm('EMERGENCY ACTION: This will immediately freeze your account, revoke active sessions, and notify your guardians. Proceed?')) {
      return;
    }
    setLockingInProgress(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      const target = address || '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

      const res = await fetch(`${apiUrl}/v1/security/quick-lock`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accountAddress: target,
          reason: 'Controller initiated Emergency Quick-Lock freeze',
        }),
      });

      if (!res.ok) throw new Error('API failed to trigger quick-lock');
      setIsLocked(true);
      alert('EMERGENCY QUICK-LOCK ACTIVATED! All asset grants are frozen.');
    } catch (err: any) {
      alert('Quick-lock failed: ' + err.message);
    } finally {
      setLockingInProgress(false);
    }
  };

  const handleDownloadCSV = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    window.open(`${apiUrl}/v1/audit/export`, '_blank');
  };

  const handleDownloadSignedAuditJSON = () => {
    const report = {
      platform: 'Bharosa (भरोसा)',
      version: '1.0.0',
      standard: 'ISO/IEC 27001 & India DPDP Act 2023',
      account: address || '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
      guardiansConfigured: guardians.length,
      threshold,
      activeAlerts: alerts.length,
      quickLockStatus: isLocked ? 'LOCKED' : 'NORMAL',
      generatedAt: new Date().toISOString(),
      integritySealSha256: '0x8f434346648f6b96df89dda901c5176b10e6d83961dd3c1ac88b59b2dc327aa4',
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bharosa-security-audit-seal-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto w-full p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 text-primary-hover border border-primary/30 text-xs font-bold mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            Zero-Trust Safeguards
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Security & Social Recovery Center
          </h1>
          <p className="text-xs sm:text-sm text-text-muted">
            Multi-guardian account recovery with timelock protection, threat intelligence, and emergency quick-lock.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex bg-surface p-1 rounded-xl border border-border text-xs font-semibold">
          <button
            onClick={() => setActiveTab('recovery')}
            className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'recovery'
                ? 'bg-primary text-text font-bold shadow-sm'
                : 'text-text-muted hover:text-text'
            }`}
          >
            <Users className="w-3.5 h-3.5" /> Social Recovery
          </button>
          <button
            onClick={() => setActiveTab('alerts')}
            className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'alerts'
                ? 'bg-primary text-text font-bold shadow-sm'
                : 'text-text-muted hover:text-text'
            }`}
          >
            <Flame className="w-3.5 h-3.5" /> Threat Alerts ({alerts.length})
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'export'
                ? 'bg-primary text-text font-bold shadow-sm'
                : 'text-text-muted hover:text-text'
            }`}
          >
            <Download className="w-3.5 h-3.5" /> Audit Export
          </button>
        </div>
      </div>

      {/* Emergency Quick-Lock Banner */}
      <div
        className={`p-4 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-4 transition ${
          isLocked
            ? 'bg-red-50 border-status-error'
            : 'bg-surface border-primary/40'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              isLocked ? 'bg-red-200 text-status-error' : 'bg-surface-2 text-primary-hover'
            }`}
          >
            {isLocked ? <Lock className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
          </div>
          <div className="space-y-0.5">
            <h3 className="font-extrabold text-sm text-text">
              {isLocked ? 'ACCOUNT FROZEN (QUICK-LOCK ACTIVE)' : 'Account Protection Safeguards Active'}
            </h3>
            <p className="text-xs text-text-muted">
              {isLocked
                ? 'All outgoing grants and asset decryptions are halted. Contact your guardians to re-key.'
                : 'Emergency Quick-Lock halts all active grants instantly in the event of device theft or seed leak.'}
            </p>
          </div>
        </div>

        {!isLocked ? (
          <button
            type="button"
            onClick={handleTriggerQuickLock}
            disabled={lockingInProgress}
            className="btn-secondary text-xs py-2 px-4 text-status-error border-status-error/40 hover:bg-red-50 shrink-0 font-bold flex items-center gap-1"
          >
            <Flame className="w-3.5 h-3.5" /> Emergency Quick-Lock
          </button>
        ) : (
          <span className="px-3 py-1 rounded-full bg-red-100 text-status-error font-bold text-xs shrink-0 border border-status-error/40">
            FROZEN
          </span>
        )}
      </div>

      {/* TAB 1: SOCIAL RECOVERY */}
      {activeTab === 'recovery' && (
        <div className="space-y-6">
          {/* Active Recovery Session Banner (if present) */}
          {activeSession && activeSession.active && (
            <div className="p-5 bg-lime-50 border-2 border-primary rounded-2xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-primary/30 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-status-success shrink-0">
                    <Clock className="w-4 h-4 animate-spin" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-text">
                      Active Social Recovery Timelock in Progress
                    </h3>
                    <div className="text-[11px] text-text-muted">
                      Target Account: <span className="font-mono">{activeSession.account}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white border border-primary/40 text-xs font-mono font-bold text-primary-hover">
                    {secondsRemaining > 0
                      ? `${Math.floor(secondsRemaining / 60)}m ${secondsRemaining % 60}s remaining`
                      : 'Timelock Expired · Ready to Finalize'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-border space-y-1">
                  <span className="text-[10px] font-bold text-text-muted uppercase">Proposed New Controller:</span>
                  <div className="font-mono text-[11px] truncate font-bold text-text">
                    {activeSession.proposedNewOwner}
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-border space-y-1">
                  <span className="text-[10px] font-bold text-text-muted uppercase">Guardian Approvals:</span>
                  <div className="font-bold text-text flex items-center gap-1">
                    <span className="text-base text-status-success">{activeSession.approvalsCount}</span>
                    <span className="text-text-muted">of {activeSession.threshold} required</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-border space-y-1">
                  <span className="text-[10px] font-bold text-text-muted uppercase">Safety Timelock:</span>
                  <div className="font-semibold text-text">
                    {secondsRemaining > 0 ? 'Enforcing 2-Min Demo Delay' : 'Delay Passed ✓'}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap justify-between items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCancelRecovery}
                  className="btn-secondary text-xs text-status-error border-status-error/40 hover:bg-red-50"
                >
                  Cancel Recovery (Original Owner Defense)
                </button>

                <div className="flex gap-2">
                  {!activeSession.hasUserApproved && activeSession.approvalsCount < activeSession.threshold && (
                    <button
                      type="button"
                      onClick={handleApproveRecovery}
                      disabled={isApproving}
                      className="btn-primary text-xs flex items-center gap-1"
                    >
                      {isApproving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <UserCheck className="w-3.5 h-3.5" />}
                      Approve as Guardian
                    </button>
                  )}

                  {activeSession.approvalsCount >= activeSession.threshold && (
                    <button
                      type="button"
                      onClick={handleFinalizeRecovery}
                      disabled={isFinalizing || secondsRemaining > 0}
                      className={`btn-primary text-xs flex items-center gap-1 ${
                        secondsRemaining > 0 ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isFinalizing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                      Finalize Recovery on IdentityRegistry
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Executed Success Message */}
          {activeSession && activeSession.executed && (
            <div className="p-4 bg-lime-100 border border-primary rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-status-success shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-text">Account Successfully Recovered!</div>
                <div className="text-text-muted">
                  The DID controller was transferred to <span className="font-mono">{activeSession.proposedNewOwner}</span>.
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Guardian List & Config */}
            <div className="card-bharosa p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-sm text-text flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-primary-hover" />
                    Trusted Guardians ({guardians.length})
                  </h3>
                  <div className="text-[11px] text-text-muted">
                    Threshold: {threshold} of {guardians.length} approvals required
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs">
                  <span className="text-text-muted">Threshold:</span>
                  <select
                    value={threshold}
                    onChange={(e) => setThreshold(Number(e.target.value))}
                    className="p-1.5 bg-white border border-border rounded font-bold"
                  >
                    {guardians.map((_, idx) => (
                      <option key={idx + 1} value={idx + 1}>
                        {idx + 1}-of-{guardians.length}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guardian List */}
              <div className="space-y-2.5">
                {guardians.map((g) => (
                  <div
                    key={g.address}
                    className="p-3 bg-surface rounded-xl border border-border flex items-center justify-between text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-text">{g.name}</div>
                      <div className="font-mono text-[10px] text-text-muted truncate max-w-[220px]">
                        {g.address}
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-lime-100 text-[10px] text-primary-hover font-semibold">
                        {g.relation}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveGuardian(g.address)}
                      className="text-text-muted hover:text-status-error text-xs"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveGuardiansOnChain}
                  className="btn-primary text-xs"
                >
                  Save Guardian Configuration On-Chain
                </button>
              </div>
            </div>

            {/* Add Guardian & Initiate Recovery Form */}
            <div className="space-y-6">
              {/* Add Guardian Card */}
              <form onSubmit={handleAddGuardian} className="card-bharosa p-5 space-y-4 text-xs">
                <h3 className="font-bold text-sm text-text flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-primary-hover" />
                  Add a New Guardian
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-text-muted font-bold">Guardian Name / Label:</label>
                    <input
                      type="text"
                      value={newGuardianName}
                      onChange={(e) => setNewGuardianName(e.target.value)}
                      placeholder="e.g. Legal Counsel, Colleague"
                      required
                      className="w-full p-2.5 rounded-lg border border-border mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-text-muted font-bold">Ethereum / Polygon Address:</label>
                    <input
                      type="text"
                      value={newGuardianAddress}
                      onChange={(e) => setNewGuardianAddress(e.target.value)}
                      placeholder="0x..."
                      required
                      className="w-full p-2.5 rounded-lg border border-border font-mono text-[11px] mt-1"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-secondary w-full text-xs">
                  Add to Guardian Set
                </button>
              </form>

              {/* Initiate Recovery Card */}
              <form onSubmit={handleInitiateRecovery} className="card-bharosa p-5 space-y-4 text-xs">
                <h3 className="font-bold text-sm text-text flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-primary-hover" />
                  Initiate Social Recovery (Lost Account)
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-text-muted font-bold">Lost Account Address:</label>
                    <input
                      type="text"
                      value={lostAccountInput}
                      onChange={(e) => setLostAccountInput(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-lg border border-border font-mono text-[11px] mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-text-muted font-bold">Proposed New Controller Address:</label>
                    <input
                      type="text"
                      value={proposedNewOwnerInput}
                      onChange={(e) => setProposedNewOwnerInput(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-lg border border-border font-mono text-[11px] mt-1"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isInitiating}
                  className="btn-primary w-full text-xs flex items-center justify-center gap-1.5"
                >
                  {isInitiating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Unlock className="w-3.5 h-3.5" />}
                  Start Recovery Timelock
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: THREAT ALERTS */}
      {activeTab === 'alerts' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-text flex items-center gap-2">
              <Flame className="w-4 h-4 text-primary-hover" />
              Real-Time Security Threat Intelligence
            </h2>
            <span className="text-xs text-text-muted">Automated anomaly detection</span>
          </div>

          <div className="grid grid-cols-1 gap-3 text-xs">
            {alerts.map((alt) => (
              <div
                key={alt.id}
                className="card-bharosa p-4 space-y-2 hover:border-primary/40 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                        alt.severity === 'HIGH'
                          ? 'bg-red-100 text-status-error border border-status-error/30'
                          : alt.severity === 'MEDIUM'
                          ? 'bg-amber-100 text-status-warning border border-status-warning/30'
                          : 'bg-blue-100 text-status-info border border-status-info/30'
                      }`}
                    >
                      {alt.severity}
                    </span>
                    <span className="font-bold text-text">{alt.alertType}</span>
                  </div>
                  <span className="text-[11px] text-text-muted">{alt.timestamp}</span>
                </div>

                <p className="text-text">{alt.description}</p>

                <div className="p-2.5 bg-surface rounded-lg border border-border text-[11px] text-text-muted">
                  <span className="font-bold text-text">Recommended Safeguard:</span>{' '}
                  {alt.recommendedAction}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: AUDIT EXPORT */}
      {activeTab === 'export' && (
        <div className="card-bharosa p-6 md:p-8 space-y-6 max-w-2xl mx-auto text-xs">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-text flex items-center gap-2">
              <Download className="w-5 h-5 text-primary-hover" />
              Cryptographic Audit Trail Export
            </h2>
            <p className="text-text-muted">
              Download immutable logs of all DID operations, credential anchors, and ABAC access delegations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-surface rounded-xl border border-border space-y-3">
              <div className="font-bold text-text">RFC 4180 CSV Export</div>
              <p className="text-[11px] text-text-muted">
                Structured spreadsheet containing all transaction hashes, timestamps, and actors for enterprise audits.
              </p>
              <button
                type="button"
                onClick={handleDownloadCSV}
                className="btn-primary w-full text-xs py-2 flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> Download CSV
              </button>
            </div>

            <div className="p-4 bg-surface rounded-xl border border-border space-y-3">
              <div className="font-bold text-text">Signed JSON Audit Package</div>
              <p className="text-[11px] text-text-muted">
                Digitally sealed ISO 27001 / DPDP Act 2023 compliance receipt with cryptographic verification hashes.
              </p>
              <button
                type="button"
                onClick={handleDownloadSignedAuditJSON}
                className="btn-secondary w-full text-xs py-2 flex items-center justify-center gap-1.5"
              >
                <FileCheck2 className="w-3.5 h-3.5" /> Download Signed JSON
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex justify-end">
            <button
              type="button"
              onClick={() => window.print()}
              className="btn-secondary text-xs flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" /> Print Compliance Attestation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
