import React from 'react';
import { Sparkles, HelpCircle, FileCheck, ShieldAlert } from 'lucide-react';

interface SuggestedPromptsProps {
  route: string;
  role: string;
  onSelectPrompt: (promptText: string) => void;
}

export const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({
  route,
  role,
  onSelectPrompt,
}) => {
  const getPrompts = (): { label: string; query: string; icon: React.ReactNode }[] => {
    if (route.includes('/access')) {
      return [
        {
          label: 'How do I grant access?',
          query: 'How do I grant access to my encrypted document?',
          icon: <HelpCircle className="w-3.5 h-3.5 text-lime-600" />,
        },
        {
          label: 'Prepare grant for TechCorp HR',
          query: 'Prepare a grant for TechCorp HR for 7 days',
          icon: <Sparkles className="w-3.5 h-3.5 text-lime-600" />,
        },
        {
          label: 'How does ABAC work?',
          query: 'Explain how Attribute-Based Access Control works in Bharosa',
          icon: <HelpCircle className="w-3.5 h-3.5 text-lime-600" />,
        },
      ];
    }

    if (route.includes('/verify')) {
      return [
        {
          label: 'Why did verification fail?',
          query: 'Why did my verification fail?',
          icon: <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />,
        },
        {
          label: 'Explain verification checks',
          query: 'Explain the 4 verification checks: integrity, signature, issuer, and revocation',
          icon: <FileCheck className="w-3.5 h-3.5 text-lime-600" />,
        },
        {
          label: 'Explain zero-knowledge proofs',
          query: 'Explain zero-knowledge proofs and how to verify them',
          icon: <Sparkles className="w-3.5 h-3.5 text-lime-600" />,
        },
      ];
    }

    if (route.includes('/zk')) {
      return [
        {
          label: 'What is a ZK proof?',
          query: 'Explain zero-knowledge proofs in simple terms',
          icon: <Sparkles className="w-3.5 h-3.5 text-lime-600" />,
        },
        {
          label: 'How does age proof work?',
          query: 'How can I prove my age without revealing my birthdate?',
          icon: <HelpCircle className="w-3.5 h-3.5 text-lime-600" />,
        },
      ];
    }

    if (route.includes('/credentials')) {
      return [
        {
          label: 'What is a Verifiable Credential?',
          query: 'What is a W3C Verifiable Credential and how is it anchored?',
          icon: <FileCheck className="w-3.5 h-3.5 text-lime-600" />,
        },
        {
          label: 'How do I share a credential?',
          query: 'How do I share a credential with an employer?',
          icon: <Sparkles className="w-3.5 h-3.5 text-lime-600" />,
        },
      ];
    }

    // Default / Dashboard
    return [
      {
        label: 'How do I grant access?',
        query: 'How do I grant access?',
        icon: <Sparkles className="w-3.5 h-3.5 text-lime-600" />,
      },
      {
        label: 'Why did verification fail?',
        query: 'Why did verification fail?',
        icon: <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />,
      },
      {
        label: 'Explain zero-knowledge proofs',
        query: 'Explain zero-knowledge proofs',
        icon: <HelpCircle className="w-3.5 h-3.5 text-lime-600" />,
      },
      {
        label: 'What does this alert mean?',
        query: 'What do security anomaly alerts mean in Bharosa?',
        icon: <HelpCircle className="w-3.5 h-3.5 text-lime-600" />,
      },
    ];
  };

  const prompts = getPrompts();

  return (
    <div className="py-2">
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
        Suggested Prompts
      </p>
      <div className="flex flex-wrap gap-1.5">
        {prompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => onSelectPrompt(p.query)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-lime-50/80 hover:bg-lime-100 text-[#1A2E05] hover:text-lime-900 border border-lime-200/80 rounded-full text-xs font-medium transition-colors text-left"
          >
            {p.icon}
            <span>{p.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
