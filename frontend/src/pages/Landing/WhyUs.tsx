import React from 'react';

const COMPARISON_ROWS = [
  {
    k: 'Who owns your identity',
    a: 'A central database',
    b: 'You, in your own wallet',
  },
  {
    k: 'Verification',
    a: 'Days of calls and emails',
    b: 'An instant cryptographic check',
  },
  {
    k: 'If there is a breach',
    a: 'Everyone is exposed',
    b: 'No central store of sensitive data',
  },
  {
    k: 'Sharing documents',
    a: 'Share once, lose control',
    b: 'Time-bound, revocable access',
  },
];

const WINS = [
  {
    t: 'Data sovereignty',
    d: 'Full ownership of your identity, with real-time consent and revocation.',
  },
  {
    t: 'No single point of failure',
    d: 'No central credential database for attackers to target.',
  },
  {
    t: 'Faster verification',
    d: 'Cross-border checks without contacting the issuer each time.',
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 lg:py-32 bg-surface transition-colors">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[720px] mb-12">
          <span className="eb">Why us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-tight font-extrabold text-fg mb-5">
            Why Bharosa?
          </h2>
          <p className="text-lg sm:text-[19px] text-fg-muted leading-relaxed">
            Same goal as today's systems, built on a different foundation.
          </p>
        </div>

        {/* Comparison Rows */}
        <div className="space-y-4">
          {COMPARISON_ROWS.map((r, idx) => (
            <div key={idx} className="row-compare p-6 sm:p-7">
              <div className="font-extrabold text-lg sm:text-[19px] text-fg">
                {r.k}
              </div>
              <div className="text-fg-muted text-sm sm:text-base">
                <span className="font-semibold text-fg-subtle">Traditional:</span> {r.a}
              </div>
              <div className="font-bold text-fg text-sm sm:text-base flex items-center flex-wrap gap-2.5">
                <span className="bg-primary text-on-primary rounded-lg px-2.5 py-1 text-xs font-extrabold shadow-2xs">
                  Bharosa
                </span>
                <span>{r.b}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Wins Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {WINS.map((w, idx) => (
            <div
              key={idx}
              className="card-landing bg-surface-2 shadow-xs hover:shadow-md transition-all p-7 sm:p-8"
            >
              <div className="font-extrabold text-xl sm:text-[22px] text-fg mb-2.5">
                {w.t}
              </div>
              <p className="text-fg-muted text-sm sm:text-[15px] leading-relaxed">
                {w.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
