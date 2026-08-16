# VELOOP Rewards — Upcoming Features Section

**Task 10 — Upcoming Features Section Redesign**  
*Frontend Development Task Assignment · VELOOP Rewards*

---

## 1. Project Overview

The **Upcoming Features** section redesign for the VELOOP Rewards `/home` dashboard introduces seven forthcoming platform reward experiences as interactive, anticipation-building 3D cards.

Rather than looking like disabled, broken, or locked UI elements, the cards evoke curiosity and trust, giving users a preview of future earning opportunities within the VELOOP ecosystem.

---

## 2. Upcoming Features List

| # | Feature Name | Description | Badge | Visual Theme |
|---|--------------|-------------|-------|--------------|
| 1 | **Team Battle** | Team up, complete challenges, compete with others, and aim for the top. | `Coming Soon` | Red vs Blue fighters with golden VS emblem |
| 2 | **Lucky Draw** | Try your luck in upcoming reward draws and discover exciting prizes. | `Soon` | Golden spinning wheel with pointer & stand |
| 3 | **Milestone Rewards** | Reach important milestones and unlock special rewards along your journey. | `Launching Soon` | Animated progress path & milestone star |
| 4 | **Collect Cards** | Discover, collect, and complete your VELOOP Rewards card collection. | `Stay Tuned` | Stacked digital trading cards with rare emblem |
| 5 | **Surprise Rewards** | Something special could be waiting for you. Stay active and discover surprise rewards. | `Under Development` | Gift box with gold ribbons & interactive lid |
| 6 | **Mystery Rewards** | Complete eligible activities and discover what reward awaits you. | `Coming Soon` | Mysterious chest with gold lock & question plate |
| 7 | **Referral Milestone** | Grow your referral network and unlock additional milestones as your referrals progress. | `Launching Soon` | Glowing central node with orbiting referral network |

---

## 3. Design Approach

- **Background Alignment**: Maintains the main application body background (`#161827`) layered with subtle radial gradients (soft blue and gold mesh) to complement the existing VELOOP Rewards dashboard layout.
- **Fintech & Rewards Aesthetic**: Uses deep navy (`#161827`, `#1e243a`), soft blue (`#60a5fa`), gold (`#d4af37`), silver, and muted purple accents. Avoids neon colors, flashing effects, and cheap glassmorphism.
- **Solving the "Disabled UI" Problem**: Cards remain colorful, interactive, and attractive. Instead of grey overlays or lock icons, subtle badges (`Coming Soon`, `Soon`, `Launching Soon`, `Stay Tuned`, `Under Development`) communicate availability status naturally.
- **Interactive Feedback**: Clicking "Notify Me" displays an elegant, accessible toast alert announcing upcoming availability without navigating to broken routes.

---

## 4. Technology Stack

- **React 19** & **Vite**
- **CSS Modules** (`*.module.css`) for encapsulated styles
- **SVG & Pure CSS Animations** (GPU-accelerated transformations)
- **Lucide React** & **React Icons**
- **Oxlint** for code quality

---

## 5. Installation Instructions

1. **Clone or navigate to the workspace**:
   ```bash
   cd veloop-upcoming-features-source
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 6. Folder Structure

```
src/
├── App.jsx                        # Application shell hosting UpcomingFeaturesSection
├── App.css                        # Shell and header styles
├── index.css                      # Global reset (#161827 body background)
├── main.jsx                       # React entry point
└── components/
    └── UpcomingFeatures/
        ├── FeatureVisuals.jsx             # Custom SVG 3D graphic renderers for all 7 features
        ├── UpcomingFeatureCard.jsx        # Reusable card component with 3D tilt & keyboard focus
        ├── UpcomingFeatureCard.module.css # Card architecture, keyframes & responsive grid
        ├── UpcomingFeaturesSection.jsx    # Section header, toast alerts & grid layout
        ├── UpcomingFeatures.jsx           # Section export wrapper
        └── upcomingFeatures.data.js       # Feature dataset (titles, descriptions, badges)
```

---

## 7. Responsive Behavior

Adheres strictly to the task height and grid specifications:

- **Desktop (≥1080px)**: 4-column grid (4 top row / 3 centered bottom row). Card height: **420px** (within 410px – 450px standard).
- **Tablet (641px – 1079px)**: 2-column grid. Card height: **400px** (within 380px – 540px standard).
- **Mobile (≤640px)**: 1-column stack. Card height: **380px** (within 330px – 520px standard).

---

## 8. Animation Details

- **3D Interactive Tilt**: Dynamic mouse position tracking (`rotateX` / `rotateY` perspective tilt) on card hover.
- **Feature Visual Animations**:
  - *Team Battle*: Subtle fighter shift towards center emblem on hover.
  - *Lucky Draw*: Smooth wheel rotation on hover.
  - *Milestone Rewards*: Animated stroke path and scaling star.
  - *Collect Cards*: Card rotation and elevation shift.
  - *Surprise Rewards*: Gift lid hover lift.
  - *Mystery Rewards*: Chest lid tilt & subtle lock glow.
  - *Referral Network*: Pulsing central node and connection path glowing.
- **Accessibility & Performance**: All animations respect `prefers-reduced-motion` and rely on lightweight, GPU-optimized CSS transforms without external heavy physics or particle libraries.

---

## 9. Accessibility (a11y)

- Semantic HTML layout (`<section>`, `<article>`, `<header>`).
- Heading hierarchy (`<h2>` for section, `<h3>` for cards).
- Full keyboard navigation support with explicit `:focus-visible` outlines.
- Screen reader notifications via `role="status"` and `aria-live="polite"` on toast alerts.
- Decorative graphics hidden using `aria-hidden="true"`.

---

## 10. Screenshots

*(Screenshots can be captured from local browser preview or production deployment)*

---

## 11. Live Demo

- **Vercel Live Demo**: [https://veloop-upcoming-features-hasans-projects-a89be687.vercel.app](https://veloop-upcoming-features-hasans-projects-a89be687.vercel.app)
- **Vercel Project**: [https://vercel.com/hasans-projects-a89be687/veloop-upcoming-features](https://vercel.com/hasans-projects-a89be687/veloop-upcoming-features)


---

## 12. GitHub Repository

- **Repository**: [https://github.com/HSF237/veloop-upcoming-features](https://github.com/HSF237/veloop-upcoming-features)

---

## 13. Author

**Hasan (HSF237)** — VELOOP Rewards Frontend Development Internship, Task 10.

