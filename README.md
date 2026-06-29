# Grupo Fischer — Sitio Web

Sitio web estático para Grupo Fischer, empresa de flotilla/renta de vehículos para conductores de Uber y DiDi en CDMX.
Tecnología: HTML + CSS + JavaScript puro. Sin frameworks, sin backend, sin dependencias.

---

## Estructura de archivos

```
grupo_fischer/
├── index.html           Página principal
├── servicios.html       Catálogo de servicios
├── taller.html          Taller mecánico
├── casos-exito.html     Testimonios de conductores
├── contacto.html        Formulario + mapa + datos de contacto
├── 404.html             Página de error 404
├── robots.txt           Instrucciones para buscadores
├── sitemap.xml          Mapa del sitio para SEO
├── _headers             Cabeceras de seguridad para Cloudflare Pages
└── assets/
    ├── css/
    │   └── styles.css   Todos los estilos (tema oscuro y claro)
    ├── js/
    │   └── main.js      Tema claro/oscuro + menú hamburguesa
    └── img/
        ├── logo/
        │   └── favicon.svg
        ├── hero/          → flotilla-grupo-fischer.webp (pendiente)
        ├── flotilla/      → vehiculo-1.webp, vehiculo-2.webp ... (pendientes)
        ├── taller/        → taller-exterior.webp, taller-interior.webp (pendientes)
        └── casos/         → conductor-1.webp, conductor-2.webp ... (pendientes)
```

---

## Datos de contacto — cómo cambiarlos

Si necesitas actualizar teléfono, WhatsApp, correo o dirección, busca y reemplaza en **todos los archivos HTML**:

| Dato | Valor actual | Cómo aparece en el HTML |
|---|---|---|
| Teléfono | 55 3081 6185 | `tel:+525530816185` y texto `55 3081 6185` |
| WhatsApp | 525530816185 | `https://wa.me/525530816185` |
| WhatsApp alternativo | 5215530816185 | `https://wa.me/5215530816185` |
| Correo | grupo.fischer19@gmail.com | `mailto:grupo.fischer19@gmail.com` |
| Google Maps | (enlace corto) | `https://maps.app.goo.gl/NrhEzaXPWLWb828k8` |

Archivos donde aparecen estos datos:
- `index.html`
- `servicios.html`
- `taller.html`
- `casos-exito.html`
- `contacto.html`

---

## Pendientes (TODOs)

### Imágenes reales — qué conseguir y dónde ponerlas

| Imagen | Ruta en el proyecto | Tamaño sugerido | Descripción |
|---|---|---|---|
| Foto principal (hero) | `assets/img/hero/flotilla-grupo-fischer.webp` | 1200×600px | Foto de uno o varios autos de la flotilla |
| Vehículo 1 | `assets/img/flotilla/vehiculo-1.webp` | 800×600px | Foto exterior del auto |
| Vehículo 2 | `assets/img/flotilla/vehiculo-2.webp` | 800×600px | Otro vehículo disponible |
| Taller exterior | `assets/img/taller/taller-exterior.webp` | 1200×500px | Fachada del taller |
| Taller interior | `assets/img/taller/taller-interior.webp` | 800×600px | Foto dentro del taller |
| Conductor 1 | `assets/img/casos/conductor-1.webp` | 400×300px | Foto del primer testimonio |
| Conductor 2 | `assets/img/casos/conductor-2.webp` | 400×300px | Foto del segundo testimonio |
| Conductor 3 | `assets/img/casos/conductor-3.webp` | 400×300px | Foto del tercer testimonio |

**Formato recomendado:** `.webp` para mejor rendimiento. Si tienes JPG/PNG, conviértelos en https://squoosh.app (gratis, sin instalar nada).

### Mapa de Google Maps (iframe)

En `contacto.html` hay un bloque `<!-- TODO: IFRAME EMBED DE GOOGLE MAPS -->`.

**Pasos para activarlo:**
1. Ve a https://maps.google.com en tu computadora.
2. Busca la dirección del taller/oficina.
3. Haz clic en el ícono de compartir → pestaña "Insertar un mapa".
4. Copia el código `<iframe ...>` completo.
5. En `contacto.html`, busca `div class="mapa-placeholder"` y reemplaza ese `<div>` completo con el `<iframe>`.
6. Agrega `title="Ubicación de Grupo Fischer en Ciudad de México"` al iframe.

### FormSubmit — activación del formulario

Los formularios de `contacto.html` y `casos-exito.html` usan **FormSubmit.co** para enviar correos a `grupo.fischer19@gmail.com`.

