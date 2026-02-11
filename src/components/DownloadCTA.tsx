"use client";

import { useUTM } from "@/lib/useUTM";

export default function DownloadCTA() {
  const { playStoreUrl, appStoreUrl, onDownloadClick } = useUTM();

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
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onDownloadClick("google_play")}
            className="hover:scale-105 transition-transform duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/google-play-badge.svg"
              alt="Get it on Google Play"
              className="h-[53px] w-auto"
            />
          </a>

          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onDownloadClick("app_store")}
            className="hover:scale-105 transition-transform duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-[53px] w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
