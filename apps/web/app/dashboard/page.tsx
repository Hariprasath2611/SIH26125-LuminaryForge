'use client';

import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import {
  ShieldCheck,
  Key,
  Award,
  Lock,
  FileCheck2,
  Copy,
  Check,
  QrCode,
  ArrowUpRight,
  ExternalLink,
  PlusCircle,
  FileSearch,
  Activity,
} from 'lucide-react';
import { formatDID } from '@bharosa/sdk';

export default function DashboardPage() {
  const { address, isConnected, chainId } = useAccount();
  const currentChainId = chainId || 31337;

  const [copied, setCopied] = useState<string | null>(null);
  const [showQR, setShowQR] = useState<boolean>(false);
  const [stats, setStats] = useState({
    credentialsCount: 2,
    assetsCount: 3,
    activeGrantsCount: 1,
    pendingRequestsCount: 1,
  });
  const [recentEvents, setRecentEvents] = useState<any[]>([]);

  const userAddress = address || '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
  const userDID = formatDID(currentChainId, userAddress);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    // Fetch stats
    fetch(`${apiUrl}/v1/stats`)
      .then((res) => res.json())
      .then((data) => {
        if (data) setStats((prev) => ({ ...prev, ...data }));
      })
      .catch(() => {});

    // Fetch audit events
    fetch(`${apiUrl}/v1/audit?limit=5`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.events) setRecentEvents(data.events);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full p-4 md:p-8 space-y-8">
      {/* Top Banner / Welcome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface p-6 rounded-2xl border border-border">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Identity & Asset Dashboard
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Manage your cryptographic credentials, client-encrypted assets, and ABAC access permissions.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/assets" className="btn-primary">
            <PlusCircle className="w-4 h-4 mr-1.5" /> Upload Asset
          </Link>
          <Link href="/public-verify" className="btn-secondary">
            <FileSearch className="w-4 h-4 mr-1.5" /> Verify Credential
          </Link>
        </div>
      </div>

      {/* Identity Card */}
      <div className="card-bharosa p-6 relative overflow-hidden bg-gradient-to-br from-white to-surface">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/20 text-primary-hover border border-primary/40 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-status-success" />
                Active Sovereign DID
              </span>
              <span className="text-xs text-text-muted font-medium">Chain ID: {currentChainId}</span>
            </div>

            <div>
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block">
                Decentralized Identifier (W3C DID)
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-mono text-sm md:text-base font-bold text-text break-all">
                  {userDID}
                </span>
                <button
                  onClick={() => copyToClipboard(userDID, 'did')}
                  className="p-1.5 hover:bg-surface-2 rounded-lg text-text-muted hover:text-text transition"
                  title="Copy DID"
                >
                  {copied === 'did' ? <Check className="w-4 h-4 text-status-success" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block">
                Controller Wallet Address
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono text-xs text-text-muted">{userAddress}</span>
                <button
                  onClick={() => copyToClipboard(userAddress, 'address')}
                  className="p-1 hover:bg-surface-2 rounded text-text-muted hover:text-text transition"
                  title="Copy Address"
                >
                  {copied === 'address' ? <Check className="w-3.5 h-3.5 text-status-success" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* QR Button & Action */}
          <div className="flex md:flex-col items-center gap-3">
            <button
              onClick={() => setShowQR(!showQR)}
              className="btn-secondary w-full text-xs"
            >
              <QrCode className="w-4 h-4 mr-1.5" /> {showQR ? 'Hide QR' : 'Show DID QR'}
            </button>
            <Link
              href="/onboarding"
              className="text-xs text-text-muted hover:text-primary-hover font-semibold transition"
            >
              Reconfigure Guardians →
            </Link>
          </div>
        </div>

        {/* QR Code Modal Display */}
        {showQR && (
          <div className="mt-6 pt-6 border-t border-border flex flex-col items-center gap-3 bg-surface p-4 rounded-xl">
            <div className="w-36 h-36 bg-white p-3 rounded-xl border border-border flex items-center justify-center shadow-sm">
              <QrCode className="w-28 h-28 text-text" />
            </div>
            <span className="text-xs text-text-muted font-medium text-center">
              Scan with verifier app to present decentralized credentials
            </span>
          </div>
        )}
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/credentials" className="card-bharosa p-5 group transition">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-primary-hover">
              <Award className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary-hover transition" />
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-text">{stats.credentialsCount}</div>
            <div className="text-xs font-semibold text-text-muted mt-1">Verifiable Credentials</div>
          </div>
        </Link>

        <Link href="/assets" className="card-bharosa p-5 group transition">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-primary-hover">
              <Lock className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary-hover transition" />
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-text">{stats.assetsCount}</div>
            <div className="text-xs font-semibold text-text-muted mt-1">Encrypted Assets</div>
          </div>
        </Link>

        <Link href="/access" className="card-bharosa p-5 group transition">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-primary-hover">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary-hover transition" />
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-text">{stats.activeGrantsCount}</div>
            <div className="text-xs font-semibold text-text-muted mt-1">Active ABAC Grants</div>
          </div>
        </Link>

        <Link href="/access" className="card-bharosa p-5 group transition">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-primary-hover">
              <Key className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-primary-hover transition" />
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-text">{stats.pendingRequestsCount}</div>
            <div className="text-xs font-semibold text-text-muted mt-1">Pending Access Requests</div>
          </div>
        </Link>
      </div>

      {/* Live Recent Activity / Audit Stream */}
      <div className="card-bharosa p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2.5">
            <Activity className="w-5 h-5 text-primary-hover" />
            <h2 className="font-bold text-lg text-text">Recent Audit Trail</h2>
          </div>
          <Link href="/audit" className="text-xs font-bold text-primary-hover hover:underline flex items-center gap-1">
            View All Events <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-3">
          {recentEvents.length > 0 ? (
            recentEvents.map((evt, idx) => (
              <div
                key={evt.id || idx}
                className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-2 flex items-center justify-center text-primary-hover font-bold text-[11px]">
                    {evt.eventType?.slice(0, 2) || 'EV'}
                  </div>
                  <div>
                    <div className="font-bold text-text">{evt.eventType?.replace(/_/g, ' ')}</div>
                    <div className="text-text-muted font-mono text-[11px] truncate max-w-xs md:max-w-md">
                      Actor: {evt.actor}
                    </div>
                  </div>
                </div>
                <div className="text-right text-text-muted">
                  {new Date(evt.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-text-muted">
              Listening for on-chain events... No recent security alerts.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
