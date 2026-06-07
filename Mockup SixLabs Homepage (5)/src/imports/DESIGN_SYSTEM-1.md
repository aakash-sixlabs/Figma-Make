# SixLabs Design System

This document is the single source of truth for the SixLabs design system. Feed it to any LLM working on this codebase.

---

## Stack

- **Framework**: React + TypeScript (Vite)
- **Styling**: Tailwind CSS v3 + CSS custom properties
- **Fonts**: Satoshi (display) · Inter (body) — loaded via local `@font-face` in `src/index.css`
- **Token source (JS)**: `src/lib/brand.ts`
- **Token source (CSS)**: `src/index.css` (`@layer base :root { ... }`)
- **Tailwind config**: `tailwind.config.ts`
- **Component primitives**: `src/components/design-system/`

---

## Color Palette

### Core brand colors

| Token | Hex | Usage |
|---|---|---|
| `midnight` | `#020617` | Dark section backgrounds |
| `signal` / `signal-blue` | `#2563EB` | Signal Blue — primary brand color |
| `lilac` | `#A78BFA` | Secondary brand accent |
| `mist` | `#F5F3FF` | Lightest brand tint |
| `ink` | `#0B123F` | Headline text on light backgrounds |
| `body-text` | `#334155` | Body copy on light backgrounds |
| `muted-text` | `#64748B` | Secondary/muted text |
| `surface` | `#F8FAFC` | Light section background |
| `surfaceDark` | `#070A18` | Dark section background (ContactSection) |

### Accent colors

| Token | Hex | Usage |
|---|---|---|
| `indigo` | `#4F46E5` | Indigo accent (ProductSection, signals) |
| `indigo.tint` | `#EEF2FF` | Indigo pill/badge background |
| `violet` | `#8B5CF6` | Violet accent |
| `violet.tint` | `#F5F3FF` | Violet pill/badge background |
| `violetDark` | `#7C3AED` | CTA gradient endpoint |
| `danger` | `#E11D48` | Danger/alert (workflow reality) |

### Border colors

| Token | Hex | Usage |
|---|---|---|
| `borderSubtle` | `rgba(15,23,42,0.08)` | Default subtle card border |
| `borderIndigo` | `#E0E7FF` | Indigo-tinted border |

### Tailwind usage

All colors are available as Tailwind classes:
```
text-ink          bg-ink
text-body-text    bg-surface
text-muted-text   bg-midnight
text-signal       bg-signal
text-lilac        bg-indigo
text-indigo       bg-indigo-tint
text-violet       bg-violet-tint
text-danger       bg-danger
midnight/75       (opacity modifier works on all tokens)
```

---

## Gradients

Three named gradients. Always use these — do not introduce new ones.

| Name | Value | Tailwind / CSS class | Usage |
|---|---|---|---|
| `brand` | `linear-gradient(90deg, #2563EB 0%, #A78BFA 100%)` | `bg-brand-gradient` · `text-brand-gradient` | Primary brand gradient. Headlines, hero, CTAs |
| `cta` | `linear-gradient(135deg, #2563EB, #7C3AED)` | `bg-cta-gradient` | CTA button fills |
| `indigo` | `linear-gradient(90deg, #4F46E5, #8B5CF6)` | `bg-indigo-diag` (135° version) | Product section accents, active states |

**Apply gradient to text:**
```tsx
// Via component (preferred)
<GradientText gradient="brand">Your text</GradientText>

// Via CSS class
<span className="text-brand-gradient">Your text</span>

// Via inline style
style={{
  backgroundImage: "linear-gradient(90deg, #2563EB 0%, #A78BFA 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
}}
```

---

## Typography

### Font families

| Role | Family | Tailwind class |
|---|---|---|
| Display / Headings | Satoshi, Outfit, sans-serif | `font-display` |
| Body | Inter, sans-serif | `font-body` |

`h1`–`h6` elements default to `font-display` via global base styles.
`body` defaults to `font-body`.

### Type scale

| Token | Value | Usage |
|---|---|---|
| `h1` | `clamp(44px, 7vw, 84px)` | Hero headline |
| `h2` | `clamp(32px, 5vw, 56px)` | Section headings (via `SectionHeading`) |
| `h3` | `24px` | Card headings |
| `body` | `16px` | Body copy |
| `label` | `14px` | Labels, nav items |
| `caption` | `13px` | Small supporting text |
| `eyebrow` | `11px` | Eyebrow labels (ALL CAPS) |

### Letter spacing

| Token | Value | Usage |
|---|---|---|
| `tight` | `-0.02em` | Large display headings |
| `snug` | `-0.01em` | Section headings |
| `eyebrow` | `0.22em` | Eyebrow labels |
| `pill` | `0.18em` | Pill/badge labels |

### Line heights

