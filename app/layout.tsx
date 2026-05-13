import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const siteUrl = "https://dji-argentina-pitch.vercel.app";
const title = "Argentina entera, contada como un solo viaje · Propuesta DJI";
const description =
  "Propuesta de colaboración de largo aliento con DJI para documentar Argentina entera durante 2026. Tutoriales accesibles, cinematografía aérea, documental y storytelling con DJI Mini 5 Pro, Osmo Pocket 4 y Osmo 360.";
const titleEn = "All of Argentina, told as a single journey · DJI Proposal";
const descriptionEn =
  "A long form collaboration proposal with DJI to document all of Argentina during 2026. Accessible tutorials, cinematic aerials, documentary storytelling with DJI Mini 5 Pro, Osmo Pocket 4 and Osmo 360.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "DJI Argentina Pitch",
  authors: [{ name: "Luis Sambrano" }],
  creator: "Luis Sambrano",
  keywords: [
    "DJI",
    "Argentina",
    "LATAM",
    "creador de contenido",
    "content creator",
    "DJI Mini 5 Pro",
    "Osmo Pocket 4",
    "Osmo 360",
    "travel storytelling",
    "cinematografía aérea",
    "documental",
    "nómada digital",
    "digital nomad",
    "Luis Sambrano",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "DJI Argentina Pitch",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-AR": siteUrl,
      "en-US": siteUrl,
    },
  },
  other: {
    "x-en-title": titleEn,
    "x-en-description": descriptionEn,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
