# ❓ Preguntas Frecuentes - FAQ

## 📱 ¿Cómo veo la página en mi celular?

1. Abre `index.html` en tu navegador
2. Presiona `F12` para abrir herramientas de desarrollador
3. Haz clic en el icono de móvil (arriba a la izquierda)
4. Ahora verás cómo se ve en celular

Alternativa: Abre `index.html` en navegador de tu teléfono

---

## 🖼️ ¿Dónde pongo mis imágenes?

1. Ve a la carpeta `images/`
2. Coloca tus fotos allí
3. En `index.html`, busca `src="images/trabajo1.jpg"`
4. Cambia `trabajo1.jpg` por tu nombre de archivo

**Ejemplo:**
```html
<!-- Antes -->
<img src="images/trabajo1.jpg" alt="Trabajo 1">

<!-- Después -->
<img src="images/mi-carroceria-2024.jpg" alt="Mi Carrocería">
```

---

## 📧 ¿El email del formulario va a funcionar rápido?

No automáticamente. Debes:

1. **Servicio recomendado:** Formspree (gratis)
2. O usar un backend con PHP/Node.js
3. O usar EmailJS

Lee `DEPLOYMENT.md` para más instrucciones

---

## 💰 ¿Cuánto cuesta publicar?

- **Dominio:** $8-15 USD/año
- **Hosting:** 
  - Netlify (recomendado): GRATIS
  - Vercel: GRATIS
  - Hosting tradicional: $3-10/mes
  - GitHub Pages: GRATIS

**Total mínimo:** $8-15 USD para dominio

---

## 🌐 ¿Qué es un dominio?

Es la dirección de tu website. Ejemplos:
- `google.com`
- `facebook.com`
- `tractocar.com`

Sin dominio: `https://mi-proyecto-123.netlify.app/`
Con dominio: `https://tractocar.com`

---

## 🔒 ¿La página es segura?

Sí. Netlify, Vercel y GitHub Pages incluyen HTTPS (seguridad) automáticamente.

El candadito verde 🔒 en tu navegador lo confirma.

---

## ⚡ ¿Por qué la página es lenta?

Causas comunes:
1. **Imágenes muy pesadas** - Comprime en TinyPNG
2. **Demasiadas imágenes** - Usa máximo 12-15
3. **Servidor lento** - Usa Netlify o Vercel

