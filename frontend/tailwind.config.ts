import type { Config } from "tailwindcss";

const config: Config = {
  // STRICT: Light mode only, NO dark mode class or media
  darkMode: ["class", '[data-mode="never-dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          soft: "var(--primary-soft)",
        },
        ring: "var(--ring)",
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
        },
        border: "var(--border)",
        status: {
          success: "var(--status-success)",
          warning: "var(--status-warning)",
          error: "var(--status-error)",
          info: "var(--status-info)",
        },
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        lime: "0 4px 20px rgba(132, 204, 22, 0.12)",
        "lime-lg": "0 10px 30px rgba(132, 204, 22, 0.18)",
        "lime-glow": "0 0 25px rgba(132, 204, 22, 0.35)",
        "card": "0 2px 12px rgba(26, 46, 5, 0.04), 0 1px 3px rgba(26, 46, 5, 0.06)",
        "card-hover": "0 12px 32px rgba(26, 46, 5, 0.08), 0 4px 12px rgba(132, 204, 22, 0.12)",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["'Anton SC'", "sans-serif"],
        anton: ["'Anton SC'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
