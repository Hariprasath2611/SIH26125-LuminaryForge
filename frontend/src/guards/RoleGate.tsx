import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

interface RoleGateProps {
  allowedRoles: string[];
  children?: React.ReactNode;
}

export function RoleGate({ allowedRoles, children }: RoleGateProps) {
  const { account, loading } = useAuth();

  if (loading) {
    return null;
  }

  const userPersona = account?.persona?.toUpperCase() || '';
  const userRoles = (account?.onChainRoles || []).map((r) => r.toUpperCase());

  const hasAccess =
    allowedRoles.includes(userPersona) ||
    allowedRoles.some((role) => userRoles.includes(role.toUpperCase()));

  if (!hasAccess) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 bg-[#F7FBEF]">
        <div className="max-w-md w-full bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl p-8 shadow-sm text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#ECFCCB] flex items-center justify-center mx-auto mb-4 text-[#65A30D]">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold font-anton text-[#1A2E05] tracking-wide mb-2 uppercase">
            Access Restricted
          </h2>
          <p className="text-sm text-[#4D6B2A] mb-6 leading-relaxed">
            This module requires verified credentials or privileges ({allowedRoles.join(', ')}). Your current role is{' '}
            <span className="font-semibold text-[#1A2E05]">{account?.persona || 'HOLDER'}</span>.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-semibold text-sm transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return children ? <>{children}</> : <Outlet />;
}
