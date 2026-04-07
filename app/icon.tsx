import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
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
