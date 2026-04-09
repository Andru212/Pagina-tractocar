// ===========================

// PLANETA/ÁTOMO 3D CON HOTSPOTS GIRATORIOS Y PROFUNDIDAD
// Responsive: calcular tamaño basado en el contenedor real
function isMobilePlanetLayout() {
    return window.innerWidth <= 768;
}

const translations = {
    es: {
        metaTitle: 'TRACTOCAR - Carrocerias Pesadas Premium | Metalmecanica Industrial',
        metaDescription: 'TRACTOCAR - Expertos en carrocerias pesadas de metalmecanica. Nineras, planchas, patinetas y estructuras personalizadas para tu industria.',
        nav: ['Inicio', 'Servicios', 'Galeria', 'Nosotros', 'Clientes', 'Ubicacion', 'Contacto'],
        planetKicker: 'Explora TRACTOCAR',
        planetCanvasLabel: 'Planeta 3D interactivo',
        hotspots: ['Servicios', 'Galeria', 'Nosotros', 'Por que elegirnos', 'Contacto'],
        menuAria: 'Abrir menu',
        switchAria: 'Selector de idioma',
        advantages: {
            title: 'Por que elegirnos?',
            cards: [
                ['Calidad Garantizada', 'Cada proyecto cumple con estandares internacionales de manufactura y calidad.', 'ISO Certificado'],
                ['Entrega Rapida', 'Procesos optimizados que garantizan entregas en tiempo record sin comprometer calidad.', '35+ Anos'],
                ['Equipo Especializado', 'Profesionales con experiencia en los mas complejos proyectos metalmecanicos.', 'Expertos'],
                ['Personalizacion Total', 'Adaptamos nuestros servicios a tus especificaciones y necesidades unicas.', '100% Flexible']
            ]
        },
        services: {
            title: 'Nuestros Servicios',
            cards: [
                ['Mantenimiento', 'Fabricacion de nineras de alta capacidad para transporte de carga pesada con acabados de precision.'],
                ['Planchas', 'Planchas metalicas estructurales de diferentes dimensiones y especificaciones segun tus necesidades.'],
                ['Patinetas', 'Patinetas para transporte especializado con sistemas de carga y descarga eficientes.'],
                ['Personalizacion', 'Disenos personalizados segun tus especificaciones y requerimientos tecnicos particulares.'],
                ['Montaje Integral', 'Montaje completo de sistemas integrales para proyectos de ingenieria metalmecanica.'],
                ['Alargue de chasis', 'Montaje completo de sistemas integrales para proyectos de ingenieria metalmecanica.']
            ]
        },
        gallery: {
            title: 'Trabajos Realizados',
            button: 'Solicitar Cotizacion',
            ctaPrefix: 'Quiero saber mas sobre:',
            items: [
                ['Ninera de Transporte', 'Proyecto especial para cliente industrial', 'Trabajo 1'],
                ['Sistema de Planchas', 'Estructura metalmecanica compleja', 'Trabajo 2'],
                ['Patineta Especializada', 'Diseno personalizado para transporte', 'Trabajo 3'],
                ['Estructura Pesada', 'Proyecto de ingenieria especializada', 'Trabajo 4'],
                ['Carroceria Completa', 'Montaje de sistema integral', 'Trabajo 5'],
                ['Acabado Profesional', 'Detalle de precision en manufactura', 'Trabajo 6']
            ]
        },
        about: {
            title: 'Sobre Nosotros',
            heading: 'Pasion, Innovacion y Experiencia',
            body: 'TRACTOCAR TRUCK S.A.S es una empresa lider en la fabricacion de carrocerias pesadas y soluciones metalmecanicas industriales. Con mas de 20 anos de experiencia, nuestro equipo combina tecnologia de punta, talento humano y pasion por la excelencia para entregar proyectos unicos y personalizados.',
            bullets: [
                'Compromiso con la calidad y la seguridad',
                'Innovacion constante en procesos y diseno',
                'Atencion personalizada y asesoria tecnica',
                'Equipo multidisciplinario de expertos'
            ],
            imageAlt: 'Equipo Tractocar'
        },
        clients: {
            title: 'Nuestros Clientes',
            intro: 'Trabajamos con las principales empresas del sector industrial',
            logoAlt: ['Transportes Vigia', 'Truck Logic', 'Atica', 'Kendworth de la montana', 'Country Motors', 'Colwagen', 'Jorge Cortez']
        },
        testimonials: {
            title: 'Lo que Dicen Nuestros Clientes',
            items: [
                ['TRACTOCAR supero todas nuestras expectativas. La calidad de sus carrocerias es inmejorable y sus tiempos de entrega son impecables.', 'Juan Carlos Rodriguez', 'Director General, Transportes ABC'],
                ['Trabajar con TRACTOCAR ha sido la mejor decision. Su profesionalismo y dedicacion a cada proyecto es extraordinario.', 'Maria Lopez Garcia', 'Gerente de Operaciones, Industrial Metals Co.'],
                ['Excelente servicio, productos de alta calidad y un equipo que realmente se preocupa por hacer bien las cosas. Altamente recomendado.', 'Carlos Mendoza', 'Propietario, MendozaTruck Solutions']
            ]
        },
        location: {
            title: 'Ubicacion',
            headings: ['Direccion', 'Telefono', 'Email', 'Horario'],
            details: [
                'Cra. 6 # 13A-110<br>Ceuta, Mosquera<br>Colombia',
                '+57 317 654 7173<br>+57 318 349 3441',
                'Tractocartrucksas@hotmail.com<br>Tractocarjlm@hotmail.com',
                'Lunes - Viernes: 8:00 - 18:00<br>Sabado: 8:00 - 13:00<br>Domingo: Cerrado'
            ]
        },
        contact: {
            title: 'Ponte en Contacto',
            intro: 'Tienes un proyecto en mente? Cuentanos y te proporcionaremos una cotizacion personalizada',
            placeholders: ['Tu Nombre', 'Tu Email', 'Tu Telefono', 'Empresa', 'Describe tu proyecto'],
            button: 'Enviar Mensaje',
            required: 'Por favor completa todos los campos requeridos',
            success: 'Gracias. Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.'
        },
        footer: {
            title: 'TRACTOCAR',
            body: 'Especialistas en carrocerias pesadas de metalmecanica desde hace mas de 20 anos.',
            quickLinksTitle: 'Enlaces Rapidos',
            quickLinks: ['Inicio', 'Servicios', 'Galeria', 'Contacto'],
            socialTitle: 'Siguenos',
            bottom: '© 2024 TRACTOCAR. Todos los derechos reservados. | Politica de Privacidad | Terminos de Servicio'
        },
        galleryInterest: 'Estoy interesado en el producto:',
        formLogLabel: 'Datos del formulario:'
    },
    en: {
        metaTitle: 'TRACTOCAR - Premium Heavy Bodyworks | Industrial Metalworking',
        metaDescription: 'TRACTOCAR - Experts in heavy-duty metalworking bodyworks. Car carriers, flatbeds, skate trailers, and custom industrial structures.',
        nav: ['Home', 'Services', 'Gallery', 'About', 'Clients', 'Location', 'Contact'],
        planetKicker: 'Explore TRACTOCAR',
        planetCanvasLabel: 'Interactive 3D planet',
        hotspots: ['Services', 'Gallery', 'About', 'Why us', 'Contact'],
        menuAria: 'Open menu',
        switchAria: 'Language switcher',
        advantages: {
            title: 'Why Choose Us?',
            cards: [
                ['Guaranteed Quality', 'Every project meets international manufacturing and quality standards.', 'ISO Certified'],
                ['Fast Delivery', 'Optimized processes ensure fast delivery times without compromising quality.', '35+ Years'],
                ['Specialized Team', 'Professionals experienced in the most demanding metalworking projects.', 'Experts'],
                ['Full Customization', 'We adapt our services to your exact specifications and unique needs.', '100% Flexible']
            ]
        },
        services: {
            title: 'Our Services',
            cards: [
                ['Maintenance', 'High-capacity car carrier fabrication for heavy cargo transport with precision finishes.'],
                ['Flatbeds', 'Structural metal flatbeds in different dimensions and specifications according to your needs.'],
                ['Skate Trailers', 'Specialized transport skate trailers with efficient loading and unloading systems.'],
                ['Customization', 'Custom designs based on your specifications and technical requirements.'],
                ['Full Assembly', 'Complete assembly of integrated systems for metalworking engineering projects.'],
                ['Chassis Extension', 'Complete assembly of integrated systems for metalworking engineering projects.']
            ]
        },
        gallery: {
            title: 'Completed Work',
            button: 'Request a Quote',
            ctaPrefix: 'I want to know more about:',
            items: [
                ['Transport Car Carrier', 'Special project for an industrial client', 'Work 1'],
                ['Flatbed System', 'Complex metalworking structure', 'Work 2'],
                ['Specialized Skate Trailer', 'Custom transport design', 'Work 3'],
                ['Heavy Structure', 'Specialized engineering project', 'Work 4'],
                ['Complete Bodywork', 'Integrated system assembly', 'Work 5'],
                ['Professional Finish', 'Precision manufacturing detail', 'Work 6']
            ]
        },
        about: {
            title: 'About Us',
            heading: 'Passion, Innovation and Experience',
            body: 'TRACTOCAR TRUCK S.A.S is a leading company in heavy bodywork manufacturing and industrial metalworking solutions. With more than 20 years of experience, our team combines advanced technology, skilled people, and a passion for excellence to deliver unique and fully customized projects.',
            bullets: [
                'Commitment to quality and safety',
                'Constant innovation in processes and design',
                'Personalized support and technical guidance',
                'Multidisciplinary team of experts'
            ],
            imageAlt: 'Tractocar team'
        },
        clients: {
            title: 'Our Clients',
            intro: 'We work with leading companies in the industrial sector',
            logoAlt: ['Transportes Vigia', 'Truck Logic', 'Atica', 'Kendworth de la Montana', 'Country Motors', 'Colwagen', 'Jorge Cortez']
        },
        testimonials: {
            title: 'What Our Clients Say',
            items: [
                ['TRACTOCAR exceeded all our expectations. The quality of their bodyworks is unmatched and their delivery times are flawless.', 'Juan Carlos Rodriguez', 'General Director, Transportes ABC'],
                ['Working with TRACTOCAR has been our best decision. Their professionalism and dedication to every project is outstanding.', 'Maria Lopez Garcia', 'Operations Manager, Industrial Metals Co.'],
                ['Excellent service, high-quality products, and a team that truly cares about doing things right. Highly recommended.', 'Carlos Mendoza', 'Owner, MendozaTruck Solutions']
            ]
        },
        location: {
            title: 'Location',
            headings: ['Address', 'Phone', 'Email', 'Business Hours'],
            details: [
                'Cra. 6 # 13A-110<br>Ceuta, Mosquera<br>Colombia',
                '+57 317 654 7173<br>+57 318 349 3441',
                'Tractocartrucksas@hotmail.com<br>Tractocarjlm@hotmail.com',
                'Monday - Friday: 8:00 - 18:00<br>Saturday: 8:00 - 13:00<br>Sunday: Closed'
            ]
        },
        contact: {
            title: 'Get in Touch',
            intro: 'Do you have a project in mind? Tell us about it and we will provide a tailored quote.',
            placeholders: ['Your Name', 'Your Email', 'Your Phone', 'Company', 'Describe your project'],
            button: 'Send Message',
            required: 'Please complete all required fields',
            success: 'Thank you. Your message has been sent. We will contact you soon.'
        },
        footer: {
            title: 'TRACTOCAR',
            body: 'Specialists in heavy metalworking bodyworks for more than 20 years.',
            quickLinksTitle: 'Quick Links',
            quickLinks: ['Home', 'Services', 'Gallery', 'Contact'],
            socialTitle: 'Follow Us',
            bottom: '© 2024 TRACTOCAR. All rights reserved. | Privacy Policy | Terms of Service'
        },
        galleryInterest: 'I am interested in the product:',
        formLogLabel: 'Form data:'
    }
};

