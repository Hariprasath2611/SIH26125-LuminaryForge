/**
 * Bharosa Theme Initializer
 * Synchronously executes in <head> to prevent any flash of light theme on dark mode.
 * Fully compliant with strict CSP (loaded from 'self', no inline scripts).
 */
(function () {
  try {
    var stored = localStorage.getItem('bharosa-theme');
    var isDark = false;

    if (stored === 'dark') {
      isDark = true;
    } else if (stored === 'light') {
      isDark = false;
    } else {
      // Default = 'system'
      isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    var theme = isDark ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    var metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#0B1207' : '#FFFFFF');
    }
  } catch (e) {
    // Fallback to light on restricted environments
    document.documentElement.dataset.theme = 'light';
    document.documentElement.style.colorScheme = 'light';
  }
})();
