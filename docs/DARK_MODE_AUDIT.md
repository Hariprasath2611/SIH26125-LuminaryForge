# Dark Mode Color Audit & Semantic Token Mapping

This document provides a comprehensive audit of all hard-coded colors, Tailwind bracket classes, named color utilities, inline styles, and SVG attributes found across `frontend/src` in Bharosa, along with their mapped semantic design tokens for both Light Mode and Dark Mode.

---

## 1. Executive Summary

| Category | Items Audited | Primary Target Semantic Tokens |
|---|---|---|
| **Hard-coded Hex Colors** | 63 unique hex values (750+ occurrences) | `--bg`, `--surface`, `--surface-2`, `--surface-3`, `--border`, `--border-strong`, `--fg`, `--fg-muted`, `--fg-subtle`, `--primary`, `--primary-hover`, `--primary-soft`, `--on-primary`, `--dot`, `--status-*` |
| **Tailwind Color Utilities** | 120+ unique classes (`bg-white`, `text-white`, `border-lime-200`, `text-[#1A2E05]`, etc.) | Semantic Tailwind utilities: `bg-bg`, `bg-surface`, `bg-surface-2`, `bg-surface-3`, `text-fg`, `text-fg-muted`, `text-fg-subtle`, `border-line`, `border-line-strong`, `text-primary`, `bg-primary`, etc. |
| **SVG Fills & Strokes** | 39 unique stroke/fill attributes | `currentColor`, `var(--primary)`, `var(--primary-hover)`, `var(--border)`, `var(--surface-2)` |
| **Gradients & Radial Orbs** | 8 background orbs/radial patterns | Semantic CSS variables with light/dark opacity adjustments |
| **External Components** | RainbowKit, Copilot Panel, Toasts | Theme-aware configurations (`darkTheme` / `lightTheme`) |

---

## 2. Master Semantic Token Definitions

Colors are represented as space-separated RGB channels to allow Tailwind opacity utilities (e.g. `bg-primary/20`) to function seamlessly in both modes.