let currentLanguage = localStorage.getItem('tractocar-language') || 'es';

function getPlanetSize() {
    const container = document.querySelector('.planet-container');
    if (container) {
        const rect = container.getBoundingClientRect();
        return Math.min(rect.width, rect.height);
    }
    const w = window.innerWidth;
    const size = Math.max(250, Math.min(0.85 * w, 700));
    return size;
}

// Hotspots principales bien separados (usando ángulos fijos para máxima separación)
const mainHotspots = [
    { label: translations[currentLanguage].hotspots[0], section: '#servicios', main: true, phi: 1.1, theta: 0.2 },
    { label: translations[currentLanguage].hotspots[1], section: '#galeria', main: true, phi: 2.1, theta: 2.2 },
    { label: translations[currentLanguage].hotspots[2], section: '#nosotros', main: true, phi: 1.1, theta: 4.2 },
    { label: translations[currentLanguage].hotspots[3], section: '#ventajas', main: true, phi: 2.1, theta: 4.8 },
    { label: translations[currentLanguage].hotspots[4], section: '#contacto', main: true, phi: 1.7, theta: 6.2 }
];
// Secundarios distribuidos con golden spiral — menos en móvil
const secondaryCount = window.innerWidth <= 480 ? 15 : (window.innerWidth <= 768 ? 25 : 44);
const secondaryHotspots = Array.from({length: secondaryCount}, (_,i) => ({ label: '', section: '', main: false }));
const planetHotspotsData = [...mainHotspots, ...secondaryHotspots];
const planetCanvas = document.getElementById('planetCanvas');
const ctxPlanet = planetCanvas ? planetCanvas.getContext('2d') : null;
const planetHotspotsDiv = document.getElementById('planet-hotspots');
let planetSize = getPlanetSize();
let planetCenter = { x: planetSize/2, y: planetSize/2 };
let planetRadius = planetSize/2.15;
let planetAngleY = 0.0;
let planetAngleX = 0.25;
let planetAutoSpinY = 0.0;
let planetUserSpinY = 0.0;
let planetAutoTiltX = 0.25;
let planetUserTiltX = 0.0;
let dragging = false, lastX = 0, lastY = 0;
let touchDragging = false;
let touchIntentLocked = false;
let touchRotationMode = false;
let touchStartX = 0;
let touchStartY = 0;

