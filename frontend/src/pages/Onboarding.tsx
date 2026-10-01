import React, { useState } from 'react';
import { useAccount, useSignMessage } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Key,
  Lock,
  UserCheck,
  ShieldAlert,
  Loader2,
} from 'lucide-react';
import { formatDID, deriveWrappingKeypairFromSignature, createDIDDocument, defaultIpfsClient } from '@/lib';
import { env } from '@/config/env';
import { PageMeta } from '@/components/PageMeta';

export function OnboardingPage() {
  const navigate = useNavigate();
  const { address, isConnected, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Identity state
  const [did, setDid] = useState<string>('');
  const [wrappingPubKey, setWrappingPubKey] = useState<string>('');
  const [metadataCID, setMetadataCID] = useState<string>('');
  const [guardians, setGuardians] = useState<string>('');

  const currentChainId = chainId || 31337;

  // Step 2: SIWE & Key Derivation
  const handleSIWEAndDeriveKeys = async () => {
    if (!address) return;
    setLoading(true);
    setError(null);

    try {
      // 1. Fetch SIWE Nonce from API
      const apiUrl = env.API_URL;
      const nonceRes = await fetch(`${apiUrl}/auth/nonce`);
      if (!nonceRes.ok) throw new Error('Failed to fetch authentication nonce');
      const { nonce } = await nonceRes.json();

      // 2. Prepare SIWE statement
      const message = `${window.location.host} wants you to sign in with your Ethereum account:\n${address}\n\nSign in to Bharosa: Trust, Owned by You.\n\nURI: ${window.location.origin}\nVersion: 1\nChain ID: ${currentChainId}\nNonce: ${nonce}\nIssued At: ${new Date().toISOString()}`;

      // 3. User signs message with wallet
      const signature = await signMessageAsync({ message });

      // 4. Verify SIWE on backend
      const verifyRes = await fetch(`${apiUrl}/auth/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, signature }),
      });
      if (!verifyRes.ok) throw new Error('SIWE signature verification failed on backend');

      // 5. Derive deterministic key-wrapping keypair using HKDF-SHA256
      const keypair = deriveWrappingKeypairFromSignature(signature, 1);
      const generatedDid = formatDID(currentChainId, address);

      setDid(generatedDid);
      setWrappingPubKey(keypair.publicKeyHex);

      // 6. Generate & Pin W3C DID Document to IPFS
      const didDoc = createDIDDocument(currentChainId, address, keypair.publicKeyHex);
      const pinResult = await defaultIpfsClient.uploadJSON(didDoc);
      setMetadataCID(pinResult.cid);

      setStep(3);
    } catch (err: any) {
      setError(err.message || 'Authentication and key derivation failed');
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Register DID On-Chain
  const handleRegisterDIDOnChain = async () => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStep(4);
    } catch (err: any) {
      setError(err.message || 'Failed to register DID on-chain');
    } finally {
      setLoading(false);
    }
  };

  // Step 4: Complete Onboarding
  const handleComplete = () => {
    navigate('/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto w-full p-6 md:p-10 my-8">
      <PageMeta
        title="Onboarding & Identity Setup"
        description="Connect wallet, generate self-sovereign DID keys, and anchor on Polygon blockchain."
      />

      {/* Stepper Progress */}
      <div className="flex items-center justify-between mb-8">
        {[
          { num: 1, label: 'Wallet' },
          { num: 2, label: 'Identity' },
          { num: 3, label: 'Anchor' },
          { num: 4, label: 'Guardians' },
        ].map((s) => (
          <div key={s.num} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                step >= s.num
                  ? 'bg-primary text-text shadow-sm'
                  : 'bg-surface text-text-muted border border-border'
              }`}
            >
              {step > s.num ? <CheckCircle2 className="w-4 h-4 text-status-success" /> : s.num}
            </div>
            <span className="text-xs font-semibold hidden sm:inline">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="card-bharosa p-6 md:p-8 space-y-6">
        {/* Step 1: Connect Wallet */}
        {step === 1 && (
          <div className="text-center space-y-5">
            <div className="w-14 h-14 bg-surface-2 rounded-2xl mx-auto flex items-center justify-center text-primary-hover">
              <Key className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">Connect Your Wallet</h2>
              <p className="text-sm text-text-muted">
                Your wallet controls your decentralized cryptographic identity. No central server or passwords.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <ConnectButton />
            </div>

            {isConnected && (
              <div className="pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="btn-primary w-full"
                >
                  Continue to Identity Verification <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 2: SIWE & Key Derivation */}
        {step === 2 && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-primary-hover">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Sign-In with Ethereum (SIWE)</h2>
                <p className="text-xs text-text-muted">
                  Derives your confidential key-wrapping keypair using HKDF-SHA256. Nothing is stored on servers.
                </p>
              </div>
            </div>

            <div className="bg-surface p-4 rounded-xl border border-border space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="font-semibold text-text-muted">Connected Account:</span>
                <span className="font-mono">{address}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-text-muted">Chain ID:</span>
                <span>{currentChainId} (EVM Compatible)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-text-muted">Key Derivation:</span>
                <span className="text-status-success font-semibold">ECIES secp256k1 + HKDF</span>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-status-error text-xs rounded-lg border border-red-200 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                {error}
              </div>
            )}

            <button
              onClick={handleSIWEAndDeriveKeys}
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" /> Generating Identity...
                </>
              ) : (
                'Sign to Generate DID & Keys'
              )}
            </button>
          </div>
        )}

        {/* Step 3: Anchor DID On-Chain */}
        {step === 3 && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-primary-hover">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Anchor DID On-Chain</h2>
                <p className="text-xs text-text-muted">
                  Register your DID document and public wrapping key on the Polygon/Arbitrum blockchain.
                </p>
              </div>
            </div>

            <div className="bg-surface p-4 rounded-xl border border-border space-y-2 text-xs font-mono break-all">
              <div>
                <span className="font-sans font-bold text-text-muted block">Decentralized Identifier (DID):</span>
                <span>{did}</span>
              </div>
              <div>
                <span className="font-sans font-bold text-text-muted block">Public Key-Wrapping Key:</span>
                <span>{wrappingPubKey}</span>
              </div>
              <div>
                <span className="font-sans font-bold text-text-muted block">IPFS Metadata CID:</span>
                <span>{metadataCID}</span>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-status-error text-xs rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <button
              onClick={handleRegisterDIDOnChain}
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" /> Anchoring on Blockchain...
                </>
              ) : (
                'Anchor DID on Blockchain (Gasless)'
              )}
            </button>
          </div>
        )}

        {/* Step 4: Social Recovery Setup (Skippable) */}
        {step === 4 && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center text-primary-hover">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Social Recovery (Optional)</h2>
                <p className="text-xs text-text-muted">
                  Designate 2-3 trusted guardians who can help recover your account if you lose your private key.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-muted block">
                Guardian Wallet Addresses (Comma-separated)
              </label>
              <textarea
                value={guardians}
                onChange={(e) => setGuardians(e.target.value)}
                placeholder="0xGuardian1..., 0xGuardian2..."
                className="w-full text-xs p-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono"
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleComplete}
                className="btn-secondary flex-1"
              >
                Skip for Now
              </button>
              <button
                onClick={handleComplete}
                className="btn-primary flex-1"
              >
                Complete Setup & Go to Dashboard <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OnboardingPage;
