# Argentina, frame a frame — Propuesta DJI

Landing page de pitch para una colaboración de contenido nómada con DJI:
storytelling + travel lifestyle + cinematografía aérea recorriendo Argentina con
**DJI Mini 5 Pro · Osmo Pocket 4 · Osmo 360**.

Site live: https://dji-argentina-pitch.vercel.app

## Stack

- **Next.js 16** (App Router, RSC, Turbopack)
- **TypeScript** estricto
- **Tailwind CSS v4** con sistema de diseño Apple en `app/globals.css` via `@theme`
- **Inter** (variable, vía `next/font/google`) con fallback a SF Pro real en Apple devices
- Animaciones CSS + IntersectionObserver propio (sin Framer Motion)
- Deploy: **Vercel Hobby** (gratis) conectado a este repo

## Setup local

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de producción:

```bash
npm run build
npm start
```

## Estructura

```
app/
  layout.tsx           # Inter font, metadata global, html lang="es-AR"
  page.tsx             # Composición de tiles
  globals.css          # @theme con tokens Apple (colors, typography, radii, shadows)
  opengraph-image.tsx  # OG image dinámica (Edge Runtime)
  robots.ts, sitemap.ts, icon.svg
components/
  nav/{global-nav,sub-nav}.tsx
  ui/{tile,button-primary,button-ghost,reveal,product-icon}.tsx
  tiles/{hero,concept,ecosystem,route,method,community,advantage,cta}.tsx
  footer.tsx
lib/
  content.ts           # TODA la copy en español rioplatense
  clsx.ts
public/
  images/              # 5 fotos placeholder + README de swap
```

## Cómo iterar

| Cambio | Dónde |
|---|---|
| Texto / titulares / copy | `lib/content.ts` |
| Email, Instagram, links de contacto | `lib/content.ts` → `contact` |
| Imágenes de paisaje | `public/images/*.jpg` (mantené el nombre) |
| Productos DJI (SVG) | `components/ui/product-icon.tsx` |
| Colores / tipografía | `app/globals.css` `@theme` |
| Orden / nuevas secciones | `app/page.tsx` |
| Metadata, OG, SEO | `app/layout.tsx` |

## Deploy a Vercel (gratis)

Opción rápida con Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Opción visual: importá el repo en https://vercel.com/new — Vercel detecta Next.js
y deploya automáticamente. El Hobby tier soporta este proyecto sin costo (100 GB
bandwidth/mes, builds ilimitados).

## Sistema de diseño

Resumen del sistema Apple aplicado (ver `app/globals.css` para detalle):

- **Acento único**: `#0066cc` para todo lo interactivo. En tiles dark, los links usan `#2997ff`.
- **Tipografía**: Inter 17px body (no 16px), display weight 600 con tracking tight (-0.02em).
- **Tiles full-bleed**: cero bordes redondeados; el cambio de color es el divisor.
- **Una sola sombra**: `3px 5px 30px rgba(0,0,0,0.22)` reservada para imágenes de producto.
- **Cero gradientes decorativos**: la atmósfera viene de la fotografía, no del CSS.
- **Press state universal**: `active:scale-95` en todos los botones.

## Licencia de contenido

- Código: MIT (uso libre).
- Copy: propiedad de Luis Sambrano (uso restringido al contexto de esta propuesta).
- Imágenes placeholder: Unsplash + Pexels (CC0, atribución no requerida).
- Productos DJI: marca registrada de SZ DJI Technology Co., Ltd. — uso bajo
  fair use para propuesta editorial/colaboración.
