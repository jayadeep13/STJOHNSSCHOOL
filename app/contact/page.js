import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  HeartHandshake,
  Clock,
  Globe,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  Plane,
  Pencil,
  BookOpen,
  Backpack,
} from "lucide-react";

export const metadata = {
  title: "Contact Us & Donate",
  description:
    "Get in touch with St. John's School and The Joshua Foundation, or donate to sponsor a child's education in Dantherapalli, India.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div className="pointer-events-none absolute inset-0 bg-grain" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-marigold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brick/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative order-first h-80 sm:h-96 lg:order-2 lg:h-[420px] xl:h-[480px]">
              <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:left-0 lg:right-3 lg:rounded-l-[999px] lg:bg-brick" />
              <div className="relative h-full w-full overflow-hidden lg:absolute lg:inset-y-0 lg:left-3 lg:right-0 lg:rounded-l-[999px] lg:ring-2 lg:ring-marigold">
                <Image
                  src="/images/school-group-photo.webp"
                  alt="Students at St. John's School"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-dark/55 via-indigo-dark/5 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brick/15 via-transparent to-marigold/10 mix-blend-overlay" />
              </div>

              {/* Rotating seal — circular heading text spinning around the crest */}
              <div className="absolute -bottom-10 left-1/2 z-20 -translate-x-1/2 lg:bottom-8 lg:left-auto lg:right-8 lg:translate-x-0">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                  <div className="absolute inset-0 rounded-full bg-paper shadow-xl ring-1 ring-ink/10" />
                  <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_16s_linear_infinite]">
                    <defs>
                      <path id="heroSealPath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                    </defs>
                    <text className="fill-brick font-mono" fontSize="7.6" letterSpacing="2.5">
                      <textPath href="#heroSealPath" startOffset="0%">
                        CONTACT US &#8226; GET IN TOUCH &#8226; CONTACT US &#8226; GET IN TOUCH &#8226;
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-paper p-2 shadow-lg ring-4 ring-marigold sm:h-16 sm:w-16">
                      <Image
                        src="/images/logo.webp"
                        alt="St. John's School crest"
                        width={44}
                        height={44}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-last flex flex-col justify-center px-4 py-14 sm:px-6 sm:py-16 lg:order-1 lg:px-8 lg:py-20">
              <svg className="pointer-events-none absolute left-4 top-6 h-16 w-16 text-brick/30 sm:left-6 lg:left-8" viewBox="0 0 100 100">
                {Array.from({ length: 25 }).map((_, i) => (
                  <circle key={i} cx={8 + (i % 5) * 12} cy={8 + Math.floor(i / 5) * 12} r="2" fill="currentColor" />
                ))}
              </svg>

              {/* faint school + tree line art, echoing the footer's motif */}
              <svg
                className="pointer-events-none absolute -bottom-4 left-0 h-28 w-28 text-brick/10 sm:h-36 sm:w-36"
                viewBox="0 0 200 110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="128" y1="14" x2="128" y2="40" />
                <path d="M128 14 L150 20 L128 26 Z" fill="currentColor" stroke="none" opacity="0.8" />
                <path d="M92 46 L128 26 L164 46" />
                <rect x="98" y="46" width="60" height="42" />
                <rect x="120" y="64" width="16" height="24" />
                <rect x="106" y="54" width="9" height="9" />
                <rect x="141" y="54" width="9" height="9" />
                <circle cx="55" cy="58" r="17" opacity="0.8" />
                <line x1="55" y1="75" x2="55" y2="88" />
                <line x1="10" y1="88" x2="190" y2="88" opacity="0.4" />
              </svg>

              {/* faint scattered icons, mirroring the footer's icon row */}
              <div className="pointer-events-none absolute bottom-10 right-4 hidden items-end gap-4 text-brick/15 sm:flex lg:right-8">
                <Plane className="h-5 w-5 -rotate-[18deg]" strokeWidth={1.25} />
                <Pencil className="h-5 w-5 -rotate-12" strokeWidth={1.25} />
                <BookOpen className="h-6 w-6" strokeWidth={1.25} />
                <Backpack className="h-7 w-7" strokeWidth={1.25} />
              </div>

              <div className="mb-3 flex items-center gap-3">
                <span className="h-5 w-1 rounded-full bg-brick" />
                <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-leaf">
                  Contact Us <ArrowRight className="h-3.5 w-3.5" />
                </p>
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] text-indigo sm:text-5xl lg:text-6xl">
                Reach us, or become part of <span className="text-brick">the story</span>
              </h1>
              <svg className="mt-5 h-3 w-20 text-brick" viewBox="0 0 100 12" fill="none">
                <path d="M2,8 C20,2 35,12 50,6 C65,0 80,10 98,4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/60 sm:text-base">
                Whether you&rsquo;re a parent asking about admissions, or a partner ready to fund the next classroom &mdash; we&rsquo;d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Contact info */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold text-brick">Get in Touch</h2>
              <span className="mt-2 block h-1 w-14 rounded-full bg-brick" />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-100">
                  <MapPin className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo">Our Location</p>
                  <p className="mt-1 text-sm text-ink/60">
                    D.No. 3-225, Dantherapalli Village, Giddalur Mandal, Markapuram District, Andhra Pradesh &ndash; 523367
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <Phone className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo">Phone Numbers</p>
                  <p className="mt-1 text-sm text-ink/60">
                    <a href="tel:+919618841290" className="block hover:text-brick">+91 96188 41290</a>
                    <a href="tel:+919515257754" className="block hover:text-brick">+91 95152 57754</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <Mail className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo">Email Address</p>
                  <a href="mailto:gosa.karna@gmail.com" className="mt-1 block text-sm text-ink/60 hover:text-brick break-all">
                    gosa.karna@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100">
                  <Clock className="h-5 w-5 text-sky-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo">School Timings</p>
                  <p className="mt-1 text-sm text-ink/60">Monday &ndash; Saturday<br />9:00 AM &ndash; 4:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100">
                  <Globe className="h-5 w-5 text-violet-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo mb-2">Follow Us</p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white transition-opacity hover:opacity-90"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-pink-500 to-fuchsia-600 text-white transition-opacity hover:opacity-90"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="YouTube"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white transition-opacity hover:opacity-90"
                    >
                      <Youtube className="h-4 w-4" />
                    </a>
                    <a
                      href="https://wa.me/919618841290"
                      aria-label="WhatsApp"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-90"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold text-brick">Send Us a Message</h2>
              <span className="mt-2 block h-1 w-14 rounded-full bg-brick" />
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden ring-1 ring-ink/10 h-80 sm:h-96">
          <iframe
            title="St. John's School location map"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Dantherapalli,Giddalur,Markapuram,Andhra+Pradesh&output=embed"
          />
        </div>
      </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="scroll-mt-20 bg-white/50 border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-black via-indigo-dark to-black px-6 sm:px-14 py-14 sm:py-16 text-center">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-marigold/25 blur-3xl animate-drift-a" />
            <div className="pointer-events-none absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-indigo/30 blur-3xl animate-drift-b" />
            <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-marigold-light mb-3">Donate</p>
            <HeartHandshake className="relative mx-auto h-8 w-8 text-marigold-light" strokeWidth={1.5} />
            <h3 className="relative mt-5 font-display text-2xl sm:text-3xl font-semibold text-paper">
              Your gift, entered in the ledger of a child&rsquo;s life
            </h3>
            <p className="relative mt-3 text-paper/80 max-w-md mx-auto text-sm">
              The Joshua Foundation is a registered charitable trust (Reg. No. 184/2014). See ways to
              give &mdash; UPI, bank transfer, or international wire.
            </p>
            <Link
              href="/donate"
              className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-brick shadow-lg hover:bg-marigold-light transition-colors"
            >
              <HeartHandshake className="h-4 w-4" />
              Go to Donate Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
