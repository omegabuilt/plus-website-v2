import HeroSection from "@/components/HeroSection";
import DownloadCTA from "@/components/DownloadCTA";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import VideoEmbed from "@/components/VideoEmbed";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Invest Smarter from Ghana"
        subtitle="Mutual Funds, T-Bills, and US Stocks — all from your phone."
        showAppButtons={true}
      />

      {/* Products Section — trimmed, animated */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-14 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#52080D] mb-4">
                Everything You Need
              </h2>
              <p className="text-gray-500 text-lg max-w-md mx-auto">
                Three powerful products. One simple app.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Mutual Funds */}
            <AnimateOnScroll animation="fade-in-up" delay={0}>
              <Link href="/products" className="group block">
                <div className="relative bg-gradient-to-br from-[#FFF9F9] to-white rounded-2xl p-8 sm:p-10 h-full border border-gray-100 hover:border-[#961414]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#961414] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#52080D] mb-3">
                    Mutual Funds
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    Grow with trusted funds from Stanbic, IC, and Databank. Start with GHS 10.
                  </p>
                  <div className="mt-6 flex items-center text-[#961414] font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                    <span>Explore</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>

            {/* Treasury Bills */}
            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <Link href="/products" className="group block">
                <div className="relative bg-gradient-to-br from-[#FFF9F9] to-white rounded-2xl p-8 sm:p-10 h-full border border-gray-100 hover:border-[#961414]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#961414] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#52080D] mb-3">
                    Treasury Bills
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    Government-backed. Safe, reliable returns with flexible terms.
                  </p>
                  <div className="mt-6 flex items-center text-[#961414] font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                    <span>Explore</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>

            {/* US Stocks */}
            <AnimateOnScroll animation="fade-in-up" delay={300}>
              <Link href="/products" className="group block">
                <div className="relative bg-gradient-to-br from-[#FFF9F9] to-white rounded-2xl p-8 sm:p-10 h-full border border-gray-100 hover:border-[#961414]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#961414] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#52080D] mb-3">
                    US Stocks
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    Own Apple, Google, Tesla, and 4,000+ more. Powered by Bamboo.
                  </p>
                  <div className="mt-6 flex items-center text-[#961414] font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                    <span>Explore</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-[#FFF9F9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#52080D] mb-4">
                See Plus in Action
              </h2>
              <p className="text-gray-500 text-lg">
                Watch how Ghanaians are building wealth with Plus.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-in" delay={200}>
            <VideoEmbed
              videoId="dQw4w9WgXcQ"
              title="Impulse Buyer? — Plus Money Talks"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trust Stats Section — animated counters */}
      <section className="py-20 sm:py-24 bg-[#52080D] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #961414 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #961414 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Trusted by Ghanaians
              </h2>
              <p className="text-white/60 text-lg">
                Growing every day.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <AnimateOnScroll animation="fade-in-up" delay={0}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">
                  <AnimatedCounter target={150} suffix="K+" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white" />
                </div>
                <p className="text-white/60 text-base sm:text-lg font-medium">
                  Downloads
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">
                  <AnimatedCounter target={100} suffix="K+" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white" />
                </div>
                <p className="text-white/60 text-base sm:text-lg font-medium">
                  Registered Users
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={400}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">
                  <AnimatedCounter target={4000} suffix="+" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white" />
                </div>
                <p className="text-white/60 text-base sm:text-lg font-medium">
                  US Stocks Available
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Plus Section — simplified */}
      <section className="py-20 sm:py-24 lg:py-32 bg-[#FFF9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-14 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#52080D]">
                Why Plus?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <AnimateOnScroll animation="fade-in-left" delay={0}>
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#961414] rounded-xl flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#52080D] mb-2">SEC Regulated</h3>
                    <p className="text-gray-500 text-base">Licensed by the Ghana Securities & Exchange Commission.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-right" delay={100}>
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#961414] rounded-xl flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#52080D] mb-2">Mobile Money Top-Up</h3>
                    <p className="text-gray-500 text-base">Fund your account instantly. No bank visits.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-left" delay={200}>
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#961414] rounded-xl flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#52080D] mb-2">One App, Many Products</h3>
                    <p className="text-gray-500 text-base">Mutual funds, T-Bills, and US stocks — all in one place.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-right" delay={300}>
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#961414] rounded-xl flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#52080D] mb-2">Start Small</h3>
                    <p className="text-gray-500 text-base">Begin with as little as GHS 10. No minimums on most products.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <DownloadCTA />
    </main>
  );
}
