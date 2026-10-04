# Bharosa Design Tokens & Theming System

This document specifies the semantic design token architecture for Bharosa, supporting seamless **Light**, **Dark**, and **System** color modes.

---

## 1. Architecture Overview

Bharosa uses a multi-tier design token architecture:
1. **Space-separated RGB Custom Properties**: Defined in [`tokens.css`](../frontend/src/styles/tokens.css) under `:root` and `[data-theme="dark"]`.
2. **Tailwind CSS Utility Classes**: Integrated in [`tailwind.config.ts`](../frontend/tailwind.config.ts) utilizing `rgb(var(--<token>) / <alpha-value>)` for arbitrary opacity support (`bg-bg/80`, `text-primary/60`, etc.).
3. **No-Flash Synchronous Initializer**: [`public/theme-init.js`](../frontend/public/theme-init.js) loaded synchronously in `<head>` to evaluate preference before React boots.
4. **Theme Transitions**: A 200ms `data-theme-transition` attribute applied to `<html>` during mode switches, avoiding full-page animation loops.

---

## 2. Token Registry

| Token | Light Value (Hex / RGB) | Dark Value (Hex / RGB) | Intended Usage |
|---|---|---|---|
| `--bg` | `#FFFFFF` (255, 255, 255) | `#0E1508` (14, 21, 8) | App canvas, landing page top, view backgrounds |
| `--surface` | `#F7FBEF` (247, 251, 239) | `#141F0C` (20, 31, 12) | Elevated cards, primary sections, sidebars |
| `--surface-2` | `#ECFCCB` (236, 252, 203) | `#1C2B11` (28, 43, 17) | Secondary cards, pill containers, inputs |
| `--surface-3` | `#E2F7B5` (226, 247, 181) | `#263B17` (38, 59, 23) | Highlighted card backgrounds, elevated dropdowns |
| `--border` | `#D9EBB5` (217, 235, 181) | `#2F481C` (47, 72, 28) | Card borders, table dividers, input borders |
| `--border-strong` | `#84CC16` (132, 204, 22) | `#65A30D` (101, 163, 13) | Active tabs, focused outlines, highlighted borders |
| `--fg` | `#1A2E05` (26, 46, 5) | `#F4FCE8` (244, 252, 232) | Primary typography, headers, active icon fills |
| `--fg-muted` | `#4D6B2A` (77, 107, 42) | `#A3C683` (163, 198, 131) | Secondary copy, subheadings, non-active icons |
| `--fg-subtle` | `#7C9B54` (124, 155, 84) | `#6E8E50` (110, 142, 80) | Tertiary metadata, timestamps, breadcrumb dividers |
| `--primary` | `#84CC16` (132, 204, 22) | `#A3E635` (163, 230, 53) | Primary brand accents, badges, CTAs |
| `--primary-hover`| `#65A30D` (101, 163, 13) | `#84CC16` (132, 204, 22) | Hover state for buttons and interactive items |
| `--primary-soft` | `#ECFCCB` (236, 252, 203) | `#1A2D0C` (26, 45, 12) | Soft badge background, selected nav item background |
| `--on-primary` | `#1A2E05` (26, 46, 5) | `#0B1207` (11, 18, 7) | **Always dark text** on lime green buttons/pills |
| `--link` | `#4D7C0F` (77, 124, 15) | `#BEF264` (190, 242, 100) | Hyperlinks and interactive text |
| `--dot` | `#CFE6A0` (207, 230, 160) | `#4D6B2A` (77, 107, 42) | Decorative background grid dots |
| `--status-success` | `#16A34A` (22, 163, 74) | `#4ADE80` (74, 222, 128) | Verified seals, valid signatures, healthy services |
| `--status-warning` | `#D97706` (217, 119, 6) | `#FBBF24` (251, 191, 36) | Warnings, expiring access, mismatch prompts |
| `--status-danger` | `#DC2626` (220, 38, 38) | `#F87171` (248, 113, 113) | Security freeze, revocation, auth failure |
| `--status-info` | `#2563EB` (37, 99, 235) | `#60A5FA` (96, 165, 250) | Protocol information, relayer logs |

---

## 3. Strict Rules for Contributors

1. **Never hardcode hex values** for page backgrounds, card borders, or typography:
   - ❌ Bad: `className="bg-white text-[#1A2E05] border-[#ECFCCB]"`
   - ✅ Good: `className="bg-surface text-fg border-line"`
2. **Never place white text on lime**:
   - ❌ Bad: `className="bg-primary text-white"`
   - ✅ Good: `className="bg-primary text-on-primary"` (guaranteed dark contrast compliant with WCAG AAA).
3. **Use semantic Tailwind utilities**:
   - `bg-bg`, `bg-surface`, `bg-surface-2`, `bg-primary-soft`
   - `text-fg`, `text-fg-muted`, `text-fg-subtle`, `text-primary`
   - `border-line`, `border-line-strong`, `border-primary`
4. **Interactive Theme Controls**:
   - Any new top navigation or user settings view should expose `<ThemeToggle />` or call `const { choice, setChoice } = useTheme()`.
