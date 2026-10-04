import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          2: "rgb(var(--surface-2) / <alpha-value>)",
          3: "rgb(var(--surface-3) / <alpha-value>)",
        },
        line: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
          strong: "rgb(var(--border-strong) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
          subtle: "rgb(var(--fg-subtle) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          hover: "rgb(var(--primary-hover) / <alpha-value>)",
          soft: "rgb(var(--primary-soft) / <alpha-value>)",
        },
        "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
        link: "rgb(var(--link) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        dot: "rgb(var(--dot) / <alpha-value>)",
        status: {
          success: "rgb(var(--status-success) / <alpha-value>)",
          warning: "rgb(var(--status-warning) / <alpha-value>)",
          error: "rgb(var(--status-error) / <alpha-value>)",
          info: "rgb(var(--status-info) / <alpha-value>)",
        },
        // Backwards compatibility mappings
        background: "rgb(var(--bg) / <alpha-value>)",
        text: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        glow: "var(--shadow-glow)",
        lime: "0 4px 20px rgba(132, 204, 22, 0.12)",
        "lime-lg": "0 10px 30px rgba(132, 204, 22, 0.18)",
        "lime-glow": "0 0 25px rgba(132, 204, 22, 0.35)",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["'Anton SC'", "sans-serif"],
        anton: ["'Anton SC'", "sans-serif"],
        devanagari: ["'Noto Sans Devanagari'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
