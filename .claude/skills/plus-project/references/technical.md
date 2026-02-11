# Plus Website — Technical Reference

## Deployment Configuration

### Branch Strategy
- `main` → AWS Amplify (production) at plusapp.online
- `develop` → Vercel (staging)
- User commits via GitHub Desktop → auto-deploys

### amplify.yml
Uses `npm install` (NOT `npm ci` — no package-lock.json). Includes `npm audit --audit-level=high` in preBuild.

### Environment Variables
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container ID (not yet set)
- `NEXT_PUBLIC_ENV` — "production" or "staging"
- `NEXT_PUBLIC_SITE_URL` — Site URL for environment

## Component Details

### Navbar.tsx
- Sticky top nav, white bg with shadow
- Logo: `plus-logo-header.png` via plain `<img>` tag (NOT Next.js Image — causes flickering with transparent PNGs)
- Uses `useUTM()` hook for smart download links
- iOS devices → App Store, everyone else → Google Play
- Download click fires `onDownloadClick()` GTM event
- Mobile: hamburger menu with condensed nav + download button
- Nav links: Home, Products, About, FAQ (Learn hidden with comment)

### HeroSection.tsx
- `"use client"` component with mount animation state + carousel state
- Props: `title`, `subtitle`, `showAppButtons`
- Title split logic: `title.split(" from ")` — second part gets gradient text
- Current title: "Invest Smarter from Your Phone"
- Gradient text: `bg-clip-text text-transparent` with burgundy→rose gradient
- Background: `linear-gradient(145deg, ...)` through all pastel tints
- 4 floating blobs with `radial-gradient` + `blur(90px)` + `float` animation
- 3 pulsing ring accents with `animate-ring-pulse`
- Phone mockup: black frame with **image carousel** — 3 real app screenshots (app-screen-1/2/3.jpg) auto-rotate every 3.5s with smooth slide transition and indicator dots
- 3 floating cards: Investment Made (mint, checkmark), Portfolio Up (peach, trending), Deposit Received (green, checkmark)
- Trust bar: 12K+ Transactions/Week (peach bg), 100K+ Users (mint bg), 24/7 Access (sky blue bg)
- Store badges use `next/image` with official SVGs + UTM tracking

### Footer.tsx
- Dark burgundy (`bg-dark-burgundy`) background
- Logo: `plus-logo-white.png` via plain `<img>` tag
- 4 columns: Brand+Social, Products, Company, Legal
- Social icons: outline stroke style SVGs (Instagram, YouTube, TikTok)
- Social links go to actual URLs (instagram.com/investwithplus, etc.)
- Contact: support@plusapp.online, 020 167 3720 (tel: link)
- Learn link removed with comment for future restoration
- Bottom bar: copyright + address (Y21B Agostinho Neto Road, Airport Residential, Accra)

### VideoEmbed.tsx
- Lazy-loads YouTube: shows thumbnail + play button, loads iframe on click
- No title overlay (removed)
- Thumbnail URL: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
- Current video ID: `VnrjSaJ0Mvs`

### AnimateOnScroll.tsx
- Intersection Observer wrapper
- Props: `animation` (fade-in-up/left/right/scale-in), `delay`, `threshold`, `className`
- Adds opacity-0 initially, reveals with animation class on intersect
- Supports `className="h-full"` for equal-height card layouts

### AnimatedCounter.tsx
- Counts from 0 to target with ease-out cubic
- Triggered by Intersection Observer
- Props: `target`, `suffix`, `prefix`, `duration`, `className`

### DownloadCTA.tsx
- `"use client"` — uses `useUTM()` hook
- Burgundy background section
- "Start Investing Today" + store badges with UTM tracking

## Page Details

### Homepage (page.tsx)
- Hero section
- Products section: 3 cards — Mutual Funds (₵ icon), Treasury Bills (shield icon), US Stocks ($ icon) — equal height with `h-full` chain + `min-h-[240px]`
- Video section: "Investing Made Easy"
- Trust Stats section: animated counters on dark burgundy bg
- Why Plus section: 3 items — SEC Regulated, Convenient Top Up (₵ icon, Momo/card/transfer), Start Small (GHS 10)
- Testimonials: "What Our Customers Say" — 3 cards with stars + quotes
- SEC badge below testimonials: real PNG logo (`sec-ghana-logo.png`)
- Download CTA

### Products Page (products/page.tsx)
- Mutual Funds: "from our partners", IC Liquidity Fund, Databank MFund II, Stanbic Cash Trust with descriptions
- No 48-hour deposit processing banner
- Treasury Bills: removed "one of the safest", 3-column grid — Government-Backed (shield icon), Flexible Terms (calendar icon), Predetermined Returns (calculator icon)
- US Stocks: removed Bamboo badge/link, simplified descriptions — Real Ownership, Low Minimum ($10), 4,000+ Stocks, Fractional Shares
- No Transparent Fees section

### About Page (about/page.tsx + about/layout.tsx)
- Client component ("use client") — metadata in layout.tsx
- Heading: "Building Wealth, One Investment at a Time"
- Our Story section
- Why Trust Plus: SEC Regulated, Good Partners (Stanbic, IC, Databank), Security First ("Built with your security and privacy in mind")
- By The Numbers: 3 animated counters — 100K+ Users, 150K+ Downloads, 4,000+ US Stocks
- Contact: centered — Email, Address, Follow Us (outline SVGs for IG, YT, TikTok)
- No "About Plus" card next to contact

