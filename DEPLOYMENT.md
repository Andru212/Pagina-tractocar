# 🌐 Guía de Deployment - Cómo Publicar tu Página Web

Tu página web está lista. Ahora necesitas publicarla en internet. Aquí te mostro varias opciones:

## 🚀 Opción 1: Netlify (RECOMENDADO - Gratis y Fácil)

### Pasos:
1. Ve a [netlify.com](https://www.netlify.com)
2. Haz clic en "Sign up" o inicia sesión con GitHub
3. Arrastra tu carpeta completa al área de drop-zone
4. ¡Listo! Tu sitio estará en línea en segundos
5. Puedes tu dominio personalizado desde los settings

**Ventajas:**
- Totalmente gratis
- Deploy automático desde Git
- SSL gratis
- Sin límite de ancho de banda

---

## 🌍 Opción 2: Vercel (Gratis)

1. Ve a [vercel.com](https://vercel.com)
2. Crea una cuenta
3. Importa tu proyecto desde GitHub
4. Deploy automático
5. Obtén un dominio .vercel.app gratis

---

## 📦 Opción 3: Hosting Tradicional (PHP/cPanel)

Si tienes un hosting tradicional como GoDaddy, Bluehost, etc.:

### Pasos:
1. Descarga tu carpeta completa
2. Comprime en ZIP
3. Accede a tu panel cPanel
4. Sube los archivos a la carpeta `public_html`
5. Descomprime en el servidor

---

## 🔧 Opción 4: GitHub Pages (Gratis)

1. Crea un repositorio en GitHub llamado `username.github.io`
2. Sube los archivos
3. Accede a `https://username.github.io`

---

## 🌐 Obtener un Dominio Personalizado

Opciones populares para dominios:
- [Namecheap.com](https://www.namecheap.com)
- [GoDaddy.com](https://www.godaddy.com)
- [Google Domains](https://domains.google.com)

Costo: $8-15 USD por año

**Recomendación**: Elige un dominio como:
- `tractocar.com.co`
- `www.tractocar.com`
- `carrocerias-tractocar.com`

---

## ✉️ Configurar Envío de Emails

### Opción A: Formspree (FÁCIL)

1. Ve a [formspree.io](https://formspree.io)
2. Regístrate
3. Crea un nuevo formulario
4. Copia tu Form ID
5. En `index.html`, busca el formulario y cambia:

```html
<!-- ANTES -->
<form class="contacto-form" id="contactoForm">

<!-- DESPUÉS -->
<form action="https://formspree.io/f/TU_ID_AQUI" method="POST" class="contacto-form">
```

6. Listo. Los emails llegaran a tu bandeja de entrada.

### Opción B: EmailJS (Angular pero funcional)

1. Regístrate en [emailjs.com](https://www.emailjs.com)
2. Configura tu template de email
3. Agrega este código en `js/main.js`:

```javascript
// Al inicio del archivo
emailjs.init('YOUR_USER_ID');

// En el event listener del formulario
contactoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const templateParams = {
        from_name: contactoForm.querySelector('input[placeholder="Tu Nombre"]').value,
        to_email: 'tu@email.com',
        message: contactoForm.querySelector('textarea').value,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(() => {
            alert('¡Email enviado correctamente!');
            contactoForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error al enviar el email');
        });
});
```

---

## 🔐 HTTPS y Certificado SSL

Todos los servicios mencionados (Netlify, Vercel, GitHub Pages) incluyen SSL gratis:
- Netlify: Sí, automático
- Vercel: Sí, automático
- GitHub Pages: Sí, automático
- Hosting tradicional: Depende del proveedor

---

## 📊 Analytics - Rastrear Visitantes

### Google Analytics

1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea una propiedad
3. Obtén tu ID de tracking (GA_xxx)
4. Agrega este código en `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_ID');
</script>
```

---

## 🎯 Checklist Antes de Publicar

- [ ] Actualicé toda la información de contacto
- [ ] Agregué mis imágenes y logos
- [ ] Configuré Google Maps
- [ ] Probé el formulario de contacto
- [ ] Probé en móvil, tablet y escritorio
- [ ] Cambié los enlaces de redes sociales
- [ ] Verifiqué los textos (sin errores)
- [ ] Configuré el dominio personalizado
- [ ] Agregué Google Analytics
- [ ] Hice backup local

---

## 📞 Mantenimiento Regular

Después de publicar:

**Mensual:**
- Revisa Analytics
- Actualiza la galería de trabajos
- Revisa formularios recibidos

**Trimestral:**
- Actualiza información de contacto
- Verifica links rotos
- Actualiza clientes

**Anualmente:**
- Renovar dominio
- Revisar seguridad
- Actualizar descripción SEO

---

## ⚡ Mejoras Futuras Recomendadas

1. **Blog** - Comparte tips de metalmecánica
2. **Catálogo PDF** - Descargable con tus productos
3. **Chat en Vivo** - Integra Intercom o Drift
4. **Whatsapp Business** - Integra botón de WhatsApp
5. **Testimonios** - Agrega opiniones de clientes

---

## 🆘 Solución de Problemas

### El sitio se ve feo/distorsionado
- Limpia el caché (Ctrl+Shift+Del)
- Intenta en otro navegador

### Las imágenes no cargan
- Verifica que las imágenes estén en `/images/`
- Comprueba los nombres exactos

### El formulario no funciona
- Comprueba que configuraste Formspree
- Abre consola (F12) para ver errores

### El dominio no apunta
- Espera 24-48 horas
- Verifica los nameservers

---

**¡Tu página está lista para el mundo! 🌍**

Recuerda: Una página web profesional = mejor credibilidad = más clientes
