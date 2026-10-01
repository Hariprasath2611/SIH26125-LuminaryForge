import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { StatusFooter } from '../components/StatusFooter';

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <StatusFooter />
    </div>
  );
}

export default PublicLayout;
