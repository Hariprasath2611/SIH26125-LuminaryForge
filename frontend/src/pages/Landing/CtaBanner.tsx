import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, FileCheck2 } from 'lucide-react';

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#84CC16] via-[#94D82D] to-[#A3E635] p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-lg border border-[#65A30D]/20">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#ECFCCB]/50 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#65A30D]/30 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#1A2E05] text-[#84CC16] flex items-center justify-center mx-auto shadow-md">
              <ShieldCheck className="w-9 h-9 stroke-[2.5]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-anton text-[#1A2E05] uppercase tracking-wide leading-tight">
              Ready to Own Your Cryptographic Identity?
            </h2>

            <p className="text-sm sm:text-base text-[#1A2E05]/90 font-medium max-w-lg mx-auto leading-relaxed">
              Join thousands of individuals, universities, and accredited organizations verifying trust on Polygon.
              Zero gas required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Link
                to="/app"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#1A2E05] hover:bg-[#254207] text-[#FFFFFF] font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Launch App Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform text-[#84CC16]" />
              </Link>
              <Link
                to="/public-verify"
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[#FFFFFF] hover:bg-[#F7FBEF] text-[#1A2E05] font-bold text-sm transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 border border-white"
              >
                <FileCheck2 className="w-4 h-4 mr-2 text-[#65A30D]" />
                <span>Verify a Credential</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
