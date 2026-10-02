import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Loader2 } from 'lucide-react';

export function OnboardingGate({ children }: { children?: React.ReactNode }) {
  const { account, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]">
        <Loader2 className="w-8 h-8 animate-spin text-[#84CC16] mb-3" />
        <p className="text-sm font-medium">Resolving decentralized identity...</p>
      </div>
    );
  }

  // If DID is not registered, redirect to onboarding to generate DID and wrapping keys
  if (!account?.didRegistered) {
    return <Navigate to="/onboarding" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
}
