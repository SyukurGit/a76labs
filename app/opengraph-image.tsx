import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "A76LABS — Founder-Led Software Startup";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 600,
          letterSpacing: "-0.05em",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ width: 80, height: 80, background: "black", borderRadius: 12 }} />
          <span>A76LABS</span>
        </div>
        <div style={{ fontSize: 36, marginTop: 30, color: "#111827", fontWeight: 600 }}>
          Founder-Led Software Startup · Indonesia
        </div>
        <div style={{ fontSize: 24, marginTop: 12, color: "#4b5563", fontWeight: 400 }}>
          Building & Operating Practical Digital Products
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
