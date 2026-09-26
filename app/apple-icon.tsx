import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"
export const runtime = "edge"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "white",
        }}
      >
        <div style={{ fontSize: 110, fontWeight: 800, fontStyle: "italic", color: "#e1251b", lineHeight: 1 }}>X</div>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 4, marginTop: 6 }}>SPARKX</div>
      </div>
    ),
    size,
  )
}
