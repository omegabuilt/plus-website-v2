# Plus Investment App — Website

The official marketing website for **Plus**, Ghana's all-in-one investment app by [10th Capital Investments Limited](https://10thcapital.investments). Built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Font:** Montserrat (Google Fonts)
- **Animations:** CSS keyframes + Intersection Observer (zero dependencies)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, products, video, trust stats, why Plus |
| `/products` | Mutual Funds, Treasury Bills, US Stocks |
| `/about` | Company story, trust pillars, team stats |
| `/faq` | Accordion FAQ |
| `/learn` | Educational resources and social links |
| `/terms` | Terms & Conditions (fetched from API) |
| `/privacy` | Privacy Policy (fetched from API) |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```env
API_BASE_URL=https://staging-api.10thcapital.investments/v2
NEXT_PUBLIC_GTM_ID=your-gtm-id
```

| Variable | Required | Description |
|---|---|---|
| `API_BASE_URL` | Yes | Backend API base URL. Used server-side to fetch terms and privacy content. |
| `NEXT_PUBLIC_GTM_ID` | No | Google Tag Manager container ID for analytics. |

> **Note:** `.env.local` is gitignored. For production, set `API_BASE_URL=https://api.10thcapital.investments/v2` in your hosting platform's environment variables.

### 3. Run the dev server

```bash
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (Navbar + Footer)
│   ├── globals.css          # Global styles + animation keyframes
│   ├── page.tsx             # Homepage
│   ├── about/
│   │   ├── layout.tsx       # Metadata
│   │   └── page.tsx
│   ├── faq/
│   │   ├── layout.tsx       # Metadata
│   │   └── page.tsx
│   ├── learn/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── terms/
│   │   ├── layout.tsx       # Metadata
│   │   └── page.tsx         # Server-side API fetch
│   └── privacy/
│       ├── layout.tsx       # Metadata
│       └── page.tsx         # Server-side API fetch
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── DownloadCTA.tsx
│   ├── AnimateOnScroll.tsx
│   ├── AnimatedCounter.tsx
│   └── VideoEmbed.tsx
└── lib/
    ├── api.ts               # Backend API fetch utilities
    ├── utm.ts               # UTM parameter utilities
    └── useUTM.ts            # React hook for UTM tracking
public/
├── sitemap.xml
├── robots.txt
└── images/
    ├── plus-logo-header.png # Header logo
    ├── plus-logo-white.png  # Footer logo (white)
    ├── og-image.jpg         # Open Graph image
    ├── sec-ghana-logo.svg   # SEC Ghana logo
    ├── app-screen-*.jpg     # App screenshots for hero carousel
    ├── app-store-badge.svg
    └── google-play-badge.svg
```

## Deployment

This project uses a **branch-based deployment strategy**:

| Branch | Environment | Platform | URL |
|--------|-------------|----------|-----|
| `main` | Production | AWS Amplify | TBD |
| `develop` | Staging | Vercel | TBD |

### Workflow

1. Work on feature branches or directly on `develop`
2. Push to `develop` → auto-deploys to **Vercel** (staging)
3. Review and test on staging
4. Merge `develop` into `main` → auto-deploys to **AWS Amplify** (production)

### AWS Amplify

Build settings are defined in `amplify.yml` at the project root. Environment variable `NEXT_PUBLIC_ENV=production` should be set in the Amplify console.

### Vercel

Set the production branch to `develop` in Vercel project settings. Environment variable `NEXT_PUBLIC_ENV=staging` should be set in Vercel.

## Brand

| Token | Value |
|-------|-------|
| Burgundy | `#961414` |
| Dark Burgundy | `#52080D` |
| Light Background | `#FFF9F9` |
| Font | Montserrat 300–800 |

## License

Proprietary — 10th Capital Investments Limited. All rights reserved.
