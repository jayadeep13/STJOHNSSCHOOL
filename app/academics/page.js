import Image from "next/image";
import Link from "next/link";
import ScrollWaveField from "@/components/ScrollWaveField";
import ResultsCarousel from "@/components/ResultsCarousel";
import { getAcademicsPhotos } from "@/lib/academics";
import {
  FlaskConical,
  Palette,
  Trophy,
  GraduationCap,
  Bus,
  Library,
  Monitor,
  HeartHandshake,
  ArrowRight,
  BookOpen,
  Users,
  BarChart3,
  Star,
  Leaf,
  Send,
} from "lucide-react";

export const metadata = {
  title: "Academics",
  description:
    "State-board English-medium curriculum, classes from LKG to Class 10, science exhibitions and exam results at St. John's School, Dantherapalli.",
};
export const dynamic = "force-dynamic";

const HERO_HIGHLIGHTS = [
  { icon: BookOpen, label: "State Board Curriculum", bg: "bg-emerald-100", color: "text-emerald-700" },
  { icon: Users, label: "Experienced & Caring Staff", bg: "bg-amber-100", color: "text-amber-600" },
  { icon: BarChart3, label: "Holistic Development", bg: "bg-violet-100", color: "text-violet-600" },
  { icon: Star, label: "Strong Foundation for a Brighter Future", bg: "bg-rose-100", color: "text-rose-500" },
];

const CLASSES = ["LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const CARD_PALETTE = [
  { bg: "bg-rose-100", color: "text-rose-500", ring: "ring-rose-200", dot: "bg-rose-400" },
  { bg: "bg-amber-100", color: "text-amber-500", ring: "ring-amber-200", dot: "bg-amber-400" },
  { bg: "bg-emerald-100", color: "text-emerald-500", ring: "ring-emerald-200", dot: "bg-emerald-400" },
  { bg: "bg-sky-100", color: "text-sky-500", ring: "ring-sky-200", dot: "bg-sky-400" },
  { bg: "bg-violet-100", color: "text-violet-500", ring: "ring-violet-200", dot: "bg-violet-400" },
];

const FACILITIES = [
  {
    icon: Bus,
    title: "Transport",
    body: "A dedicated school vehicle brings children from remote villages who would otherwise be unable to attend classes.",
    bg: "bg-emerald-100",
    color: "text-emerald-500",
  },
  {
    icon: Library,
    title: "Library",
    body: "Stocked with 600+ sponsored books, open to St. John's students and community children alike.",
    bg: "bg-amber-100",
    color: "text-amber-500",
  },
  {
    icon: Monitor,
    title: "Digital Classes",
    body: "A growing digital classroom and computer lab, expanding each year as new grades are added.",
    bg: "bg-sky-100",
    color: "text-sky-500",
  },
];

