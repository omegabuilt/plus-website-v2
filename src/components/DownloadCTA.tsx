import Image from "next/image";

export default function DownloadCTA() {
  return (
    <section className="bg-burgundy py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Start Investing Today
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Download Plus and join 100,000+ Ghanaians building wealth.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a
            href="https://play.google.com/store/apps/details?id=online.plusapp.android&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/images/google-play-badge.svg"
              alt="Get it on Google Play"
              width={180}
              height={53}
              className="h-[53px] w-auto"
            />
          </a>

          <a
            href="https://apps.apple.com/us/app/plus-invest/id6444616895"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/images/app-store-badge.svg"
              alt="Download on the App Store"
              width={180}
              height={53}
              className="h-[53px] w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
