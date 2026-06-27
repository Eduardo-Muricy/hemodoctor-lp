import { ImageResponse } from "next/og";

// Imagem mostrada quando o link é compartilhado (WhatsApp, redes, etc.)
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hemodoctor — IA que apoia a decisão clínica no hemograma";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #0e1033 0%, #1b1c52 55%, #2a1c5e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              width: 60,
              height: 60,
              borderRadius: 18,
              background: "linear-gradient(135deg, #4d8bff, #22d3ee)",
            }}
          />
          <div style={{ display: "flex", fontSize: 46, fontWeight: 800 }}>hemodoctor</div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 70,
            fontWeight: 800,
            lineHeight: 1.08,
            maxWidth: 950,
          }}
        >
          A IA que apoia a decisão clínica no hemograma
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 32,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 820,
          }}
        >
          Menos variabilidade. Mais segurança diagnóstica.
        </div>
      </div>
    ),
    { ...size }
  );
}
