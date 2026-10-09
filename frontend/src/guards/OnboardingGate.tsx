import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LoadingPage } from '../components/common/LoadingPage';

export function OnboardingGate({ children }: { children?: React.ReactNode }) {
  const { account, loading } = useAuth();

  if (loading) {
    return <LoadingPage title="Bharosa" subtitle="Resolving decentralized identity..." />;
  }

  // If DID is not registered, redirect to onboarding to generate DID and wrapping keys
  if (!account?.didRegistered) {
    return <Navigate to="/onboarding" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
}
