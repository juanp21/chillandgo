# Portadas de Lanzamientos

Cada tarjeta de la sección **Lanzamientos** usa un archivo de esta carpeta como fondo.

| Archivo         | Tarjeta                          | Tipo   |
|-----------------|----------------------------------|--------|
| `cover-01.mp4`  | Tengo que ir a terapia (destacado) | Video  |
| `cover-02.jpg`  | El Patio 1 & 2                    | Imagen |
| `cover-03.mp4`  | El Mercado                       | Video  |
| `cover-04.jpg`  | Singles Chill&Go                 | Imagen |
| `cover-05.jpg`  | Mexsynthco Live Set              | Imagen |
| `cover-06.jpg`  | Autorretrato                     | Imagen |

## Notas
- El video (`cover-01.mp4`) debe ir **muteado** (ya está configurado así) para que se reproduzca solo.
- Para poner video en otra tarjeta, en `index.html` reemplaza su `<img class="rel-art" ...>` por:
  ```html
  <video class="rel-art" autoplay muted loop playsinline preload="metadata">
    <source src="src/assets/images/releases/cover-0X.mp4" type="video/mp4">
  </video>
  ```
- Recomendado: imágenes cuadradas/verticales; videos livianos (<10 MB) para que carguen rápido.
