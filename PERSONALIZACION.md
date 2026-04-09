# 📋 Guía de Personalización - Editar el Contenido

Esta guía te muestra exactamente dónde editar cada parte de tu página web.

## 🎨 Cambios Rápidos en `index.html`

### 1. Cambiar Nombre y Logo

**Busca esta línea:**
```html
<img src="images/logo.png" alt="TRACTOCAR" class="logo">
<h1>TRACTOCAR</h1>
```

**Reemplaza con:**
```html
<img src="images/mi-logo.png" alt="Mi Empresa" class="logo">
<h1>MI EMPRESA</h1>
```

---

### 2. Hero Section - Titular y Subtítulo

**Busca:**
```html
<h1>Carrocerías Pesadas de Calidad Superior</h1>
<p>Especialistas en fabricación de niñeras, planchas, patinetas y estructuras metalmecánicas</p>
```

**Reemplaza con tu propio texto:**
```html
<h1>Tus Carrocerías, Nuestra Especialidad</h1>
<p>25 años de experiencia en fabricación de estructuras metalmecánicas de calidad premium</p>
```

---

### 3. Actualizar Servicios

**Busca esta sección:**
```html
<div class="servicio-card">
    <i class="fas fa-truck"></i>
    <h3>Niñeras</h3>
    <p>Fabricación de niñeras de alta capacidad...</p>
</div>
```

**Personaliza cada tarjeta:**
```html
<div class="servicio-card">
    <i class="fas fa-cube"></i>  <!-- Cambia el icono -->
    <h3>Tu Servicio</h3>
    <p>Descripción detallada de lo que haces...</p>
</div>
```

**Iconos disponibles** (Font Awesome):
- `fa-truck` - Camión
- `fa-layer-group` - Capas
- `fa-cube` - Cubo
- `fa-wrench` - Llave inglesa
- `fa-hammer` - Martillo
- `fa-cogs` - Engranajes

