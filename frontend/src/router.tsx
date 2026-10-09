import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { AppLayout } from './layouts/AppLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { AuthGate, WalletGate, OnboardingGate, RoleGate } from './guards';
import { LoadingPage } from './components/common/LoadingPage';

const PageLoader = () => <LoadingPage compact title="Bharosa" subtitle="Loading Bharosa Protocol..." />;

// Lazy load route pages
const Landing = lazy(() => import('./pages/Landing'));
const PublicVerify = lazy(() => import('./pages/PublicVerify'));
const Login = lazy(() => import('./pages/auth/Login'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const VerifyEmail = lazy(() => import('./pages/auth/VerifyEmail'));
const ConnectWallet = lazy(() => import('./pages/ConnectWallet'));
const AppRedirect = lazy(() => import('./pages/AppRedirect'));
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
  // 1. Public Routes
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

  // 2. Authentication Flow (Firebase)
  {
    path: '/login',
    element: (
      <Suspense fallback={<PageLoader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/signup',
        element: (
          <Suspense fallback={<PageLoader />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: '/forgot-password',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: '/verify-email',
        element: (
          <Suspense fallback={<PageLoader />}>
            <VerifyEmail />
          </Suspense>
        ),
      },
    ],
  },

  // 3. Application State Resolver
  {
    path: '/app',
    element: (
      <Suspense fallback={<PageLoader />}>
        <AppRedirect />
      </Suspense>
    ),
  },

  // 4. Wallet Gate (Auth Required)
  {
    element: <AuthGate />,
    children: [
      {
        path: '/connect-wallet',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ConnectWallet />
          </Suspense>
        ),
      },
    ],
  },

  // 5. Onboarding (Auth + Wallet Required)
  {
    element: (
      <AuthGate>
        <WalletGate />
      </AuthGate>
    ),
    children: [
      {
        path: '/onboarding',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Onboarding />
          </Suspense>
        ),
      },
    ],
  },

  // 6. Main Application Shell (Auth + Wallet + DID Onboarding Required)
  {
    element: (
      <AuthGate>
        <WalletGate>
          <OnboardingGate>
            <AppLayout />
          </OnboardingGate>
        </WalletGate>
      </AuthGate>
    ),
    children: [
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

      // Portals with RoleGate
      {
        path: '/issuer',
        element: (
          <RoleGate allowedRoles={['ISSUER', 'ADMIN']}>
            <Suspense fallback={<PageLoader />}>
              <Issuer />
            </Suspense>
          </RoleGate>
        ),
      },
      {
        path: '/verifier',
        element: (
          <RoleGate allowedRoles={['VERIFIER', 'ADMIN']}>
            <Suspense fallback={<PageLoader />}>
              <Verifier />
            </Suspense>
          </RoleGate>
        ),
      },
      {
        path: '/admin',
        element: (
          <RoleGate allowedRoles={['ADMIN']}>
            <Suspense fallback={<PageLoader />}>
              <Admin />
            </Suspense>
          </RoleGate>
        ),
      },
    ],
  },

  // 7. 404 Fallback
  {
    path: '*',
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
], {
  future: {
    v7_relativeSplatPath: true,
  },
});

export default router;
