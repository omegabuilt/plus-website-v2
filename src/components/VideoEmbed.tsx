"use client";

import { useState } from "react";

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export default function VideoEmbed({
  videoId,
  title = "Watch video",
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-video bg-gray-900">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="group relative w-full h-full cursor-pointer"
          aria-label={`Play: ${title}`}
        >
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#961414] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

        </button>
      )}
    </div>
  );
}
