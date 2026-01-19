# FNE International Website Style Guide

> **Last Updated**: January 2026
> **Purpose**: Comprehensive design system for consistent, maintainable website development

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Layout Patterns](#layout-patterns)
5. [Component Library](#component-library)
6. [Animation System](#animation-system)
7. [Section Templates](#section-templates)
8. [Page Templates](#page-templates)
9. [Do's and Don'ts](#dos-and-donts)

---

## Color System

### Brand Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Primary Green** | `#2D8B4E` | `--color-primary` | Main brand color, primary CTAs, links, icons |
| **Teal** | `#3D9A8B` | `--color-secondary` | Secondary accents, taglines, alternate highlights |
| **Light Green** | `#8DC63F` | `--color-light-green` | Gradients, subtle accents |
| **Orange** | `#F7931E` | `--color-accent` | Primary buttons, urgent CTAs, highlights |
| **Dark** | `#1a1a1a` | `--color-dark` | Body text |
| **Light** | `#f8f9fa` | `--color-light` | Light backgrounds |

### Background Colors

| Context | Class | Description |
|---------|-------|-------------|
| **Primary sections** | `bg-white` | Clean, main content areas |
| **Alternate sections** | `bg-gray-50` | Subtle distinction between sections |
| **Hero/CTA gradient** | `bg-gradient-to-br from-emerald-50 via-white to-orange-50/50` | Rich branded gradient |
| **Subtle green tint** | `bg-emerald-50` | Light green background |
| **Subtle orange tint** | `bg-orange-50/50` | Light orange background |

### Text Colors

| Usage | Class | Hex |
|-------|-------|-----|
| **Headings** | `text-gray-900` | `#111827` |
| **Body text** | `text-gray-600` | `#4B5563` |
| **Subtle text** | `text-gray-500` | `#6B7280` |
| **Muted text** | `text-gray-400` | `#9CA3AF` |
| **Brand green text** | `text-[#2D8B4E]` | `#2D8B4E` |
| **Brand orange text** | `text-[#F7931E]` | `#F7931E` |
| **Brand teal text** | `text-[#3D9A8B]` | `#3D9A8B` |

### Opacity Guidelines

| Element | Opacity | Usage |
|---------|---------|-------|
| **Floating orbs** | `0.15` (15%) | Background decorative elements |
| **Radial gradients** | `0.05-0.08` | Subtle section backgrounds |
| **Borders** | `0.1-0.3` | Card and element borders |
| **Hover glows** | `0.2-0.4` | Interactive feedback |

---

## Typography

### Font Stack

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Heading Hierarchy

| Level | Class | Size | Weight | Line Height |
|-------|-------|------|--------|-------------|
| **H1 (Hero)** | `text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight` | 60-96px | 900 | 0.9 |
| **H2 (Section)** | `text-5xl md:text-6xl font-black text-gray-900` | 48-60px | 900 | 1.0 |
| **H3 (Subsection)** | `text-3xl md:text-4xl font-bold text-gray-900` | 30-36px | 700 | 1.2 |
| **H4 (Card title)** | `text-xl md:text-2xl font-bold text-gray-900` | 20-24px | 700 | 1.3 |
| **H5 (Small heading)** | `text-lg font-semibold text-gray-900` | 18px | 600 | 1.4 |

### Body Text

| Variant | Class |
|---------|-------|
| **Hero subtitle** | `text-xl md:text-2xl text-gray-600 leading-relaxed font-light` |
| **Section intro** | `text-xl text-gray-500 max-w-2xl mx-auto` |
| **Body large** | `text-lg text-gray-600 leading-relaxed` |
| **Body standard** | `text-base text-gray-600 leading-relaxed` |
| **Body small** | `text-sm text-gray-500` |
| **Caption** | `text-xs text-gray-400 uppercase tracking-wider` |

### Section Labels

Always use this format above section headings:
```html
<p class="text-[#2D8B4E] font-semibold tracking-[0.3em] uppercase mb-4 text-sm">Section Label</p>
```

Color variants:
- Green: `text-[#2D8B4E]`
- Orange: `text-[#F7931E]`
- Teal: `text-[#3D9A8B]`

### Gradient Text (Shimmer Effect)

Use for accent words in headings:

| Class | Animation | Usage |
|-------|-----------|-------|
| `.neon-text` | 12s shimmer | Standard accent text |
| `.neon-text-large` | 15s shimmer | Large headlines (slower) |
| `.neon-text-orange` | 12s shimmer | Orange-only gradient |

```html
<h2>Creating <span class="neon-text">Lasting</span> Change</h2>
```

### Text Shadow (Headlines)

For hero headlines on gradient backgrounds:
```css
.hero-headline {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.hero-headline .text-gray-900 {
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.neon-glow {
  filter: drop-shadow(0 0 20px rgba(45, 139, 78, 0.3))
          drop-shadow(0 0 40px rgba(247, 147, 30, 0.2));
}
```

---

## Spacing System

### Container

```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- content -->
</div>
```

- **Max width**: `max-w-7xl` (1280px)
- **Padding**: `px-4 sm:px-6 lg:px-8`

### Section Padding

| Size | Class | Pixels |
|------|-------|--------|
| **Small** | `py-16` | 64px |
| **Standard** | `py-24` | 96px |
| **Large** | `py-32` | 128px |
| **Extra Large** | `py-40` | 160px |

### Component Spacing

| Context | Class | Usage |
|---------|-------|-------|
| **Section header margin** | `mb-16` or `mb-20` | Below section titles |
| **Card padding** | `p-6` or `p-8` | Internal card spacing |
| **Grid gap** | `gap-6` or `gap-8` | Between grid items |
| **Button gap** | `gap-4` or `gap-5` | Between button groups |
| **Text stack** | `mb-4` to `mb-8` | Between text elements |

---

## Layout Patterns

### Two-Column Hero

```html
<section class="relative min-h-[75vh] flex items-center">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div><!-- Text content --></div>
      <div><!-- Image --></div>
    </div>
  </div>
</section>
```

### Three-Column Grid

```html
<div class="grid md:grid-cols-3 gap-8">
  <!-- Cards -->
</div>
```

### Four-Column Grid

```html
<div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- Items -->
</div>
```

### Centered Content

```html
<div class="text-center max-w-3xl mx-auto">
  <!-- Centered text content -->
</div>
```

---

## Component Library

### Buttons

#### Primary Button (Orange)
```html
<a href="#" class="cyber-button primary group">
  <span class="relative z-10 flex items-center justify-center gap-2">
    <svg class="w-5 h-5"><!-- icon --></svg>
    Button Text
  </span>
  <div class="cyber-button-glitch"></div>
</a>
```

**CSS:**
```css
.cyber-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 9999px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.cyber-button.primary {
  background: linear-gradient(135deg, #F7931E, #ff6b00);
  color: white;
  box-shadow: 0 4px 20px rgba(247, 147, 30, 0.3);
}

.cyber-button.primary:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 40px rgba(247, 147, 30, 0.4);
}
```

#### Secondary Button (Outlined)
```html
<a href="#" class="cyber-button secondary group">
  <span class="relative z-10">Button Text</span>
  <svg class="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform">
    <!-- arrow icon -->
  </svg>
</a>
```

**CSS:**
```css
.cyber-button.secondary {
  background: white;
  color: #2D8B4E;
  border: 2px solid #2D8B4E;
  box-shadow: 0 4px 20px rgba(45, 139, 78, 0.1);
}

.cyber-button.secondary:hover {
  background: #2D8B4E;
  color: white;
  box-shadow: 0 8px 30px rgba(45, 139, 78, 0.3);
}
```

#### Tertiary Button (Ghost)
```html
<a href="#" class="cyber-button tertiary">Button Text</a>
```

#### Simple Link Button
```html
<a href="#" class="inline-flex items-center gap-2 text-[#2D8B4E] font-semibold hover:text-[#F7931E] transition-colors">
  Learn More
  <svg class="w-4 h-4"><!-- arrow --></svg>
</a>
```

### Cards

#### Standard Card
```html
<div class="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
  <!-- Card content -->
</div>
```

#### Feature Card (with icon)
```html
<div class="feature-card">
  <div class="feature-card-icon feature-card-icon-green">
    <svg class="w-6 h-6"><!-- icon --></svg>
  </div>
  <div class="feature-card-content">
    <h3 class="feature-card-title">Title</h3>
    <p class="feature-card-description">Description text</p>
  </div>
</div>
```

#### Glass Card
```html
<div class="glass-card rounded-2xl p-6 border border-white/20">
  <!-- Content -->
</div>
```

#### Program Card (Large, with image)
```html
<a href="#" class="group block relative overflow-hidden rounded-3xl aspect-[4/5]">
  <img src="image.jpg" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
  <div class="absolute bottom-0 left-0 right-0 p-8">
    <span class="text-sm text-white/70 font-medium tracking-wider uppercase">Label</span>
    <h3 class="text-3xl font-bold text-white mt-2">Title</h3>
    <p class="text-white/80 mt-3">Description</p>
  </div>
</a>
```

### Badges

#### Status Badge (with ping)
```html
<div class="inline-flex items-center gap-3 glass-card px-5 py-3 rounded-full border border-[#2D8B4E]/20 shadow-lg">
  <span class="relative flex h-3 w-3">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D8B4E] opacity-75"></span>
    <span class="relative inline-flex rounded-full h-3 w-3 bg-[#2D8B4E]"></span>
  </span>
  <span class="text-[#2D8B4E] text-sm font-semibold tracking-wider uppercase">Badge Text</span>
</div>
```

#### Simple Badge
```html
<span class="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#2D8B4E]/10 text-[#2D8B4E]">
  Badge
</span>
```

### Section Headers

#### Standard Section Header
```html
<div class="text-center mb-20">
  <p class="text-[#F7931E] font-semibold tracking-[0.3em] uppercase mb-4 text-sm">Section Label</p>
  <h2 class="text-5xl md:text-6xl font-black text-gray-900">
    Main <span class="neon-text">Title</span>
  </h2>
</div>
```

#### Section Header with Subtitle
```html
<div class="text-center mb-16">
  <p class="text-[#2D8B4E] font-semibold tracking-[0.3em] uppercase mb-4 text-sm">Label</p>
  <h2 class="text-5xl md:text-6xl font-black text-gray-900 mb-6">
    Main <span class="neon-text">Title</span>
  </h2>
  <p class="text-xl text-gray-500 max-w-2xl mx-auto">
    Subtitle description text goes here.
  </p>
</div>
```

### Stats

#### Stat Card
```html
<div class="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-lg">
  <div class="text-5xl font-black text-[#2D8B4E] mb-2">25+</div>
  <div class="text-gray-600 font-medium">Years of Impact</div>
</div>
```

### Images

#### Hero Image Frame
```html
<div class="image-frame aspect-square">
  <img src="image.jpg" alt="" class="w-full h-full object-cover object-top rounded-[20px]" />
</div>
```

**CSS for image-frame:**
```css
.image-frame {
  position: relative;
  border-radius: 24px;
  padding: 4px;
  background: linear-gradient(135deg, rgba(45, 139, 78, 0.3), rgba(247, 147, 30, 0.3));
  box-shadow: 0 25px 80px rgba(45, 139, 78, 0.2);
}
```

#### Content Image with Wrapper
```html
<div class="content-image-wrapper">
  <img src="image.jpg" alt="" class="content-image" />
</div>
```

### Navigation

#### Header
```html
<header class="bg-white shadow-sm sticky top-0 z-50">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-28">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img src="/logo.avif" alt="FNE International" class="h-14 w-auto" />
      </a>

      <!-- Nav items -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#" class="text-gray-700 hover:text-[#2D8B4E] font-medium py-2 text-lg">Link</a>
        <!-- Donate button -->
        <a href="/donate" class="bg-[#F7931E] text-white px-7 py-2.5 rounded-lg font-semibold text-lg hover:bg-[#e8850f] transition-colors">
          Donate
        </a>
      </div>
    </div>
  </nav>
</header>
```

- **Height**: `h-28` (112px)
- **Logo height**: `h-14` (56px)

---

## Animation System

### Background Animations

#### Floating Orbs
```html
<div class="absolute inset-0 overflow-hidden">
  <div class="floating-orb orb-1"></div>
  <div class="floating-orb orb-2"></div>
  <div class="floating-orb orb-3"></div>
</div>
```

**CSS:**
```css
.floating-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
}

.orb-1 {
  top: 10%;
  left: 10%;
  width: 300px;
  height: 300px;
  background: #2D8B4E;
  animation: float-orb-1 25s ease-in-out infinite;
}

.orb-2 {
  top: 50%;
  right: 10%;
  width: 250px;
  height: 250px;
  background: #F7931E;
  animation: float-orb-2 20s ease-in-out infinite;
}

.orb-3 {
  bottom: 10%;
  left: 30%;
  width: 200px;
  height: 200px;
  background: #3D9A8B;
  animation: float-orb-3 22s ease-in-out infinite;
}

@keyframes float-orb-1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(40px, 30px); }
}
```

#### Cyber Grid
```html
<div class="absolute inset-0 cyber-grid opacity-30"></div>
```

#### Radial Gradient Backgrounds
```html
<!-- Green glow top-left -->
<div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(45,139,78,0.15),transparent)]"></div>

<!-- Orange glow bottom-right -->
<div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(247,147,30,0.1),transparent)]"></div>

<!-- Teal glow left -->
<div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_20%_60%,rgba(61,154,139,0.1),transparent)]"></div>
```

### Hover Effects

| Class | Effect |
|-------|--------|
| `.card-lift` | Lifts 6px with shadow on hover |
| `.animate-bounce-hover` | Lifts 4px with shadow |
| `.animate-scale-pulse` | Scales to 1.03 |
| `.animate-wobble` | Lifts 3px |
| `.icon-glow` | Adds green glow |

### Shimmer Animation

For gradient text:
```css
@keyframes subtle-shimmer {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}
```

Duration guidelines:
- Standard text: `12s`
- Large headlines: `15s`
- Never faster than `10s`

### Scroll Animations

```html
<div class="animate-on-scroll">Content fades up</div>
<div class="animate-slide-left">Content slides from left</div>
<div class="animate-slide-right">Content slides from right</div>

<!-- With delays -->
<div class="animate-on-scroll delay-100">First</div>
<div class="animate-on-scroll delay-200">Second</div>
<div class="animate-on-scroll delay-300">Third</div>
```

Requires JavaScript to add `.is-visible` class on scroll.

---

## Section Templates

### 1. Hero Section

```html
<section class="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50/50">
  <!-- Animated gradient mesh -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(45,139,78,0.15),transparent)]"></div>
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(247,147,30,0.1),transparent)]"></div>
  </div>

  <!-- Floating orbs -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="floating-orb orb-1"></div>
    <div class="floating-orb orb-2"></div>
    <div class="floating-orb orb-3"></div>
  </div>

  <!-- Cyber grid -->
  <div class="absolute inset-0 cyber-grid opacity-30"></div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <!-- Badge -->
        <!-- Headline with neon-text -->
        <!-- Subtitle -->
        <!-- Buttons -->
      </div>
      <div>
        <!-- Image -->
      </div>
    </div>
  </div>
</section>
```

### 2. Content Section (White Background)

```html
<section class="py-32 bg-white relative overflow-hidden">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(61,154,139,0.05),transparent_70%)]"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div class="text-center mb-16">
      <p class="text-[#3D9A8B] font-semibold tracking-[0.3em] uppercase mb-4 text-sm">Section Label</p>
      <h2 class="text-5xl md:text-6xl font-black text-gray-900 mb-6">
        Section <span class="neon-text">Title</span>
      </h2>
    </div>

    <!-- Content -->
  </div>
</section>
```

### 3. Content Section (Gray Background)

```html
<section class="py-32 bg-gray-50 relative overflow-hidden">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(45,139,78,0.08),transparent_50%)]"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <!-- Section header -->
    <!-- Content -->
  </div>
</section>
```

### 4. CTA Section

```html
<section class="py-40 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50/30">
  <!-- Large background orbs -->
  <div class="absolute inset-0">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2D8B4E] rounded-full filter blur-[200px] opacity-10"></div>
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F7931E] rounded-full filter blur-[150px] opacity-5"></div>
  </div>

  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    <h2 class="text-5xl md:text-6xl font-black text-gray-900 mb-6">
      Call to <span class="neon-text">Action</span>
    </h2>
    <p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
      Description text
    </p>
    <a href="#" class="cyber-button primary">
      <span class="relative z-10">Button Text</span>
    </a>
  </div>
</section>
```

### Section Alternation Pattern

For visual rhythm, alternate section backgrounds:

1. **Hero** → Gradient (`from-emerald-50 via-white to-orange-50/50`)
2. **Section 1** → Gray (`bg-gray-50`)
3. **Section 2** → White (`bg-white`)
4. **Section 3** → Gray (`bg-gray-50`)
5. **CTA** → Gradient (`from-emerald-50 via-white to-orange-50/30`)

---

## Page Templates

### Standard Interior Page

```html
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Page Title">
  <!-- Hero (shorter for interior pages) -->
  <section class="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <p class="text-[#2D8B4E] font-semibold tracking-[0.3em] uppercase mb-4 text-sm">Page Label</p>
        <h1 class="text-5xl md:text-6xl font-black text-gray-900 mb-6">
          Page <span class="neon-text">Title</span>
        </h1>
        <p class="text-xl text-gray-600">Page description or intro text.</p>
      </div>
    </div>
  </section>

  <!-- Content sections (alternating backgrounds) -->
  <section class="py-24 bg-white">
    <!-- Content -->
  </section>

  <section class="py-24 bg-gray-50">
    <!-- Content -->
  </section>

  <!-- CTA -->
  <section class="py-32 bg-gradient-to-br from-emerald-50 via-white to-orange-50/30">
    <!-- CTA content -->
  </section>
</BaseLayout>
```

### Blog Post Page

```html
<article class="py-16">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Category badge -->
    <span class="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#2D8B4E]/10 text-[#2D8B4E] mb-4">
      Category
    </span>

    <!-- Title -->
    <h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">Article Title</h1>

    <!-- Meta -->
    <div class="flex items-center gap-4 text-gray-500 mb-8">
      <span>Author Name</span>
      <span>•</span>
      <time>January 1, 2026</time>
    </div>

    <!-- Featured image -->
    <img src="image.jpg" class="w-full rounded-2xl mb-12" />

    <!-- Content -->
    <div class="prose prose-lg max-w-none">
      <!-- Article content -->
    </div>
  </div>
</article>
```

---

## Do's and Don'ts

### Do

- Use consistent container widths (`max-w-7xl`)
- Maintain generous whitespace (`py-24` minimum for sections)
- Use brand colors from the defined palette only
- Apply subtle hover effects with `transition-all duration-300`
- Keep text readable (`text-gray-600` for body, `text-gray-900` for headings)
- Use `.neon-text` shimmer sparingly (1-2 words per heading)
- Alternate section backgrounds for visual rhythm
- Include floating orbs in hero and CTA sections
- Use the section label pattern above all section headings
- Keep animations slow (12s+ for loops, 0.3s for hovers)

### Don't

- Don't use colors outside the brand palette
- Don't make animations too fast (nothing under 10s for loops)
- Don't use more than 3 floating orbs per section
- Don't overuse gradient text (max 1-2 per page section)
- Don't skip the section label above headings
- Don't use inconsistent border-radius (stick to `rounded-2xl` or `rounded-3xl`)
- Don't forget hover states on interactive elements
- Don't use pure black (`#000`) - use `gray-900` instead
- Don't break the max-width container except for intentional full-bleed
- Don't mix font weights arbitrarily (use the defined hierarchy)

---

## Quick Reference

### Common Class Combinations

```html
<!-- Primary button -->
class="cyber-button primary"

<!-- Card with hover -->
class="bg-white rounded-2xl border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"

<!-- Section header -->
class="text-center mb-20"

<!-- Grid -->
class="grid md:grid-cols-3 gap-8"

<!-- Container -->
class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

<!-- Hero section -->
class="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50/50"

<!-- White section -->
class="py-32 bg-white relative overflow-hidden"

<!-- Gray section -->
class="py-32 bg-gray-50 relative overflow-hidden"

<!-- Gradient text -->
class="neon-text"
```

### File Structure

```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── CTASection.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── donate.astro
│   └── blog/
│       ├── index.astro
│       └── [...slug].astro
├── styles/
│   └── global.css
└── lib/
    └── storyblok.ts
```

### CSS Custom Properties

```css
:root {
  --color-primary: #2D8B4E;
  --color-secondary: #3D9A8B;
  --color-light-green: #8DC63F;
  --color-accent: #F7931E;
  --color-dark: #1a1a1a;
  --color-light: #f8f9fa;
}
```
