# Videos — Swap Guide

Hoy esta carpeta está vacía. La landing está pensada para funcionar con o sin videos: si los archivos `.mp4` listados abajo no existen, los componentes muestran la imagen poster como fallback y todo se ve bien igual. Cuando subas los videos, aparecen automáticamente sin tocar código.

> ⚠️ **Cap obligatorio de dimensiones**: ningún video debe exceder 2000px en ancho ni alto (ver `AGENTS.md`). En la práctica, exportá Full HD vertical (1080×1920) u horizontal (1920×1080). El 4K real no agrega calidad visible en una landing y rompe la iteración con Claude.

## Slots

| Slot | Archivo | Tamaño | Duración | Notas |
|---|---|---|---|---|
| Hero loop | `hero-loop.mp4` | 1920×1080, H.264, ≤6 MB | 10 a 20 s, loop sin corte | Sin audio. B-roll cinematográfico de Argentina. Se reproduce en autoplay muted detrás del título del hero. Si no existe, queda visible la imagen `hero-argentina.jpg`. |
| Vertical corto | `format-vertical-short.mp4` | 1080×1920, ≤4 MB | 8 a 15 s | Ejemplo de Reel/Short. Ritmo dinámico. Poster fallback: `route-ciudad.jpg`. |
| Vertical largo | `format-vertical-long.mp4` | 1080×1920, ≤4 MB | 8 a 15 s | Ejemplo de tutorial vertical largo. Ritmo medio. Poster fallback: `route-refugio.jpg`. |
| Horizontal corto | `format-horizontal-short.mp4` | 1920×1080, ≤4 MB | 8 a 15 s | Clip cinemático horizontal. Ritmo lento, planos sostenidos. Poster fallback: `route-naturaleza.jpg`. |
| Horizontal largo | `format-horizontal-long.mp4` | 1920×1080, ≤4 MB | 8 a 15 s | Excerpt de documental horizontal. Poster fallback: `route-ruta.jpg`. |

## Cómo encodear

Recomendado: H.264 baseline o main profile, 2 pass, audio descartado.

```bash
# Hero loop (ejemplo con ffmpeg desde un master 4K vertical o 1080p)
ffmpeg -i source.mp4 -vf "scale=1920:-2" -c:v libx264 -profile:v main -level 4.0 \
  -preset slow -b:v 1800k -pass 1 -an -f mp4 /dev/null && \
ffmpeg -i source.mp4 -vf "scale=1920:-2" -c:v libx264 -profile:v main -level 4.0 \
  -preset slow -b:v 1800k -pass 2 -an public/videos/hero-loop.mp4
```

Para los slots de formatos no hace falta el 2 pass, basta con un encode estándar a ≤4 MB con `-crf 24` y `-an` para quitar audio.

## Mientras tanto

Si querés ver los slots con video real antes de tener tu propio metraje cortado, podés usar B-roll CC0 de:

- [Pexels Videos](https://www.pexels.com/videos/) — buscar "argentina patagonia", "buenos aires", "drone landscape".
- [Mixkit](https://mixkit.co/free-stock-video/) — buscar "aerial", "mountains", "city".
- [Pixabay Videos](https://pixabay.com/videos/) — alternativa con menos curaduría pero mucho catálogo.

Descargá el clip, ajustá dimensiones con `ffmpeg` o `sips` para mantener el cap de 2000px, renombrá al slot correspondiente y dropealo acá.

## Hosting

Para clips ≤4 MB cada uno, dejarlos en `public/videos/` y commitearlos al repo está bien. Vercel los sirve desde su CDN edge sin costo extra.

Si en algún momento el total pasa de 25 MB o querés streaming adaptativo, mover los videos a Vercel Blob o Cloudinary y actualizar los `src` en `lib/content.ts`.
