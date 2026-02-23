"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Heading Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#FFF9F9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#52080D] mb-6 leading-tight">
              Building Wealth, One Investment at a Time
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              10th Capital Investments Limited is an SEC-regulated company based
              in Accra, Ghana, building tools that make investing accessible to
              everyone.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#52080D] mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                We started Plus because we believed every Ghanaian should have
                access to the same investment opportunities that were once
                reserved for the wealthy. From mutual funds and treasury bills to
                US stocks, Plus puts it all in the palm of your hand.
              </p>
              <p>
                Our team is passionate about financial inclusion. We work every
                day to make investing simpler, safer, and more accessible — no
                paperwork, no middlemen, no barriers.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Trust Plus */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#FFF9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#52080D] mb-12 sm:mb-16 text-center">
              Why Trust Plus
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <AnimateOnScroll animation="fade-in-up" delay={0} className="h-full">
              <div className="bg-white rounded-2xl p-8 sm:p-10 h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#961414] rounded-xl flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#52080D] mb-2">
                      SEC Regulated
                    </h3>
                    <p className="text-gray-500 text-base">
                      Fully licensed and regulated by the Securities and Exchange
                      Commission of Ghana.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={150} className="h-full">
              <div className="bg-white rounded-2xl p-8 sm:p-10 h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#961414] rounded-xl flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#52080D] mb-2">
                      Good Partners
                    </h3>
                    <p className="text-gray-500 text-base">
                      We work with trusted institutions like Stanbic, IC, and
                      Databank to manage your investments.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={300} className="h-full">
              <div className="bg-white rounded-2xl p-8 sm:p-10 h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#961414] rounded-xl flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
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
                  <div>
                    <h3 className="text-xl font-bold text-[#52080D] mb-2">
                      Security First
                    </h3>
                    <p className="text-gray-500 text-base">
                      Built with your security and privacy in mind. Biometric
                      login and encryption keep your account safe.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#52080D] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #961414 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #961414 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              By The Numbers
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <AnimateOnScroll animation="fade-in-up" delay={0}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">
                  <AnimatedCounter
                    target={100}
                    suffix="K+"
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white"
                  />
                </div>
                <p className="text-white/60 text-base sm:text-lg font-medium">
                  Users
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">
                  <AnimatedCounter
                    target={150}
                    suffix="K+"
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white"
                  />
                </div>
                <p className="text-white/60 text-base sm:text-lg font-medium">
                  Downloads
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={400}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">
                  <AnimatedCounter
                    target={4000}
                    suffix="+"
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white"
                  />
                </div>
                <p className="text-white/60 text-base sm:text-lg font-medium">
                  US Stocks
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#52080D] mb-12 sm:mb-16">
            Get in Touch
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#52080D] mb-2">
                Email
              </h3>
              <a
                href="mailto:support@plusapp.online"
                className="text-[#961414] hover:text-[#52080D] transition-colors text-lg"
              >
                support@plusapp.online
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#52080D] mb-2">
                Phone
              </h3>
              <div className="space-y-1">
                <a
                  href="tel:+233201673720"
                  className="block text-[#961414] hover:text-[#52080D] transition-colors text-lg"
                >
                  020 167 3720
                </a>
                <a
                  href="tel:+233532478602"
                  className="block text-[#961414] hover:text-[#52080D] transition-colors text-lg"
                >
                  0532 478 602
                </a>
                <a
                  href="tel:+233531167085"
                  className="block text-[#961414] hover:text-[#52080D] transition-colors text-lg"
                >
                  0531 167 085
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#52080D] mb-2">
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
              <h3 className="text-lg font-semibold text-[#52080D] mb-4">
                Follow Us
              </h3>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://instagram.com/investwithplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#961414] hover:text-[#52080D] transition-colors"
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
                  className="text-[#961414] hover:text-[#52080D] transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@investwithplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#961414] hover:text-[#52080D] transition-colors"
                >
                  <span className="sr-only">TikTok</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
