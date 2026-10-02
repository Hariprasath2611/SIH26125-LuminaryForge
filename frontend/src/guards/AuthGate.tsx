import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Loader2 } from 'lucide-react';

export function AuthGate({ children }: { children?: React.ReactNode }) {
  const { user, loading, isDemoUser } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]">
        <Loader2 className="w-8 h-8 animate-spin text-[#84CC16] mb-3" />
        <p className="text-sm font-medium">Verifying Bharosa credentials...</p>
      </div>
    );
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
