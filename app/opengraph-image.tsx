import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Argentina, frame a frame — Propuesta de colaboración DJI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0a0a0a",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            opacity: 0.7,
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          Propuesta de colaboración · DJI × Argentina
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 600,
            lineHeight: 1.0,
            letterSpacing: -3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Argentina,</span>
          <span>frame a frame.</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            opacity: 0.8,
          }}
        >
          <span>DJI Mini 5 Pro · Osmo Pocket 4 · Osmo 360</span>
          <span style={{ color: "#2997ff" }}>Luis Sambrano</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
