import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Web3Providers } from './components/providers';
import { router } from './router';

export function App() {
  return (
    <HelmetProvider>
      <Web3Providers>
        <RouterProvider router={router} />
      </Web3Providers>
    </HelmetProvider>
  );
}

export default App;
