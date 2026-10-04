import React from 'react';

const FLOW_STEPS = [
  {
    n: '1',
    t: 'University issues',
    d: 'Chennai University signs a digital certificate.',
    h: '36px',
  },
  {
    n: '2',
    t: 'Student owns',
    d: 'Priya keeps it encrypted in her own wallet.',
    h: '36px',
  },
  {
    n: '3',
    t: 'Employer verifies',
    d: 'TechCorp HR checks it instantly, with her permission.',
    h: '0px',
  },
];

const CHECKS = [
  'Issuer signature is valid',
  'Issuer is trusted on-chain',
  'Hash matches the on-chain record',
  'Not revoked or expired',
];

export function Demo() {
  return (
    <section id="demo" className="py-20 sm:py-28 lg:py-32 dots">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-8 flex flex-wrap items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Flow Timeline */}
        <div className="flex-[1_1_400px] max-w-[520px]">
          <span className="eb">See it in action</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.22] sm:leading-[1.26] tracking-tight font-extrabold text-[#1A2E05] mt-2 mb-6">
            A credential, verified in seconds.
          </h2>
          <p className="text-lg sm:text-[19px] text-[#3F5A1E] leading-relaxed mb-8 max-w-lg font-medium">
            The employer never calls the university. Every check runs against the blockchain, right in the browser.
          </p>

          <div className="space-y-3">
            {FLOW_STEPS.map((f, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="hx m-0 w-10 h-11 text-sm font-bold shadow-2xs">
                    {f.n}
                  </div>
                  {f.h !== '0px' && (
                    <div
                      className="w-[3px] bg-[#A3E635] my-1 rounded-full"
                      style={{ height: f.h }}
                    />
                  )}
                </div>
                <div className="pb-3 pt-0.5">
                  <div className="font-extrabold text-lg text-[#1A2E05]">{f.t}</div>
                  <p className="text-sm sm:text-[15px] text-[#4D6B2A] mt-1 leading-relaxed">
                    {f.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Verification Report Card & Floating Chip */}
        <div className="flex-[1_1_420px] max-w-[520px] relative pb-20 w-full">
          <div className="bg-white border border-[#D9EBB5] rounded-3xl p-7 sm:p-9 shadow-[0_24px_60px_rgba(101,163,13,0.18)]">
            <div className="flex justify-between items-center mb-5">
              <div className="font-extrabold text-xl text-[#1A2E05]">Verification report</div>
              <span className="bg-[#84CC16] text-[#1A2E05] rounded-full px-4 py-1.5 font-extrabold text-[13px] shadow-2xs">
                All checks passed
              </span>
            </div>

            {CHECKS.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 py-3.5 border-t border-[#E7F2CF]"
              >
                <span className="flex-none w-7 h-7 rounded-full bg-[#ECFCCB] flex items-center justify-center shadow-3xs">
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path
                      d="M5 12.5l4.5 4.5L19 7.5"
                      fill="none"
                      stroke="#1A2E05"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-bold text-[#1A2E05] text-sm sm:text-base">{c}</span>
              </div>
            ))}
          </div>

          {/* Access Granted Floating Chip */}
          <div className="chip -right-3.5 bottom-0 flex-col items-start gap-1 p-4 sm:p-5 shadow-lg">
            <span className="font-extrabold text-base text-[#1A2E05]">Access granted</span>
            <span className="text-sm text-[#4D6B2A] font-medium">TechCorp HR · Hiring verification</span>
            <span className="text-[13px] text-[#4D6B2A] font-semibold">Expires in 7 days · revoke anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demo;
