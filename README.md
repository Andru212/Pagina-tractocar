# 🚛 TRACTOCAR - Página Web Profesional

Una página web moderna y responsiva para la empresa TRACTOCAR, especializada en fabricación de carrocerías pesadas de metalmecánica.

## 📋 Características

✅ **Diseño Responsivo** - Funciona perfectamente en celulares, tablets y escritorio
✅ **Navegación Fluida** - Menú pegajoso con scroll suave
✅ **Galería de Trabajos** - Muestra tus proyectos con efecto hover
✅ **Información de Contacto** - Ubicación, teléfono, email y formulario
✅ **Integración de Mapas** - Google Maps integrado
✅ **Redes Sociales** - Enlaces a Facebook, Instagram, LinkedIn, WhatsApp
✅ **Optimizado para SEO** - Estructura HTML semántica
✅ **Rendimiento Rápido** - Carga optimizada sin dependencias pesadas

## 📁 Estructura de Archivos

```
Pagina tractocar/
├── index.html              (Página principal)
├── css/
│   └── styles.css         (Estilos CSS)
├── js/
│   └── main.js            (Funcionalidad JavaScript)
├── images/                (Carpeta para imágenes)
│   ├── logo.png           (Logo de la empresa)
│   ├── trabajo1-6.jpg     (Galería de trabajos)
│   └── cliente1-6.png     (Logos de clientes)
└── README.md              (Este archivo)
```

## 🎨 Secciones de la Página

### 1. **Navegación (Navbar)**
- Logo y nombre de la empresa
- Menú navegable con links a todas las secciones
- Menú móvil responsivo

### 2. **Hero Section**
- Titular principal y descripción
- Botón de "Solicitar Cotización"
- Fondo degradado atractivo

### 3. **Servicios**
- 4 tarjetas con iconos
- Descripción de cada servicio (Niñeras, Planchas, Patinetas, Personalización)

### 4. **Galería de Trabajos**
- Grid de 6 proyectos
- Efecto overlay al pasar el mouse
- Responsive a todos los tamaños

### 5. **Nuestros Clientes**
- Logos de empresas que trabajan con ustedes
- Grid adaptable
- Efecto hover

### 6. **Ubicación**
- Información de dirección, teléfono, email, horarios
- Mapa de Google Maps integrado

### 7. **Contacto**
- Formulario con validación
- Campos: Nombre, Email, Teléfono, Empresa, Proyecto

### 8. **Footer**
- Información de la empresa
- Enlaces rápidos
- Redes sociales
- Derechos de autor

## 🚀 Cómo Usar

1. **Abre el archivo `index.html`** en tu navegador
2. **Personaliza el contenido**:
   - Edita los textos con tu información
   - Agrega tus imágenes en la carpeta `images/`
   - Actualiza los números de teléfono y email

## 📝 Cambios Importantes que Debes Hacer

### 1. Actualizar Información de Contacto
En `index.html`, busca y reemplaza:
- **Dirección**: "Calle Principal 123, Ciudad, Departamento"
- **Teléfono**: "+57 (1) 1234 5678" y "+57 300 123 4567"
- **Email**: "info@tractocar.com" y "contacto@tractocar.com"
- **Horario**: Actualiza con tus horas reales

### 2. Agregar Imágenes
Coloca tus imágenes en la carpeta `images/`:
- `logo.png` - Logo de tu empresa
- `trabajo1.jpg` a `trabajo6.jpg` - Fotos de tus proyectos
- `cliente1.png` a `cliente6.png` - Logos de clientes (preferiblemente PNG transparente)

### 3. Integrar Google Maps
1. Ve a [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)
2. Obtén tu código de embed
3. Reemplaza `YOUR_MAP_EMBED_CODE` en el archivo `index.html`

### 4. Configurar Envío de Formulario
Actualmente el formulario muestra un alert. Para enviar emails reales, tienes opciones:

#### Opción A: Formspree (Recomendado - Gratis)
1. Ve a [Formspree.io](https://formspree.io/)
2. Crea una cuenta y nuevo proyecto
3. En `index.html`, cambia el formulario de contacto:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contacto-form">
    <!-- mantén los inputs igual -->
</form>
```

#### Opción B: EmailJS (JavaScript)
1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Agrega el script en `index.html`:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
```
3. Configura en `js/main.js`

#### Opción C: Backend Propio (PHP, Node.js, etc.)
Crea un endpoint que maneje la lógica de emails

### 5. Actualizar Redes Sociales
En el footer, agrega los URLs correctos:
- Facebook
- Instagram
- LinkedIn
- WhatsApp

## 🎯 Colores Personalizables

Los colores están definidos en `css/styles.css`:
```css
:root {
    --primary-color: #003da5;    /* Azul principal */
    --secondary-color: #f39200;  /* Naranja */
    --dark-color: #1a1a1a;       /* Negro */
    --light-color: #f8f9fa;      /* Gris claro */
}
```

## 📱 Responsive Breakpoints

- **Escritorio**: +1200px
- **Tablet**: 768px - 1200px
- **Móvil**: -768px

## 🔍 Optimización SEO

- Estructura HTML5 semántica
- Meta tags básicos (recomendación: agregar más)
- Títulos jerárquicos (h1, h2, h3)
- Alt text en imágenes

Mejora adicional recomendada en `index.html`:
```html
<meta name="description" content="TRACTOCAR - Fabricación de carrocerías pesadas de metalmecánica: niñeras, planchas, patinetas y más.">
<meta name="keywords" content="carrocerías, metalmecánica, niñeras, planchas, patinetas">
<meta name="author" content="TRACTOCAR">
```

## 💡 Consejos Útiles

1. **Optimiza tus imágenes** - Usa herramientas como TinyPNG para reducir tamaño
2. **Prueba en móviles** - Usa el inspector de Chrome (F12)
3. **Velocidad de carga** - Mantén imágenes comprimidas
4. **Mantén actualizado** - Actualiza la galería regularmente con nuevos trabajos
5. **Analytics** - Agrega Google Analytics para ver visitantes

## 🛠️ Tecnologías Usadas

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript Vanilla
- Font Awesome (Iconos)
- Google Fonts

## 📞 Próximos Pasos

1. ✅ Personaliza toda la información
2. ✅ Agrega tus imágenes
3. ✅ Configura el envío de emails
4. ✅ Prueba en diferentes dispositivos
5. ✅ Sube a un hosting (recomendación: Netlify, Vercel, o un hosting tradicional)

## 📧 Soporte

Si necesitas ayuda o cambios adicionales, asegúrate de:
- Revisar la estructura HTML
- Validar el CSS
- Probar en navegadores modernos
- Usar las herramientas del navegador (F12) para ver errores

---

**¡Tu página web está lista para mostrar la excelencia de TRACTOCAR! 🚀**

Diseñado con ❤️ para TRACTOCAR - Fabricación de Carrocerías Pesadas