Ver más en [Font Awesome](https://fontawesome.com/search)

---

### 4. Galería de Trabajos

**Busca:**
```html
<div class="galeria-item">
    <img src="images/trabajo1.jpg" alt="Trabajo 1">
    <div class="galeria-overlay">
        <h3>Niñera de Transporte</h3>
        <p>Proyecto especial para cliente industrial</p>
    </div>
</div>
```

**Personaliza:**
```html
<div class="galeria-item">
    <img src="images/mi-proyecto-1.jpg" alt="Mi Proyecto">
    <div class="galeria-overlay">
        <h3>Carrocería Pesada Personalizada</h3>
        <p>Proyecto realizado para Transportes XYZ - Mayo 2024</p>
    </div>
</div>
```

**Al menos agrega 6 trabajos** (para mantener el diseño)

---

### 5. Información de Contacto

#### Teléfono
**Busca:**
```html
<h3>Teléfono</h3>
<p>+57 (1) 1234 5678<br>+57 300 123 4567</p>
```

**Reemplaza con tus números:**
```html
<h3>Teléfono</h3>
<p>+57 (1) 2345 6789<br>+57 310 555 1234</p>
```

#### Email
**Busca:**
```html
<h3>Email</h3>
<p>info@tractocar.com<br>contacto@tractocar.com</p>
```

**Reemplaza:**
```html
<h3>Email</h3>
<p>contacto@miempresa.com<br>ventas@miempresa.com</p>
```

#### Dirección
**Busca:**
```html
<h3>Dirección</h3>
<p>Calle Principal 123<br>Ciudad, Departamento<br>Colombia</p>
```

**Reemplaza:**
```html
<h3>Dirección</h3>
<p>Cra 45 #123-45<br>Bogotá, Cundinamarca<br>Colombia</p>
```

#### Horario
**Busca:**
```html
<h3>Horario</h3>
<p>Lunes - Viernes: 7:00 - 17:00<br>Sábado: 8:00 - 13:00<br>Domingo: Cerrado</p>
```

**Actualiza tus horarios:**
```html
<h3>Horario</h3>
<p>Lunes - Viernes: 6:00 - 18:00<br>Sábado: 7:00 - 14:00<br>Domingo: Cerrado</p>
```

---

### 6. Clientes

**Busca:**
```html
<div class="cliente-card">
    <img src="images/cliente1.png" alt="Cliente 1">
</div>
```

**Agrega tus clientes:**
```html
<div class="cliente-card">
    <img src="images/logo-transportes-xyz.png" alt="Transportes XYZ">
</div>
```

---

### 7. Footer - Información y Redes Sociales

#### Información en Footer
**Busca:**
```html
<p>Especialistas en carrocerías pesadas de metalmecánica desde hace más de 20 años.</p>
```

**Personaliza:**
```html
<p>Con más de 20 años de experiencia, TRACTOCAR es líder en fabricación de carrocerías pesadas de metalmecánica. Tu confianza es nuestro mayor logro.</p>
```

#### Redes Sociales
**Busca:**
```html
<a href="#" title="Facebook"><i class="fab fa-facebook"></i></a>
<a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
<a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
<a href="#" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
```

**Agrega tus URLs:**
```html
<a href="https://facebook.com/miempresa" title="Facebook" target="_blank"><i class="fab fa-facebook"></i></a>
<a href="https://instagram.com/miempresa" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
<a href="https://linkedin.com/company/miempresa" title="LinkedIn" target="_blank"><i class="fab fa-linkedin"></i></a>
<a href="https://wa.me/573001234567" title="WhatsApp" target="_blank"><i class="fab fa-whatsapp"></i></a>
```

---

## 🎨 Cambios en CSS - Personalizar Colores

**Abre `css/styles.css`**

**Busca esta sección al inicio:**
```css
:root {
    --primary-color: #003da5;    /* Azul actual */
    --secondary-color: #f39200;  /* Naranja actual */
    --dark-color: #1a1a1a;
    --light-color: #f8f9fa;
}
```

**Cambia los colores usando código HEX:**

### Ejemplos de paletas de colores:

**Opción 1 - Rojo y Negro (Industrial)**
```css
--primary-color: #D32F2F;    /* Rojo */
--secondary-color: #333333;  /* Negro */
```

**Opción 2 - Verde y Gris (Moderno)**
```css
--primary-color: #00897B;    /* Verde azulado */
--secondary-color: #455A64;  /* Gris azulado */
```

**Opción 3 - Azul y Amarillo (Contraste)**
```css
--primary-color: #1565C0;    /* Azul */
--secondary-color: #FBC02D;  /* Amarillo */
```

**Opción 4 - Morado y Naranja (Moderno)**
```css
--primary-color: #7B1FA2;    /* Morado */
--secondary-color: #FF6F00;  /* Naranja oscuro */
```

---

## 🔍 Agregar Google Maps

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu ubicación
3. Haz clic en "Compartir" > "Insertar mapa"
4. Copia el código
5. En `index.html`, busca:

```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

6. Reemplaza `YOUR_MAP_EMBED_CODE` con tu código

---

## 📸 Tamaños Recomendados para Imágenes

**Logo:**
- Tamaño: 200x50px a 500x150px
- Formato: PNG (para transparencia)

**Galería de Trabajos:**
- Tamaño: 1200x800px
- Formato: JPG
- Comprime: [TinyPNG](https://tinypng.com)

**Logos de Clientes:**
- Tamaño: 300x200px
- Formato: PNG (preferiblemente con fondo transparente)

**Nombre de archivos:**
- Usa nombres simples: `trabajo1.jpg`, `cliente1.png`
- Sin espacios ni caracteres especiales

---

## 💻 Cambios en JavaScript (js/main.js)

### Cambiar Número de WhatsApp

**Busca:**
```javascript
const numeroWhatsApp = '573001234567'; // Reemplazar con tu número
```

**Reemplaza con tu número:**
```javascript
const numeroWhatsApp = '573105551234'; // Tu número real
```

### Personalizar Mensaje de WhatsApp

**Busca:**
```javascript
const mensaje = 'Hola TRACTOCAR, me interesa información sobre vuestros servicios.';
```

**Personaliza:**
```javascript
const mensaje = 'Hola, me interesa solicitar información sobre vuestros servicios de carrocerías.';
```

---

## ✅ Checklist de Personalización

- [ ] Cambiaste el nombre de la empresa
- [ ] Actualizaste el logo
- [ ] Escribiste tu descripción en Hero
- [ ] Actualizaste los servicios
- [ ] Agregaste fotos de tus trabajos (mínimo 6)
- [ ] Agregaste logos de clientes (mínimo 3)
- [ ] Actualizaste números de teléfono
- [ ] Actualizaste emails
- [ ] Actualizaste dirección
- [ ] Actualizaste horarios
- [ ] Agregaste Google Maps
- [ ] Cambiaste colores si es necesario
- [ ] Actualizaste redes sociales
- [ ] Probaste en móvil y escritorio

---

## 🎯 Próximos Pasos

1. Personaliza TODOS estos cambios
2. Agrega tus imágenes en `/images/`
3. Abre `index.html` en tu navegador para ver cambios
4. Prueba en móvil con diferentes navegadores
5. Cuando esté listo, sube a Netlify o tu hosting

---

¿Necesitas ayuda? Duplica esta estructura y:
- Busca la sección en `index.html`
- Reemplaza el contenido de ejemplo con realidad
- Prueba

**¡Tu página quedará increíble! 🚀**
