import Image from "next/image";

const COLLAGE_LAYOUT = [
  "left-[1%] top-[6%] h-28 w-24 -rotate-6",
  "left-[10%] top-[38%] h-32 w-28 rotate-3",
  "left-[3%] top-[70%] h-28 w-32 rotate-6",
  "left-[19%] top-[14%] h-36 w-32 -rotate-3",
  "left-[24%] top-[54%] h-32 w-28 rotate-8",
  "left-[34%] top-[2%] h-28 w-36 -rotate-4",
  "left-[41%] top-[34%] h-40 w-36 rotate-2",
  "left-[33%] top-[74%] h-32 w-28 -rotate-8",
  "left-[51%] top-[10%] h-32 w-28 rotate-5",
  "left-[58%] top-[46%] h-36 w-32 -rotate-2",
  "left-[49%] top-[78%] h-28 w-32 rotate-4",
  "left-[69%] top-[20%] h-32 w-36 -rotate-5",
  "left-[79%] top-[56%] h-36 w-32 rotate-3",
  "left-[67%] top-[80%] h-28 w-28 -rotate-6",
  "left-[86%] top-[6%] h-28 w-24 rotate-6",
];

export default function GalleryHero({ photos }) {
  const featured = photos.slice(0, COLLAGE_LAYOUT.length);

  return (
    <section className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-indigo via-indigo to-indigo-dark lg:min-h-[420px]">
      {featured.length > 0 && (
        <>
          {/* Mobile: single full-bleed photo (the scattered collage below doesn't fit a narrow screen) */}
          <div className="absolute inset-0 sm:hidden">
            <Image src={featured[0].src} alt="" fill priority className="object-cover" sizes="100vw" />
          </div>

          {/* Tablet/desktop: scattered photo collage */}
          <div className="absolute inset-0 hidden sm:block">
            {featured.map((p, i) => (
              <div
                key={p.id}
                className={`absolute overflow-hidden rounded-xl ring-4 ring-white/15 shadow-2xl ${COLLAGE_LAYOUT[i % COLLAGE_LAYOUT.length]}`}
              >
                <Image src={p.src} alt="" fill className="object-cover" sizes="180px" />
              </div>
            ))}
          </div>
        </>
      )}

      {/* legibility scrim so headline reads clearly over the busy photo wall */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-dark via-indigo-dark/85 to-indigo-dark/35 sm:to-indigo-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-dark/70 via-transparent to-indigo-dark/40" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-25" />

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-marigold/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-brick/25 blur-3xl" />

      <svg
        className="pointer-events-none absolute left-4 top-6 h-16 w-16 text-marigold-light/25 sm:left-6 lg:left-8"
        viewBox="0 0 100 100"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <circle key={i} cx={8 + (i % 5) * 12} cy={8 + Math.floor(i / 5) * 12} r="2" fill="currentColor" />
        ))}
      </svg>

      <div className="relative mx-auto flex min-h-[360px] max-w-7xl items-center px-4 py-10 sm:px-6 sm:py-14 lg:min-h-[420px] lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-marigold-light">Gallery</p>
          <h1 className="font-display text-3xl font-semibold leading-[1.05] text-paper sm:text-4xl lg:text-5xl">
            Moments from St. John&rsquo;s
          </h1>
          <svg className="mt-3 h-3 w-20 text-marigold-light" viewBox="0 0 100 12" fill="none">
            <path d="M2,8 C20,2 35,12 50,6 C65,0 80,10 98,4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/80 sm:text-base">
            Classrooms, celebrations, home visits and everyday life &mdash; a look at the children and
            families behind the school.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent sm:h-28" />
    </section>
  );
}
