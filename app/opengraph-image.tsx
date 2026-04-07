import { ImageResponse } from "next/og";

export const alt = "E-Major — Maison parisienne d'électricité et de plomberie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1B1B1F",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "serif",
          color: "#FBF8F2",
          position: "relative",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#B08D48",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 60, height: 1, background: "#B08D48" }} />
          <span>Maison fondée à Paris</span>
        </div>

        {/* Big editorial title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 180,
              lineHeight: 0.95,
              fontWeight: 400,
              letterSpacing: -3,
            }}
          >
            <span>E-Major</span>
            <span style={{ color: "#B08D48" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 38,
              fontStyle: "italic",
              color: "rgba(251, 248, 242, 0.65)",
              marginTop: 30,
              letterSpacing: 0.5,
            }}
          >
            Électricité &amp; plomberie — Paris XIVᵉ
          </div>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(251, 248, 242, 0.45)",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>149, av. du Maine — 75014</span>
          <span>06 61 86 43 03</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
