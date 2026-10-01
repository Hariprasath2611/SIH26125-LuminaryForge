import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

export function NotFoundPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[60vh]">
      <PageMeta title="Page Not Found" description="The requested route does not exist." />
      
      <div className="w-16 h-16 rounded-2xl bg-lime-100 border border-lime-300 flex items-center justify-center text-[#0C2518] mb-4">
        <ShieldAlert className="w-8 h-8 text-lime-700" />
      </div>

      <h1 className="text-4xl font-black text-[#0C2518] tracking-tight">404 - Not Found</h1>
      <p className="text-sm text-[#4D6B2A] max-w-md mt-2 mb-6">
        The cryptographic resource or interface path you are navigating to could not be found or has moved.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0C2518] text-[#C6F432] text-xs font-bold shadow-md hover:bg-[#18442D] transition"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Protocol Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
