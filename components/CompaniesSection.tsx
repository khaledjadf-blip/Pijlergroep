import { Reveal } from "./Reveal";
import { companies, type Company } from "@/data/site";
import { TrafficConeIcon, HardHatIcon, SparkleIcon } from "./Icons";

const iconFor = (slug: Company["slug"]) => {
  switch (slug) {
    case "verkeersplus":
      return TrafficConeIcon;
    case "vca":
      return HardHatIcon;
    case "netjes":
      return SparkleIcon;
  }
};

const brandStyles: Record<Company["brandColor"], { text: string; tag: string; bar: string; glow: string }> = {
  red: {
    text: "text-brand-red",
    tag: "bg-brand-red",
    bar: "from-brand-red",
    glow: "group-hover:shadow-[0_0_30px_rgba(212,25,27,0.15)] group-hover:border-brand-red",
  },
  gold: {
    text: "text-brand-gold",
    tag: "bg-brand-gold",
    bar: "from-brand-gold",
    glow: "group-hover:shadow-[0_0_30px_rgba(201,150,46,0.15)] group-hover:border-brand-gold",
  },
  teal: {
    text: "text-brand-teal",
    tag: "bg-brand-teal",
    bar: "from-brand-teal",
    glow: "group-hover:shadow-[0_0_30px_rgba(47,143,131,0.15)] group-hover:border-brand-teal",
  },
};

export function CompaniesSection() {
  return (
    <section
      id="bedrijven"
      className="companies relative bg-ink-2 py-[clamp(80px,11vw,150px)]"
    >
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-line), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-line), transparent)",
        }}
      />

      <div className="wrap mb-16">
        <Reveal>
          <div className="section-label">Onze bedrijven</div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">Drie merken. Eén groep.</h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="section-sub">
            Elk bedrijf binnen Pijler Groep is zelfstandig en gespecialiseerd —
            samen dekken we een groot deel van wat opdrachtgevers in de bouw,
            infra- en evenementenwereld nodig hebben.
          </p>
        </Reveal>
      </div>

      <div className="wrap">
        <div className="flex flex-col">
          {companies.map((c, idx) => {
            const Icon = iconFor(c.slug);
            const styles = brandStyles[c.brandColor];
            return (
              <Reveal key={c.slug} delay={idx === 0 ? 0 : 1}>
                <div className="group relative flex flex-wrap items-center justify-between gap-7 py-[38px] max-[640px]:py-[30px] border-t border-line last:border-b transition-[padding] duration-500 ease hover:pl-7 max-[640px]:hover:pl-3.5 hover:pr-5 max-[640px]:hover:pr-0">
                  <div
                    aria-hidden
                    className={`absolute left-0 top-0 bottom-0 w-[3px] group-hover:w-[6px] bg-gradient-to-b ${styles.bar} to-transparent transition-[background,width] duration-500 ease`}
                  />
                  <div className="flex-1 min-w-[260px] max-[640px]:min-w-full flex gap-[26px] items-start max-[640px]:flex-col max-[640px]:gap-[18px]">
                    <div
                      className={`relative w-14 h-14 max-[640px]:w-12 max-[640px]:h-12 flex-shrink-0 flex items-center justify-center border border-line transition-all duration-500 ease group-hover:-rotate-[4deg] ${styles.glow}`}
                    >
                      <Icon size={26} className={styles.text} />
                      <span className="absolute -top-2 -right-2 mono text-[9px] text-fog bg-ink-2 px-1 tracking-[0.1em]">
                        {c.number}
                      </span>
                    </div>
                    <div>
                      <span
                        className={`inline-block mono text-[10px] px-2.5 py-1 mb-3 text-ink ${styles.tag}`}
                      >
                        {c.tag}
                      </span>
                      <div
                        className="display text-[26px] max-[640px]:text-[22px] mb-2"
                        style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}
                      >
                        {c.name}
                      </div>
                      <p className="text-paper-dim text-[14.5px] leading-[1.65] max-w-[520px]">
                        {c.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener"
                    className="relative overflow-hidden mono text-[12px] whitespace-nowrap border border-line px-[22px] py-[14px] flex items-center gap-2.5 transition-colors duration-400 ease max-[640px]:w-full max-[640px]:justify-center hover:text-ink hover:border-paper group/link"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-paper translate-y-full transition-transform duration-400 ease group-hover/link:translate-y-0 -z-10"
                    />
                    {c.domain}
                    <span className="inline-block transition-transform duration-400 ease group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]">
                      ↗
                    </span>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