### FAQ Page (faq/page.tsx + faq/layout.tsx)
- Client component ("use client") — metadata in layout.tsx
- Categories: Getting Started, Investing, Transactions, Support
- Fund names: IC Liquidity Fund, Databank MFund II
- Safety: "Plus has biometric and encryption features to help keep your account secure"
- Funding: "Momo, bank transfer, or bank card"
- Support contact: email + phone 020 167 3720 (no social handles)
- No Bamboo references

## UTM System (src/lib/)

### utm.ts
- `captureUTMParams()` — reads utm_source/medium/campaign/term/content from URL, stores in sessionStorage
- `getStoredUTMParams()` — retrieves from sessionStorage
- `appendUTMToUrl(baseUrl)` — appends stored UTMs to any URL
- `trackDownloadClick(store)` — pushes `download_click` event to GTM dataLayer

### useUTM.ts
- React hook that calls `captureUTMParams()` on mount
- Returns: `playStoreUrl`, `appStoreUrl`, `smartUrl` (device-detected), `onDownloadClick`
- All URLs have UTM params automatically appended

## SEO Configuration (layout.tsx)

- `metadataBase`: https://www.plusapp.online
- Title template: `%s | Plus Investment App`
- Keywords: invest Ghana, mutual funds Ghana, treasury bills Ghana, US stocks Ghana, SEC regulated investment, 10th Capital Investments, Stanbic Cash Trust, IC Liquidity Fund, Databank MFund II, fractional shares Ghana, mobile investing Ghana
- OpenGraph: type website, locale en_GH, 1200x630 image at `/images/og-image.jpg`
- Twitter: summary_large_image card
- Robots: index, follow, googleBot with max previews
- Canonical link in head
- Each page has its own metadata export (in layout.tsx for client components)
- Sitemap: 4 pages (/, /products, /about, /faq) — Learn removed
- robots.txt: allows all, blocks /api/ and /_next/

## Security Headers (next.config.mjs)

Applied to all routes `/(.*)`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
- CSP directives:
  - `default-src 'self'`
  - `script-src 'self' 'unsafe-inline' 'unsafe-eval' youtube.com cdnjs.cloudflare.com googletagmanager.com google-analytics.com`
  - `style-src 'self' 'unsafe-inline' fonts.googleapis.com`
  - `img-src 'self' data: img.youtube.com googletagmanager.com google-analytics.com`
  - `font-src 'self' fonts.gstatic.com`
  - `frame-src youtube.com`
  - `connect-src 'self' youtube.com googletagmanager.com google-analytics.com analytics.google.com`
  - `object-src 'none'` | `base-uri 'self'` | `form-action 'self'` | `frame-ancestors 'self'`

## CSS Architecture (globals.css)

### Root Variables
```css
:root {
  --color-burgundy: #961414;
  --color-dark-burgundy: #52080D;
  --color-light-bg: #FFF9F9;
  --pastel-peach: #FDDCCC;
  --pastel-lavender: #E8DAFB;
  --pastel-mint: #C9F0DC;
  --pastel-sky: #CCE5F6;
  --tint-peach: #FEF0E8;
  --tint-lavender: #F5F0FD;
  --tint-mint: #EDFAF3;
  --tint-sky: #EBF4FB;
}
```

### Custom Keyframes
fadeInUp, fadeInLeft, fadeInRight, float, scaleIn, pulseGlow, gradientShift, ringPulse

### Utility Classes
`.animate-fade-in-up`, `.animate-fade-in-left`, `.animate-fade-in-right`, `.animate-scale-in`, `.animate-float`, `.animate-pulse-glow`, `.animate-gradient-shift`, `.animate-ring-pulse`

## Tailwind Config (tailwind.config.ts)

### Custom Colors
- `burgundy` with DEFAULT/dark/light variants
- `dark-burgundy` and `light-burgundy` shortcuts

### Custom Font
- `montserrat` family

### Animations
All keyframes + animation utilities registered in theme.extend

## Known Issues & Fixes

1. **Tailwind opacity**: Must use standard increments `/10`, `/20` etc. Values like `/8` or `/12` don't work.
2. **No package-lock.json**: Use `npm install` not `npm ci` in build configs.
3. **npm registry**: Sandbox environments may not reach npmjs.org — can't run builds locally in sandbox.
4. **Client component metadata**: Pages with `"use client"` cannot export `metadata`. Use separate `layout.tsx` files for metadata (done for about/ and faq/).
5. **Next.js Image flickering**: Transparent PNGs cause flickering with Next.js `<Image>` component. Use plain `<img>` tags for logos.
6. **GitHub file locking**: Large files (>2MB) can get locked by GitHub. Always optimize images before committing. Use `git rm -f` to remove locked files.
7. **Git config**: Use `-c user.name="albertasiamah" -c user.email="96445694+albertasiamah@users.noreply.github.com"` for commits.

## Files Outside Codebase

- `Plus_UTM_Campaign_Guide.xlsx` — UTM naming convention, campaign tracker, GTM setup guide
- `Plus_Learn_Section_Content_Plan.docx` — Content plan for the Learn section
- `testimonials-draft.html` — Draft mockup with person photos in testimonials
- `LEARN-SECTION-README.md` — Instructions for restoring the hidden Learn section
- `Brand items/` folder — Source logos, person photos, app screenshots, SEC logo
