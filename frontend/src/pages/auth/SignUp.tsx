import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { User, Mail, Lock, AlertCircle, Loader2, Check } from 'lucide-react';
import { PageMeta } from '../../components/PageMeta';

const signUpSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const { signUp } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    setAuthError(null);
    setSubmitting(true);
    try {
      await signUp(data.email, data.password, data.name);
      navigate('/verify-email', { replace: true });
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setAuthError('An account with this email address already exists. Please sign in instead.');
      } else if (err.code === 'auth/weak-password') {
        setAuthError('Password is too weak. Please use a stronger combination.');
      } else {
        setAuthError(err.message || 'Registration failed. Please check your credentials.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Create Account | Bharosa Protocol"
        description="Create your sovereign digital identity account on Bharosa"
      />
      <div className="space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-black text-[#1A2E05] tracking-tight">Create Bharosa Account</h1>
          <p className="text-xs text-[#4D6B2A]">
            Set up your secure profile to begin issuing or managing sovereign credentials
          </p>
        </div>

        {authError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-[#DC2626] animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{authError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-text-muted">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-text-muted absolute left-3 top-3 pointer-events-none" />
              <input
                type="text"
                {...register('name')}
                placeholder="e.g. Alice Sharma"
                className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${
                  errors.name ? 'border-status-error' : 'border-border'
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-[11px] text-status-error font-medium">{errors.name.message}</p>
            )}
          </div>

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
            <label className="text-xs font-bold text-text-muted">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-text-muted absolute left-3 top-3 pointer-events-none" />
              <input
                type="password"
                {...register('password')}
                placeholder="Minimum 6 characters"
                className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${
                  errors.password ? 'border-status-error' : 'border-border'
                }`}
              />
            </div>
            {errors.password && (
              <p className="text-[11px] text-status-error font-medium">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-text-muted">Confirm Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-text-muted absolute left-3 top-3 pointer-events-none" />
              <input
                type="password"
                {...register('confirmPassword')}
                placeholder="Re-enter your password"
                className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs text-text bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${
                  errors.confirmPassword ? 'border-status-error' : 'border-border'
                }`}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-[11px] text-status-error font-medium">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="p-3 bg-surface rounded-xl border border-border text-[11px] text-text-muted space-y-1">
            <div className="font-bold text-text flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-primary-hover" /> Decentralized Architecture Guarantee
            </div>
            <div>
              Firebase manages only your application login. Credentials, keys, and identities remain 100% self-sovereign on IPFS & Blockchain.
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full btn-primary py-2.5 text-xs font-bold shadow-sm"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Creating Account...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="text-center text-xs text-text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-hover font-bold hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
}
