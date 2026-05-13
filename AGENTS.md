<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Image dimension cap — 2000px

Any image saved into this repo (commiteadas o screenshots locales en `.tmp-screenshots/`) must keep **both width and height ≤2000px**. La API de Claude rechaza sesiones con muchas imágenes cuando alguna excede 2000px en cualquier dimensión ("exceeds the dimension limit for many-image requests (2000px)").

- Imágenes nuevas en `public/images/`: redimensionar antes de guardar (`sips --resampleWidth 2000 file.jpg` o `--resampleHeight 2000`).
- Screenshots con Playwright/webapp-testing: usar `fullPage: false` o aplicar resize post-captura. Nunca dejar full-page screenshots de páginas largas — pueden llegar a 10000px de alto.
- Recomendaciones por slot en `public/images/README.md` ya reflejan este cap.
