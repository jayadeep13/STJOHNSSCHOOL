import Image from "next/image";

export default function GeoBlocked() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
      <div className="relative flex flex-col items-center">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white p-2 shadow-sm ring-1 ring-ink/10">
          <Image src="/images/logo.webp" alt="St. John's School crest" fill className="object-contain" sizes="64px" />
        </div>
        <p className="mt-6 text-sm font-medium text-ink/60">This site cannot be opened here.</p>
      </div>
    </div>
  );
}
