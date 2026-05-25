---
name: Cod=r
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#e5beb2'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#ac897e'
  outline-variant: '#5c4037'
  surface-tint: '#ffb59c'
  primary: '#ffb59c'
  on-primary: '#5c1900'
  primary-container: '#ff5708'
  on-primary-container: '#511500'
  inverse-primary: '#aa3600'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a29'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#822700'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system for this product is engineered for high-performance developers and tech-forward creatives. The personality is precise, authoritative, and sophisticated, reflecting a mastery of code and design. 

The style blends **Minimalism** with **Modern Corporate** aesthetics, utilizing a high-contrast dark theme to reduce visual noise and emphasize technical content. It prioritizes clarity through generous whitespace and sharp, clean lines, evoking a "command line" efficiency translated into a premium graphical interface. The emotional response should be one of trust, innovation, and technical rigor.

## Colors
The palette is rooted in a "Deep Space" black to maximize contrast for the vibrant accent.

- **Primary (#FF5500):** A high-energy orange used sparingly for calls-to-action, progress indicators, and critical highlights.
- **Surface (#111111):** Used for cards, navigation bars, and section containers to create subtle depth against the pure black background.
- **Foreground High (#FFFFFF):** Reserved for primary headings and active states to ensure maximum readability.
- **Foreground Medium (#A3A3A3):** Used for long-form body text and secondary labels to reduce eye strain in dark mode.
- **Success/Warning/Error:** Use functional variations of the primary orange or muted semantic tones that do not compete with the brand's core identity.

## Typography
This design system employs a trio of typefaces to establish a technical hierarchy:
- **Geist** provides a modern, geometric foundation for massive headlines that feel engineered.
- **Inter** ensures that body copy remains highly legible and neutral, supporting professional documentation and case studies.
- **JetBrains Mono** is used for small labels, data points, and code snippets to reinforce the "Cod=r" developer identity.

Headlines should use tight letter-spacing for a high-end editorial feel, while labels should be slightly tracked out for clarity at small sizes.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop, centering content within a 1280px container to maintain focus. 

- **Desktop:** 12-column grid with 24px gutters. Use wide 80px (xl) margins between major sections to emphasize the "clean and airy" tech aesthetic.
- **Tablet:** 8-column grid with 24px gutters and 40px side margins.
- **Mobile:** 4-column grid with 16px gutters and 20px side margins. Large headlines should scale down as defined in typography tokens to prevent awkward wrapping.

Vertical rhythm is strictly maintained using multiples of 8px. Use generous padding inside cards (32px-48px) to prevent content from feeling cramped against the dark surfaces.

## Elevation & Depth
In this dark-themed environment, depth is communicated through **Tonal Layers** rather than heavy shadows. 

1. **Level 0 (Background):** Pure #050505.
2. **Level 1 (Surface):** Cards and sections use #111111. No shadow is required; the color contrast provides the necessary separation.
3. **Level 2 (Hover/Floating):** Use a subtle #FFFFFF (opacity 5%) border or a very soft, large-radius black shadow to lift elements during interaction.

Avoid traditional drop shadows. Instead, use thin 1px borders in #1A1A1A to define the edges of cards and navigation elements.

## Shapes
The shape language is "Soft" yet disciplined. While the overall vibe is technical and sharp, a small border radius (4px to 12px) prevents the UI from feeling aggressive.

- **Standard Buttons/Inputs:** 4px radius (Soft).
- **Cards & Containers:** 8px to 12px radius.
- **Progress Bars:** Fully rounded (pill) for a modern, fluid look against the sharp edges of the grid.

## Components
- **Sticky Nav:** A slim (64px height) bar with a glassmorphism effect (backdrop-blur: 12px) and a bottom border in #1A1A1A. Links use JetBrains Mono in white for active states and gray for inactive.
- **Buttons:** Primary buttons are solid #FF5500 with white text. Secondary buttons are ghost-style with a 1px white or gray border. All interactions should have a 200ms ease-in-out transition.
- **Progress Bars:** Use a #1A1A1A background track with a solid #FF5500 fill. No gradients; keep it flat and high-tech.
- **Vertical Timeline:** A 2px wide line in #1A1A1A with #FF5500 dots marking milestones. Dates use JetBrains Mono for a "log" feel.
- **Cards:** #111111 background, 1px border (#1A1A1A), and 32px internal padding.
- **Input Fields:** Dark background (#050505) with 1px gray border. On focus, the border changes to #FF5500 with a subtle glow.
- **Minimalist Footer:** Pure black background, no borders, with centered Geist typography and social links in JetBrains Mono.