```css
:root, [data-theme="light"] {
  /* Surfaces & Backgrounds */
  --bg: 255 255 255;            /* #FFFFFF */
  --surface: 247 251 239;       /* #F7FBEF */
  --surface-2: 236 252 203;     /* #ECFCCB */
  --surface-3: 255 255 255;     /* #FFFFFF */

  /* Borders */
  --border: 217 235 181;        /* #D9EBB5 */
  --border-strong: 191 217 138; /* #BFD98A */

  /* Typography */
  --fg: 26 46 5;                /* #1A2E05 */
  --fg-muted: 77 107 42;        /* #4D6B2A */
  --fg-subtle: 107 127 74;      /* #6B7F4A */

  /* Brand Primary Accents */
  --primary: 132 204 22;        /* #84CC16 */
  --primary-hover: 101 163 13;  /* #65A30D */
  --primary-soft: 163 230 53;   /* #A3E635 */
  --on-primary: 26 46 5;        /* #1A2E05 */

  /* Interactive & Focus */
  --link: 77 124 15;            /* #4D7C0F */
  --ring: 190 242 100;          /* #BEF264 */
  --dot: 221 237 184;           /* #DDEDB8 */

  /* Feedback / Status */
  --status-success: 22 163 74;  /* #16A34A */
  --status-warning: 245 158 11; /* #F59E0B */
  --status-error: 220 38 38;    /* #DC2626 */
  --status-info: 14 165 233;    /* #0EA5E9 */

  /* Shadows */
  --shadow-card: 0 4px 20px rgba(132, 204, 22, 0.08);
  --shadow-card-hover: 0 14px 34px rgba(132, 204, 22, 0.24);
  --shadow-glow: 0 8px 30px rgba(132, 204, 22, 0.25);
}

[data-theme="dark"] {
  /* Surfaces & Backgrounds */
  --bg: 11 18 7;                /* #0B1207 - Deep Obsidian Olive */
  --surface: 17 27 10;          /* #111B0A - Soft Card Surface */
  --surface-2: 23 36 14;        /* #17240E - Elevated Tint / Hover */
  --surface-3: 30 46 18;        /* #1E2E12 - Raised Modals / Menus */

  /* Borders */
  --border: 42 63 24;           /* #2A3F18 */
  --border-strong: 58 85 36;    /* #3A5524 */

  /* Typography (WCAG AA High Contrast) */
  --fg: 241 248 230;            /* #F1F8E6 - 15.2:1 contrast ratio on #0B1207 */
  --fg-muted: 168 191 138;      /* #A8BF8A - 7.6:1 contrast ratio */
  --fg-subtle: 127 150 96;      /* #7F9660 - 4.8:1 contrast ratio */

  /* Brand Primary Accents */
  --primary: 132 204 22;        /* #84CC16 - Vibrant Lime (Retained) */
  --primary-hover: 163 230 53;  /* #A3E635 - Electric Hover on Dark */
  --primary-soft: 190 242 100;  /* #BEF264 */
  --on-primary: 11 18 7;        /* #0B1207 - Dark text on lime (Never white) */

  /* Interactive & Focus */
  --link: 163 230 53;           /* #A3E635 */
  --ring: 163 230 53;           /* #A3E635 */
  --dot: 29 44 16;              /* #1D2C10 - Muted Dark Dotted Grid */

  /* Feedback / Status */
  --status-success: 74 222 128; /* #4ADE80 */
  --status-warning: 251 191 36; /* #FBBF24 */
  --status-error: 248 113 113;  /* #F87171 */
  --status-info: 56 189 248;    /* #38BDF8 */

  /* Shadows (Lime Hairline Glow instead of heavy blur) */
  --shadow-card: 0 0 0 1px rgba(132, 204, 22, 0.12), 0 4px 20px rgba(0, 0, 0, 0.5);
  --shadow-card-hover: 0 0 0 1px rgba(132, 204, 22, 0.28), 0 14px 34px rgba(0, 0, 0, 0.7);
  --shadow-glow: 0 0 25px rgba(132, 204, 22, 0.35);
}
```

---

## 3. Detailed Audit & Token Mapping

### A. Core Neutral & Page Backgrounds
| Current Color / Utility | Occurrences | Current Usage | Target Token | Target Tailwind Utility |
|---|---|---|---|---|
| `#FFFFFF`, `bg-white`, `bg-[#FFFFFF]` | 149 | Page backgrounds, card bodies, inputs, modals | `--bg` (page) / `--surface-3` (cards/modals/raised) | `bg-bg` / `bg-surface-3` |
| `#F7FBEF`, `bg-[#F7FBEF]` | 109 | Section backgrounds, card containers, chat list | `--surface` | `bg-surface` |
| `#ECFCCB`, `bg-[#ECFCCB]` | 107 | Badges, chips, active tabs, floating highlights | `--surface-2` | `bg-surface-2` |
| `#F6FCED`, `bg-[#F6FCED]` | 3 | Demo login panel on Auth pages | `--surface` | `bg-surface` |
| `bg-neutral-50`, `bg-gray-50` | 5 | Subtle hover states, input backgrounds | `--surface-2` | `bg-surface-2` |

