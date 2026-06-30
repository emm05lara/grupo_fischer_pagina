# Grupo Fischer — Sitio web

Sitio web estático para **Grupo Fischer**, empresa de flotilla/renta de vehículos para conductores de Uber y DiDi en Ciudad de México.

**Dominio oficial:** https://grupo-fischer.com  
**Dominio con www:** https://www.grupo-fischer.com  
**Tecnología:** HTML + CSS + JavaScript puro. Sin frameworks, sin backend, sin npm y sin build step.

---

## Estado actual del proyecto

El sitio ya quedó preparado para producción con:

- Rediseño visual profesional con paleta oscuro/ámbar.
- Tema claro/oscuro con `localStorage` y detección inicial mediante `prefers-color-scheme`.
- Menú hamburguesa responsive funcional.
- Página 404 personalizada.
- Configuración de Cloudflare Workers Static Assets mediante `wrangler.jsonc`.
- Dominio oficial configurado en Cloudflare.
- SEO básico con `title`, `meta description`, `canonical`, Open Graph, `robots.txt` y `sitemap.xml`.
- Contacto real: teléfono, WhatsApp, correo y ubicación en Google Maps.
- Formulario mediante FormSubmit.co.
- Cache busting simple para CSS/JS con query param de versión: `?v=1.0.0`.

---

## Estructura de archivos

```txt
grupo_fischer_pagina/
├── index.html              Página principal
├── servicios.html          Servicios de flotilla y taller
├── taller.html             Taller mecánico
├── casos-exito.html        Testimonios/casos de éxito
├── contacto.html           Formulario, contacto y mapa
├── 404.html                Página 404 personalizada
├── robots.txt              Reglas para buscadores
├── sitemap.xml             Mapa del sitio
├── _headers                Cabeceras de seguridad y caché
├── wrangler.jsonc          Configuración de Cloudflare Workers Static Assets
├── README.md               Documentación del proyecto
└── assets/
    ├── css/
    │   └── styles.css      Estilos globales, tema oscuro/claro y responsive
    ├── js/
    │   └── main.js         Tema claro/oscuro y menú hamburguesa
    └── img/
        ├── logo/
        │   └── favicon.svg
        ├── hero/
        ├── flotilla/
        ├── taller/
        └── casos/
```

---

## Cambios implementados

### 1. Rediseño visual

Se actualizó el diseño general del sitio con una identidad más profesional para una flotilla automotriz:

- Variables CSS para colores, tipografías, sombras y transiciones.
- Tema oscuro como estilo principal.
- Tema claro alternativo.
- Botones, tarjetas, hero, footer y secciones más consistentes.
- Mejor contraste y lectura.

Archivo principal:

```txt
assets/css/styles.css
```

---

### 2. Tema claro/oscuro

El sitio incluye un botón de tema en el header.

Funcionamiento:

- Si el usuario ya eligió tema, se guarda en `localStorage` con la clave `gf-tema`.
- Si no hay preferencia guardada, se usa `prefers-color-scheme`.
- El atributo `data-theme` se aplica en el elemento `<html>`.
- El cambio funciona en todas las páginas.

Archivo principal:

```txt
assets/js/main.js
```

---

### 3. Menú hamburguesa responsive

El menú móvil fue corregido para funcionar en pantallas pequeñas.

Incluye:

- Botón hamburguesa con `aria-expanded`, `aria-controls` y `aria-label`.
- Apertura y cierre con JavaScript.
- Cierre al tocar un enlace.
- Cierre con tecla `Escape`.
- Cierre al hacer clic fuera del menú.
- Bloqueo de scroll del `body` cuando el menú está abierto.
- Ocultamiento del botón flotante de WhatsApp para que no se encime con el menú.

Archivos principales:

```txt
assets/js/main.js
assets/css/styles.css
```

---

### 4. Página 404 personalizada

El proyecto incluye una página personalizada:

```txt
404.html
```

Debe mostrarse cuando alguien entra a una ruta inexistente, por ejemplo:

```txt
https://grupo-fischer.com/hola
```

Para que Cloudflare Workers la sirva correctamente, se configuró `wrangler.jsonc` con:

```jsonc
"assets": {
  "directory": ".",
  "not_found_handling": "404-page"
}
```

Esto evita que Cloudflare muestre la pantalla genérica del navegador y permite conservar una experiencia visual consistente.

---

### 5. Dominio y SEO

Dominio principal:

```txt
https://grupo-fischer.com
```

También está activo:

```txt
https://www.grupo-fischer.com
```

Cada página HTML usa canonical y Open Graph con el dominio oficial.

Rutas principales incluidas en `sitemap.xml`:

```txt
https://grupo-fischer.com/
https://grupo-fischer.com/servicios.html
https://grupo-fischer.com/casos-exito.html
https://grupo-fischer.com/taller.html
https://grupo-fischer.com/contacto.html
```

`robots.txt` apunta al sitemap oficial:

