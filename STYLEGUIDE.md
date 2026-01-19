# FNE International Website Style Guide

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Primary Green | `#2D8B4E` | Main brand color, CTAs, links |
| Teal | `#3D9A8B` | Secondary accents |
| Light Green | `#8DC63F` | Highlights, gradients |
| Orange | `#F7931E` | Accent, buttons, highlights |
| Dark | `#1a1a1a` | Body text |
| Light | `#f8f9fa` | Backgrounds |

## Layout

### Container
- **Max width**: `max-w-6xl` (1152px)
- **Padding**: `px-4 sm:px-6 lg:px-8`
- **Centered**: `mx-auto`

```html
<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- content -->
</div>
```

### Section Spacing
- **Standard section**: `py-24` (96px top/bottom)
- **Large section**: `py-32` (128px top/bottom)
- **Small section**: `py-16` (64px top/bottom)

## Typography

### Headings
- **H1 (Hero)**: `text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight`
- **H2 (Section)**: `text-4xl md:text-5xl font-black text-gray-900`
- **H3 (Subsection)**: `text-2xl md:text-3xl font-bold text-gray-900`

### Body Text
- **Large**: `text-xl md:text-2xl text-gray-600 leading-relaxed font-light`
- **Standard**: `text-lg text-gray-600 leading-relaxed`
- **Small**: `text-sm text-gray-500`

### Accent Text (Gradient)
Use `.neon-text` class for gradient text effect on key words.

## Components

### Section Header
Every content section should have a consistent header:
```html
<div class="text-center mb-16">
  <p class="text-[#2D8B4E] font-semibold tracking-[0.3em] uppercase mb-4 text-sm">Label</p>
  <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">Main Title</h2>
  <p class="text-xl text-gray-500 max-w-2xl mx-auto">Optional subtitle text.</p>
</div>
```

### Hero Section
- **Height**: `min-h-[50vh]`
- **Layout**: Two-column grid on desktop, stacked on mobile
- **Background**: Subtle gradients, cyber grid, floating orbs
- **Image**: `aspect-ratio: 4/3`, `border-radius: 24px`

### Cards
- **Border radius**: `rounded-2xl` (16px) or `rounded-3xl` (24px)
- **Border**: `border border-[#2D8B4E]/10`
- **Shadow**: `shadow-lg` or custom `box-shadow: 0 20px 60px rgba(45, 139, 78, 0.1)`
- **Padding**: `p-6` or `p-8`

### Buttons

#### Primary (Orange)
```html
<a class="bg-[#F7931E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e8850f] transition-colors">
  Button Text
</a>
```

#### Mega Button (with shine effect)
Use for primary CTAs. See `.mega-button` class.

### Images
- **Aspect ratio**: `4/3` for hero images, `1/1` (square) for thumbnails
- **Border radius**: `rounded-2xl` (16px) or `rounded-3xl` (24px)
- **Object fit**: `object-cover`
- **Shadow**: `shadow-lg` or `shadow-2xl`

## Effects & Animations

