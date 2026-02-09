import type { Metadata } from "next";
import DownloadCTA from "@/components/DownloadCTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "10th Capital Investments Limited — the team behind Plus. SEC-regulated, based in Accra, Ghana. Making investing accessible to every Ghanaian.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-burgundy-light py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-dark mb-4 sm:mb-6">
            Building Wealth in and from Ghana
          </h1>
          <p className="text-lg sm:text-xl text-burgundy-dark/80 max-w-2xl">
            We're on a mission to make investing accessible to every Ghanaian.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-burgundy-dark mb-8 sm:mb-12">
            Our Story
          </h2>

          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              Plus is built by 10th Capital Investments Limited, an SEC-licensed
              investment management company based in Accra, Ghana. We're passionate
              about making financial growth possible for every Ghanaian, regardless
              of where they start.
            </p>

            <p>
              Investing in Ghana traditionally meant opening different accounts with
              different providers, filling out endless paperwork, and dealing with
              complex processes that felt more like a chore than an opportunity. We
              built Plus to change that.
            </p>

            <p>
              With Plus, you open one account and get access to mutual funds,
              treasury bills, and US stocks — all from your phone. No paperwork, no
              bank visits, no complexity. Just straightforward investing that actually
              works for your life.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trust Plus Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-burgundy-dark mb-4 sm:mb-6 text-center">
            Why Trust Plus
          </h2>
          <p className="text-center text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Your money is too important for anything less than complete transparency
            and security.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Trust Pillar 1: SEC Regulated */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-burgundy-light rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-burgundy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burgundy-dark mb-3">
                SEC Regulated
              </h3>
              <p className="text-gray-600 leading-relaxed">
                10th Capital Investments Limited is licensed and regulated by the
                Ghana Securities & Exchange Commission. Your investments are protected
                by regulatory oversight and industry standards.
              </p>
            </div>

            {/* Trust Pillar 2: Institutional Products */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-burgundy-light rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-burgundy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m11.581 0a2 2 0 01-2 2H7a2 2 0 01-2-2m0 0H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burgundy-dark mb-3">
                Institutional Products
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with established financial institutions like Stanbic, IC
                Asset Managers, and Databank. These are real, regulated investment
                products — not experimental or untested offerings.
              </p>
            </div>

            {/* Trust Pillar 3: Security First */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-burgundy-light rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-burgundy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-burgundy-dark mb-3">
                Security First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is encrypted, your account is protected by biometric login,
                and we send SMS notifications for every transaction. We take security
                seriously because we know you do too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-burgundy-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 sm:mb-16 text-center">
            By The Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {/* Stat 1: Users */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                100,000+
              </div>
              <p className="text-burgundy-light">Registered Users</p>
            </div>

            {/* Stat 2: Downloads */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                150,000+
              </div>
              <p className="text-burgundy-light">App Downloads</p>
            </div>

            {/* Stat 3: Mutual Funds */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                3
              </div>
              <p className="text-burgundy-light">Mutual Fund Products</p>
            </div>

            {/* Stat 4: US Stocks */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                4,000+
              </div>
              <p className="text-burgundy-light">US Stocks Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-burgundy-dark mb-12 sm:mb-16 text-center">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-burgundy-dark mb-2">
                  Email
                </h3>
                <a
                  href="mailto:support@plusapp.online"
                  className="text-burgundy hover:text-burgundy-dark transition-colors text-lg"
                >
                  support@plusapp.online
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-burgundy-dark mb-2">
                  Address
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Y21B Agostinho Neto Road
                  <br />
                  Airport Residential
                  <br />
                  Accra, Ghana
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-burgundy-dark mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-6">
                  <a
                    href="https://instagram.com/investwithplus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy hover:text-burgundy-dark transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@investwithplus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy hover:text-burgundy-dark transition-colors"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.175c-3.673-1.73-9.865-1.73-13.538 0C3.036 4.147 2.51 7.557 2.51 12c0 4.443.526 7.853 3.567 8.825 3.673 1.73 9.865 1.73 13.538 0 3.041-.972 3.567-4.382 3.567-8.825 0-4.443-.526-7.853-3.567-8.825zM9.75 15.02V8.98l5.79 3.02-5.79 3.02z" />
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com/@investwithplus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy hover:text-burgundy-dark transition-colors"
                  >
                    <span className="sr-only">TikTok</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.66 1.94 2.89 2.89 0 0 1 5.66-1.93V9.4a6.84 6.84 0 0 0-5.66-5.63V2a10.658 10.658 0 0 0 10.77 10.72V9.63a3.72 3.72 0 0 0 .6-.05v-3.36a4.7 4.7 0 0 1-.6.04z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* About Company Info */}
            <div className="bg-burgundy-light rounded-lg p-8">
              <h3 className="text-xl font-bold text-burgundy-dark mb-4">
                About Plus
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Plus Investment App is brought to you by 10th Capital Investments
                Limited, an SEC-licensed investment management company based in Accra,
                Ghana.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We're committed to making wealth-building accessible, transparent, and
                straightforward for every Ghanaian. When you invest with Plus, you're
                investing with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <DownloadCTA />
    </>
  );
}
