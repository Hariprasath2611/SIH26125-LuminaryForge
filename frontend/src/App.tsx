import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Web3Providers } from './components/providers';
import { AuthProvider } from './providers/AuthProvider';
import { router } from './router';

export function App() {
  return (
    <HelmetProvider>
      <Web3Providers>
        <AuthProvider>
          <RouterProvider router={router} future={{ v7_startTransition: true }} />
        </AuthProvider>
      </Web3Providers>
    </HelmetProvider>
  );
}

export default App;
