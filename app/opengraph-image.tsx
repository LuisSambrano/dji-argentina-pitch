import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Argentina entera, contada como un solo viaje. Propuesta de colaboración DJI 2026.";
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
            fontSize: 22,
            opacity: 0.7,
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          Propuesta de colaboración 2026 · DJI × Argentina
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            lineHeight: 1.02,
            letterSpacing: -3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Argentina entera,</span>
          <span>un solo viaje.</span>
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
