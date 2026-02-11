import HeroSection from "@/components/HeroSection";
import DownloadCTA from "@/components/DownloadCTA";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import VideoEmbed from "@/components/VideoEmbed";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Invest Smarter from Your Phone"
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
            <AnimateOnScroll animation="fade-in-up" delay={0} className="h-full">
              <Link href="/products" className="group block h-full">
                <div className="relative bg-gradient-to-br from-[#FFF9F9] to-white rounded-2xl p-8 sm:p-10 h-full min-h-[240px] border border-gray-100 hover:border-[#961414]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#961414] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">₵</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#52080D] mb-3">
                    Mutual Funds
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    Grow with trusted funds from Stanbic, IC, and Databank. Start with GHS 10.
                  </p>
                </div>
              </Link>
            </AnimateOnScroll>

            {/* Treasury Bills */}
            <AnimateOnScroll animation="fade-in-up" delay={150} className="h-full">
              <Link href="/products" className="group block h-full">
                <div className="relative bg-gradient-to-br from-[#FFF9F9] to-white rounded-2xl p-8 sm:p-10 h-full min-h-[240px] border border-gray-100 hover:border-[#961414]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
                </div>
              </Link>
            </AnimateOnScroll>

            {/* US Stocks */}
            <AnimateOnScroll animation="fade-in-up" delay={300} className="h-full">
              <Link href="/products" className="group block h-full">
                <div className="relative bg-gradient-to-br from-[#FFF9F9] to-white rounded-2xl p-8 sm:p-10 h-full min-h-[240px] border border-gray-100 hover:border-[#961414]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#961414] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">$</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#52080D] mb-3">
                    US Stocks
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    Own Apple, Google, Tesla, and 4,000+ more. Start with $10.
                  </p>
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
                Investing Made Easy
              </h2>
              <p className="text-gray-500 text-lg">
                A quick look at what Plus can do for you.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-in" delay={200}>
            <VideoEmbed
              videoId="VnrjSaJ0Mvs"
              title="Plus Money Talks"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <AnimateOnScroll animation="fade-in-up" delay={0} className="h-full">
              <div className="bg-white rounded-2xl p-8 sm:p-10 h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#961414] rounded-xl flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#52080D] mb-2">SEC Regulated</h3>
                    <p className="text-gray-500 text-base">Regulated by the Securities and Exchange Commission of Ghana.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={150} className="h-full">
              <div className="bg-white rounded-2xl p-8 sm:p-10 h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#961414] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">₵</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#52080D] mb-2">Convenient Top Up</h3>
                    <p className="text-gray-500 text-base">Make deposits with Momo, bank card or bank transfer.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={300} className="h-full">
              <div className="bg-white rounded-2xl p-8 sm:p-10 h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#961414] rounded-xl flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#52080D] mb-2">Start Small</h3>
                    <p className="text-gray-500 text-base">Invest with as little as GHS 10.</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center mb-14 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#52080D] mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-500 text-lg">
                Hear from customers building wealth with Plus.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <AnimateOnScroll animation="fade-in-up" delay={0}>
              <div className="bg-[#FFF9F9] rounded-2xl p-8 sm:p-10 border border-gray-100 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  &ldquo;I started investing with just GHS 50 on Plus. Six months later, I&apos;ve built a habit of saving every week. The app makes it so easy.&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#961414] flex items-center justify-center text-white font-bold text-sm">
                    AK
                  </div>
                  <div>
                    <p className="font-bold text-[#52080D] text-sm">Ama K.</p>
                    <p className="text-gray-400 text-xs">Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <div className="bg-[#FFF9F9] rounded-2xl p-8 sm:p-10 border border-gray-100 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  &ldquo;Being able to buy US stocks from Ghana is a game-changer. I own shares in Apple and Tesla now — something I never thought possible.&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#52080D] flex items-center justify-center text-white font-bold text-sm">
                    KM
                  </div>
                  <div>
                    <p className="font-bold text-[#52080D] text-sm">Kwame M.</p>
                    <p className="text-gray-400 text-xs">Kumasi, Ghana</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={300}>
              <div className="bg-[#FFF9F9] rounded-2xl p-8 sm:p-10 border border-gray-100 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  &ldquo;T-Bills on Plus give me peace of mind. Government-backed, great rates, and I can track everything from my phone. Highly recommend.&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#961414] flex items-center justify-center text-white font-bold text-sm">
                    EA
                  </div>
                  <div>
                    <p className="font-bold text-[#52080D] text-sm">Efua A.</p>
                    <p className="text-gray-400 text-xs">Takoradi, Ghana</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* SEC Badge */}
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <div className="mt-16 flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sec-ghana-logo.png"
                alt="Securities and Exchange Commission Ghana"
                width={80}
                height={67}
                className="mb-3 opacity-70"
              />
              <p className="text-gray-400 text-sm text-center max-w-md">
                Licensed and regulated by the Securities and Exchange Commission, Ghana
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Download CTA Section */}
      <DownloadCTA />
    </main>
  );
}
