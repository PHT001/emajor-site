import { ImageResponse } from "next/og";

export const alt = "E-Major — Électricité & plomberie à Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#ffffff",
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#2d8c4e",
            fontSize: 24,
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#2d8c4e",
            }}
          />
          <span>Paris &amp; Île-de-France</span>
        </div>

        {/* Big title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 160,
              lineHeight: 0.9,
              fontWeight: 700,
              letterSpacing: -6,
            }}
          >
            <span>E-Major</span>
            <span style={{ color: "#2d8c4e" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 38,
              color: "rgba(255, 255, 255, 0.6)",
              marginTop: 24,
              fontWeight: 400,
            }}
          >
            Électricité &amp; plomberie de qualité
          </div>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: 22,
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <span>149 av. du Maine — 75014 Paris</span>
          <span>contact@emajor.fr</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
