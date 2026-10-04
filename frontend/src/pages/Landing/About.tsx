import React from 'react';

const PROBLEMS = [
  {
    t: 'Fake credentials',
    d: 'Forged degrees and IDs are easy to make and hard to catch.',
  },
  {
    t: 'Central databases',
    d: 'One breach can expose millions of identities at once.',
  },
  {
    t: 'No control',
    d: 'Once you share a document, you cannot see or limit its use.',
  },
  {
    t: 'Slow verification',
    d: 'Employers wait days for the issuer to confirm what they already sent.',
  },
];

const STEPS = [
  {
    n: '1',
    t: 'Issue',
    d: 'A trusted issuer signs your credential digitally.',
  },
  {
    n: '2',
    t: 'Own',
    d: 'It lives in your wallet, never on a company server.',
  },
  {
    n: '3',
    t: 'Share with control',
    d: 'Grant time-bound access you can revoke at any moment.',
  },
  {
    n: '4',
    t: 'Verify instantly',
    d: 'Anyone can check it cryptographically, no phone calls.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 dots">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
        {/* About Header */}
        <div className="max-w-[720px] mb-12">
          <span className="eb">About</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-tight font-extrabold text-[#1A2E05] mb-5">
            Identity today is broken.
          </h2>
          <p className="text-lg sm:text-[19px] text-[#3F5A1E] leading-relaxed">
            Bharosa (भरोसा) means trust. We built it because proving who you are, and what you have earned,
            still depends on documents anyone can fake and databases anyone can breach.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((pb, idx) => (
            <div key={idx} className="card-landing p-7">
              <div className="font-extrabold text-xl text-[#1A2E05] mb-2.5">{pb.t}</div>
              <p className="text-[#4D6B2A] text-sm sm:text-[15px] leading-relaxed">{pb.d}</p>
            </div>
          ))}
        </div>

        {/* How It Works Header */}
        <div className="mt-24 mb-10">
          <span className="eb">How it works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-tight font-extrabold text-[#1A2E05] m-0">
            Four steps. No middlemen.
          </h2>
        </div>

        {/* 4 Steps with Connector Line */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[26px] left-[6%] right-[6%] h-[4px] bg-[#A3E635] rounded-full z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {STEPS.map((s, idx) => (
              <div key={idx} className="bg-transparent pt-1">
                <div className="hx relative shadow-xs">{s.n}</div>
                <div className="font-extrabold text-xl sm:text-[21px] text-[#1A2E05] mb-2">
                  {s.t}
                </div>
                <p className="text-[#4D6B2A] text-sm sm:text-[15px] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
