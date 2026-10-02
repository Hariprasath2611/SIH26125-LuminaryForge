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
    <section id="faq" className="py-20 bg-[#F7FBEF] border-t border-[#ECFCCB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#65A30D] bg-[#ECFCCB] px-3.5 py-1.5 rounded-full">
            Knowledge Base
          </span>
          <h2 className="text-4xl font-anton text-[#1A2E05] uppercase tracking-wide mt-3 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#4D6B2A]">
            Answers to common questions regarding zero-knowledge cryptography, key recovery, and IPFS custody.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#FFFFFF] border border-[#ECFCCB] rounded-2xl overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-[#F7FBEF] transition-colors"
                >
                  <span className="font-bold text-sm text-[#1A2E05] pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#65A30D] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-[#4D6B2A] leading-relaxed border-t border-[#F7FBEF]">
                    {faq.a}
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
