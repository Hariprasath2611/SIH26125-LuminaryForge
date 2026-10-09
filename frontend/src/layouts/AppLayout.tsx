import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/shell/Sidebar';
import { Topbar } from '../components/shell/Topbar';
import { StatusFooter } from '../components/StatusFooter';
import { DemoModeBanner } from '../components/common/DemoModeBanner';
import { CopilotButton, CopilotPanel } from '../components/copilot';

export function AppLayout() {
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    return localStorage.getItem('bharosa_sidebar_collapsed') === 'true';
  });
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [copilotOpen, setCopilotOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('bharosa_sidebar_collapsed', String(collapsed));
  }, [collapsed]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FBEF] text-[#1A2E05]">
      {/* Full-width top banner */}
      <DemoModeBanner />

      <div className="flex-1 flex min-w-0">
        {/* Sidebar (Desktop Sticky + Mobile Drawer) */}
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* Main Container */}
        <div className="flex-1 flex flex-col min-w-0">
          <Topbar onOpenMobileMenu={() => setMobileOpen(true)} />

          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-[1360px] w-full mx-auto">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Bharosa AI Copilot Floating Trigger & Slide-Over Panel */}
      <CopilotButton
        isOpen={copilotOpen}
        onClick={() => setCopilotOpen((prev) => !prev)}
      />
      <CopilotPanel
        isOpen={copilotOpen}
        onClose={() => setCopilotOpen(false)}
      />
    </div>
  );
}

export default AppLayout;

