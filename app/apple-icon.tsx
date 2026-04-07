import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          background: "#1A1A1A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        <span>e</span>
        <span style={{ color: "#2D8C4E" }}>o</span>
      </div>
    ),
    { ...size },
  );
}