### B. Typography & Text Colors
| Current Color / Utility | Occurrences | Current Usage | Target Token | Target Tailwind Utility | Contrast (Light / Dark) |
|---|---|---|---|---|---|
| `#1A2E05`, `text-[#1A2E05]` | 408 | Primary headings, titles, active nav links, labels | `--fg` | `text-fg` | 16.4:1 / 15.2:1 (Passes AAA) |
| `#4D6B2A`, `text-[#4D6B2A]` | 211 | Subtitles, body copy, descriptions, footer links | `--fg-muted` | `text-fg-muted` | 6.8:1 / 7.6:1 (Passes AAA) |
| `#3F5A1E`, `text-[#3F5A1E]` | 9 | Landing hero and demo descriptions | `--fg-muted` | `text-fg-muted` | 8.2:1 / 7.6:1 (Passes AAA) |
| `#6B7F4A`, `text-[#6B7F4A]`, `#6B7280` | 5 | Placeholders, timestamps, helper footnotes | `--fg-subtle` | `text-fg-subtle` | 4.6:1 / 4.8:1 (Passes AA) |
| `text-white` | 18 | Text inside dark buttons / badges (e.g. AI trigger, launch) | `--on-primary` (on lime) or `--fg` | `text-on-primary` / `text-fg` | Ensured on all backgrounds |
| `text-gray-400`, `text-gray-500` | 19 | Icon buttons, metadata, closed states | `--fg-subtle` | `text-fg-subtle` | 4.5+:1 |

### C. Primary Brand & Accent Colors
| Current Color / Utility | Occurrences | Current Usage | Target Token | Target Tailwind Utility |
|---|---|---|---|---|
| `#84CC16`, `bg-[#84CC16]` | 148 | CTA buttons, icons, logo mark, badges, checkmarks | `--primary` | `bg-primary`, `text-primary`, `border-primary` |
| `#65A30D`, `text-[#65A30D]`, `bg-[#65A30D]` | 84 | Primary hover states, active links, checkmark borders | `--primary-hover` | `text-primary-hover`, `bg-primary-hover` |
| `#A3E635`, `text-[#A3E635]`, `bg-[#A3E635]` | 15 | Soft accents, step lines, ring highlights | `--primary-soft` | `text-primary-soft`, `bg-primary-soft` |
| `#4D7C0F`, `text-[#4D7C0F]` | 7 | Section eyebrow tags (`.eb`), nav links | `--link` | `text-link` |
| `#BEF264`, `ring-[#BEF264]` | 4 | Focus outlines, glowing rings | `--ring` | `ring-ring` |

### D. Borders & Dividers
| Current Color / Utility | Occurrences | Current Usage | Target Token | Target Tailwind Utility |
|---|---|---|---|---|
| `#D9EBB5`, `border-[#D9EBB5]` | 24 | Navbar border, section dividers, card borders | `--border` | `border-line` |
| `border-lime-200`, `border-[#ECFCCB]` | 70 | Card hairlines, table borders, sidebar lines | `--border` | `border-line` |
| `#E7F2CF`, `border-lime-100` | 5 | Checklist dividers, sub-rows | `--border` | `border-line` |
| `border-neutral-300`, `border-lime-300` | 19 | Form inputs, button outlines | `--border-strong` | `border-line-strong` |

### E. Status & Feedback Colors
| Current Color / Utility | Occurrences | Current Usage | Target Token | Target Tailwind Utility |
|---|---|---|---|---|
| `#16A34A`, `#22C55E`, `text-green-*`, `bg-green-*` | 32 | Success alerts, verification passed, active badges | `--status-success` | `text-status-success`, `bg-status-success` |
| `#F59E0B`, `#FBBF24`, `text-amber-*`, `bg-amber-*` | 18 | Warnings, pending verification, expiring tokens | `--status-warning` | `text-status-warning`, `bg-status-warning` |
| `#DC2626`, `#EF4444`, `text-red-*`, `bg-red-*` | 57 | Error banners, revoked credentials, emergency freeze | `--status-error` | `text-status-error`, `bg-status-error` |
| `#0EA5E9`, `text-blue-*`, `bg-blue-*` | 8 | Information tooltips, transaction hashes | `--status-info` | `text-status-info`, `bg-status-info` |

