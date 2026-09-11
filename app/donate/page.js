import WireThroat from "@/components/WireThroat";
import {
  HeartHandshake,
  Phone,
  MessageCircle,
  Mail,
  ShieldCheck,
  Banknote,
  Smartphone,
  Globe2,
} from "lucide-react";

export const metadata = {
  title: "Donate",
  description:
    "Donate to The Joshua Foundation to sponsor a child's education at St. John's School, Dantherapalli, India. Every rupee sends a child to school instead of the field.",
};

const WAYS_TO_GIVE = [
  {
    icon: Smartphone,
    title: "UPI",
    body: "Instant transfer from any UPI app. Call or WhatsApp us and we'll share the UPI ID right away.",
  },
  {
    icon: Banknote,
    title: "Bank Transfer",
    body: "Direct NEFT/IMPS transfer to The Joshua Foundation's trust account. Ask us for account details.",
  },
  {
    icon: Globe2,
    title: "International Wire",
    body: "Supporting from outside India? We'll send SWIFT details for an international wire transfer.",
  },
];

export default function DonatePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-indigo-dark to-black py-20 sm:py-28">
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

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-marigold-light mb-3">Donate</p>
          <HeartHandshake className="mx-auto h-9 w-9 text-marigold-light" strokeWidth={1.5} />
          <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
            Your gift, entered in the ledger of a child&rsquo;s life
          </h1>
          <p className="mt-4 text-paper/80 max-w-xl mx-auto">
            Every rupee sends a child to school instead of the field. The Joshua Foundation is a
            registered charitable trust (Reg. No. 184/2014) running St. John&rsquo;s School,
            Dantherapalli.
          </p>
        </div>
      </section>

      {/* WAYS TO GIVE */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {WAYS_TO_GIVE.map((w) => (
              <div key={w.title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold/15">
                  <w.icon className="h-5 w-5 text-marigold-dark" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-indigo">{w.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-ink/10 bg-white/70 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="flex items-center justify-center gap-2 text-sm font-semibold text-ink sm:justify-start">
                <ShieldCheck className="h-4 w-4 text-marigold-dark" />
                Reach us to complete your donation
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Call, WhatsApp or email us for account and UPI details.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919618841290"
                className="inline-flex items-center gap-2 rounded-full bg-brick px-5 py-3 text-sm font-semibold text-paper shadow-lg shadow-brick/30 hover:bg-brick-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 96188 41290
              </a>
              <a
                href="https://wa.me/919618841290"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink hover:border-brick hover:text-brick transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="mailto:gosa.karna@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink hover:border-brick hover:text-brick transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
