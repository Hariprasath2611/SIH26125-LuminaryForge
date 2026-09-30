import '../styles/globals.css';
import type { Metadata } from 'next';
import { Web3Providers } from '../components/providers';
import { Header } from '../components/Header';
import { DemoAccountsPanel } from '../components/DemoAccountsPanel';
import { StatusFooter } from '../components/StatusFooter';

export const metadata: Metadata = {
  title: 'Bharosa (भरोसा) | Trust, Owned by You',
  description: 'Blockchain-Based Secure Platform for Identity, Access Control & Digital Asset Management - SIH 2026',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-mode="never-dark">
      <body className="min-h-screen bg-background text-text flex flex-col antialiased">
        <Web3Providers>
          <DemoAccountsPanel />
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <StatusFooter />
        </Web3Providers>
      </body>
    </html>
  );
}