**Pasos para activarlo (solo una vez):**
1. Sube el sitio a Cloudflare Pages.
2. Llena y envía el formulario de contacto desde la URL pública (no desde archivo local).
3. Revisa la bandeja de `grupo.fischer19@gmail.com` (también Spam/Promociones).
4. Haz clic en **"Confirm your email"** en el correo de FormSubmit.
5. A partir de ese momento, todos los mensajes llegarán automáticamente.

**Nota:** FormSubmit no requiere cuenta ni API key. El único requisito es hacer clic en el correo de confirmación la primera vez.

### Dominio — qué actualizar cuando lo tengas

Cuando configures tu dominio en Cloudflare (ej. `grupofischer.mx`), reemplaza `TU-DOMINIO.com` en:
- `index.html` (tags og:url, og:image, canonical)
- `servicios.html` (ídem)
- `taller.html` (ídem)
- `casos-exito.html` (ídem)
- `contacto.html` (ídem)
- `robots.txt` (línea Sitemap)
- `sitemap.xml` (todas las `<loc>`)

Reemplaza en todos los archivos de una sola vez con cualquier editor de texto (VS Code: Ctrl+Shift+H).

---

## Cómo probar en tu computadora

El sitio es HTML puro — **no necesita servidor** para la mayoría de funciones.

**Opción A — Abrir directamente:**
Haz doble clic en `index.html`. Funciona para revisar diseño y navegación.

**Opción B — Servidor local (recomendado para probar formularios):**
Si tienes VS Code instalado, instala la extensión **Live Server** (ritwickdey) y haz clic en "Go Live". Abre el sitio en `http://127.0.0.1:5500/`.

**Nota:** Los formularios solo envían correos reales cuando el sitio está publicado en internet (no en local). En local, al enviar el formulario te redirigirá a la página de FormSubmit pero sin llegar al correo.

---

## Cómo subir a Cloudflare Pages

### Paso 1 — Prepara el repositorio en GitHub

```bash
# Si ya tienes el repositorio clonado, actualiza origin si cambió
git remote -v

# Agrega los cambios
git add .
git commit -m "feat: sitio completo listo para producción"
git push origin main
```

### Paso 2 — Crea el proyecto en Cloudflare Pages

1. Ve a https://dash.cloudflare.com → **Pages** → **Create a project**.
2. Selecciona **Connect to Git** → elige tu cuenta de GitHub.
3. Selecciona el repositorio `grupo_fischer_pagina`.
4. Configuración del build:
   - **Framework preset:** None
   - **Build command:** (dejar vacío)
   - **Build output directory:** `/` (barra diagonal, raíz del repo)
5. Haz clic en **Save and Deploy**.

Cloudflare Pages detecta `index.html` en la raíz automáticamente.

### Paso 3 — Conecta tu dominio personalizado

1. En Cloudflare Pages → tu proyecto → **Custom domains** → **Set up a custom domain**.
2. Ingresa tu dominio (ej. `grupofischer.mx`).
3. Cloudflare te dirá qué registros DNS configurar.
4. Si compraste el dominio en Cloudflare mismo, se configura automáticamente.
5. Si lo compraste en otro proveedor, agrega el registro CNAME o A que Cloudflare te indica.

### Paso 4 — HTTPS

Cloudflare Pages activa HTTPS automáticamente con certificado SSL gratuito.
No necesitas hacer nada adicional.

### Paso 5 — Prueba final antes de anunciar

- [ ] Abre el sitio en su URL pública.
- [ ] Navega las 5 páginas.
- [ ] Prueba el tema claro/oscuro.
- [ ] Prueba el menú hamburguesa en celular (o reduce la ventana a menos de 900px).
- [ ] Haz clic en el botón de WhatsApp flotante — ¿abre la conversación?
- [ ] Haz clic en "Llamar a oficina" en un celular — ¿marca el número?
- [ ] Envía el formulario de contacto — verifica que llegue el correo de activación.
- [ ] Confirma el correo de FormSubmit.
- [ ] Envía el formulario de nuevo — ¿llega el correo real?
- [ ] Verifica que `https://TU-DOMINIO.com/robots.txt` cargue.
- [ ] Verifica que `https://TU-DOMINIO.com/sitemap.xml` cargue.
- [ ] Prueba una URL que no existe (ej. `/algo`) — ¿muestra la página 404?

### Paso 6 — Actualizaciones futuras

Para publicar cambios:
```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```
Cloudflare Pages detecta el push y redespliega automáticamente en ~1 minuto.

---

## Créditos técnicos

- Tipografía: Oswald + Inter + JetBrains Mono (Google Fonts)
- Formularios: FormSubmit.co (sin backend)
- Hosting: Cloudflare Pages
- Sin frameworks, sin Tailwind, sin Bootstrap, sin npm, sin build steps.
