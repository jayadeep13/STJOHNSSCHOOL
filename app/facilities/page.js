import Link from "next/link";
import PageHero from "@/components/PageHero";
import { School, Bus, Library, Monitor, Utensils, ShieldPlus, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Facilities",
  description:
    "Classrooms, library, transport, digital classes and playground facilities at St. John's School, Dantherapalli — every one funded by a sponsor.",
};

const FACILITIES = [
  {
    icon: School,
    title: "Classrooms & Playground",
    body: "A permanent classroom building completed in 2016, plus a playground for daily activity and games.",
    bg: "bg-rose-100",
    color: "text-rose-500",
  },
  {
    icon: Library,
    title: "Library",
    body: "Stocked with 600+ sponsored books, open to St. John's students and community children alike.",
    bg: "bg-amber-100",
    color: "text-amber-500",
  },
  {
    icon: Bus,
    title: "Transport",
    body: "A dedicated school vehicle brings children from remote villages who would otherwise be unable to attend.",
    bg: "bg-emerald-100",
    color: "text-emerald-500",
  },
  {
    icon: Monitor,
    title: "Digital Learning",
    body: "A growing computer lab, expanding each year as new classrooms are added.",
    bg: "bg-sky-100",
    color: "text-sky-500",
  },
  {
    icon: Utensils,
    title: "Supplementary Nutrition",
    body: "Milk, boiled egg and fruit provided several times a week to combat malnutrition among students.",
    bg: "bg-violet-100",
    color: "text-violet-500",
  },
  {
    icon: ShieldPlus,
    title: "Health & Hygiene",
    body: "Annual eye camps, dental awareness drives and ORS/health check-ups run in partnership with local hospitals.",
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Built one classroom at a time"
        blurb="Every facility at St. John's was funded by a donor who believed a child in Dantherapalli deserved the same start as any other. We're still building."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-brick sm:text-3xl">What We&rsquo;ve Built So Far</h2>
          <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-brick" />
          <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-base">
            None of this existed a decade ago. Each facility below was added one sponsor, one donation, one
            year at a time &mdash; and the list keeps growing.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-full ${f.bg} transition-transform group-hover:scale-105`}>
                <f.icon className={`h-6 w-6 ${f.color}`} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-indigo">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[28px] bg-brick px-6 py-12 text-center sm:px-14 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
          <HeartHandshake className="relative mx-auto h-8 w-8 text-marigold-light" strokeWidth={1.5} />
          <h3 className="relative mt-4 font-display text-xl font-semibold text-paper sm:text-2xl">
            Help us build the next one
          </h3>
          <p className="relative mx-auto mt-2 max-w-md text-sm text-paper/80">
            Every facility on this page started as someone&rsquo;s gift. Yours could fund the next classroom,
            the next library shelf, or the next school year of meals.
          </p>
          <Link
            href="/donate"
            className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-brick shadow-lg transition-colors hover:bg-marigold-light"
          >
            Support St. John&rsquo;s
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
