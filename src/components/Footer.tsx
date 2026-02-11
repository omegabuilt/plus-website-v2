import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-burgundy text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/plus-logo-white.png"
                alt="Plus Investment App"
                width={120}
                height={40}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              All your investment needs in one app
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/investwithplus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@investwithplus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="4" />
                  <polygon points="10,8.5 16,12 10,15.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@investwithplus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products#mutual-funds"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link
                  href="/products#treasury-bills"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Treasury Bills
                </Link>
              </li>
              <li>
                <Link
                  href="/products#us-stocks"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  US Stocks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              {/* Learn link hidden until section is developed */}
              <li>
                <a
                  href="mailto:support@plusapp.online"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  support@plusapp.online
                </a>
              </li>
              <li>
                <a
                  href="tel:+233201673720"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  020 167 3720
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
            <p>
              © {currentYear} 10th Capital Investments Limited. All rights reserved.
            </p>
            <p className="md:text-right">
              Y21B Agostinho Neto Road, Airport Residential, Accra, Ghana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
