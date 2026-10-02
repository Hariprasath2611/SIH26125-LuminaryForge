import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ExternalLink, Github, BookOpen, Activity } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#ECFCCB] py-14 text-xs text-[#4D6B2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-xl bg-[#84CC16] flex items-center justify-center text-[#1A2E05] shadow-xs">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-anton text-2xl tracking-wide text-[#1A2E05] uppercase">Bharosa</span>
            </Link>
            <p className="text-xs text-[#4D6B2A] leading-relaxed">
              Decentralized Identity, Client-Side AES-256-GCM IPFS Custody, and Mathematical Groth16 Zero-Knowledge Verification.
            </p>
            <div className="flex items-center space-x-2 text-[11px] text-[#65A30D] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-ping" />
              <span>Polygon Amoy Network Live</span>
            </div>
          </div>

          {/* Protocol Links */}
          <div className="space-y-3">
            <h4 className="font-anton text-sm text-[#1A2E05] uppercase tracking-wider">Protocol</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/app" className="hover:text-[#1A2E05] transition-colors">Launch Application</Link>
              </li>
              <li>
                <Link to="/public-verify" className="hover:text-[#1A2E05] transition-colors">Public Verifier Portal</Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-[#1A2E05] transition-colors">Security Center & Freeze</Link>
              </li>
              <li>
                <Link to="/audit" className="hover:text-[#1A2E05] transition-colors">On-Chain Audit Trail</Link>
              </li>
            </ul>
          </div>

          {/* Portals */}
          <div className="space-y-3">
            <h4 className="font-anton text-sm text-[#1A2E05] uppercase tracking-wider">Ecosystem</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/issuer" className="hover:text-[#1A2E05] transition-colors">Issuer Portal (Institutions)</Link>
              </li>
              <li>
                <Link to="/verifier" className="hover:text-[#1A2E05] transition-colors">Verifier Portal (Employers)</Link>
              </li>
              <li>
                <Link to="/access" className="hover:text-[#1A2E05] transition-colors">ABAC Delegation</Link>
              </li>
              <li>
                <Link to="/recovery" className="hover:text-[#1A2E05] transition-colors">Social Guardian Recovery</Link>
              </li>
            </ul>
          </div>

          {/* Standards & Open Source */}
          <div className="space-y-3">
            <h4 className="font-anton text-sm text-[#1A2E05] uppercase tracking-wider">Compliance & Standards</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-1.5">
                <span className="font-semibold text-[#1A2E05]">W3C:</span>
                <span>Decentralized Identifiers (v1.0)</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="font-semibold text-[#1A2E05]">OpenID:</span>
                <span>Verifiable Presentations (OID4VP)</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="font-semibold text-[#1A2E05]">Ethereum:</span>
                <span>EIP-4361 (SIWE) & EIP-2771 (Forwarder)</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="font-semibold text-[#1A2E05]">ZK-SNARK:</span>
                <span>Groth16 on bn128 Pairings</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#ECFCCB] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>&copy; {new Date().getFullYear()} Bharosa Protocol. All cryptographic rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="text-[#65A30D] font-mono">Build: Production v1.2.0</span>
            <span>&bull;</span>
            <span className="text-[#1A2E05] font-semibold">100% Non-Custodial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
