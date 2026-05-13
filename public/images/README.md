# Imágenes — Swap Guide

> ⚠️ **Cap obligatorio: ninguna dimensión >2000px** (límite de la API de Claude para sesiones con muchas imágenes — ver `AGENTS.md`). Next.js Image re-comprime para cada viewport, así que masters >2000px no aportan calidad visible y rompen la iteración con Claude.

Las 5 imágenes actuales son placeholders Unsplash/Pexels CC0 (atribución no requerida).
Reemplazá cada archivo manteniendo el mismo nombre y formato.

| Slot | Archivo | Recomendación |
|---|---|---|
| Hero (full-bleed) | `hero-argentina.jpg` | máx. 2000×1333, JPG q85, paisaje épico argentino (Patagonia, Andes, Salta) |
| Pilar — Ruta | `route-ruta.jpg` | máx. 1500×2000 vertical, ruta dramática |
| Pilar — Naturaleza | `route-naturaleza.jpg` | máx. 1500×2000 vertical, montaña / bioma argentino |
| Pilar — Ciudad | `route-ciudad.jpg` | máx. 1500×2000 vertical, urbano argentino (BA, Mendoza, Bariloche) |
| Pilar — Refugio | `route-refugio.jpg` | máx. 1500×2000 vertical, hostelería íntima / cabaña |

## Productos DJI

Las tres tarjetas del Ecosistema usan renders oficiales con fondo transparente:

| Slot | Archivo | Origen | Dimensiones |
|---|---|---|---|
| Mini 5 Pro | `dji-mini-5-pro.png` | CDN oficial DJI (`www-cdn.djiits.com`) | 720×720 |
| Osmo Pocket 4 | `dji-osmo-pocket-4.png` | CDN oficial DJI | 720×720 |
| Osmo 360 | `dji-osmo-360.png` | CDN oficial DJI | 720×720 |

Las imágenes son PNG con transparencia y se descargaron desde las páginas de producto de [dji.com](https://www.dji.com) (`/global/mini-5-pro`, `/global/osmo-pocket-4`, `/global/360`).

Para actualizar a versiones más nuevas o variantes de color, conseguí el PNG transparente del [press kit oficial DJI](https://www.dji.com/global/newsroom) o de las páginas de producto y reemplazá el archivo manteniendo el mismo nombre y formato. La landing lo toma automáticamente sin tocar código.

Si DJI publica renders alternativos (por ejemplo Pocket 4 sin pantalla activa), bajarlos y sustituir conserva todos los puntos de uso porque el path está en `lib/content.ts` (key `ecosystem.cards[*].image`).

## Imágenes propias (drone footage stills, fotos de ruta)

Subí los archivos a esta carpeta con el nombre exacto del slot. La landing los toma
automáticamente. Formatos preferidos: JPG (paisajes), PNG (productos con transparencia).
AVIF/WebP también funcionan — Next.js Image los convierte on-the-fly.
