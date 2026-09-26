import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"
export const runtime = "edge"

// Favicon: the red "X" from the SparkX wordmark on the site's near-black background.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 14,
          color: "#e1251b",
          fontSize: 52,
          fontWeight: 800,
          fontStyle: "italic",
        }}
      >
        X
      </div>
    ),
    size,
  )
}
