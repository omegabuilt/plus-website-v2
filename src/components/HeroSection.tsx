"use client";

import { useEffect, useState, useCallback } from "react";
import { useUTM } from "@/lib/useUTM";

const appScreens = [
  "/images/app-screen-1.jpg",
  "/images/app-screen-2.jpg",
  "/images/app-screen-3.jpg",
];

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
  const [currentScreen, setCurrentScreen] = useState(0);
  const { playStoreUrl, appStoreUrl, onDownloadClick } = useUTM();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-advance carousel
  const nextScreen = useCallback(() => {
    setCurrentScreen((prev) => (prev + 1) % appScreens.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextScreen, 3500);
    return () => clearInterval(interval);
  }, [nextScreen]);

  // Split title for gradient highlight on second line
  const titleParts = title.split(" from ");

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{ background: "linear-gradient(145deg, #FFF9F9 0%, #fff 20%, #FEF0E8 40%, #F5F0FD 65%, #EDFAF3 85%, #EBF4FB 100%)" }}>
      {/* Pastel blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-16 w-[450px] h-[450px] rounded-full"
          style={{
            background: "radial-gradient(circle, #FDDCCC, transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.4,
            animation: "float 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-24 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, #E8DAFB, transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.4,
            animation: "float 9s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute top-[30%] left-[50%] w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, #C9F0DC, transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.3,
            animation: "float 10s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute top-[60%] right-[20%] w-[280px] h-[280px] rounded-full"
          style={{
            background: "radial-gradient(circle, #CCE5F6, transparent 70%)",
            filter: "blur(90px)",
            opacity: 0.3,
            animation: "float 8s ease-in-out infinite 0.5s",
          }}
        />
      </div>

      {/* Pastel ring accents */}
      <div className="absolute top-[15%] right-[8%] w-20 h-20 rounded-full border-2 border-[#E8DAFB] opacity-20 animate-ring-pulse" />
      <div className="absolute bottom-[20%] left-[5%] w-12 h-12 rounded-full border-2 border-[#FDDCCC] opacity-20 animate-ring-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[60%] right-[45%] w-16 h-16 rounded-full border-2 border-[#C9F0DC] opacity-20 animate-ring-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#52080D] leading-[1.08] tracking-tight transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {titleParts.length > 1 ? (
                <>
                  {titleParts[0]}
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #961414 0%, #C44B4B 50%, #B8578A 100%)",
                    }}
                  >
                    from {titleParts[1]}
                  </span>
                </>
              ) : (
                title
              )}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {subtitle}
            </p>

            {/* App Store Buttons */}
            {showAppButtons && (
              <div
                className={`flex flex-col sm:flex-row gap-3 pt-2 transition-all duration-700 delay-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
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
            )}

            {/* Trust bar */}
            <div
              className={`flex flex-wrap items-center gap-6 sm:gap-7 pt-6 border-t border-[#961414]/10 transition-all duration-700 delay-[400ms] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#FEF0E8] flex items-center justify-center">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="#961414" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#52080D]">12K+</p>
                  <p className="text-[11px] text-gray-400">Transactions / Week</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#EDFAF3] flex items-center justify-center">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="#5B8C60" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#52080D]">100K+</p>
                  <p className="text-[11px] text-gray-400">Users</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4FB] flex items-center justify-center">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="#3B82C4" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#52080D]">24/7</p>
                  <p className="text-[11px] text-gray-400">Access</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Pastel glow behind phone */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[380px] h-[380px] rounded-full"
                  style={{
                    background: "radial-gradient(circle, #FBCED0 0%, #E8DAFB 40%, transparent 70%)",
                    opacity: 0.4,
                    filter: "blur(40px)",
                  }}
                />
              </div>

              {/* Phone mockup */}
              <div className="relative" style={{ animation: "float 5s ease-in-out infinite" }}>
                <div className="w-[260px] sm:w-[270px] mx-auto">
                  {/* Phone frame */}
                  <div className="bg-[#1a1a1a] rounded-[40px] p-[10px] shadow-2xl" style={{ boxShadow: "0 40px 80px rgba(82,8,13,0.15), 0 0 0 1px rgba(255,255,255,0.05) inset" }}>
                    {/* Screen with carousel */}
                    <div className="rounded-[32px] overflow-hidden relative bg-white" style={{ aspectRatio: "9/19.5" }}>
                      <div
                        className="flex transition-transform duration-700 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentScreen * 100}%)` }}
                      >
                        {appScreens.map((src, i) => (
                          <div key={i} className="w-full h-full flex-shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={src}
                              alt={`Plus app screen ${i + 1}`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        ))}
                      </div>
                      {/* Carousel dots */}
                      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                        {appScreens.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentScreen(i)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i === currentScreen ? "bg-[#961414] w-4" : "bg-gray-300"
                            }`}
                            aria-label={`Go to screen ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div
                className="absolute -left-4 sm:-left-14 top-1/4 bg-white rounded-2xl shadow-lg px-3 py-2.5 border border-gray-100/80 z-10"
                style={{ animation: "float 5s ease-in-out infinite 0.5s", boxShadow: "0 8px 28px rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#C9F0DC] flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="#22c55e" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-800">Investment Made</p>
                    <p className="text-[9px] text-green-600 font-semibold">GHS 500.00</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-4 sm:-right-14 bottom-[32%] bg-white rounded-2xl shadow-lg px-3 py-2.5 border border-gray-100/80 z-10"
                style={{ animation: "float 5s ease-in-out infinite 1.5s", boxShadow: "0 8px 28px rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FDDCCC] flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="#961414" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-800">Portfolio Up</p>
                    <p className="text-[9px] text-green-600 font-semibold">+12.4% this month</p>
                  </div>
                </div>
              </div>

              <div
                className="absolute right-2 sm:right-0 -top-5 bg-white rounded-2xl shadow-lg px-3 py-2.5 border border-gray-100/80 z-10"
                style={{ animation: "float 6s ease-in-out infinite 0.8s", boxShadow: "0 8px 28px rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#C9F0DC] flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="#22C55E" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-800">Deposit Received</p>
                    <p className="text-[9px] text-gray-400">GHS 500.00</p>
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
