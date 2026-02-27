# iThink

Landing page para iThink, una iniciativa educativa, social y sin fines de lucro enfocada en educacion y emprendimiento.

## Stack

- Astro
- CSS plano
- GitHub Pages para despliegue

## Requisitos

- Node.js `>= 20.3.0`
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio quedara disponible en `http://localhost:4321`.

## Build de produccion

```bash
npm run build
```

La salida se genera en `dist/`.

## Despliegue en GitHub Pages

Este proyecto ya incluye un workflow en `.github/workflows/deploy.yml`.

Pasos:

1. Haz commit de los cambios.
2. Sube la rama `main` al repositorio remoto.
3. En GitHub, verifica que Pages use GitHub Actions como fuente de despliegue.

## Estructura principal

- `src/pages/index.astro`: landing principal
- `src/layouts/BaseLayout.astro`: layout base y favicon
- `src/styles/global.css`: estilos globales
- `src/assets/ithink-logo.png`: logo e icono del sitio

## Notas

- El proyecto usa `base: /iThink` en produccion para funcionar correctamente en GitHub Pages.
- Si VS Code muestra errores de tipos, reinicia el servidor de TypeScript despues de instalar dependencias.
