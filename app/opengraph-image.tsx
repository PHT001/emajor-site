import { ImageResponse } from "next/og";

export const alt = "E-Major — Électricien & Plombier à Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1A1A1A 0%, #1A5C32 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 180,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          <span>e-maj</span>
          <span style={{ color: "#5CDB8B" }}>o</span>
          <span>r</span>
        </div>
        <div style={{ fontSize: 48, opacity: 0.85, marginBottom: 12 }}>
          Électricien & Plombier
        </div>
        <div style={{ fontSize: 36, opacity: 0.6 }}>Paris — Île-de-France</div>
      </div>
    ),
    { ...size },
  );
}
