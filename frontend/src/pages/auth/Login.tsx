import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { AlertCircle, Loader2 } from 'lucide-react';
import { PageMeta } from '../../components/PageMeta';
import { DEMO_USERS } from '../../lib/demoAccounts';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const { signIn, signInWithGoogle, signInWithDemo } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [loadingDemo, setLoadingDemo] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState<string>('');
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
      const code = err.code || err.message || '';
      if (
        code.includes('user-not-found') ||
        code.includes('wrong-password') ||
        code.includes('invalid-credential')
      ) {
        setAuthError('Invalid email or password. Please try again or use quick demo login.');
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

  const handleDemoClick = async (demoId: string) => {
    setAuthError(null);
    setLoadingDemo(demoId);
    setLoadingStep('Initializing demo session…');
    try {
      await signInWithDemo(demoId);
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      console.error('[Login] Demo sign-in error:', err);
      setAuthError(err?.message || 'Failed to initialize demo session. Ensure backend is running.');
      setLoadingDemo(null);
      setLoadingStep('');
    }
  };

  return (
    <>
      <PageMeta
        title="Sign In | Bharosa Protocol"
        description="Sign in to your sovereign Bharosa identity account with Firebase or explore via instant demo login."
      />

      <div className="min-h-screen w-full bg-white flex flex-col lg:grid lg:grid-cols-2 text-[#1A2E05]">
        {/* ================= LEFT COLUMN: Welcome Back & Sign-In Form ================= */}
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-14 xl:p-16 max-w-xl mx-auto w-full">
          <div>
            {/* Top Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <img
                src="/logos/bharosa-mark.png"
                alt="Bharosa Logo"
                className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-extrabold text-2xl tracking-tight text-[#1A2E05]">
                Bharosa
              </span>
            </Link>

            {/* Stepper */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1A2E05] mt-4 mb-8">
              <span className="bg-[#84CC16] text-[#1A2E05] px-3 py-1 rounded-full font-bold">
                1 Sign in
              </span>
              <span className="text-stone-400">›</span>
              <span className="text-[#4D6B2A]">2 Connect wallet</span>
              <span className="text-stone-400">›</span>
              <span className="text-[#4D6B2A]">3 Dashboard</span>
            </div>

            {/* Header */}
            <div className="mb-6">
              <h1 className="!font-sans font-extrabold text-3xl sm:text-4xl text-[#1A2E05] tracking-tight mb-2">
                Welcome back
              </h1>
              <p className="text-xs sm:text-sm text-[#4D6B2A]">
                Sign in to your Bharosa account.
              </p>
            </div>

            {/* Auth Error Banner */}
            {authError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-[#DC2626] animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{authError}</span>
              </div>
            )}

            {/* Continue with Google */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={submitting || !!loadingDemo}
              className="w-full py-3 px-4 rounded-2xl border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#1A2E05] transition-all shadow-2xs hover:shadow-xs disabled:opacity-50"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
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
              <span>Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200" />
              </div>
              <div className="relative flex justify-center text-xs text-[#6B7280]">
                <span className="bg-white px-3 font-medium">or use email</span>
              </div>
            </div>

            {/* Email + Password Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#1A2E05]">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm text-[#1A2E05] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#84CC16] transition bg-white ${
                    errors.email ? 'border-red-500' : 'border-neutral-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 font-medium">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#1A2E05]">Password</label>
                <input
                  type="password"
                  {...register('password')}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm text-[#1A2E05] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#84CC16] transition bg-white ${
                    errors.password ? 'border-red-500' : 'border-neutral-300'
                  }`}
                />
                {errors.password && (
                  <p className="text-[11px] text-red-600 font-medium">{errors.password.message}</p>
                )}
                <div className="flex justify-end pt-0.5">
                  <Link
                    to="/forgot-password"
                    className="text-xs font-bold text-[#1A2E05] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting || !!loadingDemo}
                className="w-full py-3.5 rounded-2xl bg-[#84CC16] hover:bg-[#72b510] text-[#1A2E05] font-bold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 mt-5 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>

            <div className="text-center text-xs text-[#1A2E05] mt-5">
              New to Bharosa?{' '}
              <Link to="/signup" className="font-bold underline text-[#1A2E05]">
                Create an account
              </Link>
            </div>
          </div>

          {/* Bottom Footnote */}
          <p className="text-[11px] text-[#6B7280] text-center max-w-xs sm:max-w-sm mx-auto mt-8 sm:mt-12 leading-relaxed">
            Signing in only opens the app. Your identity, keys and credentials stay in your own wallet.
          </p>
        </div>

        {/* ================= RIGHT COLUMN: Quick Demo Login ================= */}
        <div className="bg-[#F6FCED] border-t lg:border-t-0 lg:border-l border-[#ECFCCB] flex flex-col justify-center p-6 sm:p-10 lg:p-14 xl:p-16 relative overflow-hidden">
          {/* Decorative Watermark Hexagon in Top Right */}
          <svg
            className="absolute -top-12 -right-12 w-64 h-64 text-[#84CC16]/25 pointer-events-none select-none"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
          >
            <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" />
          </svg>

          <div className="max-w-lg mx-auto w-full relative z-10">
            {/* Demo Mode Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ECFCCB] text-[#1A2E05] text-[11px] font-extrabold tracking-wider uppercase">
                DEMO MODE
              </span>
            </div>

            {/* Header */}
            <div className="mb-6">
              <h2 className="!font-sans font-extrabold text-3xl sm:text-4xl text-[#1A2E05] tracking-tight mb-2">
                Quick demo login
              </h2>
              <p className="text-xs sm:text-sm text-[#4D6B2A] leading-relaxed">
                Pick a sample user to explore Bharosa instantly. No wallet connection needed.
              </p>
            </div>

            {/* Loading indicator for demo login */}
            {loadingDemo && (
              <div className="mb-4 p-3.5 rounded-2xl bg-white border border-[#84CC16] flex items-center justify-center gap-3 text-xs font-semibold text-[#1A2E05] shadow-xs animate-in fade-in">
                <Loader2 className="w-4 h-4 animate-spin text-[#84CC16]" />
                <span>{loadingStep || 'Signing in with sample credentials…'}</span>
              </div>
            )}

            {/* 5 Demo User Cards */}
            <div className="space-y-3">
              {DEMO_USERS.map((user) => (
                <button
                  key={user.id}
                  onClick={() => handleDemoClick(user.id)}
                  disabled={submitting || !!loadingDemo}
                  className="w-full p-3.5 sm:p-4 rounded-2xl bg-white border border-[#ECFCCB] hover:border-[#84CC16] transition-all duration-200 shadow-2xs hover:shadow-sm flex items-center justify-between gap-3 text-left group disabled:opacity-50"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-[#84CC16] text-[#1A2E05] font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      {user.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#1A2E05] group-hover:text-[#65A30D] transition-colors truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-[#4D6B2A] truncate">
                        {user.subtitle || user.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#ECFCCB] text-[#1A2E05] shrink-0">
                    {user.badge || user.role}
                  </span>
                </button>
              ))}
            </div>

            {/* Explanatory Subtext */}
            <p className="text-xs text-[#4D6B2A] mt-6 leading-relaxed">
              Demo accounts use a built-in test wallet on a test network. Real accounts connect their own wallet after sign-in.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
