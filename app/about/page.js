import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Snowfall from "@/components/Snowfall";
import {
  MapPin,
  Users,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  Building2,
  CheckCircle2,
  Circle,
  Sparkles,
  Calendar,
  Eye,
  Target,
} from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "How The Joshua Foundation began, our mission and vision, growth milestones, and the road ahead for St. John's School in Dantherapalli, India.",
};

const GROWTH_STATS = [
  { label: "Grades taught", before: "2", after: "6", icon: GraduationCap },
  { label: "Students enrolled", before: "36", after: "225", icon: Users },
  { label: "Girls enrolled", before: "8", after: "90", icon: Sparkles },
  { label: "Classrooms", before: "5 temporary", after: "1 permanent building", icon: Building2 },
];

const MILESTONES = [
  {
    year: "2013",
    title: "The Joshua Foundation is founded",
    body: "Karna and Sandhya Gosa founded The Joshua Foundation (TJF) to bring transformation and hope to Karna's childhood village and the surrounding communities in Andhra Pradesh.",
  },
  {
    year: "June 2014",
    title: "St. John's School opens its doors",
    body: "Two grades. 36 students, 8 of them girls. Five temporary classrooms. TJF's first project — and the beginning of a much longer story.",
  },
  {
    year: "2015 – Sept 2016",
    title: "The first permanent building is funded and completed",
    body: "Talking Tech Foundation funded St. John's first set of permanent classrooms, additional bathrooms, and a library. Construction was completed in September, 2016.",
    images: [
      { src: "/images/schoolabout (2).webp", alt: "Inside St. John's first permanent classroom building" },
      { src: "/images/schoolabout (5).webp", alt: "The completed St. John's School building" },
    ],
  },
  {
    year: "Today",
    title: "A second expansion is underway",
    body: "Workers are busy building five additional classrooms and a computer lab. We are within $10,000 of the funds needed to complete this expansion.",
    images: [{ src: "/images/schoolabout (6).webp", alt: "Construction underway on St. John's second expansion" }],
    highlight: true,
  },
];