function syncPlanetAngles() {
    planetAngleY = planetAutoSpinY + planetUserSpinY;
    planetAngleX = planetAutoTiltX + planetUserTiltX;
}

function wrapAngle(angle) {
    const fullTurn = Math.PI * 2;
    return ((angle % fullTurn) + fullTurn) % fullTurn;
}

function clampTilt(angle) {
    return Math.max(-1.05, Math.min(1.05, angle));
}

function resizePlanet() {
    planetSize = getPlanetSize();
    planetCenter = { x: planetSize/2, y: planetSize/2 };
    planetRadius = planetSize/2.15;
    if (planetCanvas) {
        planetCanvas.width = planetSize;
        planetCanvas.height = planetSize;
        planetCanvas.style.width = planetSize + 'px';
        planetCanvas.style.height = planetSize + 'px';
    }
    if (planetHotspotsDiv) {
        planetHotspotsDiv.style.width = planetSize + 'px';
        planetHotspotsDiv.style.height = planetSize + 'px';
    }
}
window.addEventListener('resize', resizePlanet);
// Delay initial resize to let CSS layout settle
setTimeout(resizePlanet, 50);
resizePlanet();

// Distribuir puntos en la esfera
function getHotspotSphereCoords(idx, total, angleY, angleX) {
    // Los primeros N son los principales, ubicados en posiciones fijas
    if (idx < mainHotspots.length) {
        const h = mainHotspots[idx];
        // phi y theta fijos + rotación global
        let phi = h.phi;
        let theta = h.theta + angleY;
        // Convertir a cartesiano
        let x0 = Math.sin(phi) * Math.cos(theta);
        let y0 = Math.sin(phi) * Math.sin(theta);
        let z0 = Math.cos(phi);
        // Rotar en X
        let y1 = y0 * Math.cos(angleX) - z0 * Math.sin(angleX);
        let z1 = y0 * Math.sin(angleX) + z0 * Math.cos(angleX);
        return { x: x0*1.25, y: y1*1.25, z: z1*1.25 };
    }
    // Secundarios: golden spiral
    const i = idx - mainHotspots.length;
    const n = secondaryHotspots.length;
    const phi = Math.acos(1 - 2*(i+0.5)/n);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i+0.5);
    let x0 = Math.sin(phi) * Math.cos(theta);
    let y0 = Math.sin(phi) * Math.sin(theta);
    let z0 = Math.cos(phi);
    // Rotar en Y y X
    let x1 = x0 * Math.cos(angleY) - z0 * Math.sin(angleY);
    let z1 = x0 * Math.sin(angleY) + z0 * Math.cos(angleY);
    let y1 = y0 * Math.cos(angleX) - z1 * Math.sin(angleX);
    let z2 = y0 * Math.sin(angleX) + z1 * Math.cos(angleX);
    return { x: x1, y: y1, z: z2 };
}

