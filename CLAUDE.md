# Project Context: High-Authority Editorial Bridge Site (Pinterest US 2025)

## 1. Project Overview
* **Goal:** Build a high-converting, ultra-fast "Advertorial" Bridge Page for the US market.
* **Traffic Source:** Pinterest US (High-intent planners, mobile-first).
* **Monetization:** Affiliate marketing via systeme.io links.
* **Strategy:** Bridge the gap between a Pinterest Pin and an affiliate offer using the E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework.
* **Core Philosophy:** Avoid the "spammy" look. The site must look like a premium digital magazine or a professional blog.

## 2. Tech Stack & Performance
* **Architecture:** Static Site Generation (SSG) for maximum speed.
* **Framework:** Astro (preferred) or HTML5/Tailwind CSS.
* **Deployment:** Vercel or Netlify (connected to OVH domain).
* **KPIs:** * LCP (Largest Contentful Paint) < 1.2s.
    * 100/100 Mobile PageSpeed Insights.
    * Zero CLS (Cumulative Layout Shift).

## 3. Design System (Brand Colors)
Apply the following palette for UI/UX components:
* **Primary Brand:** `#16B4F2` (Main accents, links)
* **Secondary:** `#2ECEF2` (Gradients, secondary elements)
* **Background / Deep Text:** `#092326` (Use for dark backgrounds or primary headings for high contrast)
* **Call to Action (CTA):** `#F2913D` (Buttons and high-conversion elements - High contrast against dark teal)
* **Alert / Critical:** `#F25757` (Disclaimers or urgent notifications)

## 4. UI/UX Requirements (Pinterest-Specific)
* **Mobile-First Design:** 80%+ of traffic is mobile. 
* **Sticky Footer CTA:** A persistent button at the bottom of the screen on mobile devices.
* **Editorial Layout:** * Clean typography (Sans-serif for readability, 18px+ body text).
    * "Fake" navigation bar (Home, About, Reviews, Contact) using anchor links to simulate a full site.
    * High-quality image placement (WebP format).
* **Thumb Zone Optimization:** All buttons must be easily reachable by a user's thumb.

## 5. Content Structure (PAS Framework)
1.  **Header:** Explicit FTC Affiliate Disclosure (Mandatory).
2.  **H1 Headline:** Must match the Pinterest Pin's hook (Scent Match).
3.  **Author Byline:** Photo + Name + "Last updated: [Current Month] 2025".
4.  **Problem (P):** Relatable story in the 1st person.
5.  **Agitation (A):** Highlighting the pain points of not having the solution.
6.  **Solution (S):** Presenting the affiliate product as the "secret find" or "tested solution".
7.  **Social Proof:** Comparison tables and testimonial blocks.

## 6. Security & Compliance
* **SSL:** Mandatory HTTPS (via OVH/Vercel).
* **Privacy & Legals:** Mandatory links in footer (Privacy Policy, Terms of Service, FTC Disclosure).
* **Affiliate Safety:** * Use `rel="sponsored nofollow"` for all outbound affiliate links.
    * Avoid link cloaking that violates Pinterest's TOS; ensure transparency.
    * Sanitize any dynamic URL parameters (for Scent Match scripts).

## 7. Domain & Integration
* **Domain:** Managed via OVH (Custom domain connected via CNAME/A Records).
* **Systeme.io:** The Bridge Page will host the content, and buttons will redirect to the systeme.io funnel or direct affiliate link.
* **Tracking:** Minimalist tracking (Plausible or custom JS events) to monitor Outbound Click Rate (OCR).