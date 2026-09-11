import Image from "next/image";

export default function PageHero({ eyebrow, title, blurb, image }) {
  return (
    <section className="relative min-h-[360px] overflow-hidden bg-indigo sm:min-h-[420px]">
      {image && (
        <>
          <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-dark/95 via-indigo-dark/70 to-indigo-dark/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-dark/60 via-transparent to-transparent" />
        </>
      )}
      <div className="absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-marigold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-brick/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent sm:h-28" />

      <svg
        className="pointer-events-none absolute left-4 top-6 h-16 w-16 text-marigold-light/25 sm:left-6 lg:left-8"
        viewBox="0 0 100 100"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <circle key={i} cx={8 + (i % 5) * 12} cy={8 + Math.floor(i / 5) * 12} r="2" fill="currentColor" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {eyebrow && (
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-marigold-light">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <svg className="mt-5 h-3 w-20 text-marigold-light" viewBox="0 0 100 12" fill="none">
          <path d="M2,8 C20,2 35,12 50,6 C65,0 80,10 98,4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        {blurb && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">{blurb}</p>
        )}
      </div>
    </section>
  );
}
