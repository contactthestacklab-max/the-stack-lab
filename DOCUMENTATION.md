# The Stack Lab - Technical Documentation

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Design System](#4-design-system)
5. [Components Reference](#5-components-reference)
6. [Layouts](#6-layouts)
7. [Pages](#7-pages)
8. [Configuration Files](#8-configuration-files)
9. [Deployment](#9-deployment)
10. [Content Management](#10-content-management)
11. [Performance Optimization](#11-performance-optimization)
12. [SEO & Compliance](#12-seo--compliance)
13. [Development Workflow](#13-development-workflow)

---

## 1. Project Overview

### Purpose
**The Stack Lab** is a high-converting editorial bridge site designed for US Pinterest traffic. It serves as an affiliate marketing platform that bridges the gap between Pinterest pins and affiliate offers (primarily Systeme.io).

### Business Model
- **Traffic Source:** Pinterest US (mobile-first, high-intent planners)
- **Monetization:** Affiliate commissions via Systeme.io
- **Strategy:** E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness)

### Key URLs
- **Production:** https://the-stack-lab.com
- **GitHub:** https://github.com/contactthestacklab-max/the-stack-lab
- **Hosting:** Vercel
- **Domain Registrar:** OVH

---

## 2. Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 5.16.6 | Static Site Generator (SSG) |
| Tailwind CSS | 4.1.18 | Utility-first CSS framework |
| @tailwindcss/typography | 0.5.19 | Prose styling for content |
| @tailwindcss/vite | 4.1.18 | Tailwind v4 Vite integration |

### Build Tools
- **Vite** - Build tool & dev server (via Astro)
- **Node.js** - Runtime environment

### Deployment
- **Vercel** - Hosting & CI/CD
- **GitHub** - Version control

---

## 3. Project Structure

```
the-stack-lab/
├── public/                      # Static assets (served at root)
│   ├── favicon.svg             # Site favicon
│   ├── robots.txt              # Search engine instructions
│   └── images/
│       ├── author-photo.svg    # Author avatar
│       ├── funnel.svg          # Systeme.io hero image
│       ├── product-hero.svg    # Generic product hero
│       └── systeme-io-hero.svg # Alternative hero
│
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── AuthorByline.astro
│   │   ├── ComparisonTable.astro
│   │   ├── CTAButton.astro
│   │   ├── DisclosureBanner.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── StickyFooterCTA.astro
│   │   └── TestimonialCard.astro
│   │
│   ├── layouts/               # Page templates
│   │   ├── BaseLayout.astro   # HTML wrapper (all pages)
│   │   └── ProductLayout.astro # PAS framework template
│   │
│   ├── pages/                 # Route pages (file-based routing)
│   │   ├── index.astro        # Homepage
│   │   ├── systeme-io-review.astro # Main product page
│   │   ├── disclosure.astro   # FTC disclosure
│   │   ├── privacy.astro      # Privacy policy
│   │   ├── terms.astro        # Terms of service
│   │   └── exemple-produit.astro # Template example
│   │
│   ├── styles/
│   │   └── global.css         # Tailwind imports & custom tokens
│   │
│   └── utils/
│       └── constants.ts       # Site config & affiliate links
│
├── astro.config.mjs           # Astro configuration
├── vercel.json                # Vercel deployment config
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript config
└── CLAUDE.md                  # Project requirements spec
```

---

## 4. Design System

### Brand Colors
Defined in `src/styles/global.css`:

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-brand-primary` | `#16B4F2` | Links, accents, interactive elements |
| `--color-brand-secondary` | `#2ECEF2` | Gradients, secondary highlights |
| `--color-brand-dark` | `#092326` | Text, dark backgrounds, headings |
| `--color-brand-cta` | `#F2913D` | CTA buttons, high-conversion elements |
| `--color-brand-alert` | `#F25757` | Disclaimers, alerts, warnings |

### Tailwind Usage
```css
/* Example usage in components */
bg-brand-primary      /* Primary background */
text-brand-dark       /* Dark text */
bg-brand-cta          /* CTA button */
border-brand-alert    /* Alert border */
```

### Typography
- **Font Family:** System fonts (fast load), Inter (async load)
- **Base Size:** 18px (1.125rem)
- **Line Height:** 1.75

```css
--font-family-sans: system-ui, -apple-system, BlinkMacSystemFont,
                    'Segoe UI', Roboto, 'Inter', sans-serif;
```

### Logo
SVG-based logo with stacked bars representing "The Stack":
- Top bar: Orange (`#F2913D`)
- Middle bar: Primary blue (`#16B4F2`)
- Bottom bar: Dark (`#092326`)

---

## 5. Components Reference

### AuthorByline.astro
Displays author info with photo and last updated date.

**Props:**
```typescript
interface Props {
  name?: string;      // Default: SITE_CONFIG.author.name
  photo?: string;     // Default: SITE_CONFIG.author.photo
  lastUpdated?: string; // Default: SITE_CONFIG.lastUpdated
}
```

**Usage:**
```astro
<AuthorByline />
<!-- Or with custom values -->
<AuthorByline name="Jane Doe" lastUpdated="January 2025" />
```

---

### CTAButton.astro
FTC-compliant affiliate call-to-action button.

**Props:**
```typescript
interface Props {
  text?: string;        // Default: "Get Started Now"
  href?: string;        // Default: AFFILIATE_LINKS.mainProduct
  size?: 'default' | 'large';  // Default: "default"
  fullWidth?: boolean;  // Default: false
  trackingId?: string;  // Default: "main-cta"
}
```

**Features:**
- Automatic `rel="sponsored nofollow"` for compliance
- `target="_blank"` for new tab
- `data-tracking` attribute for analytics
- 48px minimum height (thumb zone)
- Arrow icon included

**Usage:**
```astro
<CTAButton />
<CTAButton text="Try Free" size="large" trackingId="hero-cta" />
```

---

### ComparisonTable.astro
Product vs competitors comparison table.

**Props:**
```typescript
interface ComparisonItem {
  feature: string;
  product: boolean | string;
  competitors: boolean | string;
}

interface Props {
  productName: string;
  items: ComparisonItem[];
}
```

**Usage:**
```astro
<ComparisonTable
  productName="Systeme.io"
  items={[
    { feature: "Free Plan", product: true, competitors: false },
    { feature: "Support", product: "24/7", competitors: "Email only" },
  ]}
/>
```

---

### DisclosureBanner.astro
FTC-compliant affiliate disclosure banner (appears at page top).

**Features:**
- Appears above header on all pages
- Links to /disclosure page
- Light alert background color

---

### Footer.astro
Site footer with legal links.

**Contains:**
- About section
- Legal links (Privacy, Terms, FTC Disclosure)
- Copyright with dynamic year

---

### Header.astro
Sticky navigation header.

**Features:**
- Includes DisclosureBanner
- SVG logo
- Fake navigation (anchor links: Home, About, Reviews, Contact)
- Mobile menu button (visual only)
- Sticky positioning with blur backdrop

---

### StickyFooterCTA.astro
Mobile-only persistent CTA at bottom of screen.

**Features:**
- Only visible on mobile (`md:hidden`)
- Fixed positioning
- Safe area inset padding (iPhone notch)
- Includes spacer div to prevent content overlap

---

### TestimonialCard.astro
Customer testimonial display card.

**Props:**
```typescript
interface Props {
  name: string;
  photo?: string;
  rating?: number;     // Default: 5
  text: string;
  verified?: boolean;  // Default: true
}
```

**Features:**
- Star rating (1-5)
- Verified purchase badge
- Optional photo

---

## 6. Layouts

### BaseLayout.astro
Main HTML wrapper for all pages.

**Props:**
```typescript
interface Props {
  title?: string;          // Default: SITE_CONFIG.title
  description?: string;    // Default: SITE_CONFIG.description
  showStickyCTA?: boolean; // Default: true
}
```

**Includes:**
- Meta tags (charset, viewport, description)
- Favicon
- Google Fonts (Inter) - non-blocking load
- Open Graph tags (Pinterest optimization)
- Header component
- Footer component
- Conditional StickyFooterCTA

---

### ProductLayout.astro
Template for product review pages using PAS framework.

**Props:**
```typescript
interface Props {
  // SEO
  title: string;
  description: string;

  // Hero
  headline: string;
  heroImage?: string;    // Default: '/images/product-hero.svg'

  // Product Info
  productName: string;
  affiliateLink: string;

  // PAS Content
  problemTitle: string;
  problemText: string;   // HTML allowed
  agitationTitle: string;
  painPoints: string[];
  solutionTitle: string;
  solutionText: string;
  benefits: { title: string; description: string }[];

  // Social Proof
  testimonials: Testimonial[];
  comparisonItems: ComparisonItem[];

  // CTA
  ctaText?: string;      // Default: "Get Started Now"
  finalCtaTitle: string;
  finalCtaText: string;
}
```

**Section IDs for Navigation:**
- `#home` - Hero section
- `#about` - Problem section
- `#reviews` - Social proof section
- `#contact` - Footer (via BaseLayout)

---

## 7. Pages

### index.astro (Homepage)
Landing page with featured reviews overview.

**Sections:**
1. Hero with large logo and tagline
2. Trust pillars (30-Day Deep Dives, ROI Focused, No Bias)
3. Featured Reviews grid
4. Coming Soon list
5. Final CTA

**URL:** `/`

---

### systeme-io-review.astro (Main Product Page)
Full PAS-framework product review for Systeme.io.

**Uses:** ProductLayout.astro

**Content:**
- Problem: Technical debt in marketing stacks
- Agitation: 5 pain points
- Solution: Systeme.io benefits (4 key points)
- Testimonials: 4 customer reviews
- Comparison table: 5 feature comparisons

**Affiliate Link:** `https://systeme.io/?sa=sa02578596435c11239325f4ed38fa01ed82d1c870`

**URL:** `/systeme-io-review`

---

### Legal Pages

| Page | URL | Purpose |
|------|-----|---------|
| disclosure.astro | `/disclosure` | FTC affiliate disclosure |
| privacy.astro | `/privacy` | Privacy policy |
| terms.astro | `/terms` | Terms of service |

---

## 8. Configuration Files

### astro.config.mjs
```javascript
export default defineConfig({
  site: 'https://the-stack-lab.com',  // Production URL
  output: 'static',                    // SSG mode
  compressHTML: true,                  // Minify HTML
  build: {
    inlineStylesheets: 'auto',         // Optimize CSS delivery
  },
  vite: {
    plugins: [tailwindcss()],          // Tailwind v4
    build: {
      cssMinify: true,                 // Minify CSS
    },
  },
});
```

---

### vercel.json
Security headers and caching configuration:

**Security Headers (all routes):**
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

**Cache Control:**
- `/images/*` - 1 year, immutable
- `/_astro/*` - 1 year, immutable

---

### src/utils/constants.ts
Centralized configuration:

```typescript
export const SITE_CONFIG = {
  title: 'The Stack Lab',
  description: 'Independent Tech & Marketing Editorial Team...',
  author: {
    name: 'Matt, Editorial Lead',
    photo: '/images/author-photo.svg',
  },
  lastUpdated: 'December 2025',
};

export const AFFILIATE_LINKS = {
  mainProduct: 'https://systeme.io/?sa=sa02578596435c11239325f4ed38fa01ed82d1c870',
};

export const TRACKING = {
  plausibleDomain: 'the-stack-lab.com',
};
```

---

## 9. Deployment

### Vercel Setup
1. Connect GitHub repository to Vercel
2. Framework preset: Astro (auto-detected)
3. Build command: `npm run build`
4. Output directory: `dist`

### Domain Configuration (OVH)
**Option A: CNAME Record**
```
Type: CNAME
Name: @ or www
Target: cname.vercel-dns.com
```

**Option B: A Records**
```
Type: A
Name: @
Value: 76.76.21.21
```

### CI/CD Pipeline
- Push to `main` branch triggers automatic deployment
- Preview deployments for pull requests

---

## 10. Content Management

### Adding a New Product Review

1. **Create new page** in `src/pages/`:
```astro
---
import ProductLayout from '../layouts/ProductLayout.astro';

const productConfig = {
  title: "Product Name Review",
  description: "SEO description...",
  headline: "Compelling headline...",
  heroImage: "/images/your-hero.svg",
  productName: "Product Name",
  affiliateLink: "https://affiliate-link.com",
  problemTitle: "...",
  problemText: `<p>HTML content...</p>`,
  agitationTitle: "...",
  painPoints: ["Point 1", "Point 2"],
  solutionTitle: "...",
  solutionText: "...",
  benefits: [
    { title: "Benefit 1", description: "..." },
  ],
  testimonials: [
    { name: "John D.", rating: 5, text: "..." },
  ],
  comparisonItems: [
    { feature: "Feature", product: true, competitors: false },
  ],
  ctaText: "Get Started",
  finalCtaTitle: "Ready to Start?",
  finalCtaText: "Join thousands who...",
};
---

<ProductLayout {...productConfig} />
```

2. **Add hero image** to `public/images/`

3. **Update homepage** (`src/pages/index.astro`) to link to new review

4. **Update constants.ts** if different affiliate link

---

### Updating Affiliate Links
Edit `src/utils/constants.ts`:
```typescript
export const AFFILIATE_LINKS = {
  mainProduct: 'https://new-affiliate-link.com',
  // Add more products:
  secondaryProduct: 'https://another-link.com',
};
```

---

### Updating Author Info
Edit `src/utils/constants.ts`:
```typescript
export const SITE_CONFIG = {
  author: {
    name: 'New Name, New Title',
    photo: '/images/new-photo.svg',
  },
  lastUpdated: 'Month 2025',
};
```

---

## 11. Performance Optimization

### Current Optimizations

| Optimization | Implementation |
|--------------|----------------|
| Static Site Generation | Astro SSG mode |
| HTML Compression | `compressHTML: true` |
| CSS Minification | Tailwind v4 purging + Vite |
| Font Loading | System fonts first, Inter async |
| Image Optimization | SVG format, explicit dimensions |
| Caching | 1-year immutable for static assets |

### Font Loading Strategy
```html
<!-- System fonts render immediately -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Inter loads without blocking render -->
<link rel="preload" as="style" href="...Inter..." />
<link href="...Inter..." rel="stylesheet" media="print" onload="this.media='all'" />
```

### Target KPIs
- LCP (Largest Contentful Paint): < 1.2s
- PageSpeed Mobile Score: 100/100
- CLS (Cumulative Layout Shift): 0

---

## 12. SEO & Compliance

### Meta Tags (per page)
```html
<meta name="description" content="..." />
<title>Page Title | The Stack Lab</title>
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="article" />
<meta name="pinterest-rich-pin" content="true" />
```

### FTC Compliance
1. **Disclosure Banner** - Appears on every page above header
2. **Dedicated Disclosure Page** - Full FTC disclosure at `/disclosure`
3. **Affiliate Link Attributes** - All affiliate links include:
   - `rel="sponsored nofollow"`
   - `target="_blank"`

### Footer Legal Links
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)
- FTC Disclosure (`/disclosure`)

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://the-stack-lab.com/sitemap.xml
```

---

## 13. Development Workflow

### NPM Scripts
```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

### Local Development
```bash
cd /path/to/the-stack-lab
npm install
npm run dev
```

### Making Changes
1. Edit files in `src/`
2. Preview at `http://localhost:4321`
3. Commit changes: `git add . && git commit -m "message"`
4. Push to deploy: `git push`
5. Vercel auto-deploys within ~60 seconds

### File Naming Conventions
- Components: `PascalCase.astro`
- Pages: `kebab-case.astro`
- Utilities: `camelCase.ts`
- Images: `kebab-case.svg`

---

## Quick Reference

### Important URLs
| Resource | URL |
|----------|-----|
| Production Site | https://the-stack-lab.com |
| GitHub Repo | https://github.com/contactthestacklab-max/the-stack-lab |
| Vercel Dashboard | https://vercel.com/dashboard |
| PageSpeed Test | https://pagespeed.web.dev |

### Contact
- **Email:** contact.thestacklab@gmail.com
- **Author:** Matt, Editorial Lead

---

*Documentation last updated: December 2025*
