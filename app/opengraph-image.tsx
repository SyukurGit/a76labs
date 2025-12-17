import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "A76LABS - Independent Product Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Kita pakai kotak hitam simpel sebagai logo visual */}
            <div style={{ width: 80, height: 80, background: 'black', borderRadius: 10 }} />
            <span>A76LABS</span>
        </div>
        <div style={{ fontSize: 40, marginTop: 30, color: '#666', fontWeight: 400 }}>
            Practical Digital Products
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}