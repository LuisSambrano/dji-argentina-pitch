import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const siteUrl = "https://dji-argentina-pitch.vercel.app";
const title = "Argentina, frame a frame — Propuesta de colaboración DJI";
const description =
  "Una propuesta de contenido nómada recorriendo Argentina con DJI Mini 5 Pro, Osmo Pocket 4 y Osmo 360. Storytelling, documental y cinematografía aérea para construir una narrativa constante con la marca.";

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
    "creador de contenido",
    "DJI Mini 5 Pro",
    "Osmo Pocket 4",
    "Osmo 360",
    "travel storytelling",
    "cinematografía aérea",
    "documental",
    "Luis Sambrano",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
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
  alternates: { canonical: siteUrl },
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
        {children}
      </body>
    </html>
  );
}