### Glass Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}
```

### Neon Text (Gradient)
```css
.neon-text {
  background: linear-gradient(135deg, #2D8B4E, #F7931E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Cyber Grid (Background pattern)
Subtle grid pattern for futuristic feel. Use sparingly with low opacity (10-30%).

### Floating Orbs
Large blurred circles in brand colors. Use for visual interest in hero/CTA sections.
- Green orb: `bg-[#2D8B4E] blur-[100px] opacity-10`
- Orange orb: `bg-[#F7931E] blur-[80px] opacity-8`

### Hover Effects
- **Scale**: `hover:scale-105` for buttons/cards
- **Translate**: `hover:translateY(-4px)` for cards
- **Border glow**: Border color transition on hover
- **Transition**: Always use `transition-all duration-300`

## Section Types

### 1. Hero Section
Full viewport height intro with headline, subtitle, and image.

### 2. Content Section (White)
Standard content on white background: `bg-white`

### 3. Content Section (Gray)
Subtle variation: `bg-gray-50` or `bg-gradient-to-b from-white to-gray-50`

### 4. CTA Section
Emphasized call-to-action with gradient background and floating orbs.
Background: `bg-gradient-to-br from-emerald-50 via-white to-orange-50/30`

### 5. Photo Banner
Edge-to-edge image grid (OK to break max-width for visual impact).

## Animations

### 3D Icon Animations
Use animated icons to add visual interest and guide user attention.

```html
<!-- Slow 3D rotation (best for hero icons) -->
<div class="icon-3d">
  <div class="icon-3d-inner animate-rotate-3d">
    <svg>...</svg>
  </div>
</div>

<!-- Floating icon -->
<div class="icon-float">
  <svg>...</svg>
</div>

<!-- Glowing icon (shows glow on hover) -->
<div class="icon-glow">
  <svg>...</svg>
</div>
```

### Animation Classes
| Class | Effect | Duration |
|-------|--------|----------|
| `.animate-rotate-3d` | Subtle 3D rotation | 8s loop |
| `.animate-spin-slow` | Slow Y-axis rotation | 12s loop |
| `.animate-wobble` | Gentle wobble | 3s loop |
| `.animate-float` | Floating up/down | 6s loop |
| `.animate-scale-pulse` | Subtle scale pulse | 3s loop |
| `.animate-bounce-hover` | Bounce on hover | 0.5s once |
| `.icon-float` | Combined float + rotate | 4s loop |

### Scroll Animations
Elements with scroll animation classes appear when they enter the viewport.

```html
<!-- Fade in from bottom -->
<div class="animate-on-scroll">Content</div>

<!-- Slide in from left -->
<div class="animate-slide-left">Content</div>

<!-- Slide in from right -->
<div class="animate-slide-right">Content</div>

<!-- With stagger delay -->
<div class="animate-on-scroll delay-100">First</div>
<div class="animate-on-scroll delay-200">Second</div>
<div class="animate-on-scroll delay-300">Third</div>
```

## Photo Galleries

### Photo Grid
```html
<!-- 2-column grid -->
<div class="photo-grid photo-grid-2">
  <div class="photo-card">...</div>
  <div class="photo-card">...</div>
</div>

<!-- 3-column grid -->
<div class="photo-grid photo-grid-3">...</div>

<!-- 4-column grid (2 on mobile) -->
<div class="photo-grid photo-grid-4">...</div>
```

### Photo Card (with hover effect)
```html
<div class="photo-card">
  <img src="/photo.jpg" alt="Description" />
  <div class="photo-card-overlay">
    <span class="photo-card-caption">Caption text</span>
  </div>
</div>
```

### Image Placeholders
Use when actual images are not yet available. Include descriptive text.

```html
<!-- Standard placeholder (4:3) -->
<div class="image-placeholder">
  <svg class="image-placeholder-icon">...</svg>
  <span class="image-placeholder-text">
    Photo of volunteers building a house in Nicaragua
  </span>
</div>

<!-- Square placeholder -->
<div class="image-placeholder image-placeholder-square">...</div>

<!-- Wide placeholder (16:9) -->
<div class="image-placeholder image-placeholder-wide">...</div>
```

### Image Placeholder Guidelines
- Always describe the **specific content** needed
- Include location, people, and action when applicable
- Examples:
  - "Aerial view of Finca Girasol farm showing crop diversity"
  - "Group photo of scholarship students in León"
  - "Medical brigade providing care in Cusco village"
  - "Before/after of house construction in Chacraseca"

## Utility Classes

### Card Effects
```css
.card-lift        /* Lifts 8px on hover with shadow */
.glass-card       /* Semi-transparent with blur */
.shimmer          /* Loading shimmer effect */
```

### Icon Effects
```css
.icon-glow        /* Gradient glow on hover */
.icon-float       /* Floating animation */
.icon-3d          /* 3D perspective container */
```

## Do's and Don'ts

### Do
- Use consistent container widths
- Maintain generous whitespace (py-24 minimum for sections)
- Use brand colors consistently
- Apply subtle hover effects
- Keep text readable (gray-600 for body, gray-900 for headings)
- Use scroll animations sparingly for key content
- Add 3D icons to draw attention to important sections
- Include multiple photos per page to show real impact

### Don't
- Don't use too many animations at once (max 2-3 per viewport)
- Don't make images too large (keep aspect ratios consistent)
- Don't use colors outside the brand palette
- Don't break the max-width container except for intentional full-bleed sections
- Don't use more than 2-3 font weights on a page
- Don't animate every element - be selective
- Don't use fast animations (keep durations 3s+ for loops)