function drawPlanet3D() {
    if (!ctxPlanet) return;
    ctxPlanet.clearRect(0, 0, planetCanvas.width, planetCanvas.height);
    const isMobile = isMobilePlanetLayout();
    // Sombra
    ctxPlanet.save();
    ctxPlanet.globalAlpha = 0.18;
    ctxPlanet.beginPath();
    ctxPlanet.ellipse(planetCenter.x, planetCenter.y + planetRadius * 0.95, planetRadius * 0.6, planetRadius * 0.09, 0, 0, 2 * Math.PI);
    ctxPlanet.fillStyle = '#222';
    ctxPlanet.fill();
    ctxPlanet.restore();
    // Líneas de conexión tipo neurona a los principales
    ctxPlanet.save();
    const now = performance.now() * 0.001;
    for (let i = 0; i < mainHotspots.length; i++) {
        const { x, y, z } = getHotspotSphereCoords(i, planetHotspotsData.length, planetAngleY, planetAngleX);
        const px = planetCenter.x + x * planetRadius * 1.05;
        const py = planetCenter.y + y * planetRadius * 1.05;
        const cx = planetCenter.x + (px - planetCenter.x) * 0.45 + Math.sin(now * 2 + i) * (isMobile ? 10 : 18);
        const cy = planetCenter.y + (py - planetCenter.y) * 0.45 + Math.cos(now * 2 + i) * (isMobile ? 10 : 18);
        const opacity = Math.max(0.18, 0.5 + z * 0.22);
        ctxPlanet.beginPath();
        ctxPlanet.moveTo(planetCenter.x, planetCenter.y);
        ctxPlanet.quadraticCurveTo(cx, cy, px, py);
        ctxPlanet.strokeStyle = `rgba(165, 241, 255, ${opacity})`;
        ctxPlanet.lineWidth = isMobile ? 1.5 : 2.4;
        ctxPlanet.stroke();
    }
    ctxPlanet.restore();
    // Esfera base
    ctxPlanet.save();
    ctxPlanet.translate(planetCenter.x, planetCenter.y);
    let grad = ctxPlanet.createRadialGradient(0, -planetRadius*0.22, planetRadius*0.35, 0, 0, planetRadius);
    grad.addColorStop(0, '#eaf0fa');
    grad.addColorStop(0.5, '#0052cc');
    grad.addColorStop(1, '#003da5');
    ctxPlanet.beginPath();
    ctxPlanet.arc(0, 0, planetRadius, 0, 2 * Math.PI);
    ctxPlanet.fillStyle = grad;
    ctxPlanet.shadowColor = '#003da5';
    ctxPlanet.shadowBlur = 40;
    ctxPlanet.fill();
    // Efecto de "átomo": órbitas y electrones
    ctxPlanet.globalAlpha = 0.13;
    for (let i=0; i<4; i++) {
        ctxPlanet.save();
        ctxPlanet.rotate(i*Math.PI/4 + now*0.18*(i%2===0?1:-1));
        ctxPlanet.beginPath();
        ctxPlanet.ellipse(0, 0, planetRadius-12-i*10, planetRadius/2+18+i*7, 0, 0, 2*Math.PI);
        ctxPlanet.strokeStyle = '#fff';
        ctxPlanet.lineWidth = 2.2-i*0.3;
        ctxPlanet.stroke();
        // Electrón animado
        ctxPlanet.globalAlpha = 0.22;
        const eAngle = now*1.2 + i;
        const ex = Math.cos(eAngle) * (planetRadius-12-i*10);
        const ey = Math.sin(eAngle) * (planetRadius/2+18+i*7);
        ctxPlanet.beginPath();
        ctxPlanet.arc(ex, ey, 7-i*1.2, 0, 2*Math.PI);
        ctxPlanet.fillStyle = '#fff';
        ctxPlanet.fill();
        ctxPlanet.globalAlpha = 0.13;
        ctxPlanet.restore();
    }
    ctxPlanet.globalAlpha = 1;
    ctxPlanet.restore();
}

