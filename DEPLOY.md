<!-- # Dónde deployar -->

Este sitio es **100% estático** (HTML + CSS + JS, sin backend, sin base de datos). Eso abre
la puerta a hosts mucho más simples y baratos que WordPress o Wix — y como querías que
"todo viva en código", te conviene un host que se conecte directo a un repositorio de git:
subes cambios con `git push` y el sitio se actualiza solo, sin editor visual de por medio.

## Recomendación corta

**Usa Netlify o Cloudflare Pages.** Para un sitio de artista con tráfico moderado (picos
cuando anuncias shows o lanzamientos), cualquiera de los dos te da: deploy automático desde
GitHub, HTTPS y dominio propio gratis, y cero mantenimiento de servidor.

| Opción | Costo | Cuándo elegirla |
|---|---|---|
| **Netlify** | Gratis (100GB/mes de banda, de sobra para esto) | Opción por default: rápida de configurar, incluye manejo de formularios si luego quieres un form de contacto sin backend |
| **Cloudflare Pages** | Gratis (banda ilimitada) | Si esperas picos grandes de tráfico (nota de prensa, viral en TikTok) — su red es la más grande y no cobra por banda |
| **GitHub Pages** | Gratis | Si quieres la opción más simple posible y no te importa menos flexibilidad (redirects, headers personalizados) |
| **AWS (S3 + CloudFront)** | ~$1–3 USD/mes | Si ya manejas infraestructura en AWS y quieres todo bajo la misma cuenta/facturación que tus otros proyectos |
| **Vercel** | Gratis para uso personal — su free tier técnicamente pide plan Pro ($20/mes) para uso comercial | Solo si ya usas Vercel para otro proyecto y quieres todo junto; para un sitio de banda con booking agency (uso comercial), Netlify es más directo |

## Por qué NO WordPress ni Wix

Ambos están pensados para gente que edita visualmente, no para un flujo donde el sitio vive
en código versionado. Meter este HTML/CSS/JS en WordPress implicaría reconstruirlo como
theme/plugin (perdiendo la simplicidad de "es solo un repo"), y Wix directamente no te deja
subir tu propio código así — todo pasa por su editor. Ninguno de los dos encaja con lo que
pediste.

## Pasos con Netlify (la ruta más simple)

1. Sube esta carpeta (`chillandgo-project/`) a un repositorio de GitHub.
2. Entra a [netlify.com](https://www.netlify.com) → "Add new site" → "Import an existing project" → conecta el repo.
3. Como no hay build (no hay `npm run build`), deja el "Build command" vacío y el
   <!-- "Publish directory" como `.` (la raíz del repo, donde está `index.html`). -->
4. Netlify te da una URL tipo `chillandgo.netlify.app` al instante. Para tu dominio propio
   (`chillandgo.mx` o el que sea), ve a "Domain settings" → "Add custom domain" y sigue las
   instrucciones para apuntar tus DNS ahí — Netlify te da el SSL gratis automáticamente.
5. Cada vez que hagas `git push` a la rama principal, el sitio se actualiza solo.

## Pasos con Cloudflare Pages (alternativa si esperas mucho tráfico)

Mismo flujo: conectas el repo de GitHub desde el dashboard de Cloudflare, "Build command"
vacío, "Build output directory" = `/`. Dominio propio y SSL también gratis.

## Si prefieres quedarte en AWS

1. Crea un bucket de S3, sube el contenido de esta carpeta tal cual (manteniendo la
   estructura de `src/`).
2. Activa "Static website hosting" en las propiedades del bucket, con `index.html` como
   documento de índice.
3. Pon un CloudFront delante del bucket para HTTPS, dominio propio y cache global (S3 solo
   no sirve HTTPS con dominio propio sin esto).
4. Para automatizar el deploy con git, arma un GitHub Action simple que haga `aws s3 sync`
   al bucket en cada push — si quieres, te lo armo cuando llegues a este paso.

Esta opción tiene más piezas que mover que Netlify/Cloudflare, pero tiene sentido si ya
tienes cuenta de AWS corriendo para tu backend de Django y quieres todo centralizado ahí.
