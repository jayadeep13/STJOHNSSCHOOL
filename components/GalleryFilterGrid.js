"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Images } from "lucide-react";

function categoryOf(photo) {
  return photo.category?.trim() || null;
}

export default function GalleryFilterGrid({ photos }) {
  const categories = useMemo(() => {
    const set = new Set(photos.map(categoryOf).filter(Boolean));
    return ["All", ...Array.from(set).sort()];
  }, [photos]);

  const [active, setActive] = useState("All");

  if (photos.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl bg-white/60 px-8 py-16 text-center ring-1 ring-ink/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/5">
          <Images className="h-5 w-5 text-ink/40" strokeWidth={1.75} />
        </div>
        <p className="mt-4 font-display text-lg font-semibold text-indigo">Photos coming soon</p>
        <p className="mt-2 text-sm text-ink/60">
          We&rsquo;re adding new photos from the school. Check back shortly.
        </p>
      </div>
    );
  }

  const filtered = active === "All" ? photos : photos.filter((p) => categoryOf(p) === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2.5">
        {categories.map((c) => {
          const count = c === "All" ? photos.length : photos.filter((p) => categoryOf(p) === c).length;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                active === c
                  ? "bg-brick text-paper shadow-sm"
                  : "bg-white text-ink/65 ring-1 ring-ink/10 hover:bg-ink/5"
              }`}
            >
              {c}
              <span className={active === c ? "text-paper/70" : "text-ink/40"}>{count}</span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl bg-white/60 p-10 text-center text-sm text-ink/60 ring-1 ring-ink/10">
          No photos in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-ink/10 shadow-sm"
            >
              <Image
                src={p.src}
                alt={p.caption || "St. John's School"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                priority={i < 4}
              />
              {(p.category || p.caption) && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent px-3 pb-2.5 pt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {p.category && (
                    <span className="mb-1 inline-block rounded-full bg-marigold/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-indigo-dark">
                      {p.category}
                    </span>
                  )}
                  {p.caption && <p className="truncate text-xs font-medium text-paper">{p.caption}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
