import Image from "next/image";
import {
  Quote,
  Utensils,
  Flag,
  Users,
  HeartHandshake,
  BookOpen,
  Eye,
  Shirt,
  Ambulance,
  Landmark,
  Sparkles,
  GraduationCap,
  Droplet,
  Scissors,
  Trash2,
  FlaskConical,
  ShieldAlert,
  Flame,
  Stethoscope,
  Shield,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const ICONS = {
  Utensils,
  Flag,
  Users,
  HeartHandshake,
  BookOpen,
  Eye,
  Shirt,
  Ambulance,
  Landmark,
  Sparkles,
  GraduationCap,
  Droplet,
  Scissors,
  Trash2,
  FlaskConical,
  ShieldAlert,
  Flame,
  Stethoscope,
  Shield,
};

const PALETTE = [
  { bg: "bg-rose-50", badge: "bg-rose-100 text-rose-600" },
  { bg: "bg-amber-50", badge: "bg-amber-100 text-amber-600" },
  { bg: "bg-emerald-50", badge: "bg-emerald-100 text-emerald-600" },
  { bg: "bg-sky-50", badge: "bg-sky-100 text-sky-600" },
  { bg: "bg-violet-50", badge: "bg-violet-100 text-violet-600" },
];

function splitHighlight(h) {
  const idx = h.indexOf(" — ");
  if (idx === -1) return { date: null, text: h };
  return { date: h.slice(0, idx), text: h.slice(idx + 3) };
}

function EventImage({ src, alt, direction, delay, fit = "cover", aspect }) {
  if (fit === "contain") {
    return (
      <Reveal direction={direction} delay={delay} duration={650} className="bg-white p-4 sm:p-6">
        <div className="relative mx-auto w-full max-w-xs" style={{ aspectRatio: aspect }}>
          <Image src={src} alt={alt} fill className="object-contain" sizes="(min-width: 640px) 30vw, 90vw" />
        </div>
      </Reveal>
    );
  }
  return (
    <Reveal direction={direction} delay={delay} duration={650} className="relative h-56 sm:h-full sm:min-h-[240px]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 640px) 30vw, 100vw" />
    </Reveal>
  );
}

function EventText({ event, theme, index }) {
  const Icon = ICONS[event.icon] || Sparkles;
  return (
    <div className="relative p-6 sm:p-8">
      <Reveal direction="zoom" delay={150} duration={600} className="pointer-events-none absolute right-5 top-3 select-none">
        <span className="font-display text-6xl font-black text-ink/[0.04] sm:text-7xl">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Reveal>
      <div className="relative mb-3 flex items-center gap-3">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${theme.badge}`}>
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <p className="ledger-date text-xs font-semibold text-brick">{event.date}</p>
      </div>
      <h4 className="relative font-display text-xl sm:text-2xl font-semibold text-indigo leading-tight mb-4">
        {event.title}
      </h4>
      <div className="relative space-y-3">
        {event.body.map((p, j) => (
          <p key={j} className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function EventCard({ event, index }) {
  const imageLeft = index % 2 === 0;
  const images = event.images || (event.image ? [event.image] : []);
  const gridCols = images.length === 2 ? "sm:grid-cols-[1fr_1.6fr_1fr]" : images.length === 1 ? "sm:grid-cols-2" : "";
  const theme = PALETTE[index % PALETTE.length];
  const itemsClass = images.length === 1 && event.imageFit === "contain" ? "sm:items-start" : "sm:items-stretch";

  return (
    <article className={`overflow-hidden rounded-[26px] shadow-sm ring-1 ring-ink/10 ${theme.bg}`}>
      <div className={`grid gap-0 ${itemsClass} ${gridCols}`}>
        {images.length === 2 ? (
          <>
            <EventImage src={images[0]} alt={event.title} direction="left" delay={0} />
            <Reveal direction="up" delay={120} duration={650}>
              <EventText event={event} theme={theme} index={index} />
            </Reveal>
            <EventImage src={images[1]} alt={`${event.title} — photo 2`} direction="right" delay={0} />
          </>
        ) : (
          <>
            {images.length === 1 && (
              <div className={imageLeft ? "sm:order-1" : "sm:order-2"}>
                <EventImage
                  src={images[0]}
                  alt={event.title}
                  direction={imageLeft ? "left" : "right"}
                  delay={0}
                  fit={event.imageFit}
                  aspect={event.imageAspect}
                />
              </div>
            )}
            <Reveal
              direction={images.length ? (imageLeft ? "right" : "left") : "up"}
              delay={images.length ? 120 : 0}
              duration={650}
              className={images.length ? (imageLeft ? "sm:order-2" : "sm:order-1") : ""}
            >
              <EventText event={event} theme={theme} index={index} />
            </Reveal>
          </>
        )}
      </div>

      {event.note && (
        <Reveal direction="up" delay={200} duration={600}>
          <div className="border-t border-ink/10 bg-marigold/10 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <Quote className="h-5 w-5 shrink-0 text-brick" strokeWidth={1.75} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brick mb-2">{event.note.heading}</p>
                <p className="text-sm italic leading-relaxed text-ink/75 sm:text-[15px]">{event.note.body}</p>
              </div>
            </div>
          </div>
        </Reveal>
      )}
    </article>
  );
}

function JournalPhoto({ src, alt }) {
  return (
    <div className="relative h-56 bg-ink/5 sm:h-full sm:min-h-[220px]">
      <Image src={src} alt={alt} fill className="object-contain" sizes="(min-width: 640px) 30vw, 100vw" />
    </div>
  );
}

function JournalText({ event, theme }) {
  const Icon = ICONS[event.icon] || Sparkles;
  return (
    <div className="p-6 sm:p-7">
      <div className="mb-3 flex items-center gap-3">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${theme.badge}`}>
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <p className="ledger-date text-xs font-semibold text-brick">{event.date}</p>
      </div>
      <h4 className="font-display text-lg sm:text-xl font-semibold text-indigo leading-tight mb-3">{event.title}</h4>
      <div className="space-y-3">
        {event.body.map((p, j) => (
          <p key={j} className="text-sm leading-relaxed text-ink/70">
            {p}
          </p>
        ))}
      </div>

      {event.note && (
        <div className="mt-4 rounded-2xl bg-marigold/10 p-4">
          <div className="flex items-start gap-2.5">
            <Quote className="h-4 w-4 shrink-0 text-brick" strokeWidth={1.75} />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-brick mb-1">{event.note.heading}</p>
              <p className="text-sm italic leading-relaxed text-ink/70">{event.note.body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function JournalCard({ event, index }) {
  const images = event.images || (event.image ? [event.image] : []);
  const theme = PALETTE[index % PALETTE.length];
  const imageLeft = index % 2 === 0;
  const gridCols =
    images.length === 2 ? "sm:grid-cols-[1fr_1.5fr_1fr]" : images.length === 1 ? "sm:grid-cols-2" : "";

  return (
    <Reveal direction="up" duration={600}>
      <article className="overflow-hidden rounded-[22px] bg-white shadow-sm ring-1 ring-ink/10">
        <div className={`grid gap-0 sm:items-stretch ${gridCols}`}>
          {images.length === 2 ? (
            <>
              <JournalPhoto src={images[0]} alt={event.title} />
              <JournalText event={event} theme={theme} />
              <JournalPhoto src={images[1]} alt={`${event.title} — photo 2`} />
            </>
          ) : images.length === 1 ? (
            <>
              <div className={imageLeft ? "sm:order-1" : "sm:order-2"}>
                <JournalPhoto src={images[0]} alt={event.title} />
              </div>
              <div className={imageLeft ? "sm:order-2" : "sm:order-1"}>
                <JournalText event={event} theme={theme} />
              </div>
            </>
          ) : (
            <JournalText event={event} theme={theme} />
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function AnnualReportBrowser({ report }) {
  if (!report) return null;

  if (report.events && report.layout === "journal") {
    return (
      <div className="space-y-6">
        {report.events.map((event, i) => (
          <JournalCard key={event.title} event={event} index={i} />
        ))}
      </div>
    );
  }

  if (report.events) {
    return (
      <div className="space-y-6">
        {report.events.map((event, i) => (
          <EventCard key={event.title} event={event} index={i} />
        ))}
      </div>
    );
  }

  return (
    <Reveal>
      <div className="rounded-[28px] bg-white/60 ring-1 ring-ink/10 p-7 sm:p-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold text-indigo">{report.year}</h3>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink/40">
            {report.highlights.length} entries
          </span>
        </div>

        <ol className="relative space-y-7 border-l-2 border-ink/10 pl-6 sm:pl-8">
          {report.highlights.map((h, i) => {
            const { date, text } = splitHighlight(h);
            return (
              <Reveal key={h} as="li" direction="left" delay={i * 80} duration={550} y={16} className="relative">
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-brick ring-4 ring-paper sm:-left-[37px]" />
                {date && <p className="ledger-date text-xs text-brick mb-1">{date}</p>}
                <p className="text-sm leading-relaxed text-ink/75 sm:text-[15px]">{text}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Reveal>
  );
}