| Token | Value | Usage |
|---|---|---|
| `display` | `1.06` | Hero h1 |
| `heading` | `1.1` — `1.2` | Section h2 |
| `body` | `1.6` | Body paragraphs |

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `card` | `0 1px 3px rgba(15,23,42,0.06), 0 4px 12px rgba(15,23,42,0.04)` | Default card shadow |
| `cardHover` | `0 4px 20px rgba(79,70,229,0.12), 0 1px 4px rgba(15,23,42,0.08)` | Card hover state |
| `cta` | `0 4px 20px -6px rgba(37,99,235,0.45)` | CTA button resting |
| `ctaHover` | `0 12px 40px -8px rgba(124,58,237,0.65)` | CTA button hover |

**Tailwind utility classes:**
```
shadow-card
shadow-card-hover
shadow-cta
```

---

## Border Radius

All card/panel elements use a single standardized radius. Do not introduce new values.

| Role | Value | Tailwind |
|---|---|---|
| Card / panel | `24px` | `rounded-2xl` |
| Button | `14px` | `rounded-[14px]` (CTAButton) |
| Badge / label | `6px` | `rounded-md` |
| Pill / avatar / circle | `9999px` | `rounded-full` |
| Tile / sub-element | `12px` | `rounded-xl` |
| Small element (tooltip) | `8px` | `rounded-lg` |

**Rule:** All major cards and panels must use `rounded-2xl`. Do not use `rounded-[20px]`, `rounded-[22px]`, `rounded-[24px]`, or `rounded-[28px]`.

---

## Spacing & Layout

### Section padding
```
py-[88px] md:py-[120px]   (standard section vertical padding)
px-6 md:px-10             (standard section horizontal padding)
scroll-mt-24              (offset for sticky nav)
```

### Container widths

Used via the `Container` component (`src/components/design-system/Container.tsx`):

| Size | Max width |
|---|---|
| `sm` | `760px` |
| `md` | `960px` |
| `lg` | `1280px` (default) |
| `xl` | `1360px` |

---

## Design System Components

All primitives live in `src/components/design-system/` and are exported from `src/components/design-system/index.ts`.

Import pattern:
```tsx
import { Container, SectionEyebrow, SectionHeading, GradientText, CTAButton, Pill, Section } from "@/components/design-system";
```

---

### `Container`

Constrains content width and centers it.

```tsx
<Container size="xl" className="px-5 sm:px-8">
  {children}
</Container>
```

| Prop | Type | Default | Options |
|---|---|---|---|
| `size` | string | `"lg"` | `"sm"` `"md"` `"lg"` `"xl"` |
| `center` | boolean | `false` | Adds `text-center` |
| `className` | string | — | Merged via `cn()` |

---

### `Section`

Standard section wrapper with padding, scroll offset, and background variants.

```tsx
<Section id="contact" variant="dark" aria-label="Get in touch">
  {children}
</Section>
```

| Prop | Type | Default | Options |
|---|---|---|---|
| `variant` | string | `"light"` | `"light"` (`bg-surface`) · `"dark"` (`bg-[#070A18]`) |
| `id` | string | — | Sets `id` and `scroll-mt-24` |
| `aria-label` | string | — | Screen reader label |

---

### `SectionEyebrow`

Small ALL CAPS label above section headings.

```tsx
// Indigo pill style (default)
<SectionEyebrow>THE PROBLEM</SectionEyebrow>

// Gradient text style
<SectionEyebrow variant="gradient">Connect with us</SectionEyebrow>
```

| Prop | Type | Default | Options |
|---|---|---|---|
| `variant` | string | `"indigo"` | `"indigo"` (pill) · `"gradient"` (text) |

- **indigo**: `bg-[#EEF2FF] text-[#4F46E5] border-[#E0E7FF]` pill, `rounded-full`
- **gradient**: gradient text `#60A5FA → #A78BFA`, no background

---

### `SectionHeading`

Responsive h2 with brand typography.

```tsx
<SectionHeading variant="dark" as="h2">
  Your headline here
</SectionHeading>
```

| Prop | Type | Default | Options |
|---|---|---|---|
| `variant` | string | `"dark"` | `"dark"` (`text-ink`) · `"light"` (`text-white`) |
| `as` | string | `"h2"` | `"h1"` `"h2"` `"h3"` |
| `style` | CSSProperties | — | Merged into element style |

Default style: `clamp(32px, 5vw, 56px)`, `lineHeight: 1.06`, `font-display font-bold tracking-tight`.

---

### `GradientText`

Inline gradient text span.

```tsx
<GradientText gradient="brand">highlighted phrase</GradientText>
<GradientText gradient="cta">CTA phrase</GradientText>
<GradientText gradient="indigo">accent phrase</GradientText>
```

| Prop | Type | Default | Options |
|---|---|---|---|
| `gradient` | string | `"brand"` | `"brand"` · `"cta"` · `"indigo"` |
| `className` | string | — | Additional classes |

Gradients:
- `brand`: `#2563EB → #A78BFA` (90°)
- `cta`: `#2563EB → #7C3AED` (135°)
- `indigo`: `#4F46E5 → #8B5CF6` (90°)

---

### `CTAButton`

Primary call-to-action button. Renders as `<button>` or `<a>`.

