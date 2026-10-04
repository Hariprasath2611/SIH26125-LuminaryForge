import React from 'react';
import { Sparkles } from 'lucide-react';

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
      className="fixed bottom-6 right-6 z-50 group inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#0F172A]/90 hover:bg-[#0F172A] active:scale-95 text-white rounded-full shadow-[0_10px_35px_-5px_rgba(0,0,0,0.4),0_0_20px_rgba(132,204,22,0.12)] hover:shadow-[0_12px_40px_-5px_rgba(0,0,0,0.5),0_0_30px_rgba(132,204,22,0.3)] backdrop-blur-xl border border-white/10 hover:border-[#84CC16]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#84CC16]/50 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
    >
      {/* Icon with glowing pulse */}
      <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#84CC16]/15 border border-[#84CC16]/30 text-[#84CC16] group-hover:bg-[#84CC16] group-hover:text-[#0F172A] group-hover:border-[#84CC16] transition-all duration-300">
        <Sparkles className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
        
        {/* Ambient live pulse dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84CC16] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#84CC16]"></span>
        </span>

        {unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-4 px-1 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#0F172A]">
            {unreadCount}
          </span>
        )}
      </div>

      {/* Button Label */}
      <span className="font-semibold text-xs sm:text-sm tracking-tight text-white/95 group-hover:text-white transition-colors">
        Ask Bharosa
      </span>

      {/* Pill AI Badge */}
      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-[#84CC16]/20 text-[#A3E635] border border-[#84CC16]/30 group-hover:bg-[#84CC16] group-hover:text-[#0F172A] group-hover:border-transparent transition-all duration-200">
        AI
      </span>
    </button>
  );
};

