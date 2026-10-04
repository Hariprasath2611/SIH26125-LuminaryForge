import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-[#D9EBB5] py-10 bg-white">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-8 flex flex-wrap items-center justify-between gap-4 text-[#4D6B2A] font-semibold text-sm sm:text-base">
        <span className="font-extrabold text-[#1A2E05] text-lg sm:text-xl flex items-center gap-2">
          <span>Bharosa</span>
          <span className="font-['Noto_Sans_Devanagari',sans-serif] text-base font-normal">
            भरोसा
          </span>
        </span>
        <span className="text-xs sm:text-sm">
          Team LUMINARYFORGE · Smart India Hackathon 2026 · PS SIH26125
        </span>
      </div>
    </footer>
  );
}

export default Footer;
