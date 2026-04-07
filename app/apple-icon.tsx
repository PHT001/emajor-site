import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          background: "#1B1B1F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FBF8F2",
          fontWeight: 600,
          fontFamily: "serif",
        }}
      >
        <span>E</span>
        <span style={{ color: "#B08D48" }}>.</span>
      </div>
    ),
    { ...size },
  );
}
