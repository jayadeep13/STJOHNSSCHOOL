import Link from "next/link";
import PageHero from "@/components/PageHero";
import { CheckCircle2, CalendarDays, FileDown, Phone } from "lucide-react";

export const metadata = {
  title: "Admissions 2026–27",
  description:
    "How to apply to St. John's School, Dantherapalli — eligibility, dates, and a fee-free enrollment process for the 2026–27 academic year.",
};

const STEPS = [
  { title: "Visit or call the school office", body: "Speak with our staff at D.No. 3-225, Dantherapalli, or call +91 96188 41290." },
  { title: "Submit the application form", body: "Fill in the child's and parents' details — download the form below or collect one at the office." },
  { title: "Verification & home visit", body: "Our staff may visit the family, as is our practice, to understand the child's background and needs." },
  { title: "Confirmation & fee-free enrollment", body: "Seats are confirmed on a first-come basis for each grade; tuition is fully sponsored for those in need." },
];

const ELIGIBILITY = [
  "Open to all children regardless of caste, religion or the family's ability to pay",
  "LKG entry from age 4; lateral entry to higher grades subject to seat availability",
  "Priority outreach for girls and first-generation learners",
  "No prior English-medium experience required",
];

const DATES = [
  { label: "Applications open", value: "1 February 2026" },
  { label: "Priority deadline (siblings & existing families)", value: "15 March 2026" },
  { label: "General admissions close", value: "30 April 2026" },
  { label: "New academic year begins", value: "1 June 2026" },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions 2026–27"
        title="Join the St. John's family"
        blurb="We keep our process simple, personal and free — because the biggest barrier a family faces is rarely paperwork. It's believing their child belongs in a classroom at all."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brick mb-3">Process</p>
            <h2 className="font-display text-3xl font-semibold text-indigo mb-8">How admission works</h2>
            <ol className="space-y-6">
              {STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="ledger-date shrink-0 h-9 w-9 rounded-full bg-indigo text-paper text-sm flex items-center justify-center font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-indigo">{s.title}</h3>
                    <p className="mt-1 text-sm text-ink/65 leading-relaxed">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white/60 ring-1 ring-ink/10 p-6">
              <h3 className="font-display text-lg font-semibold text-indigo mb-4">Eligibility</h3>
              <ul className="space-y-3">
                {ELIGIBILITY.map((e) => (
                  <li key={e} className="flex gap-2.5 text-sm text-ink/70">
                    <CheckCircle2 className="h-4 w-4 text-leaf shrink-0 mt-0.5" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-indigo p-6 text-paper">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="h-5 w-5 text-marigold-light" />
                <h3 className="font-display text-lg font-semibold">Important Dates</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {DATES.map((d) => (
                  <li key={d.label} className="flex justify-between gap-4 border-b border-paper/10 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-paper/70">{d.label}</span>
                    <span className="ledger-date text-marigold-light text-right shrink-0">{d.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/downloads/admission-form.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brick px-5 py-3.5 text-sm font-semibold text-paper hover:bg-brick-dark transition-colors"
              >
                <FileDown className="h-4 w-4" />
                Download Form
              </Link>
              <a
                href="tel:+919618841290"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full ring-1 ring-ink/15 px-5 py-3.5 text-sm font-semibold text-indigo hover:bg-ink/5 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call the Office
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
