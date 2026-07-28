"use client";

import { useRef, useState } from "react";
import type { Reel } from "@/lib/reels";

type ReelGalleryProps = {
  reels: Reel[];
};

export function ReelGallery({ reels }: ReelGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  function playReel(id: string) {
    Object.entries(videoRefs.current).forEach(([key, video]) => {
      if (!video) return;
      if (key !== id) {
        video.pause();
        video.currentTime = 0;
      }
    });
    setActiveId(id);
    const active = videoRefs.current[id];
    if (active) {
      void active.play().catch(() => {
        /* autoplay policies can block until a second gesture */
      });
    }
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {reels.map((reel, index) => {
        const isActive = activeId === reel.id;
        return (
          <article key={reel.id} className="group">
            <div className="relative overflow-hidden rounded-md bg-navy-deep aspect-[9/16]">
              <video
                ref={(el) => {
                  videoRefs.current[reel.id] = el;
                }}
                src={reel.src}
                className="h-full w-full object-cover"
                playsInline
                preload="metadata"
                controls={isActive}
                onPlay={() => setActiveId(reel.id)}
                onEnded={() => setActiveId(null)}
              />
              {!isActive ? (
                <button
                  type="button"
                  onClick={() => playReel(reel.id)}
                  className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,transparent_45%,rgba(28,45,60,0.72)_100%)] transition hover:bg-[linear-gradient(180deg,transparent_35%,rgba(28,45,60,0.8)_100%)]"
                  aria-label={`Play ${reel.title} ${index + 1}`}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-white shadow-[0_10px_30px_rgba(219,57,43,0.35)]">
                    <span className="ml-0.5 text-lg" aria-hidden>
                      ▶
                    </span>
                  </span>
                </button>
              ) : null}
            </div>
            <p className="mt-3 font-display text-sm font-semibold text-navy">
              {reel.title} {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 text-sm text-muted">{reel.topic}</p>
          </article>
        );
      })}
    </div>
  );
}
