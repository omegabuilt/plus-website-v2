"use client";

import { useEffect, useState, useCallback } from "react";

const appScreens = [
  "/images/app-screen-1.jpg",
  "/images/app-screen-2.jpg",
  "/images/app-screen-3.jpg",
];

export default function PhoneMockup({ mounted }: { mounted: boolean }) {

  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = useCallback(() => {
    setCurrentScreen((prev) => (prev + 1) % appScreens.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextScreen, 3500);
    return () => clearInterval(interval);
  }, [nextScreen]);

  return (
    <div
      className={`justify-center lg:justify-end transition-all duration-1000 delay-300 ${
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
  );
}