**Solución:**
- Reduce tamaño de imágenes: [TinyPNG.com](https://tinypng.com)
- O usa [Compressor.io](https://compressor.io)

---

## 🎨 ¿Cómo cambio el color azul?

1. Abre `css/styles.css`
2. Busca `--primary-color: #003da5;`
3. Reemplaza `#003da5` con tu color
4. Usa [colorpicker.com](https://www.colorpicker.com) para obtener el código

**Colores populares:**
- Rojo: `#FF0000` o `#D32F2F`
- Verde: `#00AA00` o `#00897B`
- Azul: `#0066FF` o `#1565C0`
- Naranja: `#FF6600` o `#FF6F00`

---

## 📱 ¿Funciona en iPhone?

Sí. La página está optimizada para:
- iPhone
- Android
- iPad
- Samsung
- Cualquier navegador moderno

---

## 🔍 ¿Cómo aparezco en Google?

1. Sube tu sitio a Netlify o Vercel
2. Ve a [Google Search Console](https://search.google.com/search-console)
3. Agrega tu dominio
4. Envía un sitemap (automático)
5. Espera 2-4 semanas

**Consejo:** Usa palabras clave como:
- "carrocerías pesadas"
- "metalmecánica"
- "niñeras"
- "tu ciudad"

---

## 👥 ¿Cuántas personas pueden ver mi página?

**Ilimitadas.** No hay límite de visitantes con Netlify o Vercel.

Pero si tienes 1,000,000 de visitas/mes, considera aumentar recursos.

---

## 🆘 Mi página no funciona después de cambios

**Solución:**
1. Abre la consola: `F12`
2. Ve a la pestaña "Console"
3. Busca mensajes en rojo (errores)
4. Copia el error y busca en Google
5. O revierte tus cambios

**Errores comunes:**
- `Cannot find file` - Revisión de nombres de archivos
- `Syntax error` - Revisión de código HTML/CSS
- Imagen no carga - Verifica la ruta

---

## 📞 ¿Necesito servidor para email?

No. Con **Formspree** funciona sin servidor.

Si quieres crear tu propio backend:
- PHP: Requiere hosting con PHP
- Node.js: Requiere VPS o Heroku
- Python: Requiere servidor

**Para empezar: Usa Formspree (gratis)**

---

## 🎯 ¿Puedo agregar más secciones?

¡Claro! Copia el HTML de cualquier sección y personaliza.

Ejemplo - Agregar sección de "Blog":
```html
<section id="blog" class="blog">
    <div class="container">
        <h2>Blog</h2>
        <!-- Agrega tu contenido aquí -->
    </div>
</section>
```

---

## 🎨 ¿Cómo cambio las fuentes (letras)?

1. Abre `css/styles.css`
2. Busca `font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`
3. Reemplaza con otra fuente

**Recursos de fuentes gratis:**
- [Google Fonts](https://fonts.google.com)
- [Font Awesome](https://fontawesome.com) (iconos)

---

## 📊 ¿Cómo sé cuánta gente visita?

Usa Google Analytics:
1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea una cuenta
3. Obtén tu ID (GA_xxxx)
4. Agrega el código en tu HTML

Verás:
- Visitantes totales
- Páginas visitadas
- Tiempo en página
- Dispositivo usado

---

## 🚀 ¿Cuál es la mejor opción para empezar?

**Para empresas pequeñas/medianas:**
1. ✅ Usa tu página en Netlify (GRATIS)
2. ✅ Compra dominio en Namecheap ($9/año)
3. ✅ Configura Formspree para emails (GRATIS)
4. ✅ Agrega Google Analytics (GRATIS)

**Total:** ~$9 USD/año

---

## 📧 ¿Cómo cambio el email de contacto?

En `index.html`, busca:
```html
<p>info@tractocar.com<br>contacto@tractocar.com</p>
```

Reemplaza con tu email:
```html
<p>miEmail@mieempresa.com<br>ventas@miempresa.com</p>
```

Pero recuerda que esto solo muestra el email. Para que funcione recibir mensajes:

1. Configura Formspree (recomendado)
2. O usa EmailJS
3. O crea un backend

---

## 🎁 ¿Puedo vender cosas en la página?

Sí, pero necesitas agregar:

1. **Tienda en línea:** WooCommerce, Shopify, etc.
2. **Pasarela de pago:** Stripe, PayPal, Wompi, etc.
3. **Sistema de inventario**

Para una página informativa como la tuya, no es necesario.

---

## 🔐 ¿Mi página es segura?

Sí. Con Netlify o Vercel:
- ✅ HTTPS (encriptada)
- ✅ Certificado SSL automático
- ✅ Sin malware
- ✅ Copias de seguridad

Verifica el 🔒 en tu navegador.

---

## ❌ ¿Qué puedo mejorar después?

1. **Agregar blog** - Artículos sobre tus servicios
2. **Chat en vivo** - Conversa con visitantes
3. **Testimonios** - Opiniones de clientes
4. **Webinar** - Entrenamientos en vivo
5. **Newsletter** - Envía correos a clientes
6. **Chatbot** - IA para responder preguntas

---

## 📞 ¿Necesito ayuda profesional?

Si necesitas:
- ✅ Una agencia web: $500-5,000
- ✅ Un freelancer: $200-1,000
- ✅ Soporte especializado: $50-200/hora

Esta página está lista para usar sin pagar. ¡Estás al 100%!

---

## 🎓 ¿Quiero aprender más?

Recursos gratuitos:
- [FreeCodeCamp](https://www.freecodecamp.org)
- [YouTube - Desarrollo Web](https://youtube.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [W3Schools](https://www.w3schools.com)

---

**¿Aún tienes preguntas?** Lee los otros archivos:
- `README.md` - Guía general
- `DEPLOYMENT.md` - Cómo publicar
- `PERSONALIZACION.md` - Cómo personalizar

**¡Tu página está lista para usarla y tener éxito! 🚀**
