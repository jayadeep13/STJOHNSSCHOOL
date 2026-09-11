"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";

export default function ResultsCarousel({ photos }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const count = photos.length;

  useEffect(() => {
    if (count <= 1 || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5500);
    return () => clearInterval(id);
  }, [count, paused]);

  if (count === 0) return null;

  const go = (dir) => setIndex((i) => (i + dir + count) % count);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
    touchStartX.current = null;
  };

  const active = photos[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -inset-1 rounded-[32px] bg-gradient-to-br from-marigold via-brick to-indigo opacity-40 blur-md" />

      <div
        className="relative overflow-hidden rounded-[28px] bg-white shadow-xl ring-1 ring-ink/10"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-indigo px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-paper shadow-md sm:left-5 sm:top-5">
          <Trophy className="h-3.5 w-3.5 text-marigold-light" strokeWidth={2} />
          Results &amp; Notices
        </div>

        {count > 1 && (
          <div className="absolute right-4 top-4 z-10 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-paper backdrop-blur-sm sm:right-5 sm:top-5">
            {index + 1} / {count}
          </div>
        )}

        <div className="relative h-[300px] w-full bg-gradient-to-b from-ink/[0.03] to-ink/[0.07] sm:h-[440px] lg:h-[560px]">
          {photos.map((p, i) => (
            <div
              key={p.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={p.src}
                alt={p.caption || "Academics highlight"}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 900px, 100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-indigo shadow-md ring-1 ring-ink/10 transition-all hover:-translate-x-0.5 hover:bg-white sm:left-4"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-indigo shadow-md ring-1 ring-ink/10 transition-all hover:translate-x-0.5 hover:bg-white sm:right-4"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {active?.caption && (
          <p className="border-t border-ink/10 bg-white px-5 py-3 text-center text-sm font-medium text-ink/70">
            {active.caption}
          </p>
        )}

        {count > 1 && (
          <div className="flex items-center justify-center gap-2 border-t border-ink/5 bg-white py-3">
            {photos.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-marigold" : "w-2 bg-ink/15 hover:bg-ink/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
