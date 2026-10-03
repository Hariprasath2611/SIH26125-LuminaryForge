import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowRight, FileCheck, ExternalLink } from 'lucide-react';
import { CopilotIntent, executeCopilotIntent } from '../../lib/copilot-intents';

interface ActionCardProps {
  intent: CopilotIntent;
}

export const ActionCard: React.FC<ActionCardProps> = ({ intent }) => {
  const navigate = useNavigate();

  const handleAction = () => {
    executeCopilotIntent(intent, navigate);
  };

  if (intent.action === 'NAVIGATE') {
    return (
      <div className="mt-3 p-3.5 bg-white rounded-xl border border-lime-200 shadow-sm hover:border-lime-400 transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-lime-100 text-lime-700 flex items-center justify-center">
              <ExternalLink className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1A2E05]">{intent.label || 'Navigate to page'}</p>
              <p className="text-[11px] text-gray-500 font-mono">{intent.route}</p>
            </div>
          </div>
          <button
            onClick={handleAction}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-lime-600 hover:bg-lime-700 text-white transition-colors shadow-xs"
          >
            <span>Open</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  if (intent.action === 'PREFILL_GRANT') {
    return (
      <div className="mt-3 p-4 bg-white rounded-xl border-2 border-lime-300 shadow-sm">
        <div className="flex items-center justify-between pb-2.5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-lime-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-lime-800">
              Proposed Access Grant
            </span>
          </div>
          <span className="text-[10px] font-medium bg-lime-100 text-lime-800 px-2 py-0.5 rounded-full">
            Review Required
          </span>
        </div>

        <div className="mt-3 space-y-2 text-xs">
          <div className="flex justify-between items-center py-1 border-b border-gray-50">
            <span className="text-gray-500">Grantee:</span>
            <span className="font-medium text-[#1A2E05] font-mono text-[11px] max-w-[200px] truncate">
              {intent.params.grantee}
            </span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-50">
            <span className="text-gray-500">Duration:</span>
            <span className="font-semibold text-lime-700">{intent.params.days} Days</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-gray-50">
            <span className="text-gray-500">Role:</span>
            <span className="font-medium text-[#1A2E05]">{intent.params.role}</span>
          </div>
          <div className="py-1">
            <span className="text-gray-500 block text-[11px]">Purpose:</span>
            <p className="font-medium text-[#1A2E05] italic mt-0.5">{intent.params.purpose}</p>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-gray-100 flex flex-col gap-2">
          <p className="text-[11px] text-gray-500 leading-tight">
            ℹ️ <span className="font-medium text-[#1A2E05]">Zero-Authority Notice:</span> {intent.disclaimer}
          </p>
          <button
            onClick={handleAction}
            className="w-full mt-1 py-2 px-3 bg-lime-600 hover:bg-lime-700 active:bg-lime-800 text-white font-medium rounded-lg text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <span>Review & Prefill Form in Access Control</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  if (intent.action === 'PREFILL_CREDENTIAL_SHARE') {
    return (
      <div className="mt-3 p-4 bg-white rounded-xl border border-lime-300 shadow-sm">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <FileCheck className="w-4 h-4 text-lime-600" />
          <span className="text-xs font-bold text-lime-900">Credential Presentation</span>
        </div>
        <div className="mt-2 text-xs space-y-1.5">
          <div className="flex justify-between">
            <span className="text-gray-500">Target Verifier:</span>
            <span className="font-mono text-xs font-semibold">{intent.params.verifier}</span>
          </div>
        </div>
        <button
          onClick={handleAction}
          className="mt-3 w-full py-1.5 px-3 bg-lime-600 hover:bg-lime-700 text-white font-medium rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <span>Open Sharing Modal</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return null;
};
