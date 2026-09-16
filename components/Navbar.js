"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, ChevronDown, ChevronRight, Home, Users, BookOpen, Images, FileText, Sparkles, Newspaper, Mail } from "lucide-react";
import { REPORT_YEARS } from "@/lib/reportYears";

const NAV = [
  { href: "/", label: "Home", icon: Home },
  {
    label: "About",
    icon: Users,
    match: ["/about", "/founders"],
    children: [
      { href: "/about", label: "About Us" },
      { href: "/founders", label: "Founder & Co-Founder" },
    ],
  },
  { href: "/academics", label: "Academics", icon: BookOpen },
  { href: "/gallery", label: "Gallery", icon: Images },
  {
    label: "Annual Report",
    icon: FileText,
    match: ["/annual-report"],
    children: REPORT_YEARS.map((y) => ({
      href: `/annual-report?year=${y}`,
      label: `${y} - Activities`,
    })),
  },
  { href: "/stories", label: "Stories", icon: Sparkles },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/contact", label: "Contact", icon: Mail },
];

const NAV_COLORS = [
  { bg: "bg-rose-100", color: "text-rose-600" },
  { bg: "bg-amber-100", color: "text-amber-600" },
  { bg: "bg-emerald-100", color: "text-emerald-600" },
  { bg: "bg-sky-100", color: "text-sky-600" },
  { bg: "bg-violet-100", color: "text-violet-600" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (item) =>
    item.href ? pathname === item.href : item.match?.some((m) => pathname.startsWith(m));

  return (
    <header
      className={`relative z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur border-ink/10 shadow-[0_1px_0_0_rgba(28,43,57,0.06)]"
          : "bg-paper border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-10 w-10 lg:h-12 lg:w-12 overflow-hidden rounded-[10px] ring-1 ring-ink/10 bg-paper p-1">
              <Image src="/images/logo.webp" alt="St. John's School crest" fill className="object-contain" sizes="48px" />
            </div>
            <div className="leading-tight">
              <p className="font-display font-black text-indigo text-[15px] lg:text-lg tracking-tight">
                St. John&rsquo;s School
              </p>
              <p className="font-display italic font-bold text-[11px] lg:text-xs text-brick">
                Dantherapalli · Exists to Empower
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-[13px] xl:text-sm font-medium transition-colors ${
                      isActive(item) ? "text-brick" : "text-ink/75 hover:text-indigo hover:bg-ink/5"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 invisible opacity-0 -translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150">
                    <div className="min-w-[190px] rounded-xl border border-ink/10 bg-paper shadow-lg p-1.5">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            pathname === c.href ? "text-brick font-semibold" : "text-ink/80 hover:bg-brick/10 hover:text-brick"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-[13px] xl:text-sm font-medium transition-colors ${
                    isActive(item) ? "text-brick" : "text-ink/75 hover:text-indigo hover:bg-ink/5"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/donate"
              className="inline-flex items-center gap-1.5 rounded-full bg-brick px-4 py-2 text-sm font-semibold text-paper shadow-sm hover:bg-brick-dark active:scale-[0.98] transition-all"
            >
              <Heart className="h-4 w-4" strokeWidth={2.5} />
              Donate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden inline-flex items-center justify-center rounded-full p-2.5 text-indigo bg-ink/5 hover:bg-ink/10 transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 top-16 bg-ink/50 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile / tablet menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 z-50 transition-all duration-200 ease-out ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="relative max-h-[calc(100vh-4rem)] overflow-y-auto rounded-b-[28px] border-t border-ink/10 bg-gradient-to-b from-paper to-amber-50/50 px-4 pb-6 pt-5 shadow-2xl">
          <svg
            className="pointer-events-none absolute right-4 top-3 h-14 w-14 text-brick/[0.06]"
            viewBox="0 0 100 100"
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <circle key={i} cx={6 + (i % 4) * 14} cy={6 + Math.floor(i / 4) * 14} r="2" fill="currentColor" />
            ))}
          </svg>

          <div className="relative flex flex-col gap-2.5">
            {NAV.map((item, i) => {
              const theme = NAV_COLORS[i % NAV_COLORS.length];
              const active = isActive(item);

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition-colors ${
                      active ? "ring-brick/25" : "ring-ink/5"
                    }`}
                  >
                    <div className="flex items-center gap-3 px-4 py-3">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${theme.bg}`}>
                        <item.icon className={`h-4 w-4 ${theme.color}`} strokeWidth={1.75} />
                      </span>
                      <span
                        className={`font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${
                          active ? "text-brick" : "text-ink/50"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <div className="divide-y divide-ink/5 border-t border-ink/5 bg-ink/[0.015]">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between gap-2 py-3 pl-[52px] pr-4 text-[14.5px] font-medium transition-colors ${
                            pathname === c.href ? "text-brick" : "text-ink/75 hover:text-indigo"
                          }`}
                        >
                          {c.label}
                          <ChevronRight className="h-4 w-4 shrink-0 opacity-40" />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 shadow-sm ring-1 transition-all ${
                    active ? "bg-brick/10 ring-brick/25" : "bg-white ring-ink/5 hover:bg-ink/[0.03]"
                  }`}
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${theme.bg}`}>
                    <item.icon className={`h-4 w-4 ${theme.color}`} strokeWidth={1.75} />
                  </span>
                  <span className={`flex-1 text-[15px] font-semibold ${active ? "text-brick" : "text-ink/80"}`}>
                    {item.label}
                  </span>
                  <ChevronRight className={`h-4 w-4 shrink-0 ${active ? "text-brick/60" : "text-ink/25"}`} />
                </Link>
              );
            })}
          </div>

          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="relative mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brick to-brick-dark px-4 py-3.5 text-sm font-semibold text-paper shadow-lg shadow-brick/25 transition-transform active:scale-[0.98]"
          >
            <Heart className="h-4 w-4" strokeWidth={2.5} />
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
