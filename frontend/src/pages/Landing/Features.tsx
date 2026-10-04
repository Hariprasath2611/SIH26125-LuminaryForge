import React from 'react';

const FEATURES = [
  {
    n: '1',
    t: 'Self-sovereign ID',
    d: 'W3C Decentralized Identifiers you generate and own.',
  },
  {
    n: '2',
    t: 'Verifiable credentials',
    d: 'Signed, tamper-evident, and checkable by anyone.',
  },
  {
    n: '3',
    t: 'On-chain access control',
    d: 'Role-, purpose- and time-based permissions in smart contracts.',
  },
  {
    n: '4',
    t: 'Encrypted assets',
    d: 'AES-256 files on IPFS, with only hashes on the blockchain.',
  },
  {
    n: '5',
    t: 'Zero-knowledge proofs',
    d: 'Prove a fact without revealing the document.',
  },
  {
    n: '6',
    t: 'Social recovery',
    d: 'Trusted guardians help you regain a lost wallet.',
  },
  {
    n: '7',
    t: 'Audit log',
    d: 'A permanent, tamper-proof record of every action.',
  },
  {
    n: '8',
    t: 'Security Center',
    d: 'Alerts for suspicious access patterns.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 lg:py-32 dots">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-[720px] mb-14">
          <span className="eb">Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.22] sm:leading-[1.26] tracking-tight font-extrabold text-[#1A2E05] mt-2 mb-6">
            Everything you need to own your trust.
          </h2>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, idx) => (
            <div key={idx} className="card-landing p-7">
              <div className="hx shadow-2xs mb-4">{f.n}</div>
              <div className="font-extrabold text-xl text-[#1A2E05] mb-2.5">{f.t}</div>
              <p className="text-[#4D6B2A] text-sm sm:text-[15px] leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
