import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#52080D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">

          {/* Logo + tagline */}
          <div className="md:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/plus-logo-white.png"
              alt="Plus"
              width={90}
              height={32}
              className="mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Invest smarter from your phone. Mutual Funds, T-Bills, and US Stocks — all in one app.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Products", href: "/products" },
                { label: "About", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Learn", href: "/learn" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@plusapp.online"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  support@plusapp.online
                </a>
              </li>
              <li>
                <a
                  href="tel:+233201673720"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  020 167 3720
                </a>
              </li>
              <li>
                <a
                  href="tel:+233532478602"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  0532 478 602
                </a>
              </li>
              <li>
                <a
                  href="tel:+233531167085"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  0531 167 085
                </a>
              </li>
              <li className="text-white/40 text-sm leading-snug pt-1">
                Y21B Agostinho Neto Road
                <br />
                Airport Residential, Accra
              </li>
            </ul>
          </div>

          {/* Social + Download */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-8">
              {/* Instagram */}
              <a
                href="https://instagram.com/investwithplus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com/@investwithplus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com/@investwithplus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="5" width="20" height="14" rx="4" />
                  <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>

            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Download
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=online.plusapp.android&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/google-play-badge.svg"
                  alt="Get it on Google Play"
                  className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/plus-invest/id6444616895"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} 10th Capital Investments Limited. All rights reserved.
          </p>
          <p className="text-white/40 text-xs text-center sm:text-right">
            Regulated by the Securities and Exchange Commission, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