```tsx
// Primary (gradient fill)
<CTAButton onClick={handler}>
  Book a demo <ArrowRight size={17} />
</CTAButton>

// Outline (for nav/light contexts)
<CTAButton variant="outline" as="a" href="/signup" className="px-5 py-2.5 text-[14px]">
  Get started
</CTAButton>

// As anchor link
<CTAButton as="a" href="https://..." target="_blank" rel="noopener noreferrer">
  Book a demo <ArrowRight size={17} />
</CTAButton>
```

| Prop | Type | Default | Options |
|---|---|---|---|
| `variant` | string | `"primary"` | `"primary"` · `"outline"` |
| `as` | string | `"button"` | `"button"` · `"a"` |
| `className` | string | — | Merged via `cn()` |

- **Primary**: CTA gradient fill, `padding: 17px 36px`, `rounded-[14px]`, `text-white`
- **Outline**: `border border-[#A78BFA]/70`, `hover:bg-[#A78BFA]/10`, no padding override — set via `className`

Both variants: `font-display font-semibold text-[16px]`, `group inline-flex items-center gap-2.5`, `hover:-translate-y-0.5`

---

### `Pill`

Small badge/label component.

```tsx
<Pill variant="indigo">Always-on</Pill>
<Pill variant="violet">AI-powered</Pill>
<Pill variant="dark">Live signals</Pill>
```

| Prop | Type | Default | Options |
|---|---|---|---|
| `variant` | string | `"indigo"` | `"indigo"` · `"violet"` · `"dark"` |

- **indigo**: `bg-[#EEF2FF] text-[#4F46E5] border-[#E0E7FF]`
- **violet**: `bg-[#F5F3FF] text-[#8B5CF6] border-[#E9D5FF]`
- **dark**: `bg-white/10 text-white/80 border-white/15` (for dark backgrounds)

All pills: `rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase font-display`

---

## Utility Classes (CSS)

Defined in `src/index.css`:

```css
.text-brand-gradient   /* gradient text: #2563EB → #A78BFA */
.text-headline-gradient /* alias — same as brand gradient */
.bg-brand-gradient     /* gradient background: brand */
.bg-cta-gradient       /* gradient background: CTA */
.bg-indigo-diag        /* diagonal gradient: #4F46E5 → #8B5CF6 at 135° */
.font-satoshi          /* font-family: Satoshi, Outfit, sans-serif */
.shadow-card           /* standard card shadow */
.shadow-card-hover     /* card hover shadow */
.shadow-cta            /* CTA button shadow */
```

---

## Animation Conventions

| Purpose | Duration | Easing |
|---|---|---|
| Fast micro-interactions | `200ms` | `ease` |
| Standard transitions | `300ms` | `ease` |
| Fade-in on scroll | `500–700ms` | `ease` |
| Slow reveals | `700ms` | `ease` |

**Scroll reveal pattern** (used across all sections):
```tsx
const obs = new IntersectionObserver(([e]) => {
  if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
}, { threshold: 0.12 });
```

**Reduced motion**: All animated sections check `window.matchMedia("(prefers-reduced-motion: reduce)")` and skip transitions when true.

**CSS keyframes available:**
- `scrollUp` / `scrollDown` — vertical marquee
- `loopDash` — SVG stroke-dashoffset loop

---

## Page Sections (Landing)

All sections live in `src/components/landing/`. Loaded in `src/pages/SixLabsLanding.tsx`.

| Component | Route anchor | Background | Notes |
|---|---|---|---|
| `Navbar` | — | `bg-midnight/75` blur | Sticky, transparent |
| `HeroSection` | — | Dark (transparent over BrandWaveBackground) | h1 + subhead + CTA button + pills |
| `BrandWaveBackground` | — | SVG wave animation | Behind hero |
| `SixLabsWorkflowVisual` | — | Dark | Inline diagram below hero |
| `ProblemSectionV2` | `#problem` | `bg-surface` | Rotating headline, campaign vs workflow gap |
| `ProductSectionV2` | `#product` | White | 4-tab product feature explorer |
| `PipelineSection` | — | Dark | Pipeline visualization |
| `FeedbackLoopSection` | — | Light | Feedback loop diagram |
| `PilotMetricsSection` | — | Light | Metrics/proof section |
| `ContactSection` | `#contact` | `#070A18` | CTA + book demo |

---

## Rules & Constraints

1. **Do not introduce new colors.** Use existing tokens only.
2. **Do not introduce new gradients.** Three gradients exist: `brand`, `cta`, `indigo`.
3. **All card/panel elements use `rounded-2xl`.** No other arbitrary radius values for cards.
4. **Headings use `font-display` (Satoshi).** Body copy uses `font-body` (Inter).
5. **Use design system components** (`Container`, `SectionEyebrow`, `GradientText`, `CTAButton`, `Pill`) instead of repeating the same inline styles.
6. **Do not hardcode colors** that have a token equivalent. Use Tailwind classes or CSS variables.
7. **Respect reduced motion.** Every animated component must check `prefers-reduced-motion`.
8. **Section layout is fixed.** Do not change the order, padding, or structure of sections unless explicitly asked.
9. **Copy is final.** Do not change any visible text unless explicitly asked.
10. **No new fonts.** Satoshi and Inter are the only typefaces.