export default async function AcademicsPage() {
  const academicsPhotos = await getAcademicsPhotos();

  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden sm:min-h-[520px] lg:min-h-[560px]">
        {/* full-bleed photo, shared behind both the text and the caption — this is
            what removes the hard seam between a solid panel and a separate photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/acadhero.webp"
            alt="St. John's students in class"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, #FBF5E9 0%, #FBF5E9 40%, rgba(251,245,233,0) 62%)",
            }}
          />
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, #FBF5E9 0%, #FBF5E9 44%, rgba(251,245,233,0) 66%)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute bottom-8 left-4 flex items-end gap-1 sm:bottom-10 sm:left-6">
          <Leaf className="h-6 w-6 -rotate-12 text-orange-400/50 sm:h-8 sm:w-8" strokeWidth={1.25} />
          <Leaf className="-mb-1 h-8 w-8 rotate-12 text-emerald-700/40 sm:h-10 sm:w-10" strokeWidth={1.25} />
          <Leaf className="h-5 w-5 rotate-[70deg] text-orange-400/40 sm:h-6 sm:w-6" strokeWidth={1.25} />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center lg:grid-cols-2">
          <div className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20 xl:pr-14">
            <div className="mb-5 flex items-center gap-2.5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink/60">Academics</p>
              <span className="h-px w-8 bg-emerald-700" />
            </div>

            <h1 className="relative font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
              <span className="text-emerald-800">Curriculum &amp;</span>
              <br />
              <span className="text-orange-500">Syllabus</span>
              <Send className="absolute -right-2 top-2 hidden h-8 w-8 -rotate-12 text-sky-400/70 sm:block lg:right-6" strokeWidth={1.5} />
            </h1>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/65 sm:text-base">
              A state-board English-medium curriculum, taught by a staff that stays with a child through
              every grade &mdash; from their first day in LKG to their board exam results.
            </p>

            <Link
              href="#classes-offered"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-paper shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-900"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-8 flex flex-wrap items-start gap-x-5 gap-y-6 sm:flex-nowrap sm:divide-x sm:divide-ink/10">
              {HERO_HIGHLIGHTS.map((h) => (
                <div key={h.label} className="flex max-w-[7.5rem] flex-col items-center gap-2 text-center sm:pl-5 sm:first:pl-0">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${h.bg}`}>
                    <h.icon className={`h-5 w-5 ${h.color}`} strokeWidth={1.75} />
                  </span>
                  <p className="text-[11px] font-medium leading-tight text-ink/70">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center py-10 lg:h-[480px] lg:py-0">
            <div className="rounded-2xl bg-black/35 px-6 py-5 text-center backdrop-blur-sm">
              <p className="font-display text-xl italic leading-snug text-paper sm:text-2xl">
                Building Bright Futures
              </p>
              <svg className="mx-auto mt-2 h-3 w-16 text-marigold-light" viewBox="0 0 100 12" fill="none">
                <path d="M2,8 C20,2 35,12 50,6 C65,0 80,10 98,4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 leading-[0]">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="block h-12 w-full sm:h-16">
            <path d="M0,35 C300,10 600,45 900,20 C1100,5 1250,35 1440,0 L1440,70 L0,70 Z" fill="#1A1611" />
          </svg>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="absolute inset-x-0 top-0 -mt-1.5 block h-12 w-full sm:h-16">
            <path d="M0,35 C300,10 600,45 900,20 C1100,5 1250,35 1440,0" fill="none" stroke="#F4B91A" strokeWidth="3" />
          </svg>
        </div>
      </section>

      <section id="classes-offered" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-indigo via-indigo to-indigo-dark">
        <div className="absolute inset-0 opacity-70">
          <ScrollWaveField
            colors={["#F4B91A", "#FBDD8E", "#E14B62"]}
            density={110}
            dotSize={2}
            scatter={90}
            cameraHeight={42}
            wave={{ waveSpeed: 180, waveHeight: 160, waveLength: 1900 }}
            tilt={{ tiltStart: 14, rollStart: 0 }}
            cursor={{ cursorRadius: 28, cursorLift: 40 }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-dark/60 via-transparent to-indigo-dark/70" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-marigold/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-brick/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-marigold/20">
              <GraduationCap className="h-5 w-5 text-marigold-light" strokeWidth={1.75} />
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">Classes Offered</h2>
          </div>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-paper/70 sm:text-base">
            St. John&rsquo;s teaches every grade from LKG through Class 10, all following the{" "}
            <span className="font-semibold text-marigold-light">Andhra Pradesh State Board (BSEAP)</span>{" "}
            syllabus, in English medium &mdash; free of cost, for every child who walks through the gate.
          </p>

          <div className="overflow-x-auto pb-2">
            <div className="relative flex min-w-max items-start gap-0 px-1">
              <div className="absolute left-5 right-5 top-5 h-px bg-paper/15" />
              {CLASSES.map((c, i) => {
                const theme = CARD_PALETTE[i % CARD_PALETTE.length];
                return (
                  <div key={c} className="relative flex w-16 flex-col items-center gap-2 sm:w-20">
                    <span
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full ${theme.dot} ring-4 ring-indigo`}
                    >
                      <GraduationCap className="h-4 w-4 text-indigo-dark" strokeWidth={2} />
                    </span>
                    <span className="text-center text-[11px] font-semibold leading-tight text-paper/80 sm:text-xs">
                      {Number.isNaN(Number(c)) ? c : `Class ${c}`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm">
            <p className="text-sm text-paper/85">
              Every one of these 12 grades exists today because a sponsor chose to fund the next classroom.
            </p>
            <Link
              href="/donate"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-marigold px-5 py-2.5 text-sm font-semibold text-indigo-dark shadow-md transition-all hover:-translate-y-0.5 hover:bg-marigold-light"
            >
              <HeartHandshake className="h-4 w-4" strokeWidth={2.5} />
              Sponsor a Child
            </Link>
          </div>
        </div>
      </section>

      {academicsPhotos.length > 0 && (
        <section className="relative overflow-hidden bg-paper py-14 sm:py-20">
          <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-marigold/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-indigo/10 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-brick">Proof in the numbers</p>
              <div className="flex items-center justify-center gap-3">
                <Trophy className="h-5 w-5 text-indigo" />
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-indigo">Results &amp; Notices</h2>
              </div>
              <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-marigold" />
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                Board results, exam toppers and school notices &mdash; each one made possible by a sponsor
                who kept a child in class through exam day.
              </p>
            </div>

            <ResultsCarousel photos={academicsPhotos} />
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-600">Hands-on learning</p>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100">
                  <FlaskConical className="h-5 w-5 text-emerald-600" strokeWidth={1.75} />
                </span>
                <h2 className="font-display text-2xl font-semibold text-indigo sm:text-3xl">Science Exhibitions</h2>
              </div>
              <p className="text-sm leading-relaxed text-ink/65 sm:text-base">
                Every year, students build and present real working models &mdash; solar-powered houses,
                water-harvesting systems and more &mdash; at the annual Science Day exhibition. Visiting
                sponsors and well-wishers often stop by to see the students&rsquo; work firsthand.
              </p>
              <Link
                href="/donate"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-paper shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                Sponsor the Next Science Fair <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-lg ring-1 ring-ink/10">
                <Image
                  src="/images/2019scienceday.webp"
                  alt="Students presenting their science exhibition project models"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 300px, 50vw"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-lg ring-1 ring-ink/10">
                <Image
                  src="/images/sciencfair.webp"
                  alt="Visitors reviewing a student's science fair project"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 300px, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white/60 py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-violet-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-lg ring-1 ring-ink/10 lg:order-1">
              <Image
                src="/images/2019independenceday.webp"
                alt="Students celebrating a cultural day with the Indian flag"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>

            <div className="lg:order-2">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-violet-600">Beyond the classroom</p>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100">
                  <Palette className="h-5 w-5 text-violet-600" strokeWidth={1.75} />
                </span>
                <h2 className="font-display text-2xl font-semibold text-indigo sm:text-3xl">Co-curricular Activities</h2>
              </div>
              <p className="text-sm leading-relaxed text-ink/65 sm:text-base">
                Craftwork, seminars, cultural days and sports are built into the school calendar all year
                round &mdash; from Independence Day celebrations to craft sessions, giving every child a
                well-rounded school life beyond textbooks.
              </p>
              <Link
                href="/donate"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-paper shadow-md transition-all hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Support School Life <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="facilities" className="relative scroll-mt-24 overflow-hidden bg-emerald-50/70">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-600">Built one gift at a time</p>
            <div className="flex items-center justify-center gap-3">
              <Library className="h-5 w-5 text-indigo" />
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-indigo">Facilities Supporting the Classroom</h2>
            </div>
            <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-emerald-600" />
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {FACILITIES.map((f, i) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="absolute right-4 top-4 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-200">
                  Sponsor-funded
                </span>
                <span className="pointer-events-none absolute -bottom-4 -right-2 select-none font-display text-6xl font-black text-ink/[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={`relative flex h-14 w-14 items-center justify-center rounded-full ${f.bg} transition-transform group-hover:scale-105`}>
                  <f.icon className={`h-6 w-6 ${f.color}`} strokeWidth={1.5} />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold text-indigo">{f.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink/65">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[28px] bg-gradient-to-br from-indigo via-indigo to-indigo-dark px-6 py-10 text-center sm:px-14 sm:py-12">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-marigold/25 blur-3xl animate-drift-a" />
            <div className="pointer-events-none absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl animate-drift-b" />
            <HeartHandshake className="relative mx-auto h-8 w-8 text-marigold-light" strokeWidth={1.5} />
            <h3 className="relative mt-4 font-display text-xl font-semibold text-paper sm:text-2xl">
              Every facility here started with one sponsor
            </h3>
            <p className="relative mx-auto mt-2 max-w-md text-sm text-paper/80">
              A bus route, a library shelf, a computer lab &mdash; each one exists because someone chose to
              fund it for a child in Dantherapalli. The next facility is still waiting for its sponsor.
            </p>
            <Link
              href="/donate"
              className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-3 text-sm font-semibold text-indigo-dark shadow-lg transition-all hover:-translate-y-0.5 hover:bg-marigold-light"
            >
              <HeartHandshake className="h-4 w-4" strokeWidth={2.5} />
              Support St. John&rsquo;s
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-[28px] bg-marigold/15 ring-1 ring-marigold/30 p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Trophy className="h-10 w-10 text-brick shrink-0" strokeWidth={1.5} />
          <div>
            <h3 className="font-display text-2xl font-semibold text-indigo">2024&ndash;25 result highlight</h3>
            <p className="mt-2 text-ink/70 leading-relaxed max-w-2xl">
              Our 10th-grade batch was closely monitored by staff throughout the year. One student, Mani
              Kumari, scored 535 out of 600 in the state board exam and secured a &#8377;35,00,000
              government scholarship to IIIT — read her full story on the Student Stories page.
            </p>
            <p className="mt-3 text-sm font-semibold text-brick">
              Results like this start with a sponsor who chooses to keep a child in school.
            </p>
            <Link
              href="/donate"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brick border-b border-brick/30 pb-0.5 hover:border-brick"
            >
              Sponsor the next Mani Kumari <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
