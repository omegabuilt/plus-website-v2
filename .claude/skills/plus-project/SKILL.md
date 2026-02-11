---
name: plus-project
description: |
  **Plus Investment App — Project Coworker**: Complete context for the Plus Investment App website built by 10th Capital Investments Limited (Accra, Ghana). ALWAYS use this skill when working on the Plus website, modifying any Plus-related files, discussing Plus branding/deployment/marketing, or any task involving the Plus investment platform. Triggers on: Plus, plusapp, the investment app, the website, plus-website, omegabuilt, 10th Capital, mutual funds Ghana, hero page, download CTA, SEC logo, store badges, or any reference to the Plus codebase. This skill contains full project knowledge: tech stack, brand guidelines, file structure, deployment, SEO/UTM, security, and product details.
---

# Plus Investment App — Project Context

You are a coworker on the **Plus Investment App** website project. Plus is a mobile investment app built by **10th Capital Investments Limited**, an SEC-regulated company based in Accra, Ghana. The website is a marketing site that drives app downloads.

For detailed technical documentation, read `references/technical.md` in this skill directory.

## Key Contact

- **Albert Asiamah** — Marketing/Product Lead (albertasiamah@gmail.com)
- Support: support@plusapp.online | Phone: 020 167 3720

## Project Location

Codebase: `Plus/Plus Website/plus-website/` (in user's workspace folder)
GitHub: `omegabuilt/plus-website-v2`

## Tech Stack

- **Next.js 14** (App Router) + TypeScript + React 18
- **Tailwind CSS 3.4** with custom burgundy palette + Montserrat font
- **CSS-only animations** with Intersection Observer (zero external deps)
- **Deployment**: AWS Amplify (production, `main`) + Vercel (staging, `develop`)
- **Build**: `npm install` (not `npm ci` — no package-lock.json in repo)

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Burgundy | `#961414` | Primary CTA, accents |
| Dark Burgundy | `#52080D` | Headings, footer bg |
| Light BG | `#FFF9F9` | Page backgrounds |
| Peach | `#FDDCCC` / tint `#FEF0E8` | Hero pastel |
| Lavender | `#E8DAFB` / tint `#F5F0FD` | Hero pastel |
| Mint | `#C9F0DC` / tint `#EDFAF3` | Hero pastel |
| Sky | `#CCE5F6` / tint `#EBF4FB` | Hero pastel |

## Products

1. **Mutual Funds** — Stanbic Cash Trust, IC Liquidity Fund, Databank MFund II (min GHS 10)
2. **Treasury Bills** — Government of Ghana backed, 91/182/364-day terms
3. **US Stocks** — 4,000+ (min $10)

## Funding Methods

- Mobile Money (Momo), bank card, bank transfer

## App Store Links

- **Google Play**: `https://play.google.com/store/apps/details?id=online.plusapp.android&pcampaignid=web_share`
- **App Store**: `https://apps.apple.com/us/app/plus-invest/id6444616895`

## Social Media

All handles: `@investwithplus` — YouTube, Instagram, TikTok

## Site Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage: hero, products, video, stats, testimonials, SEC badge, CTA
│   ├── layout.tsx        # Root layout: metadata, GTM, security headers
│   ├── globals.css       # Brand colors, pastel vars, animation keyframes
│   ├── products/page.tsx # Mutual funds, T-Bills, US stocks details
│   ├── about/
│   │   ├── page.tsx      # Company story, trust pillars, animated stats, contact (client component)
│   │   └── layout.tsx    # About page metadata (separated for "use client" compat)
│   ├── faq/
│   │   ├── page.tsx      # Accordion Q&A (client component)
│   │   └── layout.tsx    # FAQ page metadata (separated for "use client" compat)
│   └── learn/page.tsx    # HIDDEN — removed from nav, footer, sitemap (see LEARN-SECTION-README.md)
├── components/
│   ├── Navbar.tsx        # Sticky nav, Plus logo (plus-logo-header.png), UTM tracking, Learn hidden
│   ├── HeroSection.tsx   # Pastel gradient, phone carousel (3 app screenshots), trust bar, floating cards
│   ├── Footer.tsx        # Dark burgundy, Plus logo (plus-logo-white.png), outline social SVGs
│   ├── DownloadCTA.tsx   # Burgundy banner with tracked store badges
│   ├── AnimateOnScroll.tsx # Intersection Observer scroll animations (supports className prop)
│   ├── AnimatedCounter.tsx # Count-up animation on scroll
│   └── VideoEmbed.tsx    # YouTube lazy-load (thumbnail → iframe)
├── lib/
│   ├── utm.ts            # UTM capture, storage, passthrough to store URLs
│   └── useUTM.ts         # React hook: tracked URLs + download click events
public/
├── images/
│   ├── plus-logo-header.png  # Burgundy logo, transparent bg (~31KB) — used in Navbar
│   ├── plus-logo-white.png   # White logo, transparent bg (~18KB) — used in Footer
│   ├── sec-ghana-logo.png    # Real SEC Ghana logo (~26KB) — used below testimonials
│   ├── og-image.jpg          # Open Graph social sharing image (1200x630)
│   ├── app-screen-1.jpg      # App screenshot for phone carousel (~57KB)
│   ├── app-screen-2.jpg      # App screenshot for phone carousel (~41KB)
│   ├── app-screen-3.jpg      # App screenshot for phone carousel (~49KB)
│   ├── person-1.jpg           # Testimonial photo — man on phone (~31KB)
│   ├── person-2.jpg           # Testimonial photo — woman on phone (~51KB)
│   ├── person-3.jpg           # Testimonial photo — man in blazer (~28KB)
│   ├── app-store-badge.svg
│   ├── google-play-badge.svg
│   ├── logo-light.jpg         # Old logo (kept for fallback)
│   └── logo-dark.jpg          # Old logo (kept for fallback)
├── robots.txt            # Crawl rules + sitemap reference
└── sitemap.xml           # 4 pages: /, /products, /about, /faq (Learn removed)
```

## Logos

- **Navbar**: `plus-logo-header.png` — burgundy text, transparent bg, plain `<img>` tag (NOT Next.js Image — causes flickering)
- **Footer**: `plus-logo-white.png` — white text, transparent bg, plain `<img>` tag
- Both logos include the "Plus" wordmark — no separate text span needed
- Source files in `Brand items/` folder: `plus-logo- header- small.jpg` and `plus-logo - white - small.jp2`

## Tracking & Analytics

- **GTM** in layout.tsx — needs `NEXT_PUBLIC_GTM_ID` env var to activate
- **UTM capture** — `utm.ts` grabs UTM params from landing URL → sessionStorage
- **UTM passthrough** — `useUTM.ts` appends UTMs to all download links
- **Download events** — `download_click` fired to GTM dataLayer on every store button click
- **Campaign guide** — `Plus_UTM_Campaign_Guide.xlsx` has naming rules + tracker template

## Security Headers (next.config.mjs)

CSP, HSTS (1 year), X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. CSP allows YouTube, Google Fonts, GTM, Google Analytics.

## Compliance Rules

- **SEC Ghana regulated** — NEVER promise specific returns or guarantees
- No "guaranteed returns" language anywhere on the site
- Always note investments carry risk
- SEC Ghana logo (real PNG) displayed on homepage below testimonials
- Security section says "Built with your security and privacy in mind" — no specific feature promises
- FAQ safety answer: "Plus has biometric and encryption features to help keep your account secure"

## Important Tailwind Notes

- Use standard opacity modifiers: `/10`, `/20`, `/30` (NOT `/8`, `/12`)
- Custom animations in `tailwind.config.ts`: fade-in-up, fade-in-left, fade-in-right, scale-in, float, pulse-glow, gradient-shift
- Pastel CSS variables in `:root` in `globals.css`
- Social icons use outline stroke style (strokeWidth="1.8", rounded caps/joins)

## Hero Section Design

The hero uses a multi-tone pastel gradient background with:
- Title: "Invest Smarter from Your Phone" — second part gets gradient text
- Four blurred floating pastel blobs
- Left: text content + store badges + trust bar
- Right: **phone carousel** — 3 real app screenshots (app-screen-1/2/3.jpg) auto-rotate every 3.5s inside black phone frame with indicator dots
- Three floating notification cards: Investment Made (mint), Portfolio Up (peach), Deposit Received (green checkmark)
- Trust bar: 12K+ Transactions/Week (peach bg), 100K+ Users (mint bg), 24/7 Access (sky blue bg)
- Product boxes: Mutual Funds (₵ icon), Treasury Bills (shield icon), US Stocks ($ icon) — equal height cards

## About Page

- Heading: "Building Wealth, One Investment at a Time"
- Our Story section
- Why Trust Plus: SEC Regulated, Good Partners, Security First (concise descriptions)
- By The Numbers: 3 animated counters — 100K+ Users, 150K+ Downloads, 4,000+ US Stocks (no Mutual Fund count)
- Contact: centered layout — Email, Address, Follow Us only (no "About Plus" card)
- Client component with metadata in separate layout.tsx

## Products Page

- Mutual Funds: "from our partners" — IC Liquidity Fund, Databank MFund II, Stanbic Cash Trust
- Treasury Bills: 3-column grid — Government-Backed, Flexible Terms, Predetermined Returns
- US Stocks: Real Ownership, Low Minimum ($10), 4,000+ Stocks, Fractional Shares (no Bamboo references)
- Transparent Fees banner: REMOVED

## FAQ Page

- Categories: Getting Started, Investing, Transactions, Support
- Support contact: email + phone (no social media handles)
- Fund names: IC Liquidity Fund, Databank MFund II
- Funding: "Momo, bank transfer, or bank card"
- Client component with metadata in separate layout.tsx

## Learn Section

- **HIDDEN** — removed from Navbar, Footer, and sitemap.xml
- Page still exists at `/learn` for future development
- Restoration instructions in `LEARN-SECTION-README.md`

## Hidden/Removed Items

- Learn section (nav, footer, sitemap)
- Bamboo references (all pages)
- "Powered by Bamboo" badge on US Stocks
- Transparent Fees section on products page
- 48-hour deposit processing banner on mutual funds
- "One App, Many Products" card from Why Plus section
- App rating from trust bar
- "SEC Regulated" tagline badge from hero

## Pending Work

- **GTM activation**: User needs GTM container ID → `NEXT_PUBLIC_GTM_ID`
- **Google Search Console**: Verification code placeholder in layout.tsx
- **AWS Amplify**: User completing production console setup
- **Testimonial photos**: 3 person images (person-1/2/3.jpg) ready for testimonials section — draft at `testimonials-draft.html`

## Video Section

- Heading: "Investing Made Easy"
- Subtitle: "A quick look at what Plus can do for you."
- Video ID: `VnrjSaJ0Mvs` (no title overlay on the video player)
- YouTube channel: `@investwithplus`

## SEO Keywords

invest Ghana, mutual funds Ghana, treasury bills Ghana, US stocks Ghana, SEC regulated investment, 10th Capital Investments, Stanbic Cash Trust, IC Liquidity Fund, Databank MFund II, fractional shares Ghana, mobile investing Ghana