```txt
Sitemap: https://grupo-fischer.com/sitemap.xml
```

---

### 6. Contacto real

Datos actualmente configurados:

| Dato | Valor |
|---|---|
| Teléfono oficina | 55 3081 6185 |
| Link `tel:` | `tel:+525530816185` |
| WhatsApp principal | `https://wa.me/525530816185` |
| WhatsApp alternativo | `https://wa.me/5215530816185` |
| Correo | `grupo.fischer19@gmail.com` |
| Google Maps | `https://maps.app.goo.gl/NrhEzaXPWLWb828k8` |

Estos datos aparecen principalmente en:

```txt
index.html
servicios.html
taller.html
casos-exito.html
contacto.html
404.html
```

Para cambiarlos, usa búsqueda global en VS Code:

```txt
Ctrl + Shift + H
```

---

### 7. Formulario con FormSubmit

El formulario principal está en:

```txt
contacto.html
```

Actualmente envía a:

```txt
https://formsubmit.co/grupo.fischer19@gmail.com
```

Incluye:

- `_subject` personalizado.
- `_captcha=false`.
- Campo honeypot `_honey` para reducir spam.

Activación necesaria:

1. Entra al sitio publicado.
2. Envía el formulario una vez.
3. Revisa la bandeja de `grupo.fischer19@gmail.com`.
4. Busca también en Spam/Promociones.
5. Abre el correo de FormSubmit y confirma el email.
6. Después de confirmar, los siguientes mensajes deberían llegar normalmente.

---

### 8. Google Maps

La página `contacto.html` incluye:

- Botón para abrir la ubicación en Google Maps.
- Iframe embebido de Google Maps.

Si la ubicación cambia, actualiza:

```txt
https://maps.app.goo.gl/NrhEzaXPWLWb828k8
```

y reemplaza el `iframe` dentro de la sección de ubicación.

Pasos para obtener un nuevo iframe:

1. Abre Google Maps en navegador.
2. Busca la nueva ubicación.
3. Clic en **Compartir**.
4. Pestaña **Insertar un mapa**.
5. Copia el HTML completo del `<iframe>`.
6. Reemplaza el iframe actual en `contacto.html`.

---

## Cache busting de CSS y JS

Para evitar que el navegador conserve versiones viejas de estilos o scripts, las páginas cargan CSS y JS con versión:

```html
<link rel="stylesheet" href="assets/css/styles.css?v=1.0.0">
<script src="assets/js/main.js?v=1.0.0"></script>
```

En `404.html` se usan rutas absolutas:

```html
<link rel="stylesheet" href="/assets/css/styles.css?v=1.0.0">
<script src="/assets/js/main.js?v=1.0.0"></script>
```

### Cuándo subir la versión

Cada vez que cambies `styles.css` o `main.js`, sube la versión en todas las páginas.

Ejemplo:

```txt
?v=1.0.0 → ?v=1.0.1
?v=1.0.1 → ?v=1.0.2
```

Páginas donde normalmente hay que actualizar la versión:

```txt
index.html
servicios.html
taller.html
casos-exito.html
contacto.html
404.html
```

Esto fuerza al navegador a descargar los archivos nuevos después del deploy.

---

## Configuración de Cloudflare

El sitio está desplegado en Cloudflare como proyecto de **Workers & Pages** con Static Assets.

Archivo clave:

```txt
wrangler.jsonc
```

Contenido relevante:

```jsonc
{
  "name": "grupo-fischer-pagina",
  "compatibility_date": "2026-06-30",
  "observability": {
    "enabled": true
  },
  "assets": {
    "directory": ".",
    "not_found_handling": "404-page"
  },
  "compatibility_flags": [
    "nodejs_compat"
  ]
}
```

Notas:

- `directory: "."` indica que Cloudflare publica la raíz del repositorio.
- `not_found_handling: "404-page"` permite usar `404.html` como error personalizado.
- No hay build command.
- No hay carpeta `dist`.
- No se usa npm.

Configuración esperada en Cloudflare:

```txt
Project name: grupo-fischer-pagina
Production branch: main
Build command: vacío
Output directory: /
```

Dominio personalizado:

```txt
grupo-fischer.com
www.grupo-fischer.com
```

---

## Cabeceras y caché

El archivo `_headers` define reglas para seguridad y caché.

Incluye cabeceras como:

