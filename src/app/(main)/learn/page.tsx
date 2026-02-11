import type { Metadata } from "next";
import DownloadCTA from '@/components/DownloadCTA';

export const metadata: Metadata = {
  title: "Learn",
  description: "Financial education and investment tips from Plus. Follow us on YouTube, Instagram, and TikTok for guides and market updates.",
};

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#FFF9F9] to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-[#52080D] md:text-5xl">
            Learn
          </h1>
          <p className="text-lg text-gray-600">
            Financial education to help you invest with confidence
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-[#FFF9F9] to-white p-8 md:p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#961414]">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're building a library of guides, articles, and videos to help you on your investment journey. In the meantime, check out our content on social media.
            </p>
          </div>
        </div>
      </section>

      {/* Social Channels Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-8 text-2xl font-bold text-[#52080D] text-center">
            Learn From Our Community
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* YouTube Card */}
            <a
              href="https://youtube.com/@investwithplus"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#961414]"
            >
              <div className="mb-4 inline-block rounded-lg bg-[#FFF9F9] p-3 group-hover:bg-[#961414] transition-colors">
                <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#961414] group-hover:text-white transition-colors">
                  <rect x="2" y="4" width="20" height="16" rx="4" />
                  <polygon points="10,8.5 16,12 10,15.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">YouTube</h4>
              <p className="mb-4 text-base text-gray-600">
                <span className="font-semibold text-[#961414]">Money Talks</span> — Watch our video series on investing basics, market updates, and tips.
              </p>
              <span className="inline-block text-[#961414] font-semibold group-hover:underline">
                Visit Channel →
              </span>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/investwithplus"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#961414]"
            >
              <div className="mb-4 inline-block rounded-lg bg-[#FFF9F9] p-3 group-hover:bg-[#961414] transition-colors">
                <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#961414] group-hover:text-white transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                @investwithplus
              </h4>
              <p className="mb-4 text-base text-gray-600">
                Follow us for daily tips, product updates, and investment insights.
              </p>
              <span className="inline-block text-[#961414] font-semibold group-hover:underline">
                Follow →
              </span>
            </a>

            {/* TikTok Card */}
            <a
              href="https://tiktok.com/@investwithplus"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#961414]"
            >
              <div className="mb-4 inline-block rounded-lg bg-[#FFF9F9] p-3 group-hover:bg-[#961414] transition-colors">
                <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#961414] group-hover:text-white transition-colors">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                @investwithplus
              </h4>
              <p className="mb-4 text-base text-gray-600">
                Quick financial tips and investment education in bite-sized videos.
              </p>
              <span className="inline-block text-[#961414] font-semibold group-hover:underline">
                Follow →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 md:py-20">
        <DownloadCTA />
      </section>
    </div>
  );
}
