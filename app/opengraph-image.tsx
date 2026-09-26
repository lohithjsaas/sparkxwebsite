import { ImageResponse } from "next/og"

export const alt = "SparkX Auto Detailing — PPF, Ceramic Coating & Car Detailing in Bengaluru"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const runtime = "edge"

// Default social share card (WhatsApp, Facebook, X, LinkedIn) for every page without its own image.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(60% 80% at 100% 100%, rgba(225,37,27,0.45), #0a0a0a 70%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 800, letterSpacing: 6 }}>
          SPARK<span style={{ color: "#e1251b", fontStyle: "italic" }}>X</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Premium Auto Detailing Services
          </div>
          <div style={{ marginTop: 24, fontSize: 32, color: "rgba(255,255,255,0.7)" }}>
            PPF · Ceramic Coating · Car Wraps · Car & Bike Detailing
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "rgba(255,255,255,0.65)" }}>
          <span>Akshayanagar, Bengaluru · Open 7 days, 9 AM – 8 PM</span>
          <span style={{ color: "#e1251b", fontWeight: 700 }}>sparkxdetailing.in</span>
        </div>
      </div>
    ),
    size,
  )
}