function updateHotspots3D() {
    if (!planetHotspotsDiv) return;
    const isMobile = isMobilePlanetLayout();
    const hotspotLabels = translations[currentLanguage].hotspots;
    // Crear los hotspots si no existen
    if (planetHotspotsDiv.childElementCount !== planetHotspotsData.length) {
        planetHotspotsDiv.innerHTML = '';
        planetHotspotsData.forEach((h, i) => {
            const el = document.createElement('div');
            el.className = 'planet-hotspot-3d';
            if (h.main) el.setAttribute('data-main','true');
            // Solo mostrar texto si es main
            el.textContent = h.main ? (hotspotLabels[i] || h.label) : '';
            if (h.section) {
                el.addEventListener('click', () => {
                    const sec = document.querySelector(h.section);
                    if (sec) {
                        const y = sec.getBoundingClientRect().top + window.scrollY - 80; // 80px offset for sticky nav
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                });
            }
            planetHotspotsDiv.appendChild(el);
        });
    }
    // Posicionar y mostrar/ocultar según profundidad
        planetHotspotsData.forEach((h, i) => {
            const el = planetHotspotsDiv.children[i];
            const {x, y, z} = getHotspotSphereCoords(i, planetHotspotsData.length, planetAngleY, planetAngleX);
            // Proyección 3D a 2D
            const px = planetCenter.x + x * planetRadius * 1.05;
            const py = planetCenter.y + y * planetRadius * 1.05;
            // Escala y opacidad según z (profundidad)
            const scale = h.main ? (0.8 + 0.8 * Math.max(z, 0)) : (0.45 + 0.45 * Math.max(z, 0));
            el.style.transform = `translate(-50%,-50%) scale(${scale})`;
            el.style.left = px + 'px';
            el.style.top = py + 'px';
            if (h.main) {
                const activeLabel = hotspotLabels[i] || h.label;
                if (isMobile) {
                    el.textContent = activeLabel;
                    el.style.width = 'auto';
                    el.style.height = 'auto';
                    el.style.padding = '7px 12px';
                    el.style.borderRadius = '18px';
                    el.style.background = 'radial-gradient(circle at 60% 40%, rgba(0,255,255,0.22) 0%, rgba(0,61,165,0.18) 60%, rgba(0,61,165,0.08) 100%)';
                    el.style.border = '2px solid rgba(0,255,255,0.78)';
                    el.style.boxShadow = '0 0 20px 4px rgba(0,255,255,0.22), 0 0 8px 1px #00eaff';
                    el.style.color = '#fff';
                    el.style.fontWeight = '700';
                    el.style.backdropFilter = 'blur(2px)';
                    el.style.opacity = z > -0.12 ? '1' : '0.18';
                    el.style.transition = 'background 0.3s, box-shadow 0.3s, opacity 0.3s';
                } else {
                    el.textContent = activeLabel;
                    el.style.minWidth = '70px';
                    el.style.minHeight = '36px';
                    el.style.width = 'auto';
                    el.style.height = 'auto';
                    el.style.padding = '4px 14px';
                    el.style.borderRadius = '2em';
                    el.style.background = 'radial-gradient(circle at 60% 40%, rgba(0,255,255,0.22) 0%, rgba(0,61,165,0.18) 60%, rgba(0,61,165,0.08) 100%)';
                    el.style.border = '2.5px solid rgba(0,255,255,0.85)';
                    el.style.boxShadow = '0 0 32px 8px rgba(0,255,255,0.25), 0 0 8px 2px #00eaff';
                    el.style.color = '#fff';
                    el.style.fontWeight = '700';
                    el.style.backdropFilter = 'blur(2.5px)';
                    el.style.opacity = z > 0.1 ? '1' : '0.45';
                    el.style.transition = 'background 0.3s, box-shadow 0.3s, opacity 0.3s';
                }
            } else {
                el.textContent = '';
                el.style.minWidth = isMobile ? '10px' : '18px';
                el.style.minHeight = isMobile ? '10px' : '18px';
                el.style.width = isMobile ? '10px' : '18px';
                el.style.height = isMobile ? '10px' : '18px';
                el.style.padding = '0';
                el.style.borderRadius = '50%';
                el.style.background = 'rgba(255,255,255,0.13)';
                el.style.border = 'none';
                el.style.boxShadow = 'none';
                el.style.color = '#fff';
                el.style.fontWeight = '400';
                el.style.backdropFilter = 'none';
                el.style.opacity = z > 0.1 ? (isMobile ? '0.72' : '1') : '0.18';
                el.style.transition = 'background 0.3s, box-shadow 0.3s, opacity 0.3s';
            }
            // Solo mostrar si está al frente
            if (z > 0.1 || (isMobile && h.main && z > -0.12)) {
                el.setAttribute('data-dimmed','false');
                el.style.zIndex = 10 + Math.floor(z*10);
                el.style.pointerEvents = h.section ? 'auto' : 'none';
            } else {
                el.setAttribute('data-dimmed','true');
                el.style.zIndex = 1;
                el.style.pointerEvents = 'none';
            }
        });
    // <--- cierre correcto de la función
}

function animatePlanet3D() {
    const t = performance.now() * 0.001;
    const isMobile = isMobilePlanetLayout();
    planetAutoSpinY = wrapAngle(planetAutoSpinY + (isMobile ? 0.0035 : 0.006));
    planetAutoTiltX = (isMobile ? 0.24 : 0.4) * Math.sin(t * (isMobile ? 0.22 : 0.15));
    syncPlanetAngles();
    drawPlanet3D();
    updateHotspots3D();
    requestAnimationFrame(animatePlanet3D);
}
if (planetCanvas) animatePlanet3D();

// Interacción: girar con mouse/touch
if (planetCanvas) {
    // Mouse drag (desktop only)
    planetCanvas.addEventListener('mousedown', e => { dragging = true; lastX = e.clientX; lastY = e.clientY; });
    window.addEventListener('mousemove', e => {
        if (dragging) {
            planetUserSpinY = wrapAngle(planetUserSpinY + (e.clientX - lastX) * 0.012);
            planetUserTiltX = clampTilt(planetUserTiltX + (e.clientY - lastY) * 0.012);
            syncPlanetAngles();
            lastX = e.clientX; lastY = e.clientY;
        }
    });
    window.addEventListener('mouseup', () => { dragging = false; });
    planetCanvas.addEventListener('touchstart', e => {
        if (e.touches.length !== 1) return;
        touchDragging = true;
        touchIntentLocked = false;
        touchRotationMode = !isMobilePlanetLayout();
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchmove', e => {
        if (!touchDragging || e.touches.length !== 1) return;
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;

        if (isMobilePlanetLayout() && !touchIntentLocked) {
            const totalDx = touchX - touchStartX;
            const totalDy = touchY - touchStartY;
            if (Math.abs(totalDx) + Math.abs(totalDy) < 10) return;
            touchIntentLocked = true;
            touchRotationMode = Math.abs(totalDx) > Math.abs(totalDy) + 4;
        }

        if (!touchRotationMode) return;

        if (isMobilePlanetLayout()) {
            e.preventDefault();
        }

        planetUserSpinY = wrapAngle(planetUserSpinY + (touchX - lastX) * 0.012);
        planetUserTiltX = clampTilt(planetUserTiltX + (touchY - lastY) * 0.012);
        syncPlanetAngles();
        lastX = touchX;
        lastY = touchY;
    }, { passive: false });

    window.addEventListener('touchend', () => {
        touchDragging = false;
        touchIntentLocked = false;
        touchRotationMode = false;
    }, { passive: true });
}
// ===========================
// MODAL GALERÍA
// ===========================
const galeriaItems = document.querySelectorAll('.galeria-item');
const galeriaModal = document.getElementById('galeriaModal');
const galeriaModalClose = document.getElementById('galeriaModalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const galleryQuoteButton = document.getElementById('galleryQuoteButton');


let currentProduct = { title: '', desc: '' };
let currentGalleryIndex = -1;

function updateGalleryQuoteButton(title, desc) {
    if (!galleryQuoteButton) return;
    galleryQuoteButton.innerHTML = `<i class="fas fa-paper-plane"></i> ${translations[currentLanguage].gallery.ctaPrefix} <b>${title}</b><br><span style='font-size:14px; color:#fff;'>${desc}</span>`;
}

galeriaItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const img = item.getAttribute('data-img');
        const title = item.getAttribute('data-title');
        const desc = item.getAttribute('data-desc');
        modalImg.src = img;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        currentGalleryIndex = index;
        currentProduct = { title, desc };
        updateGalleryQuoteButton(title, desc);
        galeriaModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});


