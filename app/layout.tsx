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

const title = "Luis Sambrano · Propuesta DJI Argentina";
const description =
  "Propuesta de colaboración de doce meses para documentar Argentina entera con DJI Mini 5 Pro, Osmo Pocket 4 y Osmo 360. Por Luis Sambrano.";

const titleEn = "Luis Sambrano · DJI Argentina Proposal";
const descriptionEn =
  "Twelve month collaboration proposal to document all of Argentina with DJI Mini 5 Pro, Osmo Pocket 4 and Osmo 360. By Luis Sambrano.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Luis Sambrano · Propuesta DJI",
  authors: [{ name: "Luis Sambrano", url: "https://instagram.com/luissambrano_ux" }],
  creator: "Luis Sambrano",
  publisher: "Luis Sambrano",
  keywords: [
    "Luis Sambrano",
    "DJI Argentina",
    "Propuesta DJI",
    "DJI LATAM",
    "DJI Mini 5 Pro",
    "Osmo Pocket 4",
    "Osmo 360",
    "creador de contenido Argentina",
    "content creator Argentina",
    "documental Argentina",
    "cinematografía aérea",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Luis Sambrano · Propuesta DJI",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@luissambrano_ux",
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
