import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { EventEmitter } from 'events';

// Increase default listener ceiling for web3 and wallet provider events
if (typeof EventEmitter !== 'undefined' && typeof (EventEmitter as any).defaultMaxListeners === 'number') {
  (EventEmitter as any).defaultMaxListeners = 100;
}

// Self-hosted typography
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';

// Safety Guard: Fail to boot if DEMO_MODE is on while connected to a mainnet chain
const MAINNET_CHAIN_IDS = [1, 10, 56, 137, 8453, 42161];
const isDemo = import.meta.env.VITE_DEMO_MODE === 'true';
const targetChainId = Number(import.meta.env.VITE_CHAIN_ID || 31337);

if (isDemo && MAINNET_CHAIN_IDS.includes(targetChainId)) {
  const errMsg = `[CRITICAL SECURITY] DEMO_MODE cannot be enabled on mainnet chain ID ${targetChainId}! Startup aborted.`;
  console.error(errMsg);
  throw new Error(errMsg);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found in document');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
