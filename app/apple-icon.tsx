import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const bar = (color: string, height: number) => (
    <div style={{ width: 28, height, background: color, borderRadius: 4 }} />
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0b",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
          {bar("#d4191b", 92)}
          {bar("#c9962e", 104)}
          {bar("#2f8f83", 92)}
        </div>
        <div
          style={{ width: 120, height: 10, background: "#f2f0ec", borderRadius: 5 }}
        />
      </div>
    ),
    size
  );
}
