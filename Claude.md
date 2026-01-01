# Warp Flow – Brand & Design Guidelines

## Overview

Warp Flow is a macOS-native AI productivity tool that supercharges your workflow. The product philosophy centers on **staying in flow** – eliminating friction between intention and action.

**Tagline:** "Your Mac, supercharged with AI."

**Core Promise:** You tell us what you need. We handle the rest. You stay in flow.

---

## Brand Personality

### Voice & Tone
- **Apple-inspired:** Clean, confident, concise
- **Declarative:** State facts, don't over-explain
- **Human:** Warm but not casual, professional but not corporate
- **Action-oriented:** Focus on outcomes, not features

### Copy Principles
1. **Short sentences.** Every word earns its place.
2. **Benefits over features.** "Email that gets out of your way" > "AI email summarization"
3. **Active voice.** "We see what you see" > "Your context is analyzed"
4. **No fluff.** Avoid "easily", "simply", "just", "seamlessly"
5. **Confidence without arrogance.** "We're changing that." not "We're revolutionizing"

### Example Patterns
```
Bad:  "Warp Flow easily analyzes your emails and provides helpful summaries"
Good: "Long thread? Key points and action items, instantly."

Bad:  "Simply press Command+J to seamlessly invoke the interface"
Good: "Press ⌘J anywhere. We already know what you're working on."
```

---

## Design Philosophy

### Core Principles
1. **Monochrome-first:** Black/white dominates. Accent color is rare and intentional.
2. **Subtle over flashy:** Animations enhance, never distract.
3. **Mobile-optimized:** Every effect has a performant mobile fallback.
4. **Premium feel:** Dark, cinematic, with careful attention to depth and space.

### The "Warp" Effect
The brand's signature visual language suggests speed, precision, and transformation:
- Chromatic aberration on hover (RGB split)
- Glitch/scan line effects
- Flowing, reactive curves
- Subtle parallax depth

---

## Color Palette

### Primary Colors
| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#050505` | Main background |
| `bg-secondary` | `#0a0a0a` | Cards, elevated surfaces |
| `text-primary` | `#fafafa` | Headlines, primary text |
| `text-secondary` | `#666666` / `#888888` | Secondary text, captions |

### Accent Color
| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#3b82f6` / `#0066FF` | Buttons, links, key highlights |
| `accent-glow` | `rgba(59,130,246,0.3)` | Glow effects (desktop only) |

### Accent Usage Rules
- **Sparingly used:** Accent appears only on primary CTAs, key interactive elements
- **Desktop glow effects:** Accent glow on hover states, section dividers
- **Mobile:** Prefer white/gray over accent glow for subtlety and performance
- **Never:** Full accent backgrounds, accent text blocks, accent overload

---

## Typography

### Font Stack
```css
font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
```

### Hierarchy
- **Hero headline:** Large, bold, with "Warp" and "Flow" using WarpText effect
- **Section headlines:** Clear, confident, centered
- **Body text:** Readable, generous line-height
- **Captions:** Muted (`text-secondary`), smaller scale

---

## Component Library

### Hero Section
- `WarpLogo`: Animated logo with hover warp effect (RGB split, scan line)
- `WarpText`: Chromatic aberration text effect on hover
- `FlowLines`: Mouse-reactive SVG curves (desktop) / autonomous wave (mobile)

### Layout Components
- `AnimatedDivider`: Scroll-triggered line animation
  - Desktop: Accent glow with center dot
  - Mobile: Simple white line (performance-optimized)
- `Parallax`: Reusable parallax wrapper with configurable speed
- `BentoGrid`: Feature cards with staggered reveal animations

### Interactive Elements
- `WarpRing`: Animated concentric circles around logo
- `MockupVisual`: Product screenshot with parallax on desktop
- `WaitlistForm`: Email capture with loading states

### Background Effects
- `GrainOverlay`: Subtle film grain texture
- `CursorGlow`: Mouse-following glow (desktop only)
- `MeshGradient`: Animated gradient background

---

## Animation Patterns

### Framer Motion Conventions
```typescript
// Scroll-triggered fade-in
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Staggered children
transition={{ delay: index * 0.1 }}

// Spring physics for mouse tracking
useSpring(value, { stiffness: 50, damping: 20 })
```

### Animation Rules
1. **Subtle durations:** 0.3s–0.6s for most transitions
2. **Ease-out:** Natural deceleration feels premium
3. **Once per session:** `viewport={{ once: true }}` prevents repeat animations
4. **Staggered reveals:** 0.1s delay increments for card grids
5. **Reduced motion:** Respect `prefers-reduced-motion` (future enhancement)

---

## Mobile Considerations

### Performance First
- Disable mouse-tracking effects (FlowLines uses autonomous animation instead)
- Simplify glow effects (AnimatedDivider shows white line, not accent glow)
- Reduce particle counts in background effects
- Use CSS animations over JS where possible

### Visual Adaptations
- Stack layouts vertically
- Increase touch targets
- Hide decorative-only elements when they add clutter
- Maintain brand feel with simpler implementations

---

## Section Structure

### Landing Page Flow
1. **Hero:** Logo + Headline + Subline + CTA
2. **HowItWorks:** Three-step process (Invoke → Choose → Done)
3. **BentoGrid:** Feature showcase (Starting with Mail)
4. **Philosophy:** Brand story + Three principles
5. **Footer:** Waitlist CTA + Made in Germany

### Section Dividers
Use `AnimatedDivider` between major sections. The animated line draws attention to section transitions without overwhelming the content.

---

## Content Guidelines

### Headlines
- Max 6-8 words
- No periods at end
- Active, declarative tone

### Descriptions
- 1-2 sentences max
- Lead with benefit
- End with impact

### CTAs
- Clear action: "Get early access", "Join the waitlist"
- Supporting context: "Be the first to experience..."
- Trust signals: "Privacy first", "Early access"

---

## Technical Notes

### Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

### File Organization
```
src/
├── app/
│   ├── page.tsx        # Landing page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/
│   ├── Hero components (WarpLogo, WarpText, FlowLines)
│   ├── Section components (HowItWorks, BentoGrid, Philosophy)
│   ├── UI components (AnimatedDivider, Parallax, WaitlistForm)
│   └── Background effects (GrainOverlay, CursorGlow, etc.)
└── lib/                # Utilities (if needed)
```

### Build & Deploy
```bash
npm run dev      # Development
npm run build    # Production build
npm run start    # Production server
```

---

## Brand Assets

### Logo
- Concentric circles representing "warp" effect
- Monochrome white on dark background
- Interactive hover state with RGB split

### Footer
- "Designed for Mac" badge
- "Made in Germany" origin marker
- Dynamic copyright year: `© {currentYear} Warp Flow`

---

## Future Considerations

- [ ] Dark/light mode toggle (currently dark-only)
- [ ] Reduced motion support
- [ ] Localization (German market priority)
- [ ] Additional "Warps" beyond Mail (Calendar, Notes, etc.)
