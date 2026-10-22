import { AtomScene } from "./AtomScene";
import { Reveal } from "./Reveal";
import type { Dict } from "@/data/i18n";

export function Hero({ t }: { t: Dict }) {
  return (
    <section
      className="hero relative overflow-hidden"
      style={{
        minHeight: "min(96vh, 780px)",
        padding: "130px 0 90px",
        background:
          "radial-gradient(ellipse at 15% 25%, rgba(212,25,27,0.11), transparent 45%), radial-gradient(ellipse at 85% 75%, rgba(47,143,131,0.10), transparent 45%), radial-gradient(ellipse at 55% 5%, rgba(201,150,46,0.09), transparent 40%), var(--color-ink)",
      }}
    >
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          opacity: 0.045,
          backgroundImage:
            "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Corner tags */}
      <span className="hidden md:block absolute top-[100px] start-8 mono text-[10px] text-fog tracking-[0.15em] z-[3] pointer-events-none">
        <span className="text-brand-red">◆</span> {t.hero.cornerStart}
      </span>
      <span className="hidden md:block absolute top-[100px] end-8 mono text-[10px] text-fog tracking-[0.15em] z-[3] pointer-events-none text-end">
        <span className="text-brand-gold">◆</span> <bdi>{t.hero.cornerEnd}</bdi>
      </span>

      <div className="wrap grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 items-center relative z-[2]">
        <div className="max-w-[640px]">
          <Reveal>
            <div className="inline-flex items-center gap-3 text-[11px] text-paper-dim mb-7 px-3.5 py-2 border border-line rounded-full bg-white/[0.02] mono">
              <span
                aria-hidden
                className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse-dot flex-shrink-0"
                style={{ boxShadow: "0 0 12px rgba(212,25,27,0.4)" }}
              />
              {t.hero.badge}
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1
              className="display mb-7"
              style={{
                fontSize: "clamp(34px, 5.5vw, 68px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              {t.hero.title}
              <br />
              <em className="brand-gradient-text not-italic">
                {t.hero.titleAccent}
              </em>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-paper-dim text-base leading-[1.7] max-w-[500px] mb-10">
              {t.hero.intro}
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-wrap gap-3.5">
              <a href="#bedrijven" className="btn btn-primary">
                {t.hero.ctaPrimary} <span className="arrow">{t.arrow}</span>
              </a>
              <a href="#verhaal" className="btn btn-ghost">
                {t.hero.ctaSecondary} <span className="arrow">↓</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <AtomScene />
        </Reveal>
      </div>

      <span className="hidden md:flex absolute bottom-9 left-1/2 -translate-x-1/2 mono text-[10px] text-fog tracking-[0.2em] items-center gap-3 z-[3]">
        {t.hero.scroll}
        <span
          aria-hidden
          className="w-px h-10 animate-scroll-line"
          style={{
            background: "linear-gradient(var(--color-fog), transparent)",
          }}
        />
      </span>
    </section>
  );
}
