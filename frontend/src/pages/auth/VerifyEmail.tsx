import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Mail, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';
import { PageMeta } from '../../components/PageMeta';

export default function VerifyEmail() {
  const { user, resendVerificationEmail, refreshAccount } = useAuth();
  const [resending, setResending] = useState(false);
  const [resent, setResent] = useState(false);
  const [checking, setChecking] = useState(false);
  const navigate = useNavigate();

  const handleResend = async () => {
    setResending(true);
    setResent(false);
    try {
      await resendVerificationEmail();
      setResent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setResending(false);
    }
  };

  const handleCheckVerified = async () => {
    setChecking(true);
    try {
      // Reload user token
      if (user && 'reload' in user) {
        await (user as any).reload();
        if ((user as any).emailVerified) {
          await refreshAccount();
          navigate('/connect-wallet', { replace: true });
          return;
        }
      }
    } catch {
      // Continue
    } finally {
      setChecking(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Verify Email | Bharosa Protocol"
        description="Verify your email address to activate your Bharosa account"
      />
      <div className="space-y-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-surface-2 border border-primary/40 flex items-center justify-center text-primary-hover mx-auto">
          <Mail className="w-7 h-7" />
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl font-black text-text tracking-tight">Verify Your Email</h1>
          <p className="text-xs text-text-muted">
            We sent a verification link to{' '}
            <span className="font-bold text-text">{user?.email || 'your email'}</span>.
          </p>
        </div>

        <div className="p-4 bg-surface rounded-xl border border-border text-xs text-text-muted space-y-2 text-left">
          <p>
            Please click the link inside the confirmation email to verify your ownership. Once verified, you can proceed to link your Web3 wallet.
          </p>
          {resent && (
            <div className="font-bold text-status-success flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-4 h-4" /> A fresh verification email was dispatched.
            </div>
          )}
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={handleCheckVerified}
            disabled={checking}
            className="w-full btn-primary py-2.5 text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
          >
            {checking ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <>
                I Have Verified My Email <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="w-full btn-secondary py-2 text-xs font-bold"
          >
            {resending ? 'Sending...' : 'Resend Verification Email'}
          </button>
        </div>
      </div>
    </>
  );
}
