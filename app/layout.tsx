import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/i18n";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fonte de destaque (títulos)
const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const description =
  "Apoio à análise de hemogramas com IA validada e hematologistas. Menos variabilidade, mais segurança diagnóstica.";

// metadataBase resolve URLs relativas (ex.: imagem OG). Na Vercel usa a URL do
// deploy automaticamente; localmente cai no localhost.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hemodoctor — IA que apoia a decisão clínica no hemograma",
    template: "%s | Hemodoctor",
  },
  description,
  keywords: [
    "hemograma",
    "hematologia",
    "inteligência artificial na saúde",
    "apoio à decisão clínica",
    "CDSS",
    "TeleHemato",
    "diagnóstico",
  ],
  authors: [{ name: "Hemodoctor" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Hemodoctor",
    title: "Hemodoctor — IA que apoia a decisão clínica no hemograma",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemodoctor — IA que apoia a decisão clínica no hemograma",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1763e5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
