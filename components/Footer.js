import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Home,
  Users,
  BookOpen,
  UserPlus,
  Images,
  ShieldCheck,
  Shield,
  Heart,
  HeartHandshake,
  Star,
  BadgeCheck,
  ThumbsUp,
  BookOpen as Books,
  Backpack,
  Plane,
  Pencil,
} from "lucide-react";

const QUICK_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Us", icon: Users },
  { href: "/academics", label: "Academics", icon: BookOpen },
  { href: "/admissions", label: "Admissions", icon: UserPlus },
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/contact", label: "Contact Us", icon: Mail },
];

const CONTACT_DETAILS = [
  { icon: MapPin, label: "D.No. 3-225, Dantherapalli, Giddalur Mandal, Markapuram Dist., AP – 523367" },
  { icon: Phone, label: "+91 96188 41290", href: "tel:+919618841290" },
  { icon: Mail, label: "gosa.karna@gmail.com", href: "mailto:gosa.karna@gmail.com" },
  { icon: MessageCircle, label: "Chat on WhatsApp", href: "https://wa.me/919618841290" },
];

const VALUES = [
  { label: "Faith", icon: ShieldCheck },
  { label: "Excellence", icon: Star },
  { label: "Integrity", icon: BadgeCheck },
  { label: "Compassion", icon: Heart },
  { label: "Discipline", icon: ThumbsUp },
];


