# FNE International Website - Development Instructions

## Critical Rules

### Never Commit or Push Without Confirmation
- **NEVER run `git commit` or `git push` without explicit user confirmation**
- Always ask "Ready to commit?" or "Ready to push?" before executing
- Wait for user approval before any git operations that modify history or remote

---

## Core Principles

### 1. Everything Must Be Componentized
- **Never write inline HTML patterns** that could be reusable
- If a UI element appears more than once, create a component
- If a UI element has complex styling or logic, create a component
- Components go in `/src/components/`

### 2. Dynamic Height Equalization
When creating card grids or layouts where items should have equal heights:
- Add a client-side script to measure and equalize heights
- Find the tallest element and apply that height to all siblings
- Re-run on window resize with debouncing
- Example pattern:
```javascript
function equalizeCards(selector) {
  const cards = document.querySelectorAll(selector);
  if (cards.length === 0) return;

  cards.forEach(card => card.style.minHeight = 'auto');

  let maxHeight = 0;
  cards.forEach(card => {
    if (card.offsetHeight > maxHeight) maxHeight = card.offsetHeight;
  });

  cards.forEach(card => card.style.minHeight = `${maxHeight}px`);
}
```

### 3. Section Headers
- Always use the `SectionHeader` component
- Always include `titleAccent` for gradient text styling
- Split titles so the last word(s) use the accent

### 4. Section Backgrounds
- Alternate between `background="white"` and `background="gray"`
- Use the `Section` component for consistent spacing

### 5. Image Replacement Workflow
When replacing an image:
1. Move the old image to `/public/unused/` first (preserve originals)
2. Then move the new image from Landing Zone to replace it
3. This allows reverting if needed

### 6. Hover Effects
- Hover effects should only trigger on the element itself (`:hover`), not parent containers
- Keep hover effects readable - if changing background color, also change text colors for contrast

## Existing Components

| Component | Purpose |
|-----------|---------|
| `Section` | Page sections with consistent padding and backgrounds |
| `SectionHeader` | Section titles with label, title, titleAccent, subtitle |
| `Container` | Content width constraints |
| `HeroSection` | Page hero banners |
| `PhotoCard` | Image cards with hover effects |
| `Timeline` | Horizontal alternating timeline with dynamic card heights |
| `CTASection` | Call-to-action sections |
| `ContentBlock` | Text + image content layouts |
| `StatCard` | Statistics display cards |
| `PartnerBadge` | Partner organization badges |
| `CountryCard` | Country info cards with flag, stats, and auto-equalizing heights |
| `FeatureCTA` | Feature call-to-action card with icon, title, description, and button |
| `PartnerMarquee` | Infinite scrolling partner logos (right to left) with pause on hover |

## Brand Colors

```css
--green: #2D8B4E
--teal: #3D9A8B
--lime: #8DC63F
--orange: #F7931E
```

## CSS Classes

- `.neon-text` - Gradient text with shimmer animation
- `.animate-on-scroll` - Scroll-triggered animations
- `.photo-grid` - Photo grid layouts
