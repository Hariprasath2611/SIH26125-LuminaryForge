/**
 * Suppresses spurious Web3 wallet extension warnings (MetaMask ObjectMultiplex orphaned stream
 * and EventEmitter listener limit warnings) in development and runtime.
 */
(function () {
  // 1. Automatically increase listener limit for window.ethereum
  function boostEthereumListeners() {
    try {
      if (window.ethereum && typeof window.ethereum.setMaxListeners === 'function') {
        window.ethereum.setMaxListeners(100);
      }
    } catch (_) {}
  }

  boostEthereumListeners();
  window.addEventListener('ethereum#initialized', boostEthereumListeners, { once: true });

  // 2. Filter extension internal warning noise from developer console
  const origWarn = console.warn;
  console.warn = function (...args) {
    const text = args
      .map((a) => (typeof a === 'string' ? a : a?.message || ''))
      .join(' ');

    if (
      text.includes('MaxListenersExceededWarning') ||
      text.includes('ObjectMultiplex') ||
      text.includes('orphaned data for stream')
    ) {
      return;
    }
    origWarn.apply(console, args);
  };
})();
