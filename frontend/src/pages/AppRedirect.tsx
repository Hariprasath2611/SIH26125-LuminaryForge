import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useAuth } from '../hooks/useAuth';
import { LoadingPage } from '../components/common/LoadingPage';

export default function AppRedirect() {
  const navigate = useNavigate();
  const { user, account, loading, isDemoUser } = useAuth();
  const { isConnected, address } = useAccount();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      navigate('/login?returnTo=/app', { replace: true });
      return;
    }

    // In demo mode with pre-configured wallet & did
    if (isDemoUser) {
      if (account?.didRegistered) {
        navigate('/dashboard', { replace: true });
      } else {
        navigate('/onboarding', { replace: true });
      }
      return;
    }

    const isLinked =
      isConnected &&
      address &&
      account?.walletAddress &&
      address.toLowerCase() === account.walletAddress.toLowerCase();

    if (!isLinked) {
      navigate('/connect-wallet', { replace: true });
      return;
    }

    if (!account?.didRegistered) {
      navigate('/onboarding', { replace: true });
      return;
    }

    navigate('/dashboard', { replace: true });
  }, [user, account, loading, isConnected, address, isDemoUser, navigate]);

  return <LoadingPage title="Bharosa" subtitle="Routing to your workspace..." />;
}
