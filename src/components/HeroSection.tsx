"use client";

import { useEffect, useState } from "react";
import { useUTM } from "@/lib/useUTM";
import PhoneMockup from "./PhoneMockup";

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
  const { playStoreUrl, appStoreUrl, onDownloadClick } = useUTM();

  useEffect(() => {
    setMounted(true);
  }, []);

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

          <PhoneMockup mounted={mounted} />
        </div>
      </div>
    </section>
  );
}