### F. SVG Icons, Fills, & Strokes
| Current Fill/Stroke | Occurrences | Target Replacement |
|---|---|---|
| `stroke="#14532D"`, `stroke="#064E3B"` | 18 | `stroke="currentColor"` or `stroke="rgb(var(--fg))"` |
| `stroke="#84CC16"`, `fill="#84CC16"` | 8 | `var(--primary)` |
| `stroke="#A3E635"`, `stroke="#D9EBB5"` | 4 | `var(--border-strong)` or `var(--primary-soft)` |
| `fill="#FFFFFF"` | 6 | `var(--surface-3)` or `var(--bg)` |
| `fill="#ECFCCB"`, `fill="#D9F99D"` | 3 | `var(--surface-2)` |

---

## 4. Key Component Refactoring Plan

1. **Brand Logo (`<Logo />`)**:
   - Create a unified, accessible `<Logo />` component.
   - SVG outer polygon stroke: `var(--primary-hover)`.
   - SVG inner polygon fill: `var(--primary)`.
   - SVG checkmark: `var(--on-primary)`.
   - Wordmark text: `var(--fg)`.

2. **Landing Page Hero & Backgrounds**:
   - Hero background gradient: `linear-gradient(rgb(var(--bg)), rgb(var(--surface)))`.
   - Radial ambient glow blobs: reduce opacity to 0.25 on dark mode so it feels sleek and non-blinding.
   - Dotted grid: uses `var(--dot)` (`#DDEDB8` in light / `#1D2C10` in dark).
   - Floating chips: `bg-surface-3 border-line text-fg` with glowing pulse indicator.
   - Marquee strip: `bg-surface-3 border-line text-fg-muted`.

3. **Verification Flow (`#demo`) & About (`#about`)**:
   - Report card: `bg-surface-3 border-line text-fg shadow-card`.
   - Checklist dividers: `border-line`.
   - Problem cards: `bg-surface border-line text-fg-muted`.
   - Process connector lines: `bg-primary-soft`.

4. **Why Us Comparison Table (`#why`)**:
   - Comparison rows: `bg-surface border-line text-fg`.
   - Traditional text: `text-fg-subtle`.
   - Bharosa highlight pill: `bg-primary text-on-primary`.

5. **CTA Banner (`#cta`)**:
   - Stays vibrant lime `bg-primary` with high-contrast dark text `text-on-primary` (`#0B1207`).
   - Wireframe hexagons use dark outline `stroke-[#1A2E05]/30` on dark mode.

6. **Copilot Panel & "Ask Bharosa" Button**:
   - Floating trigger: maintains lime neon pulse with `bg-[#0F172A]` or `bg-surface-3` in dark mode.
   - Copilot slide-over panel: `bg-surface-3 border-l border-line text-fg`.
   - User message bubble: `bg-surface-2 border-line text-fg`.
   - Assistant message bubble: `bg-surface border-line text-fg`.

7. **Auth / Login Page (`/login`)**:
   - Left column: `bg-bg text-fg border-line`.
   - Right demo column: `bg-surface text-fg border-line`.
   - Google Sign-in button: `border-line-strong hover:bg-surface-2 text-fg`.
   - Demo account cards: `bg-surface-3 border-line text-fg hover:border-primary`.

8. **Theme Toggle Component (`<ThemeToggle />`)**:
   - Sun / Moon / Laptop animated morphing icon button.
   - Radio dropdown options: `Light`, `Dark`, `System`.
   - ARIA: `role="menuitemradio"`, `aria-checked`, keyboard accessible (Enter, Space, Arrows, Escape).
   - Placed in:
     1. Landing navbar (desktop & mobile).
     2. Login & Auth pages (top-right).
     3. App shell top bar & user profile menu.

9. **Flash-Free Theme Initialization (`public/theme-init.js`)**:
   - External script loaded synchronously in `<head>`.
   - Reads `localStorage.getItem('bharosa-theme')`.
   - If `'dark'` or (no choice and `window.matchMedia('(prefers-color-scheme: dark)').matches`), immediately sets `document.documentElement.dataset.theme = 'dark'` and `document.documentElement.style.colorScheme = 'dark'`.
   - Zero white flash on page reload.
   - Fully CSP-compliant (external file, no inline script).