function ColumnHeading({ children }) {
  return (
    <>
      <p className="font-display text-sm font-black tracking-wide text-brick-dark uppercase mb-1.5">{children}</p>
      <div className="h-0.5 w-8 bg-marigold rounded-full mb-4" />
    </>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper text-ink/90">
      {/* top wave line */}
      <svg className="pointer-events-none absolute left-0 top-0 w-full h-10 text-marigold-dark/50" viewBox="0 0 1440 40" preserveAspectRatio="none" fill="none">
        <path d="M0,22 C240,2 480,38 720,18 C960,-2 1200,30 1440,10" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* decorative dotted grid + leaves */}
      <svg className="pointer-events-none absolute left-0 top-6 h-24 w-24 text-marigold-dark/40" viewBox="0 0 100 100">
        {Array.from({ length: 25 }).map((_, i) => (
          <circle key={i} cx={8 + (i % 5) * 12} cy={8 + Math.floor(i / 5) * 12} r="1.6" fill="currentColor" />
        ))}
      </svg>
      <svg className="pointer-events-none absolute right-0 top-6 h-40 w-40 text-marigold-dark/15" viewBox="0 0 120 120" fill="none">
        <path d="M112 8 C90 6 74 20 72 42 C70 62 82 74 98 78" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="102" cy="14" rx="10" ry="5" transform="rotate(25 102 14)" fill="currentColor" opacity="0.6" />
        <ellipse cx="86" cy="20" rx="11" ry="5.5" transform="rotate(5 86 20)" fill="currentColor" opacity="0.5" />
        <ellipse cx="75" cy="36" rx="10" ry="5" transform="rotate(-35 75 36)" fill="currentColor" opacity="0.6" />
      </svg>

      {/* desk corner: potted plant + books + pen photo */}
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 sm:right-2 sm:h-48 sm:w-48 lg:h-60 lg:w-60">
        <Image
          src="/images/footerplants.webp"
          alt=""
          fill
          className="object-contain object-right-top"
          sizes="(min-width: 640px) 240px, 112px"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:items-start">
          {/* Brand */}
          <div className="lg:col-span-3">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl ring-1 ring-ink/15 shadow-sm bg-paper p-1.5">
              <Image src="/images/logo.webp" alt="St. John's School crest" fill className="object-contain" sizes="80px" />
            </div>
            <p className="mt-5 font-display leading-tight">
              <span className="block text-lg font-medium text-ink/70">Nurturing Minds.</span>
              <span className="block text-xl font-black text-brick-dark">Building Tomorrow.</span>
            </p>
            <div className="h-0.5 w-10 bg-marigold rounded-full my-3" />
            <p className="text-sm text-ink/65 leading-relaxed max-w-[240px]">
              At St. John&rsquo;s School, we empower students with values, knowledge and skills to excel in
              life and contribute to society.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-3 text-sm font-semibold text-ink/75">
              {QUICK_LINKS.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link href={href} className="flex items-center gap-2.5 hover:text-brick transition-colors">
                    <Icon className="h-4 w-4 shrink-0 text-brick" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-4">
            <ColumnHeading>Contact Us</ColumnHeading>
            <ul className="space-y-3.5 text-sm font-semibold text-ink/75">
              {CONTACT_DETAILS.map(({ icon: Icon, label, href }) => {
                const inner = (
                  <>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-marigold text-paper shadow-sm">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="pt-1">{label}</span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="flex items-start gap-2.5 hover:text-brick transition-colors">
                        {inner}
                      </a>
                    ) : (
                      <span className="flex items-start gap-2.5">{inner}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Our Values — elevated card */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white shadow-xl shadow-ink/10 ring-1 ring-ink/10 p-5">
              <HeartHandshake className="mx-auto h-7 w-7 text-marigold-dark" strokeWidth={1.75} />
              <p className="mt-2 text-center font-display text-sm font-black tracking-wide text-brick-dark uppercase">
                Our Values
              </p>
              <div className="h-0.5 w-8 bg-marigold rounded-full mx-auto my-3" />
              <ul className="space-y-2.5 text-sm font-semibold text-ink/75">
                {VALUES.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-marigold-dark shrink-0" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative mt-0 bg-indigo-dark text-paper overflow-hidden">
        {/* red wave accents */}
        <svg className="pointer-events-none absolute left-0 bottom-0 h-full w-48 text-brick" viewBox="0 0 200 100" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,100 L0,55 Q90,30 200,100 Z" opacity="0.85" />
        </svg>
        <svg className="pointer-events-none absolute right-0 bottom-0 h-full w-56 text-brick" viewBox="0 0 200 100" preserveAspectRatio="none" fill="currentColor">
          <path d="M200,100 L200,60 Q110,25 0,100 Z" opacity="0.85" />
        </svg>

        {/* school + tree line art */}
        <svg className="pointer-events-none absolute left-3 sm:left-8 bottom-0 h-full w-28 sm:w-36 text-marigold-light/40" viewBox="0 0 200 110" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="128" y1="14" x2="128" y2="40" />
          <path d="M128 14 L150 20 L128 26 Z" fill="currentColor" stroke="none" opacity="0.8" />
          <path d="M92 46 L128 26 L164 46" />
          <rect x="98" y="46" width="60" height="42" />
          <rect x="120" y="64" width="16" height="24" />
          <rect x="106" y="54" width="9" height="9" />
          <rect x="141" y="54" width="9" height="9" />
          <circle cx="55" cy="58" r="17" opacity="0.8" />
          <line x1="55" y1="75" x2="55" y2="88" />
          <circle cx="30" cy="70" r="11" opacity="0.6" />
          <line x1="30" y1="81" x2="30" y2="88" />
          <line x1="10" y1="88" x2="190" y2="88" opacity="0.4" />
        </svg>

        {/* right-side icon row */}
        <div className="pointer-events-none absolute right-4 sm:right-10 bottom-0 h-full hidden md:flex items-end gap-5 pb-6 text-marigold-light/40">
          <Plane className="h-7 w-7 -rotate-[18deg] -translate-y-6" strokeWidth={1.25} />
          <Pencil className="h-7 w-7 -rotate-12" strokeWidth={1.25} />
          <Books className="h-9 w-9" strokeWidth={1.25} />
          <Backpack className="h-10 w-10" strokeWidth={1.25} />
        </div>
        <svg className="pointer-events-none absolute right-2 top-2 h-14 w-14 text-marigold-light/25 hidden md:block" viewBox="0 0 60 60">
          {Array.from({ length: 16 }).map((_, i) => (
            <circle key={i} cx={6 + (i % 4) * 14} cy={6 + Math.floor(i / 4) * 14} r="1.6" fill="currentColor" />
          ))}
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-xs text-center">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ring-marigold-light/40 text-marigold-light">
            <Shield className="h-4 w-4" />
          </span>
          <p className="leading-snug">
            &copy; {new Date().getFullYear()} St. John&rsquo;s School, Dantherapalli.
            <br className="sm:hidden" /> All Rights Reserved.
          </p>
          <span className="hidden sm:inline text-paper/30">|</span>
          <p className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-marigold-light" fill="currentColor" />
            <span className="font-display italic text-base text-marigold-light">Exists to Empower</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
