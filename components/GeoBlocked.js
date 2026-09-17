import Image from "next/image";
import { Globe2 } from "lucide-react";

export default function GeoBlocked() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
      <div className="relative flex flex-col items-center">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white p-2 shadow-sm ring-1 ring-ink/10">
          <Image src="/images/logo.webp" alt="St. John's School crest" fill className="object-contain" sizes="64px" />
        </div>
        <Globe2 className="mt-6 h-6 w-6 text-brick/70" strokeWidth={1.5} />
        <h1 className="mt-4 font-display text-xl font-semibold text-indigo sm:text-2xl">
          This site is for supporters outside India
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
          St.&nbsp;John&rsquo;s School and The Joshua Foundation&rsquo;s online giving page is
          intended for visitors outside India. If you&rsquo;re reaching us from within India,
          please get in touch directly.
        </p>
        <a
          href="tel:+919618841290"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brick px-6 py-3 text-sm font-semibold text-paper shadow-sm hover:bg-brick-dark transition-colors"
        >
          +91 96188 41290
        </a>
      </div>
    </div>
  );
}
