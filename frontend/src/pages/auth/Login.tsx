import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Lock, Mail, AlertCircle, Loader2, Sparkles, User, School, Building2 } from 'lucide-react';
import { PageMeta } from '../../components/PageMeta';
import { QuickDemoLogin } from '../../components/auth/QuickDemoLogin';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const { signIn, signInWithGoogle, signInWithDemo } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/app';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setAuthError(null);
    setSubmitting(true);
    try {
      await signIn(data.email, data.password);
      navigate(from, { replace: true });
    } catch (err: any) {
      const code = err.code || err.message;
      if (code.includes('user-not-found') || code.includes('wrong-password') || code.includes('invalid-credential')) {
        setAuthError('Invalid email or password. Please try again or use a demo login.');
      } else if (code.includes('too-many-requests')) {
        setAuthError('Too many failed attempts. Access temporarily restricted. Try again later.');
      } else {
        setAuthError(err.message || 'Failed to sign in. Please verify your connection.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setAuthError(null);
    setSubmitting(true);
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err: any) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setAuthError(err.message || 'Google sign-in could not be completed.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDemoSignIn = async (role: 'student' | 'university' | 'employer') => {
    setAuthError(null);
    setSubmitting(true);
    try {
      await signInWithDemo(role);
      navigate(from, { replace: true });
    } catch (err: any) {
      setAuthError('Failed to initialize demo session.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Sign In | Bharosa Protocol"
        description="Sign in to your sovereign Bharosa identity account with Firebase Authentication"
      />
      <div className="space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-black text-[#1A2E05] tracking-tight">Sign In to Bharosa</h1>
          <p className="text-xs text-[#4D6B2A]">
            Access your decentralized credentials and sovereign asset vault
          </p>
        </div>

        {authError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-[#DC2626] animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{authError}</span>
          </div>
        )}

        {/* Quick Demo Login (One-click sample users with silent demo signer) */}
        <QuickDemoLogin onSuccess={() => navigate('/dashboard', { replace: true })} />

        {/* Google Sign In */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={submitting}
          className="w-full py-2.5 px-4 bg-white hover:bg-surface border border-border rounded-xl text-xs font-bold text-text flex items-center justify-center gap-2.5 transition shadow-2xs"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Email + Password Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-text-muted">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-text-muted absolute left-3 top-3 pointer-events-none" />
              <input
                type="email"
                {...register('email')}
                placeholder="you@domain.com"
                className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${
                  errors.email ? 'border-status-error' : 'border-border'
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-status-error font-medium">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-text-muted">Password</label>
              <Link to="/forgot-password" className="text-[11px] text-primary-hover font-bold hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-text-muted absolute left-3 top-3 pointer-events-none" />
              <input
                type="password"
                {...register('password')}
                placeholder="••••••••"
                className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${
                  errors.password ? 'border-status-error' : 'border-border'
                }`}
              />
            </div>
            {errors.password && (
              <p className="text-[11px] text-status-error font-medium">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full btn-primary py-2.5 text-xs font-bold shadow-sm"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Signing In...
              </span>
            ) : (
              'Sign In with Email'
            )}
          </button>
        </form>

        <div className="text-center text-xs text-text-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary-hover font-bold hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </>
  );
}
