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
          background: "#0A0A0B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#FAFAFA",
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#FF6A2C",
            fontSize: 24,
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#FF6A2C",
            }}
          />
          <span>Disponible aujourd&apos;hui</span>
        </div>

        {/* Big title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 200,
              lineHeight: 0.9,
              fontWeight: 700,
              letterSpacing: -8,
            }}
          >
            <span>E-Major</span>
            <span style={{ color: "#FF6A2C" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 38,
              color: "rgba(250, 250, 250, 0.6)",
              marginTop: 24,
              fontWeight: 400,
            }}
          >
            Électricité & plomberie — Paris XIVᵉ
          </div>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(250, 250, 250, 0.4)",
            fontSize: 22,
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <span>149 av. du Maine — 75014</span>
          <span>06 61 86 43 03</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