```txt
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

También define caché larga para CSS, JS e imágenes:

```txt
/assets/css/*  → max-age=31536000, immutable
/assets/js/*   → max-age=31536000, immutable
/assets/img/*  → max-age=2592000
```

Por eso se usa cache busting con `?v=...` en CSS y JS.

---

## Cómo trabajar en local

### 1. Clonar el repositorio

```bash
git clone https://github.com/emm05lara/grupo_fischer_pagina.git
cd grupo_fischer_pagina
code .
```

### 2. Probar con Live Server

En VS Code:

1. Instala la extensión **Live Server**.
2. Abre `index.html`.
3. Clic derecho → **Open with Live Server**.
4. Prueba el sitio en la URL local que abra VS Code.

También puedes abrir `index.html` directamente, pero Live Server es mejor para probar navegación y rutas.

---

## Flujo de publicación

Cada vez que hagas cambios:

```bash
git status
git add .
git commit -m "descripción del cambio"
git push origin main
```

Cloudflare detecta el push a `main` y despliega automáticamente.

Después de hacer deploy, si no ves los cambios:

```txt
Ctrl + Shift + R
```

Eso fuerza recarga completa y evita que el navegador use caché vieja.

---

## Checklist de pruebas en producción

Después de cada cambio importante revisa:

```txt
[ ] https://grupo-fischer.com abre correctamente
[ ] https://www.grupo-fischer.com abre correctamente
[ ] Menú hamburguesa funciona en móvil
[ ] Menú se cierra al tocar un enlace
[ ] Menú se cierra con Escape
[ ] Tema claro/oscuro funciona
[ ] La preferencia de tema se conserva al recargar
[ ] WhatsApp abre correctamente
[ ] Teléfono usa tel:+525530816185
[ ] Correo abre mailto:grupo.fischer19@gmail.com
[ ] Google Maps abre la ubicación correcta
[ ] El formulario carga y apunta a FormSubmit
[ ] sitemap.xml carga
[ ] robots.txt carga
[ ] Una ruta inexistente como /hola muestra la 404 personalizada
[ ] No hay scroll horizontal en móvil
[ ] CSS/JS cargan con la versión actual ?v=...
```

Rutas clave:

```txt
https://grupo-fischer.com/
https://grupo-fischer.com/servicios.html
https://grupo-fischer.com/casos-exito.html
https://grupo-fischer.com/taller.html
https://grupo-fischer.com/contacto.html
https://grupo-fischer.com/404.html
https://grupo-fischer.com/robots.txt
https://grupo-fischer.com/sitemap.xml
```

---

## Pendientes

### Imágenes reales

Todavía conviene sustituir placeholders por imágenes reales.

| Imagen | Ruta sugerida | Tamaño sugerido |
|---|---|---|
| Hero principal | `assets/img/hero/flotilla-grupo-fischer.webp` | 1200×600px |
| Vehículo 1 | `assets/img/flotilla/vehiculo-1.webp` | 800×600px |
| Vehículo 2 | `assets/img/flotilla/vehiculo-2.webp` | 800×600px |
| Taller exterior | `assets/img/taller/taller-exterior.webp` | 1200×500px |
| Taller interior | `assets/img/taller/taller-interior.webp` | 800×600px |
| Conductor 1 | `assets/img/casos/conductor-1.webp` | 400×300px |
| Conductor 2 | `assets/img/casos/conductor-2.webp` | 400×300px |

Formato recomendado:

```txt
.webp
```

Para comprimir o convertir imágenes puedes usar Squoosh.

---

### Datos de flotilla

Aún falta confirmar el número real de autos.

Mientras no esté confirmado, evita textos como:

```txt
20+ autos
más de 30 vehículos
flotilla de X unidades
```

Usa frases neutras:

```txt
flotilla disponible
vehículos sujetos a disponibilidad
flotilla en crecimiento
unidades disponibles para plataforma
```

---

### Logo final

Actualmente el header usa texto como marca:

```txt
GRUPO FISCHER · FLOTILLA CDMX
```

Pendiente opcional:

- Crear logo final en SVG.
- Guardarlo en `assets/img/logo/`.
- Actualizar header, favicon y Open Graph si aplica.

---

### Redirección www

Ambas versiones están activas:

```txt
https://grupo-fischer.com
https://www.grupo-fischer.com
```

Para SEO, lo ideal es que una versión sea la principal.

Recomendación:

```txt
www.grupo-fischer.com → grupo-fischer.com
```

Esto se puede hacer en Cloudflare con una Redirect Rule 301.

---

### Correo con dominio propio

Actualmente se usa Gmail:

```txt
grupo.fischer19@gmail.com
```

Si después se quiere correo profesional, se podría configurar algo como:

```txt
contacto@grupo-fischer.com
```

Eso requeriría configurar registros MX, SPF, DKIM y DMARC en Cloudflare.

---

## Commits recientes relevantes

Referencia de cambios recientes del proyecto:

```txt
feat: sitio completo para producción — rediseño, tema claro/oscuro, menú, SEO y Cloudflare
fix: configurar not_found_handling=404-page en Cloudflare Workers
fix: Corrige menú hamburguesa responsive
chore: agrega cache busting con query param de versión a CSS/JS
```

---

## Créditos técnicos

- Tipografías: Oswald, Inter y JetBrains Mono.
- Formularios: FormSubmit.co.
- Hosting y dominio: Cloudflare Workers & Pages.
- Código: HTML, CSS y JavaScript puro.
- Sin frameworks, sin Tailwind, sin Bootstrap, sin React, sin backend.
