import { Reveal } from "./Reveal";
import { RichText } from "./RichText";
import { pillarColors } from "@/data/site";
import type { Dict } from "@/data/i18n";
import { TrafficConeIcon, ShieldCheckIcon, ConnectIcon } from "./Icons";

const icons = [TrafficConeIcon, ShieldCheckIcon, ConnectIcon] as const;

const colorClass = {
  red: "text-brand-red border-brand-red/30",
  gold: "text-brand-gold border-brand-gold/30",
  teal: "text-brand-teal border-brand-teal/30",
} as const;

export function StorySection({ t }: { t: Dict }) {
  return (
    <section
      id="verhaal"
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
      <div className="wrap max-w-[860px]">
        <div className="mb-14">
          <Reveal>
            <div className="section-label">{t.story.label}</div>
          </Reveal>
          <Reveal delay={1}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(28px, 4.4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.028em",
                maxWidth: "820px",
              }}
            >
              {t.story.title}
            </h2>
          </Reveal>
        </div>

        <div>
          {t.story.paragraphs.map((text, idx) => (
            <Reveal key={idx}>
              <p
                className={`text-paper-dim text-[17px] leading-[1.85] mb-5 ${
                  idx === 0 && t.dir === "ltr" ? "drop-cap" : ""
                }`}
              >
                <RichText text={text} />
              </p>
            </Reveal>
          ))}

          <Reveal>
            <div className="flex flex-col mt-9">
              {t.story.pillars.map((pillar, idx) => {
                const Icon = icons[idx];
                return (
                  <div
                    key={pillar.title}
                    className="group flex items-start gap-[22px] py-[26px] border-t border-line transition-[padding] duration-400 ease hover:ps-2"
                  >
                    <div
                      className={`w-11 h-11 flex items-center justify-center border transition-[border-color,background-color] duration-400 ease group-hover:bg-white/[0.03] group-hover:border-paper ${colorClass[pillarColors[idx]]}`}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-[17px] font-semibold mb-1.5 display">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-paper-dim leading-[1.65]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
