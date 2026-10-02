import { env } from '@/config/env';
import { PageMeta } from '@/components/PageMeta';

import React, { useState, useEffect } from 'react';
import {
  FileClock,
  Download,
  Filter,
  Search,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';

export default function AuditLogPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [eventType, setEventType] = useState<string>('ALL');
  const [searchActor, setSearchActor] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchEvents = async () => {
    setLoading(true);
    const apiUrl = env.API_URL || 'http://localhost:4000';
    const params = new URLSearchParams({
      page: page.toString(),
      limit: '15',
    });

    if (eventType !== 'ALL') params.append('eventType', eventType);
    if (searchActor.trim()) params.append('actor', searchActor.trim());

    try {
      const res = await fetch(`${apiUrl}/v1/audit?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setEvents(data.events || []);
        setTotal(data.pagination?.total || 0);
        setTotalPages(data.pagination?.totalPages || 1);
      }
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [page, eventType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchEvents();
  };

  const handleExportCSV = () => {
    const apiUrl = env.API_URL || 'http://localhost:4000';
    window.open(`${apiUrl}/v1/audit/export`, '_blank');
  };

  const getEventBadge = (type: string) => {
    if (type.includes('REVOKED') || type.includes('ALERT')) {
      return 'bg-red-50 text-status-error border-red-200';
    }
    if (type.includes('REQUEST')) {
      return 'bg-amber-50 text-status-warning border-amber-200';
    }
    return 'bg-primary/20 text-primary-hover border-primary/30';
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      <PageMeta title="Immutable Security Audit Trail" description="Tamper-evident append-only on-chain audit log with SHA-256 integrity verification." />
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2.5">
            <FileClock className="w-7 h-7 text-primary-hover" />
            Immutable Audit Trail
          </h1>
          <p className="text-xs text-text-muted mt-1">
            Cryptographically anchored on-chain event stream. Provably untampered security log.
          </p>
        </div>

        <button onClick={handleExportCSV} className="btn-secondary self-start sm:self-auto text-xs">
          <Download className="w-4 h-4 mr-1.5" /> Export Audit CSV
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="card-bharosa p-4 flex flex-col md:flex-row items-center gap-3">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-text-muted" />
          <select
            value={eventType}
            onChange={(e) => {
              setEventType(e.target.value);
              setPage(1);
            }}
            className="text-xs font-semibold p-2 rounded-xl bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-48"
          >
            <option value="ALL">All Event Types</option>
            <option value="DID_REGISTERED">DID Registered</option>
            <option value="CREDENTIAL_ANCHORED">Credential Anchored</option>
            <option value="CREDENTIAL_REVOKED">Credential Revoked</option>
            <option value="ACCESS_GRANTED">Access Granted</option>
            <option value="ACCESS_REVOKED">Access Revoked</option>
            <option value="ACCESS_USED">Access Used</option>
            <option value="ASSET_REGISTERED">Asset Registered</option>
            <option value="SECURITY_ALERT">Security Alert</option>
          </select>
        </div>

        <form onSubmit={handleSearch} className="flex-1 w-full flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by actor or wallet address (0x...)"
              value={searchActor}
              onChange={(e) => setSearchActor(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 rounded-xl bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono"
            />
          </div>
          <button type="submit" className="btn-primary text-xs py-2 px-3">
            Search
          </button>
        </form>
      </div>

      {/* Audit Events Table */}
      <div className="card-bharosa overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface border-b border-border uppercase font-semibold text-text-muted text-[10px] tracking-wider">
              <tr>
                <th className="p-3.5">Timestamp</th>
                <th className="p-3.5">Event Type</th>
                <th className="p-3.5">Actor (Signer)</th>
                <th className="p-3.5">Target Resource</th>
                <th className="p-3.5">Transaction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {events.length > 0 ? (
                events.map((evt) => (
                  <tr key={evt.id} className="hover:bg-surface/50 transition">
                    <td className="p-3.5 whitespace-nowrap text-text-muted">
                      {new Date(evt.timestamp).toLocaleString()}
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getEventBadge(
                          evt.eventType
                        )}`}
                      >
                        {evt.eventType?.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono text-[11px] truncate max-w-xs">{evt.actor}</td>
                    <td className="p-3.5 font-mono text-[11px] truncate max-w-xs text-text-muted">
                      {evt.target || '—'}
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      {evt.txHash ? (
                        <a
                          href={`https://amoy.polygonscan.com/tx/${evt.txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-primary-hover hover:underline flex items-center gap-1"
                        >
                          {evt.txHash.slice(0, 10)}... <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-text-muted">—</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-text-muted">
                    No matching audit events found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="p-4 border-t border-border flex items-center justify-between text-xs text-text-muted">
          <span>
            Showing page {page} of {totalPages} ({total} total events)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="p-1.5 rounded-lg border border-border disabled:opacity-40 hover:bg-surface transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="p-1.5 rounded-lg border border-border disabled:opacity-40 hover:bg-surface transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
