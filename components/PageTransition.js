"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MIN_VISIBLE_MS = 550;
const FALLBACK_HIDE_MS = 1600;

export default function PageTransition() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const startRef = useRef(0);
  const hideTimerRef = useRef(null);
  const fallbackTimerRef = useRef(null);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    function onClick(e) {
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest("a[href]");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      let url;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      startRef.current = Date.now();
      setActive(true);

      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = setTimeout(() => setActive(false), FALLBACK_HIDE_MS);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (prevPathnameRef.current === pathname) return;
    prevPathnameRef.current = pathname;

    const elapsed = Date.now() - startRef.current;
    const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);

    clearTimeout(hideTimerRef.current);
    clearTimeout(fallbackTimerRef.current);
    hideTimerRef.current = setTimeout(() => setActive(false), remaining);
  }, [pathname]);

  useEffect(() => {
    return () => {
      clearTimeout(hideTimerRef.current);
      clearTimeout(fallbackTimerRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden={!active}
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-paper transition-[clip-path] duration-[550ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
        active ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ clipPath: active ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brick/10 blur-3xl animate-drift-b" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-marigold/15 blur-3xl animate-drift-a" />

      <div
        className={`relative flex flex-col items-center gap-4 transition-all duration-500 ${
          active ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <div className="relative flex h-20 w-20 items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-ink/10" />
          <span
            className="absolute inset-0 motion-safe:animate-spin rounded-full border-2 border-transparent border-t-brick border-r-brick/40"
            style={{ animationDuration: "900ms" }}
          />
          <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white p-1.5 shadow-[0_8px_24px_-6px_rgba(28,43,57,0.25)] ring-1 ring-ink/5 motion-safe:animate-pulse">
            <Image src="/images/logo.webp" alt="" fill priority className="object-contain" sizes="56px" />
          </div>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/50">
          St.&nbsp;John&rsquo;s School
        </p>
      </div>
    </div>
  );
}
