import React from 'react';
import { ShieldCheck, MessageSquare } from 'lucide-react';

interface CopilotButtonProps {
  isOpen: boolean;
  onClick: () => void;
  unreadCount?: number;
}

export const CopilotButton: React.FC<CopilotButtonProps> = ({
  isOpen,
  onClick,
  unreadCount = 0,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label="Ask Bharosa AI Copilot"
      aria-expanded={isOpen}
      aria-controls="bharosa-copilot-panel"
      className="fixed bottom-6 right-6 z-50 group inline-flex items-center gap-2.5 px-4 py-3 bg-[#84CC16] hover:bg-[#65A30D] active:scale-95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-lime-300"
    >
      <div className="relative flex items-center justify-center">
        {/* Hexagon check icon */}
        <ShieldCheck className="w-5 h-5 text-white transition-transform group-hover:rotate-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </div>

      <span className="font-semibold text-sm tracking-tight text-white pr-0.5">
        Ask Bharosa
      </span>

      <span className="text-[10px] bg-[#4D7C0F] text-lime-100 font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
        AI
      </span>
    </button>
  );
};
