# klaro-cookies

Sistema de gestión de cookies self-hosted basado en [Klaro](https://github.com/kiprotect/klaro) (open source, licencia BSD-3).

Permite gestionar el consentimiento de cookies en múltiples sitios web desde un único repositorio, sin depender de servicios SaaS de pago.

---

## ¿Cómo funciona?

Los archivos compilados de Klaro se sirven estáticamente desde Netlify. Cada web incluye dos scripts en su layout:

```html
<link rel="stylesheet" href="https://klaro-cookies.netlify.app/klaro-custom.css" />
<script defer src="https://klaro-cookies.netlify.app/config-[web].js"></script>
<script defer src="https://klaro-cookies.netlify.app/klaro.js"></script>
```

---

## Estructura

```
dist/
├── klaro.js              # Librería Klaro compilada (no modificar)
├── klaro-custom.css      # Estilos personalizados globales
├── config-itdo.js        # Configuración para itdo.com
└── config-[web].js       # Añadir un archivo por cada nueva web
```

---

## Añadir servicios (GA, Meta Pixel, etc.)

Edita el archivo `dist/config-[web].js` y descomenta el bloque del servicio correspondiente:

```js
// Google Analytics
{
    name: 'google-analytics',
    title: 'Google Analytics',
    purposes: ['analytics'],
    cookies: [
        [/^_ga/, '/', ''],
        [/^_gid/, '/', ''],
    ],
},
```

Haz push y Netlify redespliega automáticamente.

---

## Añadir una nueva web

1. Crea un archivo `dist/config-[nombre].js` basándote en `config-itdo.js`
2. Súbelo al repositorio
3. En el `layout.tsx` de la nueva web añade los tres tags apuntando al nuevo config

---

## Despliegue

El repositorio está conectado a [Netlify](https://klaro-cookies.netlify.app). Cualquier push a `main` redespliega automáticamente sin configuración adicional.

---

## Webs activas

| Web | Config |
|-----|--------|
| itdo.com | `config-itdo.js` |

---

## Recursos

- [Documentación de Klaro](https://heyklaro.com/docs/)
- [Repositorio oficial de Klaro](https://github.com/kiprotect/klaro)
