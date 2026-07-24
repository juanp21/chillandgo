# Chill&Go — Sitio Oficial

Landing page estática (HTML + CSS + JS vanilla) con estética México 68 / Lance Wyman.
No usa framework de build (no Angular CLI, no Webpack) — es HTML/CSS/JS plano organizado
en carpetas para que sea fácil de mantener, versionar en git, o integrar como estáticos
dentro de un proyecto Django.

## Estructura

```
chillandgo-project/
├── index.html                     ← página única, todo el markup vive aquí
├── README.md                      ← este archivo
├── CONTENIDO.md                   ← lista de todo lo que debes reemplazar (fotos, links, textos)
├── DEPLOY.md                      ← dónde y cómo publicar el sitio
└── src/
    ├── css/
    │   └── styles.css             ← todos los estilos propios (Tailwind se carga por CDN)
    ├── js/
    │   ├── tailwind-config.js     ← paleta de colores y tipografías de Tailwind
    │   └── main.js                ← nav, menú móvil, reproductor, waveform
    └── assets/
        ├── images/
        │   ├── hero/               ← foto principal del hero (ver README dentro)
        │   └── posters/            ← opcional, para cuando tengas fotos reales de carteles
        └── video/
            └── hero/               ← video del hero, alternativa a la foto (ver README dentro)
```

## Cómo verlo en tu máquina

No necesitas Node, ni build, ni dependencias. Basta un servidor estático simple porque el
`<video>`/`<img>` con rutas relativas no carga bien si abres el `index.html` con doble clic
(`file://`) en algunos navegadores. Dos formas rápidas:

```bash
# Opción 1 — Python (ya lo tienes si trabajas con Django)
cd chillandgo-project
python3 -m http.server 8000
# abre http://localhost:8000

# Opción 2 — Node
npx serve .
```

## Cómo integrarlo a un proyecto Django

Si quieres que Django sirva este sitio como estáticos (por ejemplo como landing pública
separada de tu app):

1. Copia la carpeta `src/` dentro de tu carpeta `static/` de Django (o de la app que corresponda).
2. Copia `index.html` a tu carpeta de `templates/` y ajusta las rutas de `src/css/...` y
   `src/js/...` para que usen `{% static 'css/styles.css' %}` etc. (agrega `{% load static %}`
   arriba del archivo).
3. Sirve esa template desde una vista simple (`TemplateView` basta, no necesitas lógica extra).

Si prefieres que viva completamente separado de Django (recomendado para una landing de
artista, ver `DEPLOY.md`), no necesitas tocar nada — el sitio funciona standalone.

## Notas técnicas

- **Tailwind** se carga vía CDN (`cdn.tailwindcss.com`) — no hay paso de build. Si más adelante
  quieres integrarlo a un pipeline con Angular/Webpack/Vite, dime y armamos la versión con
  Tailwind compilado (más rápido en producción, purga clases no usadas).
- **Mexcellent** (la tipografía de los títulos, inspirada en el rotulado de México 68) se
  carga desde CDNFonts. Es de uso libre para escritorio; si el proyecto se vuelve comercial
  a gran escala vale la pena revisar la licencia de webfont en typodermicfonts.com.
- El reproductor de audio es una **simulación visual** (progreso, waveform, play/pause) —
  no está conectado a un archivo de audio real todavía. Si me pasas el MP3/preview te lo conecto.
"# chillandgo" 
"# chillandgo" 
