/**
 * Suppresses spurious Web3 wallet extension warnings (MetaMask ObjectMultiplex orphaned stream
 * and EventEmitter listener limit warnings) in development and runtime.
 */
(function () {
  function boostEthereum(eth) {
    if (!eth) return;
    try {
      if (typeof eth.setMaxListeners === 'function') eth.setMaxListeners(100);
      if (typeof eth.defaultMaxListeners === 'number') eth.defaultMaxListeners = 100;
    } catch (_) {}
  }

  if (window.ethereum) boostEthereum(window.ethereum);
  try {
    var _eth = window.ethereum;
    Object.defineProperty(window, 'ethereum', {
      configurable: true,
      enumerable: true,
      get: function () { return _eth; },
      set: function (val) {
        _eth = val;
        boostEthereum(val);
      }
    });
  } catch (_) {}

  window.addEventListener('ethereum#initialized', function () {
    boostEthereum(window.ethereum);
  }, { once: true, passive: true });

  function formatArg(arg) {
    if (arg === null || arg === undefined) return '';
    if (typeof arg === 'string') return arg;
    if (arg instanceof Error || (typeof arg === 'object' && arg.message)) {
      return (arg.name || '') + ' ' + (arg.message || '') + ' ' + (arg.stack || '');
    }
    try {
      return String(arg) + ' ' + JSON.stringify(arg);
    } catch (_) {
      return String(arg);
    }
  }

  var SUPPRESS_PATTERNS = [
    'MaxListenersExceededWarning',
    'Possible EventEmitter memory leak detected',
    'close listeners added',
    'end listeners added',
    'setMaxListeners',
    'ObjectMultiplex',
    'orphaned data for stream',
    'app-init-liveness',
    'background-liveness',
    'contentscript.js',
    'chrome-extension://',
    'moz-extension://',
    'safari-extension://'
  ];

  function isIgnored(args) {
    for (var i = 0; i < args.length; i++) {
      var text = formatArg(args[i]);
      for (var p = 0; p < SUPPRESS_PATTERNS.length; p++) {
        if (text.indexOf(SUPPRESS_PATTERNS[p]) !== -1) {
          return true;
        }
      }
    }
    return false;
  }

  var origWarn = console.warn;
  console.warn = function () {
    if (isIgnored(arguments)) return;
    origWarn.apply(console, arguments);
  };

  var origError = console.error;
  console.error = function () {
    if (isIgnored(arguments)) return;
    origError.apply(console, arguments);
  };

  window.addEventListener('error', function (event) {
    var targetStr = (event.filename || '') + ' ' + (event.message || '');
    for (var p = 0; p < SUPPRESS_PATTERNS.length; p++) {
      if (targetStr.indexOf(SUPPRESS_PATTERNS[p]) !== -1) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }
    }
  }, true);

  window.addEventListener('unhandledrejection', function (event) {
    var reasonStr = formatArg(event.reason);
    for (var p = 0; p < SUPPRESS_PATTERNS.length; p++) {
      if (reasonStr.indexOf(SUPPRESS_PATTERNS[p]) !== -1) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }
    }
  }, true);
})();
