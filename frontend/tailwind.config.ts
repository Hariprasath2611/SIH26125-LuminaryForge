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
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["'Anton SC'", "var(--font-heading)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
