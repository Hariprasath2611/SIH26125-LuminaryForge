import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export function DemoModeBanner() {
  const { user, activeDemoAccount } = useAuth();

  const demoName =
    activeDemoAccount?.name ||
    (user && 'displayName' in user && user.displayName ? user.displayName : 'Priya Sharma');

  const demoBadge =
    activeDemoAccount?.badge ||
    (activeDemoAccount?.role ? activeDemoAccount.role.split(' ')[0] : 'Student');

  return (
    <div className="w-full bg-[#84CC16] text-[#1A2E05] py-2 px-4 text-center font-bold text-xs sm:text-[13px] tracking-wide select-none shrink-0 z-50">
      DEMO MODE · Signed in as {demoName} ({demoBadge}) with a built-in test wallet
    </div>
  );
}

export default DemoModeBanner;
