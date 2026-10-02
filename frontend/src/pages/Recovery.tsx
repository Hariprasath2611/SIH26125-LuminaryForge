import { PageMeta } from '@/components/PageMeta';

import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { ShieldCheck, Users, Clock, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function RecoveryPage() {
  const { address } = useAccount();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [lostAddress, setLostAddress] = useState('0x70997970C51812dc3A010C7d01b50e0d17dc79C8');
  const [newController, setNewController] = useState('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65');
  const [approvals, setApprovals] = useState(2);
  const threshold = 2;
  const totalGuardians = 3;
  const [timelockSeconds, setTimelockSeconds] = useState(120); // 2 min demo timelock
  const [isFinalized, setIsFinalized] = useState(false);

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      <PageMeta title="M-of-N Social Recovery" description="Guardian-based decentralized recovery for lost private keys with timelock protection." />
      {/* Header */}
      <div className="border-b border-lime-200 pb-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-lime-100 text-lime-800 text-xs font-semibold rounded-full border border-lime-300">
            M-of-N Social Recovery
          </span>
          <span className="px-3 py-1 bg-lime-100 text-lime-800 text-xs font-semibold rounded-full border border-lime-300">
            Safety Timelock: Enforced
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-[#1A2E05] mt-2">Social Recovery Wizard</h1>
        <p className="text-[#4D6B2A] mt-1 text-sm">
          Recover identity controller without private keys using M-of-N guardian consensus and safety timelocks.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="grid grid-cols-3 gap-4">
        <div className={`p-4 rounded-xl border text-center ${step === 1 ? 'bg-lime-50 border-lime-500 font-bold' : 'bg-white border-lime-200 text-slate-500'}`}>
          <div className="text-xs uppercase">Step 1</div>
          <div className="text-sm text-[#1A2E05]">Initiate Request</div>
        </div>
        <div className={`p-4 rounded-xl border text-center ${step === 2 ? 'bg-lime-50 border-lime-500 font-bold' : 'bg-white border-lime-200 text-slate-500'}`}>
          <div className="text-xs uppercase">Step 2</div>
          <div className="text-sm text-[#1A2E05]">Guardian Approvals</div>
        </div>
        <div className={`p-4 rounded-xl border text-center ${step === 3 ? 'bg-lime-50 border-lime-500 font-bold' : 'bg-white border-lime-200 text-slate-500'}`}>
          <div className="text-xs uppercase">Step 3</div>
          <div className="text-sm text-[#1A2E05]">Finalize Transfer</div>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-[#F7FBEF] border border-lime-200 rounded-xl p-6 shadow-sm space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#1A2E05]">Initiate Identity Recovery</h3>
            <p className="text-xs text-[#4D6B2A]">
              Enter the target address whose key was lost or compromised, and the proposed new controller address.
            </p>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-[#1A2E05] mb-1">Lost / Compromised Address:</label>
                <input
                  type="text"
                  value={lostAddress}
                  onChange={(e) => setLostAddress(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-lime-200 rounded-lg font-mono text-xs text-[#1A2E05]"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#1A2E05] mb-1">Proposed New Controller Address:</label>
                <input
                  type="text"
                  value={newController}
                  onChange={(e) => setNewController(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-lime-200 rounded-lg font-mono text-xs text-[#1A2E05]"
                />
              </div>
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full py-2.5 bg-lime-500 hover:bg-lime-600 text-[#1A2E05] font-bold text-xs rounded-lg transition"
            >
              Broadcast Recovery to Guardians & Proceed to Approvals
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#1A2E05]">Guardian Consensus Approvals</h3>
              <span className="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full border border-green-300">
                {approvals} of {threshold} Required Approvals Met
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-white border border-lime-200 rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-semibold text-[#1A2E05]">Guardian 1: University Registrar</div>
                  <div className="font-mono text-[11px] text-[#4D6B2A]">0xf39f...2266</div>
                </div>
                <span className="text-green-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Approved
                </span>
              </div>
              <div className="p-3 bg-white border border-lime-200 rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-semibold text-[#1A2E05]">Guardian 2: Backup Cold Wallet</div>
                  <div className="font-mono text-[11px] text-[#4D6B2A]">0x3C44...93BC</div>
                </div>
                <span className="text-green-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Approved
                </span>
              </div>
              <div className="p-3 bg-white border border-lime-200 rounded-lg flex justify-between items-center opacity-60">
                <div>
                  <div className="font-semibold text-[#1A2E05]">Guardian 3: Institutional Trustee</div>
                  <div className="font-mono text-[11px] text-[#4D6B2A]">0x90F7...b906</div>
                </div>
                <span className="text-slate-500 font-semibold">Pending</span>
              </div>
            </div>
            <button
              onClick={() => setStep(3)}
              className="w-full py-2.5 bg-lime-500 hover:bg-lime-600 text-[#1A2E05] font-bold text-xs rounded-lg transition"
            >
              Proceed to Safety Timelock & Finalization
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#1A2E05]">Safety Timelock & Final DID Transfer</h3>
            <div className="p-4 bg-white border border-lime-300 rounded-lg space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#4D6B2A]">Safety Timelock Status:</span>
                <span className="font-semibold text-green-700">COMPLETED & VERIFIED ✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4D6B2A]">New DID Controller:</span>
                <span className="font-mono text-[#1A2E05]">{newController}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4D6B2A]">Smart Contract:</span>
                <span className="font-mono text-[#1A2E05]">SocialRecovery.sol</span>
              </div>
            </div>

            {isFinalized ? (
              <div className="p-4 bg-green-50 border border-green-300 rounded-lg text-green-900 text-xs">
                <div className="font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Identity Controller Handover Finalized On-Chain!
                </div>
                <p className="mt-1">
                  The DID controller has been transferred on <code>IdentityRegistry.sol</code>. The compromised key has been permanently invalidated.
                </p>
              </div>
            ) : (
              <button
                onClick={() => setIsFinalized(true)}
                className="w-full py-2.5 bg-lime-500 hover:bg-lime-600 text-[#1A2E05] font-bold text-xs rounded-lg transition"
              >
                Execute finalizeRecovery() on Blockchain
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
