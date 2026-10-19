"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-[100] transition-[background-color,border-color,backdrop-filter] duration-500 ease border-b",
        scrolled
          ? "bg-ink/70 backdrop-blur-xl backdrop-saturate-150 border-line"
          : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <div className="wrap flex items-center justify-between h-[82px] max-[640px]:h-[68px]">
        <Link href="/" className="flex flex-col leading-none">
          <span className="flex items-center gap-[10px] text-[19px] max-[640px]:text-[16px] font-bold tracking-[-0.015em]">
            <span
              aria-hidden
              className="w-5 h-5 max-[640px]:w-4 max-[640px]:h-4 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--color-brand-red), var(--color-brand-gold), var(--color-brand-teal), var(--color-brand-red))",
                filter: "blur(0.5px)",
                boxShadow: "0 0 12px rgba(212,25,27,0.25)",
              }}
            />
            PIJLER
            <span className="font-medium text-fog">GROEP</span>
          </span>
          <span className="mono text-[9px] text-fog tracking-[0.2em] mt-1 ml-[30px] max-[640px]:ml-[26px]">
            Holding · Sinds {site.established}
          </span>
        </Link>

        <nav className="hidden md:flex gap-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-paper-dim py-1.5 relative transition-colors duration-300 hover:text-paper group"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-px bg-paper origin-right scale-x-0 transition-transform duration-500 ease-out-quart group-hover:scale-x-100 group-hover:origin-left" />
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="relative inline-flex items-center gap-2 border border-paper px-[22px] py-[11px] max-[640px]:px-4 max-[640px]:py-[9px] text-[12px] max-[640px]:text-[11px] font-bold tracking-[0.06em] uppercase transition-colors duration-350 ease overflow-hidden group hover:text-ink"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-paper translate-y-full transition-transform duration-400 ease group-hover:translate-y-0 -z-10"
          />
          Neem contact op
          <span className="inline-block transition-transform duration-400 ease group-hover:translate-x-[3px]">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
