# GreenTech Solutions — ICT 280 Module 15 Final Project

## Project Description

**GreenTech Solutions** is a static multi-page website built for a fictional environmental sustainability and technology startup. The site educates and engages small to medium-sized businesses (SMBs) and eco-conscious individuals, showcases the company's eco-friendly product catalog, and drives conversions via contact forms and a newsletter.

### Pages

| Page | File | Description |
|------|------|-------------|
| Homepage | `index.html` | Hero, feature cards, product previews, newsletter |
| About Us | `pages/about.html` | Mission, values, milestone timeline, team grid |
| Products & Services | `pages/products.html` | Searchable, filterable 9-product catalog |
| Blog & Resources | `pages/blog.html` | Article cards, resource downloads, newsletter |
| Contact | `pages/contact.html` | Validated contact form, company info, FAQ accordion |
| The Final | `pages/final.html` | Project documentation & rubric checklist |

---

## Setup & Running the Project

### Upload to NMSU Web Server

1. Upload the entire `greentech/` folder to `~/public_html/` on `web.nmsu.edu`
2. Preserve the directory structure exactly as delivered
3. Access at: `https://web.nmsu.edu/~YOURUSERNAME/greentech/`

### Local Testing

- Open `index.html` directly in any modern browser, **or**
- Use **VS Code Live Server** extension for accurate relative-path resolution
- No build tools, npm, or back-end required — 100% static HTML/CSS/JS

---

## Technologies Used

| Technology | Version / Notes |
|-----------|----------------|
| HTML5 | Semantic elements throughout |
| CSS3 | External stylesheet, custom properties, Grid, Flexbox, animations |
| JavaScript (ES6+) | Vanilla JS — no frameworks or libraries |
| Google Fonts | Playfair Display + DM Sans (loaded via CDN) |
| WCAG 2.1 | AA compliance target for accessibility |

---

## Key Features

### Front-End Development
- **Semantic HTML5**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`, `<time>`, `<details>`, `<summary>`, `<figure>`, tables, forms
- **External CSS**: Single stylesheet (`css/styles.css`) with CSS custom properties for consistent theming
- **JavaScript Interactivity**:
  - ✅ Contact form validation with inline error messages and success feedback
  - ✅ Product search + category filter (dynamic content updates)
  - ✅ Scroll-reveal animations via IntersectionObserver API
  - ✅ Animated number counters (easeOutExpo)
  - ✅ Mobile hamburger navigation toggle
  - ✅ Newsletter subscription feedback
  - ✅ Blog article search/filter

### Mobile Responsiveness
- CSS Grid with `auto-fit / minmax()` for fluid product and feature grids
- Media query breakpoints: **1024px**, **768px**, **480px**
- Mobile-only hamburger navigation replacing desktop link bar
- Fluid typography with `clamp()` for headings
- Flexible form layouts (two-column → single-column on mobile)

### Web Accessibility (WCAG 2.1 AA)
- Skip-to-main-content link on every page
- Full ARIA roles, `aria-label`, `aria-required`, `aria-live`, `aria-expanded`, `aria-controls`, `aria-describedby`
- All decorative icons marked `aria-hidden="true"`
- All interactive `role="img"` elements have descriptive labels
- Keyboard-navigable hamburger menu and FAQ accordion
- **Accessibility toolbar** (top of every page):
  - Font size increase / reset
  - High-contrast mode toggle
- Sufficient color contrast ratios (dark green on ivory, white on dark green)
- `<label>` elements explicitly associated with all form controls

---

## File Structure

```
greentech/
├── index.html              # Homepage
├── css/
│   └── styles.css          # All styles (single external stylesheet)
├── js/
│   ├── main.js             # Interactivity (forms, filters, animations)
│   └── layout.js           # Shared nav + footer component injection
├── pages/
│   ├── about.html          # About Us
│   ├── products.html       # Products & Services
│   ├── blog.html           # Blog & Resources
│   ├── contact.html        # Contact
│   └── final.html          # The Final (this documentation page)
└── README.md               # This file
```

---

## Design Decisions

- **Color scheme**: Deep forest green (`#1a3a2a`), warm ivory (`#faf8f3`), earthy sienna accents — matches the eco-friendly brand identity
- **Typography**: Playfair Display (elegant, editorial headings) paired with DM Sans (clean, readable body text)
- **Layout**: CSS Grid for multi-column sections, Flexbox for component-level alignment
- **Shared components**: Navigation and footer are injected via `layout.js` to avoid repeating code across all 6 pages
- **No external JS frameworks**: Pure vanilla JavaScript for maximum compatibility and minimal page weight

---

## Browser Compatibility

Tested and functional in:
- Chrome 120+
- Firefox 121+
- Safari 17+
- Edge 120+
- Mobile Chrome (Android)
- Mobile Safari (iOS)

---

*ICT 280 — Module 15 Final Project | GreenTech Solutions*
