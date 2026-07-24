# Contenido a reemplazar

Checklist de todo lo que en este momento es placeholder. Todo vive en `index.html` salvo
donde se indique lo contrario.

## 1. Imagen o video del Hero (obligatorio — es lo único que pediste dejar "en medio")

| Qué | Dónde va | Estado |
|---|---|---|
| Foto principal | `src/assets/images/hero/hero-photo.jpg` | Falta subirla |
| Video (alternativa a la foto) | `src/assets/video/hero/hero-video.mp4` | Falta subirlo (opcional) |

Una vez subido el archivo, en `index.html` dentro de `<section id="top">` descomenta la
Opción A (foto) o la Opción B (video) — están explicadas ahí mismo en un comentario.

## 2. Links reales (todos son placeholder / de ejemplo ahora mismo)

| Texto en el sitio | Ahora apunta a | Reemplazar por |
|---|---|---|
| "Escuchar en Spotify" (bio) | `open.spotify.com` | Link real al artista/perfil en Spotify |
| "Ver discografía completa →" (Lanzamientos) | `open.spotify.com` | Link real a tu discografía |
| Cada tarjeta de Lanzamientos (6 en total) | `open.spotify.com` | Link real a cada canción/EP en Spotify |
| "Spotify" / "Apple Music" / "YouTube" (now playing) | `open.spotify.com` / `#` / `#` | Links reales de streaming de "Tengo que ir a terapia" |
| Instagram (footer + ícono) | `instagram.com/chillandgo_` | Confirmar que el handle sea correcto |
| YouTube (footer) | `youtube.com` | Link real al canal |
| TikTok (footer) | `tiktok.com` | Link real al perfil |
| "Boletos" — Festival Internacional del Globo | `#` | Link real de venta de boletos |
| "Boletos" — Casa Padi | `#` | Link real de venta de boletos |
| "Boletos" — Mexsynthco | `#` | Link real de venta de boletos |
| "Descargar EPK (PDF)" | `#` | Link al PDF real del EPK (puedes subirlo a `src/assets/` si quieres que viva en el mismo repo) |
| Email de contacto | `rotoentertaimentmx@gmail.com` | Confirmar que sea el correo correcto |

## 3. Textos a confirmar o ajustar

- **Bio** (sección debajo del hero): escribí un resumen corto con lo que mencionaste en el
  brief original (Juan Torres, Lofi Mexa, +11M streams, sync Nike, cine mexicano). Revísalo
  y dime si algo no es exacto o si quieres un tono distinto (más largo, más personal, etc.)
- **Título y duración de la canción destacada**: "Tengo que ir a terapia" feat. JAYANI, 2:47.
  Si la duración real es distinta, dos lugares a cambiar:
  - El texto `2:47` en `index.html` (dentro de `#musica`, junto al `progress-bar`)
  - La constante `TRACK_DURATION = 167` en `src/js/main.js` (167 segundos = 2:47)
- **Nombres de lanzamientos en el grid**: "Pedregal EP", "Nopal Nocturno", "Sesiones CDMX
  Vol. 1", "Terapia (Remix)", "Cassette Demos Vol. 2" — confirma si estos son reales o
  si quieres otros títulos/orden.
- **Fechas de tour**: tal cual las diste en el brief original. Avísame si cambian ciudades,
  venues o fechas.
- **Prensa / Syncs / Hitos**: Nike Retail Global, "Déjame estar contigo" (Videocine), Indie
  Rocks!, Ibero 909, Radio IPN, KCRW, Amandititita, Cosmic Wacho, H 3 F — confirma que la
  lista siga vigente.
- **Carteles de la galería**: ahora mismo son 6 tarjetas con arte generado (patrón de aros
  México 68), no fotos. Los títulos ("Foro Indie Rocks!", "Museo del Metro", etc.) son los
  que diste en el brief. Si quieres subir fotos reales de tus carteles, ve a
  `src/assets/images/posters/README.md`.

## 4. Reproductor de audio

El reproductor (barra de progreso, waveform, play/pause) es **una simulación visual** —
no está conectado a un archivo de audio real. Si me pasas el MP3 (o un link de preview de
Spotify/SoundCloud), lo conecto para que reproduzca audio de verdad.