const VISION_GOALS = [
  { label: "12 grades, LKG through Class 10", done: false },
  { label: "480 students enrolled", done: false },
  { label: "Classroom space for every grade", done: false },
  { label: "A library", done: true },
  { label: "Single-sex bathrooms", done: true },
  { label: "A computer lab", done: false },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden sm:min-h-[560px]">
        <div className="absolute inset-0">
          <Image
            src="/images/schoolabout (4).webp"
            alt="St. John's School students, staff and the school building"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #100D0A 0%, rgba(16,13,10,0.85) 30%, rgba(16,13,10,0.35) 62%, rgba(16,13,10,0.15) 100%)",
            }}
          />
        </div>

        <Reveal className="relative mx-auto flex min-h-[520px] max-w-5xl flex-col justify-end px-4 py-14 sm:min-h-[560px] sm:px-6 sm:py-16 lg:px-8">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-marigold-light backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" /> Dantherapalli, Andhra Pradesh
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl lg:text-6xl">
            From one village, a movement of hope
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">
            The Joshua Foundation was founded in 2013 by Karna and Sandhya Gosa to bring transformation and
            hope to Karna&rsquo;s childhood village and the surrounding communities.
          </p>
        </Reveal>
      </section>

      {/* Origin story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal direction="left" className="lg:col-span-7">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brick">Where it all began</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-indigo sm:text-4xl">
              A very poor, rural, mostly Dalit community
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
              <p>
                About six hours southeast of Hyderabad lies a rural community in Andhra Pradesh &mdash;
                mostly Dalit (&ldquo;Untouchable&rdquo;) families for whom life is extremely challenging.
                The people here suffer many forms of oppression, lack basic services, and have few
                vocational and educational opportunities.
              </p>
              <p>
                The Joshua Foundation&rsquo;s first project &mdash; of several envisioned &mdash; has been
                St. John&rsquo;s English Medium School, a school that meets the Indian government&rsquo;s
                educational requirements. Students are taught in English, and also learn the official and
                local languages, Hindi and Telugu.
              </p>
              <p>
                St. John&rsquo;s focus is to develop the whole child. Although it is a Christian school,
                the staff aim to love, serve and educate students from many different backgrounds &mdash;
                students are accepted regardless of their faith, caste, or their parents&rsquo; ability to
                pay.
              </p>
            </div>
            <Link
              href="/founders"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brick border-b border-brick/30 pb-0.5 hover:border-brick"
            >
              Meet Karna &amp; Sandhya Gosa <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal direction="right" delay={120} className="lg:col-span-5">
            <div className="overflow-hidden rounded-[24px] shadow-lg ring-1 ring-ink/10">
              <Image
                src="/images/schoolabout (1).webp"
                alt="Children on the St. John's School grounds in the early years"
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Growth by the numbers */}
      <section className="relative overflow-hidden bg-indigo-dark">
        <div className="absolute inset-0 opacity-60 blur-[1.5px]">
          <Snowfall color="#ffffff" count={180} opacityMin={15} opacityMax={55} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(16,13,10,0.55)_75%,rgba(16,13,10,0.9)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-dark/80 via-transparent to-indigo-dark/80" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-marigold-light">Growth by the numbers</p>
            <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
              From a first day in June 2014, to today
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/70 sm:text-base">
              St. John&rsquo;s grows by adding one new pre-K class every year &mdash; and every grade added
              exists because a sponsor chose to fund it.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GROWTH_STATS.map((s, i) => (
              <Reveal key={s.label} direction="up" delay={i * 80}>
                <div className="h-full rounded-[26px] border border-white/15 bg-white/[0.07] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_20px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl backdrop-saturate-150">
                  <s.icon className="h-5 w-5 text-marigold-light" strokeWidth={1.75} />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-paper/60">{s.label}</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-lg text-paper/50 line-through decoration-brick/60">{s.before}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-paper/40" />
                    <span className="font-display text-2xl font-bold text-paper">{s.after}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-paper/40">2014 &rarr; Today</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Whole-child / inclusive mission */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal direction="left" className="lg:order-2 lg:col-span-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brick">Our focus</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-indigo sm:text-4xl">
              Every child, seen &mdash; girls, especially
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
              <p>
                There is a strong, deliberate focus on recruiting and educating young girls, since education
                for girls in India is often considered unimportant &mdash; even a waste of resources. At St.
                John&rsquo;s, that belief is met head-on: today, 90 of our 225 students are girls.
              </p>
              <p>
                The students are thriving. Their parents and our staff are thrilled with the growth
                they&rsquo;ve observed, and interest in the school continues to grow across the surrounding
                villages.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-marigold/10 p-4 ring-1 ring-marigold/20">
              <HeartHandshake className="h-6 w-6 shrink-0 text-brick" strokeWidth={1.5} />
              <p className="text-sm text-ink/70">
                All development and daily operations depend on the generosity of individuals and
                organizations like you.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120} className="lg:order-1 lg:col-span-6">
            <div className="relative">
              <div className="overflow-hidden rounded-[24px] shadow-lg ring-1 ring-ink/10">
                <Image
                  src="/images/schoolabout (7).webp"
                  alt="Students playing together on the school playground"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 w-40 overflow-hidden rounded-2xl shadow-xl ring-4 ring-paper sm:-left-10 sm:w-48">
                <Image
                  src="/images/schoolabout (1)-alt.webp"
                  alt="The school transport bringing children from remote villages"
                  width={320}
                  height={240}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Milestones timeline */}
      <section className="relative overflow-hidden bg-white/60 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-brick">Our journey so far</p>
            <h2 className="font-display text-2xl font-semibold text-indigo sm:text-3xl">Milestones</h2>
            <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-marigold" />
          </Reveal>

          <div className="relative">
            <div className="absolute left-[27px] top-2 hidden h-[calc(100%-16px)] w-px bg-ink/10 sm:block" />
            <div className="space-y-12">
              {MILESTONES.map((m, i) => (
                <Reveal key={m.year} direction="up" delay={i * 60}>
                  <div className="relative flex gap-6 sm:gap-8">
                    <div className="hidden shrink-0 sm:block">
                      <span
                        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full font-display text-xs font-bold ${
                          m.highlight ? "bg-marigold text-indigo-dark" : "bg-indigo text-paper"
                        }`}
                      >
                        <Calendar className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                    </div>
                    <div className={`flex-1 rounded-2xl p-6 sm:p-7 ${m.highlight ? "bg-indigo shadow-lg" : "bg-white shadow-sm ring-1 ring-ink/5"}`}>
                      <p className={`font-mono text-xs font-bold uppercase tracking-wide ${m.highlight ? "text-marigold-light" : "text-brick"}`}>
                        {m.year}
                      </p>
                      <h3 className={`mt-1.5 font-display text-lg font-semibold sm:text-xl ${m.highlight ? "text-paper" : "text-indigo"}`}>
                        {m.title}
                      </h3>
                      <p className={`mt-2 text-sm leading-relaxed sm:text-[15px] ${m.highlight ? "text-paper/75" : "text-ink/65"}`}>
                        {m.body}
                      </p>

                      {m.images && (
                        <div className={`mt-5 grid gap-3 ${m.images.length > 1 ? "grid-cols-2" : "sm:max-w-sm"}`}>
                          {m.images.map((img) => (
                            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-ink/10">
                              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width: 1024px) 300px, 50vw" />
                            </div>
                          ))}
                        </div>
                      )}

                      {m.highlight && (
                        <Link
                          href="/donate"
                          className="mt-5 inline-flex items-center gap-2 rounded-full bg-marigold px-5 py-2.5 text-sm font-semibold text-indigo-dark shadow-md transition-all hover:-translate-y-0.5 hover:bg-marigold-light"
                        >
                          <HeartHandshake className="h-4 w-4" strokeWidth={2.5} />
                          Help Us Close the Gap
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="select-none font-display text-[280px] font-black leading-none text-ink/[0.03] sm:text-[360px]">
            &ldquo;
          </span>
        </div>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brick">Why we exist</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-indigo sm:text-4xl">
              Mission &amp; Vision
            </h2>
          </Reveal>

          <div className="divide-y divide-ink/10 rounded-[28px] bg-white/70 shadow-lg ring-1 ring-ink/5 backdrop-blur-sm">
            <Reveal direction="up">
              <div className="flex flex-col items-center gap-4 px-6 py-10 text-center sm:px-14 sm:py-12">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100">
                  <Eye className="h-6 w-6 text-sky-600" strokeWidth={1.5} />
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600">Our Vision</p>
                <p className="max-w-xl font-display text-xl italic leading-relaxed text-indigo sm:text-2xl">
                  A Dantherapalli where every child &mdash; girl or boy, any caste, any faith &mdash;
                  grows up educated, healthy, and free of the poverty that shaped their parents&rsquo;
                  lives.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={100}>
              <div className="flex flex-col items-center gap-4 px-6 py-10 text-center sm:px-14 sm:py-12">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-marigold/15">
                  <Target className="h-6 w-6 text-marigold-dark" strokeWidth={1.5} />
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-marigold-dark">Our Mission</p>
                <p className="max-w-xl font-display text-xl italic leading-relaxed text-indigo sm:text-2xl">
                  To provide free, whole-child English-medium education to underprivileged children
                  around Dantherapalli &mdash; regardless of caste, creed, or a family&rsquo;s ability to
                  pay &mdash; so one generation&rsquo;s education becomes the next generation&rsquo;s
                  opportunity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Growth roadmap */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal direction="left" className="lg:col-span-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brick">Where we&rsquo;re headed</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-indigo sm:text-4xl">
              The road ahead for St. John&rsquo;s
            </h2>
            <p className="mt-5 leading-relaxed text-ink/75">
              St. John&rsquo;s aims to eventually teach 12 grades and 480 students, with enough classroom
              space for every one of them &mdash; plus a library, single-sex bathrooms and a computer lab.
              Here&rsquo;s where that stands today:
            </p>

            <ul className="mt-7 space-y-3">
              {VISION_GOALS.map((g) => (
                <li key={g.label} className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-ink/5">
                  {g.done ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" strokeWidth={1.75} />
                  ) : (
                    <Circle className="h-5 w-5 shrink-0 text-ink/25" strokeWidth={1.75} />
                  )}
                  <span className={`text-sm ${g.done ? "text-ink/80" : "text-ink/55"}`}>{g.label}</span>
                  {g.done && (
                    <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-200">
                      Achieved
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={120} className="lg:col-span-6">
            <div className="overflow-hidden rounded-[24px] shadow-lg ring-1 ring-ink/10">
              <Image
                src="/images/schoolabout (3).webp"
                alt="The St. John's School campus today"
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Funding CTA */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-gradient-to-br from-indigo via-indigo to-indigo-dark px-6 py-12 text-center sm:px-14 sm:py-14">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-marigold/25 blur-3xl animate-drift-a" />
            <div className="pointer-events-none absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-brick/25 blur-3xl animate-drift-b" />

            <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-marigold-light">
              Second expansion &bull; five classrooms &amp; a computer lab
            </p>
            <h3 className="relative mt-4 font-display text-2xl font-semibold text-paper sm:text-3xl">
              We&rsquo;re within $10,000 of finishing
            </h3>
            <p className="relative mx-auto mt-3 max-w-lg text-sm leading-relaxed text-paper/80 sm:text-base">
              All development and daily operations at St. John&rsquo;s depend on the generosity of
              individuals and organizations. If you feel led to help us close this final gap, we&rsquo;d
              love to hear from you.
            </p>
            <Link
              href="/donate"
              className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-marigold px-7 py-3.5 text-sm font-semibold text-indigo-dark shadow-lg transition-all hover:-translate-y-0.5 hover:bg-marigold-light"
            >
              <HeartHandshake className="h-4 w-4" strokeWidth={2.5} />
              Support the Expansion
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
