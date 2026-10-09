import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LoadingPage } from '../components/common/LoadingPage';

export function AuthGate({ children }: { children?: React.ReactNode }) {
  const { user, loading, isDemoUser } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingPage title="Bharosa" subtitle="Verifying your session..." />;
  }

  if (!user) {
    const returnTo = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/login?returnTo=${returnTo}`} replace />;
  }

  // Check email verification for Firebase password users (skip for demo users)
  if (!isDemoUser && 'emailVerified' in user && !user.emailVerified) {
    // If the provider is password, enforce email verification
    const isPasswordProvider = user.providerData?.some((p) => p.providerId === 'password');
    if (isPasswordProvider && location.pathname !== '/verify-email') {
      return <Navigate to="/verify-email" replace />;
    }
  }

  return children ? <>{children}</> : <Outlet />;
}
