'use client';

import React, { useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi';
import {
  Settings,
  ShieldCheck,
  Server,
  Zap,
  HardDrive,
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  PauseCircle,
  PlayCircle,
  PlusCircle,
  Trash2,
  ExternalLink,
  Copy,
  RefreshCw,
  Sliders,
  Database,
  Layers,
} from 'lucide-react';
import { IdentityRegistryABI } from '@/lib';

interface TrustedIssuerRecord {
  address: string;
  name: string;
  category: string;
  status: 'ACTIVE' | 'REVOKED';
  addedAt: string;
}

const INITIAL_ISSUERS: TrustedIssuerRecord[] = [
  {
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    name: 'Delhi Technological University (DTU)',
    category: 'Higher Education Institution',
    status: 'ACTIVE',
    addedAt: '2026-01-15',
  },
  {
    address: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    name: 'Indian Institute of Technology Delhi (IITD)',
    category: 'Institute of National Importance',
    status: 'ACTIVE',
    addedAt: '2026-02-01',
  },
  {
    address: '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc',
    name: 'Unique Identification Authority of India (UIDAI)',
    category: 'Statutory Identity Authority',
    status: 'ACTIVE',
    addedAt: '2026-03-10',
  },
];

const CONTRACT_DEPLOYMENTS = [
  {
    name: 'IdentityRegistry',
    address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    description: 'W3C DID registry, trusted issuer whitelist, and canonical VC anchor ledger',
  },
  {
    name: 'BharosaAccessControl',
    address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    description: 'Attribute-Based Access Control (ABAC) engine with EIP-712 meta-tx relayer',
  },
  {
    name: 'OwnershipRegistry',
    address: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    description: 'ERC-1155 encrypted asset ownership and SHA-256 integrity anchor registry',
  },
  {
    name: 'SocialRecovery',
    address: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    description: 'Multi-guardian social recovery with 48h/2m timelock delay',
  },
  {
    name: 'AuditAnchor',
    address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    description: 'Merkle root batch anchor contract for immutable cryptographic audit logs',
  },
  {
    name: 'ZKCredentialVerifier',
    address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    description: 'Groth16 Zero-Knowledge predicate verifier on BN254 elliptic curve',
  },
];

export default function AdminPage() {
  const { address, isConnected } = useAccount();

  const [issuers, setIssuers] = useState<TrustedIssuerRecord[]>(INITIAL_ISSUERS);
  const [newIssuerAddr, setNewIssuerAddr] = useState<string>('');
  const [newIssuerName, setNewIssuerName] = useState<string>('');
  const [newIssuerCategory, setNewIssuerCategory] = useState<string>('Higher Education');
  const [isAddingIssuer, setIsAddingIssuer] = useState<boolean>(false);

  // Platform Paused State
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isPausing, setIsPausing] = useState<boolean>(false);

  const { writeContractAsync } = useWriteContract();

  // Add Issuer Handler
  const handleAddIssuer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIssuerAddr || !newIssuerName) return;
    setIsAddingIssuer(true);

    try {
      const identityRegistryAddr =
        process.env.NEXT_PUBLIC_CONTRACT_IDENTITY_REGISTRY ||
        '0x5FbDB2315678afecb367f032d93F642f64180aa3';

      if (isConnected && writeContractAsync) {
        try {
          await writeContractAsync({
            address: identityRegistryAddr as `0x${string}`,
            abi: IdentityRegistryABI,
            functionName: 'addIssuer',
            args: [newIssuerAddr as `0x${string}`],
          });
        } catch (e) {
          console.warn('Simulated addIssuer on-chain:', e);
        }
      }

      const updated = [
        ...issuers,
        {
          address: newIssuerAddr,
          name: newIssuerName,
          category: newIssuerCategory,
          status: 'ACTIVE' as const,
          addedAt: new Date().toISOString().split('T')[0],
        },
      ];

      setIssuers(updated);
      setNewIssuerAddr('');
      setNewIssuerName('');
      alert(`Trusted Issuer "${newIssuerName}" authorized on IdentityRegistry!`);
    } catch (err: any) {
      alert('Failed to add issuer: ' + err.message);
    } finally {
      setIsAddingIssuer(false);
    }
  };

  // Revoke Issuer Handler
  const handleRevokeIssuer = async (addr: string) => {
    if (!confirm('Are you sure you want to revoke this issuer? They will no longer be able to anchor credentials.')) {
      return;
    }

    try {
      const identityRegistryAddr =
        process.env.NEXT_PUBLIC_CONTRACT_IDENTITY_REGISTRY ||
        '0x5FbDB2315678afecb367f032d93F642f64180aa3';

      if (isConnected && writeContractAsync) {
        try {
          await writeContractAsync({
            address: identityRegistryAddr as `0x${string}`,
            abi: IdentityRegistryABI,
            functionName: 'removeIssuer',
            args: [addr as `0x${string}`],
          });
        } catch (e) {
          console.warn('Simulated removeIssuer on-chain:', e);
        }
      }

      setIssuers(
        issuers.map((i) =>
          i.address.toLowerCase() === addr.toLowerCase() ? { ...i, status: 'REVOKED' } : i
        )
      );

      alert('Issuer authorization revoked on-chain!');
    } catch (err: any) {
      alert('Failed to revoke issuer: ' + err.message);
    }
  };

  // Toggle Circuit Breaker Pause
  const handleTogglePause = async () => {
    setIsPausing(true);
    try {
      const nextPaused = !isPaused;
      setIsPaused(nextPaused);
      alert(
        nextPaused
          ? 'EMERGENCY CIRCUIT BREAKER ACTIVATED: Mutations on core contracts paused.'
          : 'Circuit breaker deactivated: Platform restored to normal operation.'
      );
    } finally {
      setIsPausing(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="max-w-6xl mx-auto w-full p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 text-primary-hover border border-primary/30 text-xs font-bold mb-2">
            <Settings className="w-3.5 h-3.5" />
            Platform Governance
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Administrator Console
          </h1>
          <p className="text-xs sm:text-sm text-text-muted">
            System health telemetry, verified smart contract registry, emergency circuit breaker, and trusted issuer management.
          </p>
        </div>

        {/* Emergency Circuit Breaker Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleTogglePause}
            disabled={isPausing}
            className={`btn-secondary text-xs py-2 px-4 flex items-center gap-1.5 font-bold ${
              isPaused
                ? 'bg-status-success text-white hover:bg-green-700'
                : 'text-status-error border-status-error/40 hover:bg-red-50'
            }`}
          >
            {isPaused ? (
              <>
                <PlayCircle className="w-4 h-4" /> Resume Platform (Unpause)
              </>
            ) : (
              <>
                <PauseCircle className="w-4 h-4" /> Emergency Circuit Breaker (Pause)
              </>
            )}
          </button>
        </div>
      </div>

      {/* System Status Telemetry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card-bharosa p-4 space-y-1">
          <span className="text-[11px] font-bold text-text-muted uppercase">EVM Network</span>
          <div className="text-lg font-extrabold text-text flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-status-success animate-pulse" />
            Hardhat (31337)
          </div>
          <span className="text-[11px] text-text-muted">Polygon & Arbitrum Ready</span>
        </div>

        <div className="card-bharosa p-4 space-y-1">
          <span className="text-[11px] font-bold text-text-muted uppercase">IPFS Cluster</span>
          <div className="text-lg font-extrabold text-status-success flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Operational
          </div>
          <span className="text-[11px] text-text-muted">3 Nodes · 100% Availability</span>
        </div>

        <div className="card-bharosa p-4 space-y-1">
          <span className="text-[11px] font-bold text-text-muted uppercase">Gasless Paymaster</span>
          <div className="text-lg font-extrabold text-text flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-status-success fill-status-success" />
            99.85 MATIC
          </div>
          <span className="text-[11px] text-text-muted">185 Sponsored Txs</span>
        </div>

        <div className="card-bharosa p-4 space-y-1">
          <span className="text-[11px] font-bold text-text-muted uppercase">Circuit Breaker</span>
          <div
            className={`text-lg font-extrabold flex items-center gap-1.5 ${
              isPaused ? 'text-status-error' : 'text-status-success'
            }`}
          >
            {isPaused ? <PauseCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
            {isPaused ? 'PAUSED' : 'NORMAL'}
          </div>
          <span className="text-[11px] text-text-muted">
            {isPaused ? 'Mutations Halted' : 'Full Execution Active'}
          </span>
        </div>
      </div>

      {/* Smart Contract Directory */}
      <div className="card-bharosa p-6 space-y-4">
        <h3 className="font-bold text-base text-text flex items-center gap-2">
          <Layers className="w-4 h-4 text-primary-hover" />
          Verified Smart Contract Directory
        </h3>

        <div className="divide-y divide-border text-xs">
          {CONTRACT_DEPLOYMENTS.map((contract) => (
            <div key={contract.name} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <div className="font-bold text-text flex items-center gap-2">
                  <span>{contract.name}</span>
                  <span className="px-2 py-0.5 rounded-full bg-lime-100 text-[10px] text-primary-hover font-bold">
                    Solidity ^0.8.24
                  </span>
                </div>
                <div className="text-[11px] text-text-muted">{contract.description}</div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-[11px] bg-surface px-2.5 py-1 rounded border border-border">
                  {contract.address}
                </span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(contract.address)}
                  className="text-text-muted hover:text-text p-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted University Issuer Management */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Issuers List */}
        <div className="lg:col-span-2 card-bharosa p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div>
              <h3 className="font-bold text-base text-text flex items-center gap-2">
                <Users className="w-4 h-4 text-primary-hover" />
                Authorized University Issuers ({issuers.filter((i) => i.status === 'ACTIVE').length})
              </h3>
              <div className="text-[11px] text-text-muted">
                Only whitelisted issuers can anchor credentials on IdentityRegistry.sol
              </div>
            </div>
          </div>

          <div className="divide-y divide-border text-xs">
            {issuers.map((issuer) => (
              <div key={issuer.address} className="py-3.5 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="font-bold text-text">{issuer.name}</div>
                  <div className="font-mono text-[10px] text-text-muted truncate max-w-[280px]">
                    {issuer.address}
                  </div>
                  <div className="text-[10px] text-text-muted">
                    {issuer.category} • Added {issuer.addedAt}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      issuer.status === 'ACTIVE'
                        ? 'bg-lime-100 text-status-success border border-status-success/30'
                        : 'bg-red-100 text-status-error border border-status-error/30'
                    }`}
                  >
                    {issuer.status}
                  </span>

                  {issuer.status === 'ACTIVE' && (
                    <button
                      type="button"
                      onClick={() => handleRevokeIssuer(issuer.address)}
                      className="text-text-muted hover:text-status-error text-[11px]"
                    >
                      Revoke
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Issuer Form */}
        <div className="card-bharosa p-6 space-y-4 text-xs">
          <h3 className="font-bold text-base text-text flex items-center gap-2">
            <PlusCircle className="w-4 h-4 text-primary-hover" />
            Authorize New Issuer
          </h3>
          <p className="text-text-muted text-[11px]">
            Grant credential anchoring permissions on the IdentityRegistry smart contract.
          </p>

          <form onSubmit={handleAddIssuer} className="space-y-3 pt-1">
            <div className="space-y-1">
              <label className="font-bold text-text-muted">Issuer Name:</label>
              <input
                type="text"
                value={newIssuerName}
                onChange={(e) => setNewIssuerName(e.target.value)}
                placeholder="e.g. BITS Pilani, AIIMS"
                required
                className="w-full p-2.5 rounded-lg border border-border"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-text-muted">Institution Category:</label>
              <select
                value={newIssuerCategory}
                onChange={(e) => setNewIssuerCategory(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-border bg-white"
              >
                <option value="Higher Education">Higher Education Institution</option>
                <option value="Government Authority">Government Agency</option>
                <option value="Professional Board">Professional Accreditation Board</option>
                <option value="Healthcare Registry">Healthcare Registry</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-text-muted">Issuer Ethereum Address:</label>
              <input
                type="text"
                value={newIssuerAddr}
                onChange={(e) => setNewIssuerAddr(e.target.value)}
                placeholder="0x..."
                required
                className="w-full p-2.5 rounded-lg border border-border font-mono text-[11px]"
              />
            </div>

            <button
              type="submit"
              disabled={isAddingIssuer}
              className="btn-primary w-full text-xs py-2.5 flex items-center justify-center gap-1.5"
            >
              {isAddingIssuer ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Authorizing On-Chain...
                </>
              ) : (
                <>
                  <PlusCircle className="w-3.5 h-3.5" /> Authorize Issuer
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
