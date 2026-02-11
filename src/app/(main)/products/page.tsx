import type { Metadata } from "next";
import DownloadCTA from "@/components/DownloadCTA";

export const metadata: Metadata = {
  title: "Investment Products",
  description: "Explore SEC-regulated mutual funds, government-backed treasury bills, and 4,000+ US stocks. Start investing from Ghana with as little as GHS 10.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-light-burgundy py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-burgundy mb-4 sm:mb-6">
            Investment Products
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Choose from a range of SEC-regulated investment options
          </p>
        </div>
      </section>

      {/* Mutual Funds Section */}
      <section id="mutual-funds" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-burgundy mb-4">
              Mutual Funds
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Access trusted mutual funds from our partners. Your money is managed by professional fund managers.
            </p>
          </div>

          {/* Fund Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Stanbic Cash Trust Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-burgundy mb-4">
                Stanbic Cash Trust
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                One of Ghana&apos;s largest fund managers with world-class money management expertise, licensed by the SEC.
              </p>
            </div>

            {/* IC Cash Trust Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-burgundy mb-4">
                IC Liquidity Fund
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                A licensed money market fund investing in highly liquid, Government of Ghana-backed assets for short-term income.
              </p>
            </div>

            {/* Databank Mfund II Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-burgundy mb-4">
                Databank MFund II
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                From Ghana&apos;s widest range of mutual funds, professionally managed by Databank Asset Management Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treasury Bills Section */}
      <section id="treasury-bills" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-burgundy mb-4">
              Treasury Bills
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              Government of Ghana securities backed by the full faith of the state.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Government-Backed</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Issued by the Government of Ghana.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Flexible Terms</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Choose from 91, 182, or 364-day terms.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Predetermined Returns</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Rates are set at purchase so you know exactly what you&apos;ll earn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* US Stocks Section */}
      <section id="us-stocks" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-burgundy mb-4">
              US Stocks
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              Own shares in the world&apos;s biggest companies. Access 4,000+ US-listed stocks directly from Ghana.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-burgundy text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real Ownership
                </h3>
                <p className="text-gray-700">
                  You own the actual shares.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-burgundy text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Low Minimum
                </h3>
                <p className="text-gray-700">
                  Start with as little as $10.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-burgundy text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  4,000+ Stocks
                </h3>
                <p className="text-gray-700">
                  Apple, Google, Tesla, Amazon and more.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-burgundy text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Fractional Shares
                </h3>
                <p className="text-gray-700">
                  You can buy a fraction of any stock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <DownloadCTA />
    </div>
  );
}
