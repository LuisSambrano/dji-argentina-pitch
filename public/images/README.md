# Imágenes — Swap Guide

Las 5 imágenes actuales son placeholders Unsplash/Pexels CC0 (atribución no requerida).
Reemplazá cada archivo manteniendo el mismo nombre y formato.

| Slot | Archivo | Recomendación |
|---|---|---|
| Hero (full-bleed) | `hero-argentina.jpg` | 2400×1600 o más, JPG q85, paisaje épico argentino (Patagonia, Andes, Salta) |
| Pilar — Ruta | `route-ruta.jpg` | 1600×2000 vertical, ruta dramática |
| Pilar — Naturaleza | `route-naturaleza.jpg` | 1600×2000 vertical, montaña / bioma argentino |
| Pilar — Ciudad | `route-ciudad.jpg` | 1600×2000 vertical, urbano argentino (BA, Mendoza, Bariloche) |
| Pilar — Refugio | `route-refugio.jpg` | 1600×2000 vertical, hostelería íntima / cabaña |

## Productos DJI

Las tres tarjetas del Ecosistema (DJI Mini 5 Pro, Osmo Pocket 4, Osmo 360)
**no usan archivos** sino SVG silhouettes inline en `components/ui/product-icon.tsx`.

Para reemplazar por renders oficiales DJI:

1. Conseguí los PNG transparentes desde el press kit oficial (https://www.dji.com/global/newsroom).
2. Agregalos a `public/images/dji-{slug}.png`.
3. En `lib/content.ts` reemplazá el campo `icon: "mini5"` por `image: "/images/dji-mini-5-pro.png"`.
4. En `components/tiles/ecosystem.tsx` cambiá `<ProductIcon name={card.icon} />` por
   `<Image src={card.image} alt={card.name} fill className="object-contain p-4" />`.

## Imágenes propias (drone footage stills, fotos de ruta)

Subí los archivos a esta carpeta con el nombre exacto del slot. La landing los toma
automáticamente. Formatos preferidos: JPG (paisajes), PNG (productos con transparencia).
AVIF/WebP también funcionan — Next.js Image los convierte on-the-fly.
