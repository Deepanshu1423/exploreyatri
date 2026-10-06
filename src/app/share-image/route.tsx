import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "70px 85px", background: "linear-gradient(135deg, #082e33, #061e24)", color: "white" }}>
      <div style={{ display: "flex", fontSize: 32, color: "#ff9852", letterSpacing: 5, marginBottom: 38 }}>{siteConfig.name.toUpperCase()}</div>
      <div style={{ display: "flex", fontSize: 70, fontWeight: 700, lineHeight: 1.1 }}>Travel More. Explore Better.</div>
      <div style={{ display: "flex", fontSize: 66, fontWeight: 700, color: "#ffc477", marginTop: 10 }}>Remember Forever.</div>
      <div style={{ display: "flex", fontSize: 25, marginTop: 40, color: "#d6e7e6" }}>Domestic & International Holidays · Customized Around You</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
