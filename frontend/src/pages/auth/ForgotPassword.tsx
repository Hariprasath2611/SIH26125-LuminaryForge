import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Mail, AlertCircle, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import { PageMeta } from '../../components/PageMeta';

const forgotSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotFormData = z.infer<typeof forgotSchema>;

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = async (data: ForgotFormData) => {
    setStatus('idle');
    setErrorMessage(null);
    setSubmitting(true);
    try {
      await resetPassword(data.email);
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to send password reset email.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Reset Password | Bharosa Protocol"
        description="Reset your account password"
      />
      <div className="space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-black text-[#1A2E05] tracking-tight">Reset Password</h1>
          <p className="text-xs text-[#4D6B2A]">
            Enter your email to receive password recovery instructions
          </p>
        </div>

        {status === 'success' && (
          <div className="p-4 bg-lime-50 border border-primary/40 rounded-xl space-y-2 text-xs text-text animate-in fade-in">
            <div className="font-bold text-status-success flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Reset Email Dispatched!
            </div>
            <p className="text-text-muted">
              Check your inbox for password reset instructions. If you don't see it within a couple minutes, check your spam folder.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-status-error animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-text-muted">Registered Email Address</label>
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

          <button
            type="submit"
            disabled={submitting}
            className="w-full btn-primary py-2.5 text-xs font-bold shadow-sm"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Sending Link...
              </span>
            ) : (
              'Send Reset Link'
            )}
          </button>
        </form>

        <div className="text-center">
          <Link
            to="/login"
            className="text-xs font-bold text-primary-hover hover:underline inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
