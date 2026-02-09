"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showAppButtons?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  showAppButtons = true,
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F9] via-white to-[#FFF0F0] min-h-[90vh] flex items-center">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #961414 0%, transparent 70%)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #52080D 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #961414 0%, transparent 60%)",
            animation: "float 7s ease-in-out infinite 0.5s",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Tagline badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#961414]/20 rounded-full px-4 py-2 shadow-sm transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-2 h-2 bg-[#961414] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#52080D]">
                SEC Regulated · Trusted by 100,000+
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#52080D] leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {subtitle}
            </p>

            {/* App Store Buttons */}
            {showAppButtons && (
              <div
                className={`flex flex-col sm:flex-row gap-4 pt-2 transition-all duration-700 delay-300 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
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
            )}
          </div>

          {/* Right Content - Phone Mockup with floating animation */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Gradient circle behind phone */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(150,20,20,0.15) 0%, transparent 70%)",
                  }}
                />
              </div>

              {/* Phone mockup */}
              <div className="relative animate-float">
                <div className="w-[260px] sm:w-[280px] mx-auto">
                  {/* Phone frame */}
                  <div className="bg-[#1a1a1a] rounded-[40px] p-3 shadow-2xl">
                    {/* Screen */}
                    <div className="bg-gradient-to-b from-[#961414] to-[#52080D] rounded-[32px] overflow-hidden aspect-[9/19]">
                      {/* Status bar */}
                      <div className="flex justify-between items-center px-6 pt-3 pb-2">
                        <span className="text-white/80 text-[10px] font-medium">
                          9:41
                        </span>
                        <div className="flex gap-1">
                          <div className="w-3 h-2 bg-white/60 rounded-sm" />
                          <div className="w-3 h-2 bg-white/60 rounded-sm" />
                          <div className="w-4 h-2 bg-white/80 rounded-sm" />
                        </div>
                      </div>

                      {/* App content mockup */}
                      <div className="px-5 pt-4">
                        <p className="text-white/60 text-[10px]">
                          Total Portfolio
                        </p>
                        <p className="text-white text-2xl font-bold mt-1">
                          GHS 12,450.00
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <svg
                            className="w-3 h-3 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                          <span className="text-green-400 text-xs font-semibold">
                            +12.4%
                          </span>
                        </div>

                        {/* Mini chart */}
                        <div className="mt-4 h-16 flex items-end gap-[3px]">
                          {[40, 55, 35, 60, 50, 70, 65, 80, 75, 90, 85, 95].map(
                            (h, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-white/30 rounded-t-sm"
                                style={{ height: `${h}%` }}
                              />
                            )
                          )}
                        </div>

                        {/* Product cards */}
                        <div className="mt-5 space-y-2">
                          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-white text-[11px] font-semibold">
                                  Mutual Funds
                                </p>
                                <p className="text-white/50 text-[9px]">
                                  Stanbic Cash Trust
                                </p>
                              </div>
                              <p className="text-green-400 text-[11px] font-bold">
                                +8.2%
                              </p>
                            </div>
                          </div>
                          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-white text-[11px] font-semibold">
                                  T-Bills
                                </p>
                                <p className="text-white/50 text-[9px]">
                                  91-day Bill
                                </p>
                              </div>
                              <p className="text-green-400 text-[11px] font-bold">
                                +29.5%
                              </p>
                            </div>
                          </div>
                          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-white text-[11px] font-semibold">
                                  US Stocks
                                </p>
                                <p className="text-white/50 text-[9px]">
                                  Apple Inc.
                                </p>
                              </div>
                              <p className="text-green-400 text-[11px] font-bold">
                                +15.3%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Home indicator */}
                  <div className="mx-auto mt-2 w-24 h-1 bg-gray-300 rounded-full" />
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -left-4 sm:-left-8 top-1/4 bg-white rounded-xl shadow-lg px-3 py-2 border border-gray-100"
                style={{
                  animation: "float 5s ease-in-out infinite 0.5s",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-800">
                      Investment Made
                    </p>
                    <p className="text-[9px] text-gray-500">GHS 500.00</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-4 sm:-right-8 bottom-1/3 bg-white rounded-xl shadow-lg px-3 py-2 border border-gray-100"
                style={{
                  animation: "float 5s ease-in-out infinite 1.5s",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#FFF9F9] rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#961414]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-800">
                      Portfolio Up
                    </p>
                    <p className="text-[9px] text-green-600 font-semibold">
                      +12.4% this month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
