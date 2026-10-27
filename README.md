# Remember Kit — sitio web

Sitio estático de **www.rememberkit.com**, publicado gratis con GitHub Pages.

## Qué archivo tocar para cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Precios, descripciones, fotos, ocultar un producto | `js/productos.js` |
| Links de Mercado Pago y Mercado Libre de cada producto | `js/productos.js` (campos `mercadoPago` y `mercadoLibre`) |
| WhatsApp, email, alias de transferencia, puntos de retiro, barra de anuncio, Pixel | `js/config.js` |
| Textos del inicio (hero, beneficios, testimonios) | `index.html` |
| Texto de Quiénes somos | `quienes-somos.html` |

Se puede editar directo desde github.com: abrís el archivo, tocás el lápiz, cambiás y apretás **Commit changes**. En 1–2 minutos el sitio se actualiza solo.

## Cómo compra la gente

En cada producto aparecen hasta tres botones:

1. **Pagar con Mercado Pago**: aparece solo si pegás un link en `mercadoPago`. Se crea en la app de Mercado Pago → *Cobrar* → *Link de pago* (uno por producto, con el precio fijo).
2. **Comprar por WhatsApp**: aparece siempre. Abre el chat con el producto y el precio ya escritos.
3. **Comprar en Mercado Libre**: aparece solo si pegás el link de la publicación en `mercadoLibre`.

## Fotos nuevas

Subí la foto a la carpeta `img/` (Add file → Upload files) y en `js/productos.js` escribila así: `"img/nombre-de-la-foto.jpg"`. Ideal: JPG o WEBP de menos de 300 KB, vertical 4:5.

## Puesta en marcha (una sola vez)

1. Crear un repositorio nuevo en GitHub (por ejemplo `rememberkit`) y subir todos estos archivos, incluida la carpeta oculta `.github`.
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. En **Actions** se corre "Publicar sitio". La primera vez baja las fotos y el video desde Wix y los guarda en `img/` y `media/` (por eso **Wix tiene que seguir online hasta que eso termine**).
4. Probar el sitio en `https://TU-USUARIO.github.io/rememberkit/`.
5. Dominio: **Settings → Pages → Custom domain**: `www.rememberkit.com` y tildar *Enforce HTTPS* cuando esté disponible.
6. En el panel donde está el dominio (Wix → Dominios → Administrar registros DNS):
   - `CNAME` `www` → `TU-USUARIO.github.io`
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Borrar los registros A/CNAME que apuntaban a Wix.
7. Recién con el sitio nuevo funcionando en tu dominio, cancelar el plan Premium de Wix. **Ojo: el dominio se renueva aparte**; no lo canceles o perdés rememberkit.com. Si querés, más adelante podés transferirlo a otro registrador.

## Links viejos de Wix

`404.html` redirige automáticamente los links viejos (`/product-page/...`, `/category/...`, `/about-1`) a las páginas nuevas, conservando los parámetros de campaña. Los anuncios y posteos existentes siguen funcionando.

## Meta Pixel

Usa el mismo Pixel que Wix (`1328224892486988`). Eventos que manda:
- `PageView` en todas las páginas
- `ViewContent` en cada producto
- `InitiateCheckout` al tocar Mercado Pago
- `Contact` al tocar WhatsApp
- `ClickMercadoLibre` (personalizado) al tocar Mercado Libre

El evento `Purchase` ya no se registra, porque el pago ocurre fuera del sitio. Las campañas optimizadas para compras conviene pasarlas a `InitiateCheckout` o `Contact`.
