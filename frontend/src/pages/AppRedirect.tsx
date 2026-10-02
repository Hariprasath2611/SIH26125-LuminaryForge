import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useAuth } from '../hooks/useAuth';
import { Loader2 } from 'lucide-react';

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FBEF] text-[#1A2E05]">
      <Loader2 className="w-8 h-8 animate-spin text-[#84CC16] mb-3" />
      <p className="text-sm font-medium">Entering Bharosa Protocol...</p>
    </div>
  );
}