galeriaModalClose.addEventListener('click', () => {
    galeriaModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Cerrar modal y pasar info al contacto al hacer clic en el botón de cotización
if (galleryQuoteButton) {
    galleryQuoteButton.addEventListener('click', (e) => {
        galeriaModal.classList.remove('active');
        document.body.style.overflow = '';
        // Rellenar textarea de contacto con la info del producto
        setTimeout(() => {
            const contactoMensaje = document.getElementById('contactoMensaje');
            if (contactoMensaje && currentProduct.title) {
                contactoMensaje.value = `${translations[currentLanguage].galleryInterest} ${currentProduct.title}\n${currentProduct.desc}\n`;
                contactoMensaje.focus();
            }
            // Hacer scroll suave a la sección de contacto
            const contactoSection = document.getElementById('contacto');
            if (contactoSection) {
                contactoSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    });
}

galeriaModal.addEventListener('click', (e) => {
    if (e.target === galeriaModal) {
        galeriaModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
// ===========================
// CARRUSEL DE TESTIMONIOS
// ===========================

const testimoniosTrack = document.getElementById('testimoniosTrack');
const testimonioSlides = document.querySelectorAll('.testimonio-slide');
const testimonioPrevBtn = document.getElementById('testimonioPrevBtn');
const testimonioNextBtn = document.getElementById('testimonioNextBtn');

let testimonioIndex = 0;
let testimonioAutoplay;

function isMobileTestimonials() {
    return window.innerWidth <= 768;
}

function updateTestimonios() {
    if (!testimoniosTrack) return;
    if (isMobileTestimonials()) {
        testimoniosTrack.style.transform = 'none';
        return;
    }
    const offset = -testimonioIndex * 100;
    testimoniosTrack.style.transform = `translateX(${offset}%)`;
}

function nextTestimonio() {
    if (isMobileTestimonials()) return;
    testimonioIndex = (testimonioIndex + 1) % testimonioSlides.length;
    updateTestimonios();
    resetTestimonioAutoplay();
}

function prevTestimonio() {
    if (isMobileTestimonials()) return;
    testimonioIndex = (testimonioIndex - 1 + testimonioSlides.length) % testimonioSlides.length;
    updateTestimonios();
    resetTestimonioAutoplay();
}

function startTestimonioAutoplay() {
    clearInterval(testimonioAutoplay);
    if (isMobileTestimonials()) return;
    testimonioAutoplay = setInterval(nextTestimonio, 5000);
}

function resetTestimonioAutoplay() {
    clearInterval(testimonioAutoplay);
    if (isMobileTestimonials()) return;
    startTestimonioAutoplay();
}

if (testimonioPrevBtn && testimonioNextBtn) {
    testimonioPrevBtn.addEventListener('click', prevTestimonio);
    testimonioNextBtn.addEventListener('click', nextTestimonio);
    updateTestimonios();
    startTestimonioAutoplay();
}

window.addEventListener('resize', () => {
    updateTestimonios();
    startTestimonioAutoplay();
});

// ===========================
// CARRUSEL DE CLIENTES MEJORADO
// ===========================

const carouselTrack = document.getElementById('carouselTrack');
let slides = document.querySelectorAll('.carousel-slide');
const originalSlides = Array.from(slides);
const totalOriginal = slides.length;

// Duplicar slides para carrusel infinito
originalSlides.forEach(slide => {
    const clone = slide.cloneNode(true);
    carouselTrack.appendChild(clone);
});

slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('carouselIndicators');

let currentIndex = 0;
let autoplayInterval;
let slidePerView = 4;

function getSlideWidth() {
    return 100 / slidePerView;
}

function createIndicators() {
    const indicatorCount = Math.ceil(totalOriginal / slidePerView);
    for (let i = 0; i < indicatorCount; i++) {
        const indicator = document.createElement('div');
        indicator.className = `carousel-indicator ${i === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToSlide(i * slidePerView));
        indicatorsContainer.appendChild(indicator);
    }
}

function updateCarousel() {
    const sw = getSlideWidth();
    const offset = -currentIndex * sw;
    carouselTrack.style.transform = `translateX(${offset}%)`;
    // Update slide widths
    slides.forEach(s => { s.style.minWidth = sw + '%'; });
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    const activeIndex = Math.floor(currentIndex / slidePerView);
    indicators.forEach((ind, idx) => {
        ind.classList.toggle('active', idx === activeIndex);
    });
}

function goToSlide(index) {
    const maxIndex = slides.length - slidePerView;
    currentIndex = Math.min(Math.max(index, 0), maxIndex);
    updateCarousel();
    resetAutoplay();
}

function nextSlide() {
    currentIndex++;
    updateCarousel();
    // Si llegamos al final de los slides duplicados, saltamos al original sin transición
    if (currentIndex === slides.length - slidePerView + 1) {
        setTimeout(() => {
            carouselTrack.style.transition = 'none';
            currentIndex = 0;
            updateCarousel();
            setTimeout(() => {
                carouselTrack.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }, 50);
        }, 600);
    }
    resetAutoplay();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = Math.max(0, slides.length - slidePerView);
    }
    updateCarousel();
    resetAutoplay();
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        nextSlide();
    }, 2800);
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

function updateSlidePerView() {
    const width = window.innerWidth;
    if (width < 480) {
        slidePerView = 1;
    } else if (width < 768) {
        slidePerView = 2;
    } else if (width < 1024) {
        slidePerView = 3;
    } else {
        slidePerView = 4;
    }
    // Rebuild indicators for new slidePerView
    if (indicatorsContainer) {
        indicatorsContainer.innerHTML = '';
        createIndicators();
    }
    // Reset index if out of bounds
    const maxIndex = Math.max(0, slides.length - slidePerView);
    if (currentIndex > maxIndex) currentIndex = 0;
    updateCarousel();
}

window.addEventListener('resize', updateSlidePerView);

if (carouselTrack && indicatorsContainer) {
    createIndicators();
    updateSlidePerView();
    startAutoplay();
    
    carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    carouselTrack.addEventListener('mouseleave', () => {
        startAutoplay();
    });
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observerAnimation = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observerAnimation.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.servicio-card, .ventaja-card, .galeria-item, .cliente-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observerAnimation.observe(el);
});

// ===========================
// MENÚ MÓVIL
// ===========================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const languageButtons = document.querySelectorAll('.language-option');

function updateHotspotLabels(lang) {
    translations[lang].hotspots.forEach((label, index) => {
        if (mainHotspots[index]) {
            mainHotspots[index].label = label;
        }
    });
}

function applyLanguage(lang) {
    if (!translations[lang]) return;

    currentLanguage = lang;
    localStorage.setItem('tractocar-language', lang);

    const t = translations[lang];
    const metaDescription = document.getElementById('metaDescription');
    const planetKicker = document.querySelector('.planet-kicker');
    const ventajasTitle = document.querySelector('.ventajas h2');
    const ventajaCards = document.querySelectorAll('.ventaja-card');
    const serviciosTitle = document.querySelector('.servicios h2');
    const servicioCards = document.querySelectorAll('.servicio-card');
    const galeriaTitle = document.querySelector('.galeria h2');
    const nosotrosTitle = document.querySelector('.nosotros h2');
    const nosotrosHeading = document.querySelector('.nosotros-text h3');
    const nosotrosBody = document.querySelector('.nosotros-text > p');
    const nosotrosBullets = document.querySelectorAll('.nosotros-text li');
    const nosotrosImg = document.querySelector('.nosotros-img img');
    const clientesTitle = document.querySelector('.clientes h2');
    const clientesIntro = document.querySelector('.clientes-intro');
    const clienteLogos = document.querySelectorAll('.cliente-card img');
    const testimoniosTitle = document.querySelector('.testimonios h2');
    const testimonialCards = document.querySelectorAll('.testimonio-card');
    const ubicacionTitle = document.querySelector('.ubicacion-info h2');
    const ubicacionItems = document.querySelectorAll('.ubicacion .info-item');
    const contactoTitle = document.querySelector('.contacto h2');
    const contactoIntro = document.querySelector('.contacto > .container > p');
    const footerSections = document.querySelectorAll('.footer-section');
    const footerQuickLinks = document.querySelectorAll('.footer-section ul a');
    const footerBottom = document.querySelector('.footer-bottom p');
    const planetCanvasEl = document.getElementById('planetCanvas');
    const contactSubmitButton = document.getElementById('contactSubmitButton');
    const galleryItemsContent = t.gallery.items;

    document.documentElement.lang = lang;
    document.title = t.metaTitle;
    if (metaDescription) metaDescription.content = t.metaDescription;
    if (menuToggle) menuToggle.setAttribute('aria-label', t.menuAria);
    const languageSwitch = document.getElementById('languageSwitch');
    if (languageSwitch) languageSwitch.setAttribute('aria-label', t.switchAria);
    if (planetCanvasEl) planetCanvasEl.setAttribute('aria-label', t.planetCanvasLabel);

    languageButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });

    document.querySelectorAll('.nav-link').forEach((link, index) => {
        if (t.nav[index]) link.textContent = t.nav[index];
    });

    if (planetKicker) planetKicker.textContent = t.planetKicker;

    if (ventajasTitle) ventajasTitle.textContent = t.advantages.title;
    ventajaCards.forEach((card, index) => {
        const content = t.advantages.cards[index];
        if (!content) return;
        const heading = card.querySelector('h3');
        const paragraph = card.querySelector('p');
        const badge = card.querySelector('.ventaja-badge');
        if (heading) heading.textContent = content[0];
        if (paragraph) paragraph.textContent = content[1];
        if (badge) badge.textContent = content[2];
    });

    if (serviciosTitle) serviciosTitle.textContent = t.services.title;
    servicioCards.forEach((card, index) => {
        const content = t.services.cards[index];
        if (!content) return;
        const heading = card.querySelector('h3');
        const paragraph = card.querySelector('p');
        if (heading) heading.textContent = content[0];
        if (paragraph) paragraph.textContent = content[1];
    });

    if (galeriaTitle) galeriaTitle.textContent = t.gallery.title;
    galeriaItems.forEach((item, index) => {
        const content = galleryItemsContent[index];
        if (!content) return;
        item.setAttribute('data-title', content[0]);
        item.setAttribute('data-desc', content[1]);
        const image = item.querySelector('img');
        const overlayTitle = item.querySelector('.galeria-overlay h3');
        const overlayDesc = item.querySelector('.galeria-overlay p');
        if (image) image.alt = content[2];
        if (overlayTitle) overlayTitle.textContent = content[0];
        if (overlayDesc) overlayDesc.textContent = content[1];
    });

    if (galleryQuoteButton) {
        galleryQuoteButton.innerHTML = `<i class="fas fa-paper-plane"></i> ${t.gallery.button}`;
    }

    if (nosotrosTitle) nosotrosTitle.textContent = t.about.title;
    if (nosotrosHeading) nosotrosHeading.textContent = t.about.heading;
    if (nosotrosBody) nosotrosBody.textContent = t.about.body;
    nosotrosBullets.forEach((item, index) => {
        const textNode = item.childNodes[item.childNodes.length - 1];
        if (textNode && t.about.bullets[index]) {
            textNode.textContent = ` ${t.about.bullets[index]}`;
        }
    });
    if (nosotrosImg) nosotrosImg.alt = t.about.imageAlt;

    if (clientesTitle) clientesTitle.textContent = t.clients.title;
    if (clientesIntro) clientesIntro.textContent = t.clients.intro;
    clienteLogos.forEach((logo, index) => {
        logo.alt = t.clients.logoAlt[index % t.clients.logoAlt.length];
    });

    if (testimoniosTitle) testimoniosTitle.textContent = t.testimonials.title;
    testimonialCards.forEach((card, index) => {
        const content = t.testimonials.items[index];
        if (!content) return;
        const text = card.querySelector('.testimonio-text');
        const author = card.querySelector('.testimonio-author h4');
        const role = card.querySelector('.testimonio-author p');
        if (text) text.textContent = `"${content[0]}"`;
        if (author) author.textContent = content[1];
        if (role) role.textContent = content[2];
    });

    if (ubicacionTitle) ubicacionTitle.textContent = t.location.title;
    ubicacionItems.forEach((item, index) => {
        const heading = item.querySelector('h3');
        const detail = item.querySelector('p');
        if (heading && t.location.headings[index]) heading.textContent = t.location.headings[index];
        if (detail && t.location.details[index]) detail.innerHTML = t.location.details[index];
    });

    if (contactoTitle) contactoTitle.textContent = t.contact.title;
    if (contactoIntro) contactoIntro.textContent = t.contact.intro;
    if (contactoNombre) contactoNombre.placeholder = t.contact.placeholders[0];
    if (contactoEmail) contactoEmail.placeholder = t.contact.placeholders[1];
    if (contactoTelefono) contactoTelefono.placeholder = t.contact.placeholders[2];
    if (contactoEmpresa) contactoEmpresa.placeholder = t.contact.placeholders[3];
    if (contactoMensaje) contactoMensaje.placeholder = t.contact.placeholders[4];
    if (contactSubmitButton) contactSubmitButton.textContent = t.contact.button;

    if (footerSections[0]) {
        const title = footerSections[0].querySelector('h3');
        const body = footerSections[0].querySelector('p');
        if (title) title.textContent = t.footer.title;
        if (body) body.textContent = t.footer.body;
    }
    if (footerSections[1]) {
        const title = footerSections[1].querySelector('h3');
        if (title) title.textContent = t.footer.quickLinksTitle;
    }
    footerQuickLinks.forEach((link, index) => {
        if (t.footer.quickLinks[index]) link.textContent = t.footer.quickLinks[index];
    });
    if (footerSections[2]) {
        const title = footerSections[2].querySelector('h3');
        if (title) title.textContent = t.footer.socialTitle;
    }
    if (footerBottom) footerBottom.textContent = t.footer.bottom;

    updateHotspotLabels(lang);
    if (planetHotspotsDiv && planetHotspotsDiv.childElementCount) {
        updateHotspots3D();
    }

    if (currentGalleryIndex >= 0 && galleryItemsContent[currentGalleryIndex] && galeriaModal.classList.contains('active')) {
        const currentItem = galleryItemsContent[currentGalleryIndex];
        modalTitle.textContent = currentItem[0];
        modalDesc.textContent = currentItem[1];
        modalImg.alt = currentItem[2];
        currentProduct = { title: currentItem[0], desc: currentItem[1] };
        updateGalleryQuoteButton(currentItem[0], currentItem[1]);
    }
}

languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        applyLanguage(button.dataset.lang);
    });
});

applyLanguage(currentLanguage);

// ===========================
// FORMULARIO DE CONTACTO
// ===========================

const contactoForm = document.getElementById('contactoForm');
const contactoNombre = document.getElementById('contactoNombre');
const contactoEmail = document.getElementById('contactoEmail');
const contactoTelefono = document.getElementById('contactoTelefono');
const contactoEmpresa = document.getElementById('contactoEmpresa');
const contactoMensaje = document.getElementById('contactoMensaje');

if (contactoForm) {
    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const data = {
            nombre: contactoNombre ? contactoNombre.value : '',
            email: contactoEmail ? contactoEmail.value : '',
            telefono: contactoTelefono ? contactoTelefono.value : '',
            empresa: contactoEmpresa ? contactoEmpresa.value : '',
            proyecto: contactoMensaje ? contactoMensaje.value : '',
        };
        
        if (!data.nombre || !data.email || !data.telefono || !data.proyecto) {
            alert(translations[currentLanguage].contact.required);
            return;
        }
        
        console.log(translations[currentLanguage].formLogLabel, data);
        alert(translations[currentLanguage].contact.success);
        contactoForm.reset();
    });
}

// ===========================
// SCROLL SMOOTH
// ===========================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

console.log('🚀 Script cargado correctamente - Versión Premium');

