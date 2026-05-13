# Videos source — HyperFrames

Source HTML compositions que rinden los MP4 placeholder de la landing. Pipeline open source de HeyGen: HTML + GSAP, render local con headless Chrome + FFmpeg. Apache 2.0, sin pricing por render, ver [hyperframes.heygen.com](https://hyperframes.heygen.com).

## Qué hay acá

```
videos-src/
├── hero-loop/      → renderea a /public/videos/hero-loop.mp4 (1920x1080, 12s loop)
├── pitch-reel/     → renderea a /public/videos/dji-pitch-reel.mp4 (1080x1920, 30s)
└── package.json    → scripts agregadores
```

Cada subcarpeta es un proyecto HyperFrames independiente con su propio `index.html`, `package.json`, `meta.json` y `hyperframes.json`. El `node_modules/` está al nivel raíz para compartirse (la dependencia `hyperframes` está acá).

## Cómo rendear

Desde la raíz del proyecto Next.js:

```bash
cd videos-src
npm run render:hero    # solo el hero loop
npm run render:reel    # solo el pitch reel vertical
npm run render:all     # los dos
```

Los MP4 quedan en `../public/videos/` automáticamente. La landing los toma sin tocar código.

## Cómo editar las composiciones con preview vivo

```bash
cd videos-src/hero-loop
npm run dev        # abre Studio en el browser, hot reload
```

Lo mismo con `videos-src/pitch-reel`. Editás el `index.html`, ves el cambio al instante.

Antes de rendear, siempre correr `npm run check` para lint + validate + inspect en headless Chrome.

## Cómo agregar un video nuevo

```bash
cd videos-src
npx hyperframes init nombre-del-video --non-interactive --example blank
```

Después editás `nombre-del-video/index.html` y sumás un script `render:<alias>` en este `package.json`.

## Skill para Claude Code

Para que Claude entienda las convenciones de HyperFrames cuando le pidas modificar las composiciones:

```bash
npx skills add heygen-com/hyperframes
```

Una vez instalada, podés invocar `/hyperframes` en Claude Code y conoce los patrones específicos (timelines pausados, `class="clip"`, `data-start/duration/track-index`, hard kills con `tl.set` para seek consistency).

## Reglas que cumplen estas composiciones

1. Todo elemento con timing tiene `class="clip"` + `data-start` + `data-duration` + `data-track-index`.
2. Las timelines GSAP están pausadas y registradas en `window.__timelines["<composition-id>"]`.
3. No hay `Date.now()`, `Math.random()` ni fetch en tiempo de render. Todo es determinista.
4. Cada exit tween tiene un `tl.set(..., { opacity: 0 }, nextStart)` para evitar estado residual cuando hyperframes hace seek no lineal entre clips.
5. Resolución target por video: hero loop landscape (1920x1080), pitch reel portrait (1080x1920). Misma composición puede rendear en ambas resoluciones cambiando `--resolution`, ver la doc.
