import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Replace with your actual GTM container ID once you create one at tagmanager.google.com
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.plusapp.online"),
  title: {
    default: "Plus | All Your Investment Needs in One App",
    template: "%s | Plus Investment App",
  },
  description:
    "Invest in Mutual Funds, Treasury Bills, and US Stocks from Ghana. SEC-regulated. 100,000+ registered users. Download Plus today.",
  keywords: [
    "Plus Investment App",
    "invest Ghana",
    "mutual funds Ghana",
    "treasury bills Ghana",
    "US stocks Ghana",
    "SEC regulated investment",
    "10th Capital Investments",
    "Stanbic Cash Trust",
    "IC Liquidity Fund",
    "Databank MFund II",
    "fractional shares Ghana",
    "mobile investing Ghana",
  ],
  authors: [{ name: "10th Capital Investments Limited" }],
  creator: "10th Capital Investments Limited",
  openGraph: {
    type: "website",
    locale: "en_GH",
    title: "Plus | All Your Investment Needs in One App",
    description:
      "Invest in Mutual Funds, Treasury Bills, and US Stocks from Ghana. SEC-regulated. Start with as little as GHS 10.",
    url: "https://www.plusapp.online",
    siteName: "Plus Investment App",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Plus Investment App — Invest Smarter from Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plus | All Your Investment Needs in One App",
    description:
      "Mutual Funds, Treasury Bills, and US Stocks — all from your phone. SEC-regulated.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.plusapp.online" />


        {/* Google Tag Manager - head script */}
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body className="font-montserrat text-gray-800 bg-white">
        {/* Google Tag Manager - noscript fallback */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {children}
      </body>
    </html>
  );
}
