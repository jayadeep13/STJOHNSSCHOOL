import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  Quote,
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Eye,
  Shirt,
  Apple,
  Stethoscope,
  LifeBuoy,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Founder & Co-Founder",
  description:
    "Meet Karna and Sandhya Gosa, founder and co-founder of The Joshua Foundation and St. John's School in Dantherapalli, India.",
};

const FOUNDERS = [
  {
    name: "Karna Gosa",
    role: "Founder & Chief Functionary",
    img: "/images/founders (2).webp",
    body: "Karna trained for ten years with Operation Mobilization India, learning every aspect of opening and running a school. That decade of preparation became the foundation for The Joshua Foundation, which he founded in 2013 to bring transformation and hope back to his own childhood village. Today he leads TJF's operations — from the school's daily administration to its expanding community ministries across more than ten villages.",
  },
  {
    name: "Sandhya Gosa",
    role: "Co-Founder & Academic Lead",
    img: "/images/founders (1).webp",
    body: "Sandhya trained as a teacher with Operation Mobilization India for ten years before marrying Karna in 2009 and co-founding The Joshua Foundation alongside him in 2013. She now oversees curriculum and student welfare at St. John's, shaping a whole-child education that has grown from 36 students to 225 — 90 of them girls.",
  },
];

const MINISTRIES = [
  { icon: Eye, label: "Eye camps", body: "Free vision screening and care brought directly to villages that have none." },
  { icon: Shirt, label: "Tailoring center", body: "Vocational training that gives women a path to earn a steady income." },
  { icon: Apple, label: "Nutrition programs", body: "Food support for families for whom a meal is never guaranteed." },
  { icon: Stethoscope, label: "Medical interventions", body: "Funding and coordinating care for urgent medical needs, like Amaranad's surgery." },
  { icon: LifeBuoy, label: "Disaster relief", body: "Rice, masks and emergency support during floods, lockdowns and crises." },
];

