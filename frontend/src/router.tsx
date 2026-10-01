import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { AppLayout } from './layouts/AppLayout';
import { Loader2 } from 'lucide-react';

const PageLoader = () => (
  <div className="flex-1 flex items-center justify-center p-16 text-sm text-[#4D6B2A]">
    <Loader2 className="w-6 h-6 animate-spin mr-2 text-[#84CC16]" /> Loading Bharosa Protocol...
  </div>
);

// Lazy load route pages
const Landing = lazy(() => import('./pages/Landing'));
const PublicVerify = lazy(() => import('./pages/PublicVerify'));
const Onboarding = lazy(() => import('./pages/Onboarding'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Identity = lazy(() => import('./pages/Identity'));
const Credentials = lazy(() => import('./pages/Credentials'));
const Assets = lazy(() => import('./pages/Assets'));
const Access = lazy(() => import('./pages/Access'));
const ZK = lazy(() => import('./pages/ZK'));
const Recovery = lazy(() => import('./pages/Recovery'));
const AuditLog = lazy(() => import('./pages/AuditLog'));
const SecurityCenter = lazy(() => import('./pages/SecurityCenter'));
const Issuer = lazy(() => import('./pages/Issuer'));
const Verifier = lazy(() => import('./pages/Verifier'));
const Admin = lazy(() => import('./pages/Admin'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const router = createBrowserRouter([
  // Public Routes
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Landing />
          </Suspense>
        ),
      },
      {
        path: '/public-verify',
        element: (
          <Suspense fallback={<PageLoader />}>
            <PublicVerify />
          </Suspense>
        ),
      },
      {
        path: '/verify',
        element: (
          <Suspense fallback={<PageLoader />}>
            <PublicVerify />
          </Suspense>
        ),
      },
      {
        path: '/verify/:hash',
        element: (
          <Suspense fallback={<PageLoader />}>
            <PublicVerify />
          </Suspense>
        ),
      },
    ],
  },

  // App & Management Routes
  {
    element: <AppLayout />,
    children: [
      {
        path: '/onboarding',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Onboarding />
          </Suspense>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: '/identity',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Identity />
          </Suspense>
        ),
      },
      {
        path: '/credentials',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Credentials />
          </Suspense>
        ),
      },
      {
        path: '/assets',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Assets />
          </Suspense>
        ),
      },
      {
        path: '/assets/:assetId',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Assets />
          </Suspense>
        ),
      },
      {
        path: '/access',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Access />
          </Suspense>
        ),
      },
      {
        path: '/zk',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ZK />
          </Suspense>
        ),
      },
      {
        path: '/recovery',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Recovery />
          </Suspense>
        ),
      },
      {
        path: '/audit',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AuditLog />
          </Suspense>
        ),
      },
      {
        path: '/security',
        element: (
          <Suspense fallback={<PageLoader />}>
            <SecurityCenter />
          </Suspense>
        ),
      },
      {
        path: '/issuer',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Issuer />
          </Suspense>
        ),
      },
      {
        path: '/verifier',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Verifier />
          </Suspense>
        ),
      },
      {
        path: '/admin',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Admin />
          </Suspense>
        ),
      },
    ],
  },

  // 404 Fallback
  {
    element: <PublicLayout />,
    children: [
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
