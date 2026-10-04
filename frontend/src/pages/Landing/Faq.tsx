import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How are documents and credentials encrypted on Bharosa?',
    a: 'All files are encrypted client-side in your browser using AES-256-GCM before transmission. A cryptographic wrapping key is derived from your wallet signature using HKDF-SHA256. The resulting ciphertext is stored on IPFS. Neither Bharosa servers nor IPFS node operators can decrypt your data.',
  },
  {
    q: 'What if I lose access to my Web3 wallet or private key?',
    a: 'Bharosa integrates an on-chain Social Recovery module. During onboarding, you designate trusted guardians (such as hardware devices, secondary wallets, or verified peers). If your primary key is compromised or lost, a 2-of-3 guardian consensus can restore control of your DID to a new address.',
  },
  {
    q: 'How does Zero-Knowledge proof verification work in practice?',
    a: 'Using Groth16 zk-SNARK circuits compiled with Circom, your browser proves that your data satisfies a mathematical constraint (for example, "Age >= 21" or "Degree GPA >= 3.5") without revealing your actual birthdate or grades. The verifier verifies the 256-bit proof on Polygon in less than 50 milliseconds.',
  },
  {
    q: 'Do students or citizens have to pay gas fees (MATIC) to use Bharosa?',
    a: 'No. Bharosa includes a gasless meta-transaction relayer powered by EIP-2771. When you perform key actions like creating a DID, accepting a degree, or freezing your identity, you sign an off-chain cryptographic request, and our relayer broadcasts it on Polygon, covering all gas costs.',
  },
  {
    q: 'How can verifiers confirm credentials without logging in?',
    a: 'Bharosa provides an instant Public Verifier portal (/public-verify). Any employer, embassy, or institution can paste a credential hash or scan a QR code to verify the mathematical signature against the issuer’s public registry on-chain in real time.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-surface border-t border-line transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary-soft px-4 py-1.5 rounded-full mb-3 border border-primary/30">
            <span>Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-anton text-fg uppercase tracking-wide mb-3 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-fg-muted max-w-xl mx-auto">
            Answers to common questions regarding zero-knowledge cryptography, key recovery, and IPFS custody.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-surface-2 rounded-2xl overflow-hidden shadow-xs transition-all border ${
                  isOpen ? 'border-primary ring-2 ring-primary/20' : 'border-line hover:border-primary/50'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between transition-colors gap-4"
                >
                  <span className="font-bold text-sm sm:text-base text-fg leading-snug">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-primary text-on-primary' : 'bg-surface text-primary'
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-fg-muted leading-relaxed border-t border-line">
                    <div className="pt-3">{faq.a}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
