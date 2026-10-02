import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useAuth } from '../hooks/useAuth';
import { Loader2 } from 'lucide-react';

export function WalletGate({ children }: { children?: React.ReactNode }) {
  const { account, loading, isDemoUser } = useAuth();
  const { isConnected, address } = useAccount();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]">
        <Loader2 className="w-8 h-8 animate-spin text-[#84CC16] mb-3" />
        <p className="text-sm font-medium">Checking cryptographic wallet status...</p>
      </div>
    );
  }

  // In demo mode with a pre-configured wallet, allow access without requiring actual hardware/extension connection
  if (isDemoUser && account?.walletAddress) {
    return children ? <>{children}</> : <Outlet />;
  }

  // For standard users: must have Wagmi connected AND account.walletAddress linked AND addresses must match
  const isLinked = !!account?.walletAddress;
  const isMatching =
    isConnected &&
    address &&
    account?.walletAddress &&
    address.toLowerCase() === account.walletAddress.toLowerCase();

  if (!isConnected || !isLinked || !isMatching) {
    const returnTo = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/connect-wallet?returnTo=${returnTo}`} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
}
