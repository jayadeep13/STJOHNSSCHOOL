import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import WireThroat from "@/components/WireThroat";
import {
  ArrowUpRight,
  GraduationCap,
  Users,
  HeartHandshake,
  Sparkles,
  Quote,
  MapPin,
  Calendar,
  BadgeCheck,
} from "lucide-react";

const IMPACT_STATS = [
  { icon: Calendar, value: "2014", label: "Founded with 2 grades & 36 students", bg: "bg-rose-100", color: "text-rose-500" },
  { icon: Users, value: "225+", label: "Students today, 90+ of them girls", bg: "bg-amber-100", color: "text-amber-500" },
  { icon: BadgeCheck, value: "100%", label: "Free, English-medium education", bg: "bg-emerald-100", color: "text-emerald-500" },
  { icon: MapPin, value: "10+", label: "Villages reached around Dantherapalli", bg: "bg-sky-100", color: "text-sky-500" },
];

const TIMELINE = [
  { date: "2013", title: "The Joshua Foundation founded", body: "Karna & Sandhya Gosa began TJF to bring hope to Karna's childhood village and the villages around Dantherapalli.", img: "/images/schoolabout (1).webp" },
  { date: "20.04.2017", title: "First KG Graduation Day", body: "33 kindergarteners graduated in cap and gown — the first ceremony of its kind the Mandal Education Officer had ever attended.", img: "/images/2017annual.webp" },
  { date: "17.04.2018", title: "Free eye camp, 300 screened", body: "Doctors from Santhiram Medical College screened 300 people from 10 surrounding villages; 60 surgeries were completed free of cost.", img: "/images/2018eyecheckup (1).webp" },
  { date: "06.2019", title: "Beti Bachao Beti Padhao", body: "60 girls sponsored for the school year, growing the fight for girls' education in a community that once resisted it.", img: "/images/2019betipado.webp" },
  { date: "2020–21", title: "Standing through COVID-19", body: "Vegetables, food, masks and quarantine groceries reached hundreds of families across Giddalur during lockdown.", img: "/images/2021janfoodsupply.webp" },
  { date: "2024–25", title: "Mani Kumari's scholarship", body: "A student who nearly left school scored 535/600 in her 10th boards and won a ₹35,00,000 government scholarship to study at IIIT.", img: "/images/mani1.webp" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden sm:min-h-[680px] lg:min-h-[720px]">
        <div className="absolute inset-0">
          <Image
            src="/images/home2.webp"
            alt="Together for a Brighter Tomorrow — St. John's School students"
            fill
            priority
            className="object-cover object-[72%_38%] sm:object-center"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/25" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brick/20 via-transparent to-marigold/10 mix-blend-overlay" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-25" />
        <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-brick/20 blur-3xl animate-drift-b" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-marigold/10 blur-3xl animate-drift-a" />

        <svg
          className="pointer-events-none absolute right-6 top-6 h-16 w-16 text-marigold-light/15 sm:right-8 lg:right-12"
          viewBox="0 0 100 100"
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={i} cx={8 + (i % 5) * 12} cy={8 + Math.floor(i / 5) * 12} r="2" fill="currentColor" />
          ))}
        </svg>
        <svg
          className="pointer-events-none absolute left-4 bottom-16 h-14 w-14 text-marigold-light/10 sm:left-6 lg:left-10"
          viewBox="0 0 100 100"
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={i} cx={8 + (i % 5) * 12} cy={8 + Math.floor(i / 5) * 12} r="2" fill="currentColor" />
          ))}
        </svg>
        <svg className="pointer-events-none absolute left-5 top-5 h-9 w-9 text-marigold-light/20 sm:left-8 sm:top-8" viewBox="0 0 40 40" fill="none">
          <path d="M2 16V2H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pb-16 pt-12 sm:min-h-[680px] sm:px-6 sm:pt-16 lg:min-h-[720px] lg:px-8 lg:pt-20">
          <Reveal
            className="max-w-2xl rounded-[28px] border border-white/10 bg-black/35 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_20px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:p-9"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-marigold-light/25 bg-white/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-marigold-light backdrop-blur-sm">
              <HeartHandshake className="h-3.5 w-3.5" strokeWidth={2} />
              A Ministry of The Joshua Foundation &middot; Reg. No. 184/2014
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-marigold-light/80 mb-4">
              Dantherapalli · Giddalur · Markapuram District · A.P.
            </p>
            <h1 className="font-display text-[1.7rem] sm:text-4xl lg:text-[3.4rem] font-semibold text-paper leading-[1.05] tracking-tight whitespace-nowrap animate-fade-up [animation-delay:150ms] opacity-0">
              Exists to{" "}
              <span className="inline-block bg-gradient-to-r from-marigold via-marigold-light to-marigold bg-[length:200%_auto] bg-clip-text italic font-medium text-transparent animate-text-shine">
                Empower.
              </span>
            </h1>
            <svg className="mt-4 h-3 w-20 text-marigold-light" viewBox="0 0 100 12" fill="none">
              <path d="M2,8 C20,2 35,12 50,6 C65,0 80,10 98,4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <p className="mt-5 hidden text-paper/80 text-base sm:block sm:text-lg max-w-xl leading-relaxed">
              St. John&rsquo;s English Medium School gives children from Dantherapalli and the
              surrounding villages &mdash; regardless of caste, creed or their parents&rsquo;
              ability to pay &mdash; a free, whole-child education.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-brick px-6 py-3.5 text-sm font-semibold text-paper shadow-lg shadow-brick/30 hover:bg-brick-dark hover:shadow-xl hover:shadow-brick/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all"
              >
                <HeartHandshake className="h-4 w-4" strokeWidth={2.5} />
                Sponsor a Child
              </Link>
              <Link
                href="/stories"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper/90 border-b border-paper/30 pb-0.5 hover:border-marigold hover:text-marigold transition-colors"
              >
                Read their stories
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 sm:hidden">
              <div className="flex -space-x-3">
                {[
                  { src: "/images/mani.webp", alt: "Mani Kumari, a St. John's student" },
                  { src: "/images/Ramija.webp", alt: "Ramija, a St. John's student" },
                  { src: "/images/story2.webp", alt: "A St. John's student" },
                  { src: "/images/amarnath1.webp", alt: "Amaranad, a St. John's student" },
                ].map((p) => (
                  <span key={p.src} className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-[#123324]">
                    <Image src={p.src} alt={p.alt} fill className="object-cover object-top" sizes="32px" />
                  </span>
                ))}
              </div>
              <p className="text-xs leading-snug text-paper/80">
                Joining <span className="font-semibold text-paper">225+ students</span> across 10+ villages.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="absolute bottom-8 right-6 hidden sm:block lg:right-14">
          <div className="flex max-w-sm items-center gap-4 rounded-2xl border border-white/10 bg-black/35 px-5 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_20px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm">
            <div className="flex -space-x-3">
              {[
                { src: "/images/mani.webp", alt: "Mani Kumari, a St. John's student" },
                { src: "/images/Ramija.webp", alt: "Ramija, a St. John's student" },
                { src: "/images/story2.webp", alt: "A St. John's student" },
                { src: "/images/amarnath1.webp", alt: "Amaranad, a St. John's student" },
              ].map((p) => (
                <span key={p.src} className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#123324]">
                  <Image src={p.src} alt={p.alt} fill className="object-cover object-top" sizes="40px" />
                </span>
              ))}
            </div>
            <p className="text-xs leading-snug text-paper/80">
              Joining <span className="font-semibold text-paper">225+ students</span> across
              <br className="sm:hidden" /> 10+ villages around Dantherapalli.
            </p>
          </div>
        </Reveal>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 leading-[0]">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="block h-8 w-full sm:h-12">
            <path d="M0,35 C300,10 600,45 900,20 C1100,5 1250,35 1440,0 L1440,70 L0,70 Z" fill="#FBF5E9" />
          </svg>
        </div>
      </section>

      {/* IMPACT AT A GLANCE */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-marigold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-sky-200/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-10 max-w-xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brick">Impact at a glance</p>
            <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-marigold" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_STATS.map((s, i) => (
              <Reveal key={s.label} direction="up" delay={i * 90}>
                <div className="group h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full ${s.bg} transition-transform group-hover:scale-105`}>
                    <s.icon className={`h-6 w-6 ${s.color}`} strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 font-display text-3xl font-semibold text-indigo">{s.value}</p>
                  <p className="mt-1.5 text-sm text-ink/60 leading-snug">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal direction="left" className="lg:col-span-6">
            <div className="overflow-hidden rounded-[28px] shadow-lg ring-1 ring-ink/10">
              <Image
                src="/images/schoolabout (4).webp"
                alt="St. John's School students, staff and the school building"
                width={800}
                height={600}
                className="h-[320px] w-full object-cover sm:h-[400px]"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={120} className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brick mb-3">Our story</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-indigo leading-tight">
              A calling, a piece of land, and a heart to serve.
            </h2>
            <p className="mt-5 text-ink/70 leading-relaxed">
              The Joshua Foundation was founded in 2013 by Karna and Sandhya Gosa to bring transformation
              and hope to Karna&rsquo;s childhood village. What began as two grades and thirty-six students
              in temporary classrooms has grown into a permanent school &mdash; still free, still
              whole-child, still open to every family regardless of faith, caste or ability to pay.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-ink/5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-100">
                  <GraduationCap className="h-4.5 w-4.5 text-rose-500" strokeWidth={1.75} />
                </span>
                <p className="text-sm text-ink/70 leading-snug">
                  Whole-child education, English medium alongside Telugu and Hindi.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-ink/5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <Users className="h-4.5 w-4.5 text-emerald-600" strokeWidth={1.75} />
                </span>
                <p className="text-sm text-ink/70 leading-snug">
                  Nutrition, medical care, tailoring centers and disaster relief for families.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-marigold/15 via-white to-white p-5 shadow-sm ring-1 ring-marigold/20">
              <Quote className="h-5 w-5 text-amber-600" strokeWidth={1.75} />
              <p className="mt-2 font-display text-lg italic leading-snug text-indigo">
                &ldquo;This celebration is very special &mdash; St. John&rsquo;s is the first school in our
                zone to hold a KG Graduation Day.&rdquo;
              </p>
              <p className="mt-2 text-xs font-mono uppercase tracking-wide text-ink/50">
                Mr. Subbha Rao, Mandal Educational Officer
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brick border-b border-brick/30 pb-0.5 hover:border-brick"
            >
              Read our full story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE — signature element */}
      <section className="relative overflow-hidden bg-[#241832] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
        <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-marigold/20 blur-3xl animate-drift-a" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brick/25 blur-3xl animate-drift-b" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-marigold-light mb-3">The ledger</p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper max-w-lg">
                  Our journey, entry by entry.
                </h2>
              </div>
              <Link href="/annual-report" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-marigold-light hover:text-marigold">
                Full activity reports <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.date} delay={i * 70} direction="up">
                <div className="group h-full overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.06] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-xl backdrop-saturate-150 transition-all hover:-translate-y-1 hover:bg-white/[0.09]">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, 50vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-marigold px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-indigo-dark">
                      {item.date}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-paper">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/65">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT STORIES */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-paper to-amber-50">
        <svg
          viewBox="0 0 200 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute -right-6 top-0 h-56 w-56 text-brick/10 sm:h-72 sm:w-72 lg:-right-2 lg:h-[22rem] lg:w-[22rem]"
        >
          <path d="M20 130 V60 L100 20 L180 60 V130" />
          <path d="M20 130 H180" />
          <rect x="42" y="78" width="26" height="26" />
          <rect x="88" y="78" width="24" height="26" />
          <rect x="132" y="78" width="26" height="26" />
          <path d="M100 20 V6" />
          <path d="M100 6 L120 13 L100 20 Z" fill="currentColor" stroke="none" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brick">Real Stories, Real Change</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-indigo">
              Faces of St. John&rsquo;s
            </h2>
            <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-brick" />
          </Reveal>

          {/* Mani Kumari spotlight */}
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="order-2 lg:order-1 lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brick mb-3">Student story</p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-indigo leading-tight">
                &ldquo;Mani Kumari: An Icon of St. John&rsquo;s.&rdquo;
              </h3>
              <p className="mt-5 text-ink/70 leading-relaxed">
                Mani joined St. John&rsquo;s at age four. In 9th grade she nearly transferred schools,
                overwhelmed and disappointed &mdash; but the school promised her family it would see her
                through. She scored 535/600 in her 10th board exams and won a &#8377;35,00,000 government
                scholarship to study at IIIT for six years.
              </p>
              <Link
                href="/stories"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brick border-b border-brick/30 pb-0.5 hover:border-brick"
              >
                Read more student stories <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal className="order-1 lg:order-2 lg:col-span-7" delay={150}>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-64 overflow-hidden rounded-2xl shadow-sm ring-1 ring-ink/10 sm:h-80">
                  <Image
                    src="/images/mani4.webp"
                    alt="Mani Kumari, an icon of St. John's School"
                    width={556}
                    height={417}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="h-28 overflow-hidden rounded-2xl shadow-sm ring-1 ring-ink/10 sm:h-36">
                    <Image
                      src="/images/mani3.webp"
                      alt="Mani Kumari's achievement"
                      width={142}
                      height={213}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center rounded-2xl bg-gradient-to-br from-marigold/25 to-marigold/10 p-4 ring-1 ring-marigold/30 transition-transform hover:-translate-y-1">
                    <p className="font-display text-2xl font-semibold leading-none text-brick">535/600</p>
                    <p className="mt-1 text-[11px] text-ink/60">Mani&rsquo;s 10th board score</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="mt-16 border-t border-ink/10 pt-10 text-center sm:mt-20 sm:pt-12">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 rounded-full bg-brick px-6 py-3 text-sm font-semibold text-paper shadow-lg shadow-brick/20 transition-all hover:-translate-y-0.5 hover:bg-brick-dark"
            >
              Explore More Stories <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* BETI BACHAO BETI PADHAO */}
      <section className="bg-rose-50/70 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-[4/5] overflow-hidden rounded-[28px] shadow-lg ring-1 ring-ink/10">
                <Image
                  src="/images/girljourney.webp"
                  alt="A girl student at St. John's, sponsored under Beti Bachao Beti Padhao"
                  width={480}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={150}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brick mb-3">
              Beti Bachao Beti Padhao &middot; 2020&ndash;21
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-indigo leading-tight">
              A journey begins with one step.
            </h2>
            <span className="mt-2 block h-1 w-14 rounded-full bg-brick" />

            <div className="mt-6 rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
              <p className="font-display text-sm font-semibold italic text-emerald-700 mb-2">
                Problems of women&rsquo;s education in our community
              </p>
              <p className="text-sm leading-relaxed text-ink/70">
                The girls are very useful at home for carrying out domestic duties, and so mothers are
                reluctant to send them to school. A large number of children in the rural areas are
                undernourished and hardly have a square meal a day &mdash; unless the parents are given
                some kind of economic relief, it will be impossible to achieve the targets.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                In our communities, the vast majority of the population is poor and cannot afford to give
                an education to all their children. When the choice comes, they prefer to invest in the
                education of sons rather than daughters &mdash; it is believed that sons will stay by
                their side in old age, while a daughter will eventually marry and go to another family.
                Therefore, they do not care much for women&rsquo;s education.
              </p>
            </div>

            <Link
              href="/donate"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brick border-b border-brick/30 pb-0.5 hover:border-brick"
            >
              Sponsor a girl&rsquo;s education <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center border-t border-ink/10 pt-16 sm:mt-20 sm:pt-20">
          <Reveal className="lg:col-span-7 order-2 lg:order-1">
            <p className="font-display text-lg font-semibold italic text-brick mb-3">
              &ldquo;Result of St. John&rsquo;s School&rdquo;
            </p>
            <p className="text-sm leading-relaxed text-ink/70">
              As circumstances remained the same in the communities &mdash; particularly in poor rural
              areas such as Giddalur and its surrounding villages &mdash; The Joshua Foundation started
              co-education at St. John&rsquo;s for disadvantaged kids. In that first school year, our TJF
              staff worked hard to raise awareness that both girls and boys are equal and deserve to be
              educated, highlighting the importance of education and its future benefits for both, and
              encouraged parents to send their girl child to school alongside their siblings.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              So in that 1st year, the result was very tough, and we got only 8 girl students out of 36.
              But we did not give up &mdash; rather, we kept motivating parents in our communities, and as
              the years passed by, we were able to bring transformation slowly.
            </p>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 px-5 py-4 ring-1 ring-emerald-100">
              <span className="font-display text-2xl font-bold text-emerald-700">8</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 rotate-90 text-emerald-700 sm:rotate-45" />
              <span className="font-display text-2xl font-bold text-emerald-700">90</span>
              <span className="text-xs text-ink/60">girl students enrolled, by 2020</span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-ink/70">
              What an amazing transformation! All of these children come from poor family backgrounds and
              are not able to afford to give their children an English-medium education. Therefore,{" "}
              <span className="font-semibold text-indigo">The Joshua Foundation</span> always stands to
              give free education for girls, and to empower the lives of disadvantaged and marginalized
              kids.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5 order-1 lg:order-2" delay={150}>
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-[28px] shadow-lg ring-1 ring-ink/10">
                <Image
                  src="/images/2019betipado.webp"
                  alt="Girl students sponsored under Beti Bachao Beti Padhao at St. John's School"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
        </div>
      </section>

      {/* HEALTH IS WEALTH */}
      <section className="bg-amber-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brick">Supplementary Nutrition Program</p>
            <p className="mt-3 font-display text-2xl font-semibold italic text-indigo sm:text-3xl">
              &ldquo;Health is Wealth&rdquo;
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto mt-10 max-w-4xl">
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-marigold/30 via-transparent to-brick/15 blur-2xl" />
              <div
                className="relative overflow-hidden rounded-[28px] shadow-xl ring-1 ring-ink/10"
                style={{ aspectRatio: "1650 / 953" }}
              >
                <Image
                  src="/images/food&fruits.webp"
                  alt="St. John's students enjoying their daily meal and fresh fruit"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 900px, 100vw"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
              The Joshua Foundation continues to support a{" "}
              <span className="font-semibold text-indigo">Supplementary Nutrition Program</span> for St.
              John&rsquo;s students, supplying a glass of milk, a boiled egg and banana or fruit, day
              after day. Most students come from poor family backgrounds, where parents aren&rsquo;t
              always able to focus on their children&rsquo;s nutrition &mdash; and that causes kids to get
              sick often and remain underweight.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
              Now students are healthy and growing up, and parents are happy and express their gratitude
              towards the Foundation. We see great smiles and thankful hearts on students every day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DONATE BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-black via-indigo-dark to-black px-6 sm:px-14 py-14 sm:py-16 text-center">
            <WireThroat
              background="#000000"
              baseColor="#F4B91A"
              density={36}
              thickness={160}
              speed={42}
              distance={7}
              haze={65}
              hover={130}
              tube={{ throat: 120, flare: 150, meridians: 72 }}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}
            />
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-marigold/25 blur-3xl animate-drift-a" />
            <div className="pointer-events-none absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-indigo/30 blur-3xl animate-drift-b" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-paper/15 blur-3xl animate-drift-c" />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <span className="absolute bottom-0 left-[10%] h-3 w-3 rounded-full bg-paper/60 animate-bubble [animation-delay:0s]" />
              <span className="absolute bottom-0 left-[30%] h-2 w-2 rounded-full bg-marigold-light/70 animate-bubble [animation-delay:2s]" />
              <span className="absolute bottom-0 left-[55%] h-2.5 w-2.5 rounded-full bg-paper/50 animate-bubble [animation-delay:4s]" />
              <span className="absolute bottom-0 left-[75%] h-2 w-2 rounded-full bg-marigold-light/60 animate-bubble [animation-delay:1s]" />
              <span className="absolute bottom-0 left-[90%] h-3 w-3 rounded-full bg-paper/50 animate-bubble [animation-delay:3s]" />
            </div>
            <Sparkles className="mx-auto h-7 w-7 text-marigold-light relative" strokeWidth={1.5} />
            <h2 className="relative mt-5 font-display text-3xl sm:text-4xl font-semibold text-paper max-w-xl mx-auto leading-tight">
              Every rupee sends a child to school instead of the field.
            </h2>
            <p className="relative mt-4 text-paper/80 max-w-lg mx-auto text-sm sm:text-base">
              Sponsor tuition, a uniform, a meal, or a medical bill for a child in Dantherapalli.
              100% of gifts go directly to the field through The Joshua Foundation.
            </p>
            <Link
              href="/donate"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-brick shadow-lg hover:bg-marigold-light hover:-translate-y-0.5 active:scale-[0.98] transition-all"
            >
              <HeartHandshake className="h-4 w-4" strokeWidth={2.5} />
              Donate to The Joshua Foundation
            </Link>
          </div>
        </Reveal>
      </section>

      {/* VISIT US + MAP */}
      <section className="bg-white/50 border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <Reveal
              direction="left"
              className="relative flex flex-col justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-indigo via-indigo to-indigo-dark p-8 sm:p-12"
            >
              <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-marigold/15 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-brick/20 blur-3xl" />
              <MapPin className="relative h-8 w-8 text-marigold-light" strokeWidth={1.5} />
              <h2 className="relative mt-4 font-display text-2xl font-semibold text-paper sm:text-3xl">
                Come see St. John&rsquo;s for yourself.
              </h2>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-paper/75 sm:text-base">
                We&rsquo;re always glad to welcome visitors, sponsors and volunteers to Dantherapalli.
                Reach out to plan a visit, or explore the school from wherever you are.
              </p>
              <div className="relative mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-3 text-sm font-semibold text-indigo-dark shadow-lg transition-all hover:-translate-y-0.5 hover:bg-marigold-light"
                >
                  <MapPin className="h-4 w-4" strokeWidth={2.5} />
                  Get in Touch
                </Link>
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper/90 border-b border-paper/30 pb-0.5 hover:border-marigold hover:text-marigold transition-colors"
                >
                  Explore Academics <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120} className="min-h-[280px] overflow-hidden rounded-[28px] ring-1 ring-ink/10 lg:min-h-0">
              <iframe
                title="St. John's School location map"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Dantherapalli,Giddalur,Markapuram,Andhra+Pradesh&output=embed"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
