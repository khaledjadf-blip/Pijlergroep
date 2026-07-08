import { Reveal } from "./Reveal";
import { whyCards } from "@/data/site";

export function WhySection() {
  return (
    <section
      id="waarom"
      className="relative py-[clamp(80px,11vw,150px)]"
    >
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[min(1200px,calc(100%-64px))]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-line-2) 20%, var(--color-line-2) 80%, transparent)",
        }}
      />
      <div className="wrap">
        <Reveal>
          <div className="section-label">Waarom Pijler Groep</div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Eén groep werkt anders dan drie losse leveranciers.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[70px] max-[960px]:mt-10">
          {whyCards.map((card, idx) => (
            <Reveal key={card.number} delay={(idx + 1) as 1 | 2 | 3}>
              <div className="group relative overflow-hidden bg-ink-2 border border-line p-9 max-[640px]:p-7 transition-all duration-500 ease hover:-translate-y-1 hover:border-line-2 hover:bg-ink-3">
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-px w-10 bg-paper transition-[width] duration-500 ease group-hover:w-full"
                />
                <span className="mono text-[11px] text-fog mb-5 block tracking-[0.15em]">
                  {card.number} — {card.tag}
                </span>
                <h4
                  className="display text-[19px] mb-3"
                  style={{ letterSpacing: "-0.015em" }}
                >
                  {card.title}
                </h4>
                <p className="text-paper-dim text-[14.5px] leading-[1.7]">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
