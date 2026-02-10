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
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
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
                Databank MFund
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                From Ghana&apos;s widest range of mutual funds, professionally managed by Databank Asset Management Services.
              </p>
            </div>
          </div>

          {/* Processing Note */}
          <div className="bg-light-burgundy rounded-lg p-6 text-center">
            <p className="text-gray-700">
              Deposits are typically processed within 48 hours. Growth may take a few days to reflect.
            </p>
          </div>
        </div>
      </section>

      {/* Treasury Bills Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-burgundy mb-4">
              Treasury Bills
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              Government of Ghana securities. T-Bills are backed by the government, making them one of the safest investment options available.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Government-backed</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Secured by the full backing of the Government of Ghana.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Competitive Rates</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Attractive rates across all term lengths.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Low Risk</h3>
              </div>
              <p className="text-gray-600 text-sm">
                One of the safest investment options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* US Stocks Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-burgundy">
                US Stocks
              </h2>
              <span className="inline-block bg-burgundy text-white px-4 py-2 rounded-full text-sm font-semibold w-fit mt-4 sm:mt-0">
                Powered by Bamboo
              </span>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mb-8">
              Own shares in the world's biggest companies. Access 4,000+ US-listed stocks directly from Ghana.
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
                  You own the actual stocks, not derivatives. Direct ownership in the companies you believe in.
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
                  Low Minimum Investment
                </h3>
                <p className="text-gray-700">
                  Start with as little as $10. Fractional shares make investing accessible to everyone.
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
                  4,000+ Stocks Available
                </h3>
                <p className="text-gray-700">
                  Trade Apple, Google, Tesla, Amazon and more. Diversify your portfolio across the world's largest companies.
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
                  Own parts of expensive stocks. No need to buy whole shares to get started.
                </p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-light-burgundy rounded-lg p-6 text-center">
            <p className="text-gray-700">
              US stock trading is powered by Bamboo (<a href="https://investbamboo.com" target="_blank" rel="noopener noreferrer" className="text-burgundy font-semibold hover:text-dark-burgundy">investbamboo.com</a>).
            </p>
          </div>
        </div>
      </section>

      {/* Transparent Fees Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 sm:p-12 border border-gray-200 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-burgundy mb-4">
              Transparent Fees
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Fees are per transaction, competitive, and always shown before you confirm. No hidden charges.
            </p>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <DownloadCTA />
    </div>
  );
}
