# SixLabs Design System (Updated)

This document is the single source of truth for the SixLabs design system. Feed it to any LLM working on this codebase.

---

## Stack

- **Framework**: React + TypeScript (Vite)
- **Styling**: Tailwind CSS v4 (using `@theme inline`)
- **Fonts**: Satoshi (display) · Inter (body)
- **Token source (CSS)**: `/src/styles/theme.css`
- **Component primitives**: `/src/app/components/design-system/index.tsx`

---

## Color Palette

### Core brand colors

| Token | Hex | Usage |
|---|---|---|
| `midnight` | `#020617` | Dark backgrounds |
| `signal` | `#2563EB` | Primary brand color |
| `lilac` | `#A78BFA` | Secondary brand accent |
| `mist` | `#F5F3FF` | Lightest brand tint |
| `ink` | `#0B123F` | Headline text on light |
| `body-text` | `#334155` | Body copy on light |
| `muted-text` | `#64748B` | Secondary text |
| `surface` | `#F8FAFC` | Light background |
| `surface-dark` | `#070A18` | Dark background |

### Accent colors

| Token | Hex | Usage |
|---|---|---|
| `indigo-brand` | `#4F46E5` | Indigo accent |
| `violet-brand` | `#8B5CF6` | Violet accent |
| `danger` | `#E11D48` | Alert/Error |

### Border colors

| Token | Hex | Usage |
|---|---|---|
| `border-subtle` | `rgba(15,23,42,0.08)` | Default card border |
| `border-indigo` | `#E0E7FF` | Indigo-tinted border |

---

## Gradients

| Name | Value | Usage |
|---|---|---|
| `brand` | `#2563EB → #A78BFA` (90°) | Headlines, Hero |
| `cta` | `#2563EB → #7C3AED` (135°) | CTA buttons |
| `indigo` | `#4F46E5 → #8B5CF6` (90°) | Product accents |

---

## Typography

### Font families
- Display: Satoshi (`font-display`)
- Body: Inter (`font-body`)

### Type scale (Custom Tokens)
- `text-h1`: clamp(44px, 7vw, 84px)
- `text-h2`: clamp(32px, 5vw, 56px)
- `text-h3`: 24px
- `text-body`: 16px
- `text-label`: 14px
- `text-caption`: 13px
- `text-eyebrow`: 11px

---

## Border Radius
- `radius-2xl`: 24px (Cards/Panels)
- `radius-cta`: 14px (Buttons)
- `radius-badge`: 6px (Badges)

---

## Design System Components (`/src/app/components/design-system/`)

1. **`Section`**: Standard wrapper with `py-[88px] md:py-[120px]`.
2. **`Container`**: Max-width constraint (`sm`: 760px, `md`: 960px, `lg`: 1280px, `xl`: 1360px).
3. **`SectionHeading`**: Responsive heading (h1-h3) using Satoshi.
4. **`SectionEyebrow`**: Small ALL CAPS label above headings.
5. **`GradientText`**: Inline gradient text span.
6. **`CTAButton`**: Primary/Outline button with specific radius and gradients.
7. **`Pill`**: Small badge labels with specific color variants.
8. **`StatBadge`**: Data-dense metric display component.
9. **`StatusProgress`**: Visual progress indicator for metrics.
10. **`Badge`**: Generic status badge with multiple color variants.
