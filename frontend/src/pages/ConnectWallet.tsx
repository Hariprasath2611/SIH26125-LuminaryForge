import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAccount, useSignMessage, useSwitchChain, useChainId } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAuth } from '../hooks/useAuth';
import { apiClient } from '../lib/api';
import { PageMeta } from '../components/PageMeta';
import {
  ShieldCheck,
  CheckCircle2,
  Wallet,
  ArrowRight,
  ShieldAlert,
  Loader2,
  KeyRound,
  ExternalLink,
  RefreshCw,
  LogOut,
  AlertTriangle,
} from 'lucide-react';

export default function ConnectWallet() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get('returnTo');

  const { user, account, refreshAccount, signOut, isDemoUser } = useAuth();
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain, chains } = useSwitchChain();
  const { signMessageAsync } = useSignMessage();

  const [signing, setSigning] = useState<boolean>(false);
  const [unlinking, setUnlinking] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [nonce, setNonce] = useState<string>('');

  const currentChainId = chainId || 31337;
  const isSupportedChain = chains.some((c) => c.id === currentChainId);

  // Fetch a SIWE nonce on mount
  useEffect(() => {
    let isMounted = true;
    apiClient
      .getNonce()
      .then((res) => {
        if (isMounted) setNonce(res.nonce);
      })
      .catch((err) => {
        console.error('Failed to get SIWE nonce:', err);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const isWalletLinked = !!account?.walletAddress;
  const isAddressMatched =
    isConnected &&
    address &&
    account?.walletAddress &&
    address.toLowerCase() === account.walletAddress.toLowerCase();
  const isMismatch =
    isConnected &&
    address &&
    account?.walletAddress &&
    address.toLowerCase() !== account.walletAddress.toLowerCase();

  const handleLinkWallet = async () => {
    if (!address) {
      setError('Please connect your Web3 wallet first.');
      return;
    }
    setError(null);
    setSigning(true);

    try {
      // 1. Ensure we have fresh nonce
      let activeNonce = nonce;
      if (!activeNonce) {
        const nonceRes = await apiClient.getNonce();
        activeNonce = nonceRes.nonce;
        setNonce(activeNonce);
      }

      // 2. Prepare standardized SIWE message
      const message = `${window.location.host} wants you to sign in with your Ethereum account:\n${address}\n\nSign in to Bharosa: Trust, Owned by You.\n\nURI: ${window.location.origin}\nVersion: 1\nChain ID: ${currentChainId}\nNonce: ${activeNonce}\nIssued At: ${new Date().toISOString()}`;

      // 3. User signs message
      const signature = await signMessageAsync({ message });

      // 4. Link wallet with backend account
      await apiClient.linkWallet(message, signature, account?.persona || 'HOLDER');

      // 5. Refresh account state in AuthProvider
      const updatedAccount = await refreshAccount();

      // 6. Route to appropriate next step
      if (returnTo && returnTo !== '/connect-wallet' && returnTo !== '/login') {
        navigate(decodeURIComponent(returnTo), { replace: true });
      } else if (updatedAccount?.didRegistered) {
        navigate('/dashboard', { replace: true });
      } else {
        navigate('/onboarding', { replace: true });
      }
    } catch (err: any) {
      console.error('Wallet linking error:', err);
      setError(err?.message || 'Failed to sign and link wallet. Please try again.');
    } finally {
      setSigning(false);
    }
  };

  const handleUnlinkWallet = async () => {
    setError(null);
    setUnlinking(true);
    try {
      await apiClient.unlinkWallet();
      await refreshAccount();
    } catch (err: any) {
      setError(err?.message || 'Failed to unlink wallet.');
    } finally {
      setUnlinking(false);
    }
  };

  const handleProceed = () => {
    if (returnTo && returnTo !== '/connect-wallet' && returnTo !== '/login') {
      navigate(decodeURIComponent(returnTo), { replace: true });
    } else if (account?.didRegistered) {
      navigate('/dashboard', { replace: true });
    } else {
      navigate('/onboarding', { replace: true });
    }
  };

  // Determine current stepper state
  const step1Complete = true; // Logged in
  const step2Complete = isConnected;
  const step3Complete = isWalletLinked && isAddressMatched;
  const step4Complete = !!account?.didRegistered;

  return (
    <>
      <PageMeta
        title="Connect & Link Wallet | Bharosa Protocol"
        description="Link your Web3 cryptographic key to your secure decentralized identity profile."
      />
      <div className="min-h-screen bg-[#F7FBEF] text-[#1A2E05] flex flex-col justify-between p-4 sm:p-6 lg:p-8">
        {/* Top Navbar */}
        <header className="max-w-4xl w-full mx-auto flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logos/bharosa-mark.png"
              alt="Bharosa Logo"
              className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <span className="font-anton text-2xl tracking-wide text-[#1A2E05] uppercase">Bharosa</span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-[#ECFCCB] text-[#4D6B2A]">
                Key Gate
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => signOut()}
              className="inline-flex items-center text-xs font-medium text-[#4D6B2A] hover:text-[#1A2E05] px-3 py-1.5 rounded-lg border border-[#D9F99D] hover:bg-[#ECFCCB] transition-colors"
            >
              <LogOut className="w-3.5 h-3.5 mr-1.5" /> Sign Out
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-3xl w-full mx-auto my-6 flex-1 flex flex-col items-center justify-center">
          {/* 4-Step Stepper */}
          <div className="w-full mb-8 bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Step 1 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full bg-[#84CC16] text-[#1A2E05] flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-semibold text-[#65A30D] uppercase tracking-wider">Step 1</p>
                  <p className="text-xs font-medium text-[#1A2E05] truncate">Account Signed In</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center space-x-2.5">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    step2Complete
                      ? 'bg-[#84CC16] text-[#1A2E05]'
                      : 'bg-[#ECFCCB] text-[#4D6B2A]'
                  }`}
                >
                  {step2Complete ? '✓' : '2'}
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-semibold text-[#65A30D] uppercase tracking-wider">Step 2</p>
                  <p className="text-xs font-medium text-[#1A2E05] truncate">Connect Wallet</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center space-x-2.5">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    step3Complete
                      ? 'bg-[#84CC16] text-[#1A2E05]'
                      : step2Complete
                      ? 'bg-[#84CC16]/20 text-[#65A30D] ring-2 ring-[#84CC16]'
                      : 'bg-[#F2F7E4] text-[#8BA868]'
                  }`}
                >
                  {step3Complete ? '✓' : '3'}
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-semibold text-[#65A30D] uppercase tracking-wider">Step 3</p>
                  <p className="text-xs font-medium text-[#1A2E05] truncate">Link Cryptographic Key</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center space-x-2.5">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    step4Complete
                      ? 'bg-[#84CC16] text-[#1A2E05]'
                      : 'bg-[#F2F7E4] text-[#8BA868]'
                  }`}
                >
                  {step4Complete ? '✓' : '4'}
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-semibold text-[#65A30D] uppercase tracking-wider">Step 4</p>
                  <p className="text-xs font-medium text-[#1A2E05] truncate">DID & Onboarding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="w-full mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold">Authentication Issue</p>
                <p className="text-xs mt-0.5">{error}</p>
              </div>
            </div>
          )}

          {/* Main Card */}
          <div className="w-full bg-[#FFFFFF] border border-[#ECFCCB] rounded-3xl p-6 sm:p-10 shadow-sm">
            {/* Header info */}
            <div className="text-center max-w-lg mx-auto mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#ECFCCB] text-[#65A30D] flex items-center justify-center mx-auto mb-4">
                <KeyRound className="w-7 h-7" />
              </div>
              <h1 className="text-3xl font-bold font-anton text-[#1A2E05] uppercase tracking-wide">
                Link Cryptographic Key
              </h1>
              <p className="text-sm text-[#4D6B2A] mt-2">
                Connect your Web3 Ethereum wallet and sign a zero-cost cryptographic proof to link your identity to
                account <span className="font-semibold text-[#1A2E05]">{user?.email || 'Authenticated User'}</span>.
              </p>
            </div>

            {/* Profile Bar */}
            <div className="p-4 rounded-2xl bg-[#F7FBEF] border border-[#ECFCCB] flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs text-[#4D6B2A] font-medium">Logged in via Firebase</p>
                <p className="text-sm font-semibold text-[#1A2E05]">{user?.email}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#ECFCCB] text-[#4D6B2A] uppercase tracking-wider">
                  Persona: {account?.persona || 'HOLDER'}
                </span>
                {isDemoUser && (
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#84CC16] text-[#1A2E05]">
                    Demo Profile
                  </span>
                )}
              </div>
            </div>

            {/* Mismatch Warning */}
            {isMismatch && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
                <div className="flex items-start space-x-3">
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-amber-900">Wallet Mismatch Detected</p>
                    <p className="text-xs text-amber-800 mt-1">
                      This Bharosa account is linked to wallet{' '}
                      <span className="font-mono font-semibold">{account?.walletAddress}</span>, but your browser is
                      currently connected with <span className="font-mono font-semibold">{address}</span>.
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <p className="text-xs text-amber-800 italic">
                        Please switch to your linked wallet in your browser extension, or unlink to link this new one:
                      </p>
                      <button
                        onClick={handleUnlinkWallet}
                        disabled={unlinking}
                        className="px-3 py-1.5 rounded-lg bg-amber-200 hover:bg-amber-300 text-amber-950 font-semibold text-xs transition-colors flex items-center"
                      >
                        {unlinking ? <Loader2 className="w-3.5 h-3.5 animate-spin mr-1" /> : null}
                        Unlink Current Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Connect Wallet Section */}
            {!isConnected ? (
              <div className="p-8 rounded-2xl border-2 border-dashed border-[#D9F99D] bg-[#F7FBEF]/50 flex flex-col items-center text-center">
                <Wallet className="w-12 h-12 text-[#84CC16] mb-3" />
                <h3 className="text-lg font-bold text-[#1A2E05] mb-1">Step 2: Connect Web3 Wallet</h3>
                <p className="text-xs text-[#4D6B2A] max-w-md mb-6">
                  Select MetaMask, Rabby, Coinbase Wallet, or any Injected Web3 provider. Make sure you are on
                  Polygon Amoy, Hardhat Localhost, or Arbitrum Sepolia.
                </p>
                <div className="rainbow-custom-container">
                  <ConnectButton />
                </div>
              </div>
            ) : (
              /* Step 3: Wallet Connected, Now Sign to Link */
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#ECFCCB] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#84CC16]/20 text-[#65A30D] flex items-center justify-center">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4D6B2A]">Connected Wallet</p>
                      <p className="font-mono text-sm font-semibold text-[#1A2E05]">
                        {address?.slice(0, 6)}...{address?.slice(-4)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <ConnectButton accountStatus="avatar" chainStatus="icon" showBalance={false} />
                  </div>
                </div>

                {/* Wrong network warning */}
                {!isSupportedChain && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs">
                    <span className="text-amber-900 font-medium">
                      Unsupported chain (Chain ID: {currentChainId}). Please switch to Hardhat or Polygon Amoy.
                    </span>
                    {switchChain && chains.length > 0 && (
                      <button
                        onClick={() => switchChain({ chainId: chains[0].id })}
                        className="px-3 py-1.5 bg-amber-200 hover:bg-amber-300 font-semibold rounded-lg text-amber-950 transition-colors"
                      >
                        Switch Network
                      </button>
                    )}
                  </div>
                )}

                {/* State A: Wallet already linked & matched */}
                {isWalletLinked && isAddressMatched ? (
                  <div className="p-6 rounded-2xl bg-[#ECFCCB]/50 border border-[#84CC16] text-center">
                    <div className="w-12 h-12 rounded-full bg-[#84CC16] text-[#1A2E05] flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-anton text-[#1A2E05] uppercase tracking-wide">
                      Cryptographic Key Linked!
                    </h3>
                    <p className="text-xs text-[#4D6B2A] max-w-md mx-auto mt-1 mb-6">
                      Your wallet is securely registered to your Bharosa profile. You are ready to manage or create
                      your Decentralized Identifier (DID).
                    </p>
                    <button
                      onClick={handleProceed}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-sm transition-all shadow-sm group"
                    >
                      {account?.didRegistered ? 'Proceed to Dashboard' : 'Proceed to DID Onboarding'}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ) : (
                  /* State B: Need to Sign SIWE Message to Link */
                  <div className="border border-[#ECFCCB] rounded-2xl p-6 bg-[#F7FBEF]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <ShieldCheck className="w-5 h-5 text-[#65A30D]" />
                        <h4 className="text-sm font-bold text-[#1A2E05]">Anti-Phishing SIWE Verification</h4>
                      </div>
                      <span className="text-[11px] font-mono bg-[#ECFCCB] text-[#4D6B2A] px-2 py-0.5 rounded">
                        EIP-4361 Proof
                      </span>
                    </div>

                    <div className="p-3 bg-[#FFFFFF] border border-[#ECFCCB] rounded-xl font-mono text-[11px] text-[#4D6B2A] space-y-1 mb-6">
                      <p>
                        <strong className="text-[#1A2E05]">Domain:</strong> {window.location.host}
                      </p>
                      <p>
                        <strong className="text-[#1A2E05]">Address:</strong> {address}
                      </p>
                      <p>
                        <strong className="text-[#1A2E05]">Statement:</strong> Sign in to Bharosa: Trust, Owned by You.
                      </p>
                      <p>
                        <strong className="text-[#1A2E05]">Chain ID:</strong> {currentChainId}
                      </p>
                      <p>
                        <strong className="text-[#1A2E05]">Nonce:</strong> {nonce || 'Generating...'}
                      </p>
                      <p>
                        <strong className="text-[#1A2E05]">Cost:</strong> 0 gas (Off-chain digital signature)
                      </p>
                    </div>

                    <button
                      onClick={handleLinkWallet}
                      disabled={signing || !address}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#84CC16] hover:bg-[#65A30D] text-[#1A2E05] font-bold text-sm transition-all shadow-sm flex items-center justify-center disabled:opacity-50"
                    >
                      {signing ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Awaiting Wallet Signature...
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-4 h-4 mr-2" />
                          Sign SIWE Message to Link Wallet
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>

        {/* Footer info */}
        <footer className="max-w-3xl w-full mx-auto text-center py-4 text-xs text-[#4D6B2A]">
          Bharosa Decentralized Identity Protocol &bull; Zero-Knowledge Cryptography &bull; Polygon Amoy
        </footer>
      </div>
    </>
  );
}
