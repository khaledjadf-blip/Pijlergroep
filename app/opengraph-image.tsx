import { ImageResponse } from "next/og";
import { companies, site } from "@/data/site";

export const alt = `${site.name} — Eén fundament. Drie bedrijven die de klus klaren.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = { red: "#d4191b", gold: "#c9962e", teal: "#2f8f83" } as const;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "#f2f0ec",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgba(212,25,27,0.22), transparent 45%), radial-gradient(circle at 85% 75%, rgba(47,143,131,0.2), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
          <div style={{ width: 18, height: 52, background: colors.red, borderRadius: 3 }} />
          <div style={{ width: 18, height: 60, background: colors.gold, borderRadius: 3 }} />
          <div style={{ width: 18, height: 52, background: colors.teal, borderRadius: 3 }} />
          <div style={{ marginLeft: 18, fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            PIJLER
          </div>
          <div style={{ marginLeft: 10, fontSize: 40, color: "#7f8083" }}>GROEP</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            Eén fundament.
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, color: "#c9962e" }}>
            Drie bedrijven die de klus klaren.
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#c2c0bc" }}>
          {companies.map((c) => (
            <div key={c.slug} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: colors[c.brandColor] }} />
              {c.name.replace(/ B\.V\.$/, "")}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