export default function FoundersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-paper to-rose-50/60">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-marigold/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-10 h-72 w-72 rounded-full bg-brick/15 blur-3xl" />
        <div className="pointer-events-none absolute left-1/3 top-0 h-56 w-56 rounded-full bg-sky-200/20 blur-3xl" />

        {/* corner dot patterns */}
        <svg
          className="pointer-events-none absolute right-6 top-6 h-16 w-16 text-brick/15 sm:right-8 lg:right-12"
          viewBox="0 0 100 100"
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={i} cx={8 + (i % 5) * 12} cy={8 + Math.floor(i / 5) * 12} r="2" fill="currentColor" />
          ))}
        </svg>
        <svg
          className="pointer-events-none absolute left-6 bottom-6 h-16 w-16 text-indigo/10 sm:left-8 lg:left-12"
          viewBox="0 0 100 100"
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={i} cx={8 + (i % 5) * 12} cy={8 + Math.floor(i / 5) * 12} r="2" fill="currentColor" />
          ))}
        </svg>

        {/* corner frame brackets */}
        <svg className="pointer-events-none absolute left-5 top-5 h-10 w-10 text-brick/25 sm:left-8 sm:top-8" viewBox="0 0 40 40" fill="none">
          <path d="M2 16V2H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <svg className="pointer-events-none absolute right-5 bottom-5 h-10 w-10 text-indigo/20 sm:right-8 sm:bottom-8" viewBox="0 0 40 40" fill="none">
          <path d="M38 24V38H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* faint heart watermark */}
        <HeartHandshake
          className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 text-brick/[0.04] sm:h-[360px] sm:w-[360px]"
          strokeWidth={1}
        />

        <Reveal className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brick/10 ring-1 ring-brick/20">
            <HeartHandshake className="h-5 w-5 text-brick" strokeWidth={1.75} />
          </span>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brick">Founder &amp; Co-Founder</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-indigo sm:text-5xl">
            A calling, a piece of land, a heart to serve
          </h1>
          <svg className="mx-auto mt-5 h-3 w-20 text-marigold" viewBox="0 0 100 12" fill="none">
            <path d="M2,8 C20,2 35,12 50,6 C65,0 80,10 98,4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
            The Joshua Foundation was founded in 2013 by Karna and Sandhya Gosa, to bring transformation
            and hope to Karna&rsquo;s childhood village and the communities around it.
          </p>
        </Reveal>
      </section>

      {/* Photo + founding story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal direction="left" className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {FOUNDERS.map((f) => (
                <div key={f.name}>
                  <div className="overflow-hidden rounded-[24px] shadow-lg ring-1 ring-ink/10">
                    <Image
                      src={f.img}
                      alt={f.name}
                      width={400}
                      height={520}
                      className="aspect-[3/4] w-full object-cover object-top"
                    />
                  </div>
                  <p className="mt-2.5 text-center text-xs font-semibold uppercase tracking-wide text-ink/50">
                    {f.name}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={120} className="lg:col-span-7">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brick">How it began</p>
            <h2 className="font-display text-3xl font-semibold text-indigo mb-5">Karna &amp; Sandhya Gosa</h2>
            <div className="space-y-4 text-ink/70 leading-relaxed">
              <p>
                Karna and Sandhya both trained with and served Operation Mobilization India for ten
                years &mdash; Karna in every aspect of opening and running a school, Sandhya as a teacher.
                They married in 2009.
              </p>
              <p>
                In 2013 they founded The Joshua Foundation to serve Karna&rsquo;s childhood village, a
                poor, rural, mostly Dalit community about six hours southeast of Hyderabad. A year of
                preparing the land and building temporary classrooms led to St. John&rsquo;s opening its
                doors in June 2014, with two grades and thirty-six students.
              </p>
              <p>
                Today they lead a foundation that runs not just a growing school &mdash; now six grades and
                225 students &mdash; but eye camps, a tailoring center, nutrition programs, medical
                interventions and disaster relief across more than ten villages.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brick border-b border-brick/30 pb-0.5 hover:border-brick"
            >
              Read the full story of St. John&rsquo;s <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Individual roles */}
      <section className="relative overflow-hidden bg-indigo">
        <div className="absolute inset-0 bg-grain opacity-30" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-marigold/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-brick/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal className="mx-auto mb-12 max-w-xl text-center">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-marigold-light">Two callings, one vision</p>
            <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">What each of them leads</h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} direction="up" delay={i * 100}>
                <div className="h-full rounded-2xl bg-white/10 p-7 backdrop-blur-sm ring-1 ring-white/10">
                  <div className="relative inline-block">
                    <Image
                      src={f.img}
                      alt={f.name}
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover object-top ring-4 ring-white/15"
                    />
                    <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-marigold ring-2 ring-indigo">
                      {i === 0 ? (
                        <HeartHandshake className="h-3.5 w-3.5 text-indigo-dark" strokeWidth={2} />
                      ) : (
                        <GraduationCap className="h-3.5 w-3.5 text-indigo-dark" strokeWidth={2} />
                      )}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-paper">{f.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-marigold-light">{f.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the school */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-brick">Beyond the school</p>
          <h2 className="font-display text-2xl font-semibold text-indigo sm:text-3xl">
            A foundation, not just a school
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/65 sm:text-base">
            St. John&rsquo;s is TJF&rsquo;s founding project &mdash; but Karna and Sandhya&rsquo;s vision for
            the community has always been broader.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {MINISTRIES.map((m, i) => (
            <Reveal key={m.label} direction="up" delay={i * 70}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brick/10">
                  <m.icon className="h-5 w-5 text-brick" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-indigo">{m.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/60">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-[28px] bg-marigold/15 p-8 ring-1 ring-marigold/30 sm:p-12">
            <Quote className="h-6 w-6 text-brick" strokeWidth={2} />
            <p className="mt-4 font-display text-xl italic leading-snug text-indigo sm:text-2xl">
              &ldquo;This seed that has sown for Jesus&rsquo; sake has brought happiness in their
              family.&rdquo;
            </p>
            <p className="mt-3 text-xs font-mono uppercase tracking-wide text-ink/50">
              From a family The Joshua Foundation has walked alongside
            </p>
          </div>
        </Reveal>
      </section>

      {/* Leadership today */}
      <section className="bg-white/50 border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brick mb-3">Governance</p>
          <h2 className="font-display text-3xl font-semibold text-indigo mb-10">Leadership Today</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {FOUNDERS.map((f) => (
              <Reveal key={f.name} direction="up">
                <div className="flex h-full items-center gap-4 rounded-2xl bg-paper ring-1 ring-ink/10 p-7">
                  <Image
                    src={f.img}
                    alt={f.name}
                    width={64}
                    height={64}
                    className="h-14 w-14 shrink-0 rounded-full object-cover object-top ring-2 ring-indigo/15"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-indigo">{f.name}</h3>
                    <p className="text-sm text-brick font-medium mt-0.5">{f.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-sky-50 ring-1 ring-sky-200/60 p-5 max-w-2xl">
            <Users className="h-5 w-5 shrink-0 text-sky-600 mt-0.5" strokeWidth={1.75} />
            <p className="text-sm text-ink/65 leading-relaxed">
              The Joshua Foundation (Reg. No. 184/2014) is currently led directly by its founder and
              co-founder. As the ministry grows, we look forward to welcoming a formal board of directors
              to help guide its next chapter.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
