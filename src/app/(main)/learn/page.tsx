"use client";

import { useState } from "react";
import DownloadCTA from "@/components/DownloadCTA";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface Video {
  id: string;
  title: string;
  duration: string;
  views: string;
}

const videos: Video[] = [
  {
    id: "P2JZuKYvY5s",
    title: "How Do Mutual Funds Work?",
    duration: "7:04",
    views: "26K",
  },
  {
    id: "_MJdLjgOcHg",
    title: "What Does It Mean to Buy a Treasury Bill?",
    duration: "4:34",
    views: "514",
  },
  {
    id: "Ir4X9aKBtwg",
    title: "What Does It Mean to Invest in Government Bonds?",
    duration: "8:37",
    views: "6.5K",
  },
  {
    id: "g-t5DvVt8yY",
    title: "Is It a Good Idea to Buy and Hold Dollars?",
    duration: "6:32",
    views: "10K",
  },
  {
    id: "VijoBD1RPWs",
    title: "Insurance Explained",
    duration: "5:25",
    views: "7.1K",
  },
  {
    id: "NqsT0dftIVQ",
    title: "Marked to Market",
    duration: "4:10",
    views: "12K",
  },
  {
    id: "5sXGyvpdthA",
    title: "How to Prepare a Budget",
    duration: "7:18",
    views: "4.4K",
  },
  {
    id: "LHddcHQczxY",
    title: "What Does It Mean to Buy Shares in a Company?",
    duration: "8:04",
    views: "5.9K",
  },
  {
    id: "kkbmkjGXt3E",
    title: "How to Make 2025 Your Best Financial Year",
    duration: "5:33",
    views: "17K",
  },
  {
    id: "Pn90Z9RQdbQ",
    title: "Why You Should Not Hide Money Under Your Bed",
    duration: "7:19",
    views: "9.4K",
  },
  {
    id: "B8uI9U7G6Zw",
    title: "Why You Should Not Rush Into Financial Decisions",
    duration: "7:48",
    views: "334",
  },
  {
    id: "XsODV7Vk3so",
    title: "Is a 100% Return Safe?",
    duration: "8:31",
    views: "207",
  },
  {
    id: "E2IcChIHJgU",
    title: "Should You Buy an iPhone for Half Price?",
    duration: "8:20",
    views: "259",
  },
];

function VideoCard({ video, index }: { video: Video; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

  return (
    <AnimateOnScroll
      animation="fade-in-up"
      delay={Math.min(index % 3, 2) * 100}
      className="h-full"
    >
      <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#961414]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Thumbnail / Player */}
        <div className="relative aspect-video bg-gray-100">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer"
              aria-label={`Play: ${video.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/15 transition-colors">
                <div className="w-14 h-14 rounded-full bg-[#961414] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Duration badge */}
              <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-0.5 rounded">
                {video.duration}
              </span>
            </button>
          )}
        </div>

        {/* Info */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-base font-bold text-[#52080D] leading-snug group-hover:text-[#961414] transition-colors">
            {video.title}
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            {video.views} views
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#FFF9F9] to-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#52080D] mb-4">
                Learn
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                Free financial education from Plus. Understand investing,
                grow your confidence, and make smarter decisions with your money.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {videos.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up">
            <div className="bg-gradient-to-br from-[#FFF9F9] to-white rounded-2xl p-8 sm:p-12 border border-gray-100 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#52080D] mb-3">
                Want More?
              </h2>
              <p className="text-gray-500 text-base sm:text-lg mb-6 max-w-md mx-auto">
                Subscribe for new videos on investing, personal finance,
                and building wealth from a Ghanaian perspective.
              </p>
              <a
                href="https://youtube.com/@thinklikeanant?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-burgundy inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-base"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="4" />
                  <polygon
                    points="10,8.5 16,12 10,15.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                Subscribe on YouTube
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Download CTA */}
      <DownloadCTA />
    </div>
  );
}
