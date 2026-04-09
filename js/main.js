// ===========================

// PLANETA/ÁTOMO 3D CON HOTSPOTS GIRATORIOS Y PROFUNDIDAD
// Responsive: calcular tamaño basado en el contenedor real
function isMobilePlanetLayout() {
    return window.innerWidth <= 768;
}

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
    { label: 'Servicios', section: '#servicios', main: true, phi: 1.1, theta: 0.2 },
    { label: 'Galería', section: '#galeria', main: true, phi: 2.1, theta: 2.2 },
    { label: 'Nosotros', section: '#nosotros', main: true, phi: 1.1, theta: 4.2 },
    { label: '¿Por qué elegirnos?', section: '#ventajas', main: true, phi: 2.1, theta: 4.8 },
    { label: 'Contacto', section: '#contacto', main: true, phi: 1.7, theta: 6.2 }
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
    // Crear los hotspots si no existen
    if (planetHotspotsDiv.childElementCount !== planetHotspotsData.length) {
        planetHotspotsDiv.innerHTML = '';
        planetHotspotsData.forEach((h, i) => {
            const el = document.createElement('div');
            el.className = 'planet-hotspot-3d';
            if (h.main) el.setAttribute('data-main','true');
            // Solo mostrar texto si es main
            el.textContent = h.main ? h.label : '';
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
                if (isMobile) {
                    el.textContent = h.label;
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
                    el.textContent = h.label;
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
// SIMULADOR INTERACTIVO 3D
// ===========================


// Simulador SVG editable
const simulador3d = document.getElementById('simulador3d');
let svgEl = null;

const carroceriaSVGs = {
        'Niñera': (color) => `
            <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="160" cy="170" rx="90" ry="12" fill="#222" opacity="0.18"/>
                <!-- Cabina -->
                <rect x="50" y="90" width="40" height="35" rx="8" fill="#bbb" stroke="#003da5" stroke-width="3"/>
                <rect x="60" y="100" width="20" height="15" rx="4" fill="#fff" opacity="0.7"/>
                <!-- Plataforma -->
                <rect x="90" y="80" width="170" height="30" rx="10" fill="${color}" stroke="#003da5" stroke-width="4"/>
                <!-- Barandas -->
                <rect x="90" y="70" width="170" height="10" rx="4" fill="#eaf0fa" stroke="#003da5" stroke-width="2"/>
                <rect x="90" y="110" width="170" height="8" rx="3" fill="#eaf0fa" stroke="#003da5" stroke-width="2"/>
                <!-- Ejes -->
                <circle cx="110" cy="135" r="13" fill="#444" stroke="#222" stroke-width="4"/>
                <circle cx="230" cy="135" r="13" fill="#444" stroke="#222" stroke-width="4"/>
            </svg>
        `,
        'Planchón': (color) => `
            <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="160" cy="170" rx="90" ry="12" fill="#222" opacity="0.18"/>
                <!-- Plataforma larga -->
                <rect x="40" y="100" width="240" height="22" rx="8" fill="${color}" stroke="#003da5" stroke-width="4"/>
                <!-- Rampas -->
                <rect x="40" y="122" width="30" height="8" rx="2" fill="#bbb" stroke="#003da5" stroke-width="2"/>
                <rect x="250" y="122" width="30" height="8" rx="2" fill="#bbb" stroke="#003da5" stroke-width="2"/>
                <!-- Ejes dobles -->
                <circle cx="80" cy="145" r="10" fill="#444" stroke="#222" stroke-width="3"/>
                <circle cx="110" cy="145" r="10" fill="#444" stroke="#222" stroke-width="3"/>
                <circle cx="210" cy="145" r="10" fill="#444" stroke="#222" stroke-width="3"/>
                <circle cx="240" cy="145" r="10" fill="#444" stroke="#222" stroke-width="3"/>
            </svg>
        `,
        'Patineta': (color) => `
            <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="160" cy="170" rx="90" ry="12" fill="#222" opacity="0.18"/>
                <!-- Plataforma baja -->
                <rect x="70" y="120" width="180" height="14" rx="6" fill="${color}" stroke="#003da5" stroke-width="4"/>
                <!-- Ejes -->
                <circle cx="100" cy="140" r="9" fill="#444" stroke="#222" stroke-width="3"/>
                <circle cx="220" cy="140" r="9" fill="#444" stroke="#222" stroke-width="3"/>
            </svg>
        `,
        'Especial': (color) => `
            <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="160" cy="170" rx="90" ry="12" fill="#222" opacity="0.18"/>
                <!-- Plataforma especial -->
                <rect x="100" y="90" width="120" height="30" rx="12" fill="${color}" stroke="#003da5" stroke-width="4"/>
                <!-- Detalle especial -->
                <rect x="130" y="80" width="60" height="10" rx="4" fill="#eaf0fa" stroke="#003da5" stroke-width="2"/>
                <!-- Ejes -->
                <circle cx="120" cy="130" r="11" fill="#444" stroke="#222" stroke-width="3"/>
                <circle cx="200" cy="130" r="11" fill="#444" stroke="#222" stroke-width="3"/>
            </svg>
        `,
        'Niñera3D': (color) => `
            <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="160" cy="170" rx="90" ry="12" fill="#222" opacity="0.18"/>
                <!-- Cabina 3D -->
                <rect x="55" y="95" width="38" height="32" rx="7" fill="#bbb" stroke="#f39200" stroke-width="3"/>
                <rect x="65" y="105" width="18" height="12" rx="3" fill="#fff" opacity="0.7"/>
                <!-- Plataforma 3D -->
                <rect x="93" y="85" width="165" height="28" rx="9" fill="${color}" stroke="#f39200" stroke-width="4"/>
                <!-- Barandas -->
                <rect x="93" y="75" width="165" height="8" rx="3" fill="#fff" opacity="0.5" stroke="#f39200" stroke-width="2"/>
                <rect x="93" y="113" width="165" height="7" rx="2" fill="#fff" opacity="0.5" stroke="#f39200" stroke-width="2"/>
                <!-- Ejes -->
                <circle cx="115" cy="135" r="12" fill="#888" stroke="#f39200" stroke-width="4"/>
                <circle cx="230" cy="135" r="12" fill="#888" stroke="#f39200" stroke-width="4"/>
            </svg>
        `,
        'Remolque3D': (color) => `
            <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="160" cy="170" rx="90" ry="12" fill="#222" opacity="0.18"/>
                <!-- Plataforma remolque -->
                <rect x="45" y="110" width="230" height="18" rx="7" fill="${color}" stroke="#f39200" stroke-width="4"/>
                <!-- Rampas -->
                <rect x="45" y="128" width="30" height="7" rx="2" fill="#bbb" stroke="#f39200" stroke-width="2"/>
                <rect x="245" y="128" width="30" height="7" rx="2" fill="#bbb" stroke="#f39200" stroke-width="2"/>
                <!-- Ejes dobles -->
                <circle cx="80" cy="145" r="10" fill="#888" stroke="#f39200" stroke-width="3"/>
                <circle cx="110" cy="145" r="10" fill="#888" stroke="#f39200" stroke-width="3"/>
                <circle cx="210" cy="145" r="10" fill="#888" stroke="#f39200" stroke-width="3"/>
                <circle cx="240" cy="145" r="10" fill="#888" stroke="#f39200" stroke-width="3"/>
            </svg>
        `,
        'Zorro3D': (color) => `
            <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="160" cy="170" rx="90" ry="12" fill="#222" opacity="0.18"/>
                <!-- Plataforma zorro -->
                <rect x="100" y="120" width="120" height="14" rx="6" fill="${color}" stroke="#f39200" stroke-width="4"/>
                <!-- Ejes -->
                <circle cx="120" cy="140" r="9" fill="#888" stroke="#f39200" stroke-width="3"/>
                <circle cx="200" cy="140" r="9" fill="#888" stroke="#f39200" stroke-width="3"/>
            </svg>
        `
};

let simuladorState = {
        tipo: 'Niñera',
        color: '#003da5',
        uso: 'Carga'
};

function updateSimulador3D() {
        if (!simulador3d) return;
        if (svgEl) simulador3d.removeChild(svgEl);
        const svgString = carroceriaSVGs[simuladorState.tipo] ? carroceriaSVGs[simuladorState.tipo](simuladorState.color) : carroceriaSVGs['Especial'](simuladorState.color);
        const temp = document.createElement('div');
        temp.innerHTML = svgString;
        svgEl = temp.firstElementChild;
        svgEl.style.transition = 'transform 0.7s cubic-bezier(.4,2,.6,1)';
        svgEl.style.transform = 'scale(1.04) rotate(' + (Math.sin(Date.now()/900)/30) + 'rad)';
        simulador3d.appendChild(svgEl);
        // Animación
        requestAnimationFrame(updateSimulador3D);
}

const tipoCarroceria = document.getElementById('tipoCarroceria');
const colorCarroceria = document.getElementById('colorCarroceria');
const usoCarroceria = document.getElementById('usoCarroceria');
const simularBtn = document.getElementById('simularBtn');
const cotizarSimuladorBtn = document.getElementById('cotizarSimuladorBtn');
const simuladorResultado = document.getElementById('simuladorResultado');

if (tipoCarroceria && colorCarroceria && usoCarroceria) {
    tipoCarroceria.addEventListener('change', e => {
        simuladorState.tipo = e.target.value;
        updateSimulador3D();
    });
    colorCarroceria.addEventListener('input', e => {
        simuladorState.color = e.target.value;
        updateSimulador3D();
    });
    usoCarroceria.addEventListener('change', e => {
        simuladorState.uso = e.target.value;
        updateSimulador3D();
    });
}

if (simularBtn) {
    simularBtn.addEventListener('click', () => {
        simuladorResultado.innerHTML = `¡Así luciría tu <b>${simuladorState.tipo}</b> para <b>${simuladorState.uso}</b>!<br><span style='color:${simuladorState.color};font-weight:700;'>Color personalizado</span>`;
    });
}

if (cotizarSimuladorBtn) {
    cotizarSimuladorBtn.addEventListener('click', () => {
        // Rellenar textarea de contacto con la info del simulador
        const contactoMensaje = document.getElementById('contactoMensaje');
        if (contactoMensaje) {
            contactoMensaje.value = `Simulación de proyecto:\nTipo: ${simuladorState.tipo}\nColor: ${simuladorState.color}\nUso: ${simuladorState.uso}\n`;
            contactoMensaje.focus();
        }
        // Scroll a contacto
        const contactoSection = document.getElementById('contacto');
        if (contactoSection) {
            contactoSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Inicializar simulador
if (simulador3d) updateSimulador3D();
// ===========================
// MODAL GALERÍA
// ===========================
const galeriaItems = document.querySelectorAll('.galeria-item');
const galeriaModal = document.getElementById('galeriaModal');
const galeriaModalClose = document.getElementById('galeriaModalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');


let currentProduct = { title: '', desc: '' };
galeriaItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.getAttribute('data-img');
        const title = item.getAttribute('data-title');
        const desc = item.getAttribute('data-desc');
        modalImg.src = img;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        currentProduct = { title, desc };
        // Actualizar texto del botón
        const cotizarBtn = document.querySelector('.btn-cotizar-modal');
        cotizarBtn.innerHTML = `<i class="fas fa-paper-plane"></i> Quiero saber más sobre: <b>${title}</b><br><span style='font-size:14px; color:#fff;'>${desc}</span>`;
        galeriaModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});


galeriaModalClose.addEventListener('click', () => {
    galeriaModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Cerrar modal y pasar info al contacto al hacer clic en el botón de cotización
const cotizarBtn = document.querySelector('.btn-cotizar-modal');
if (cotizarBtn) {
    cotizarBtn.addEventListener('click', (e) => {
        galeriaModal.classList.remove('active');
        document.body.style.overflow = '';
        // Rellenar textarea de contacto con la info del producto
        setTimeout(() => {
            const contactoMensaje = document.getElementById('contactoMensaje');
            if (contactoMensaje && currentProduct.title) {
                contactoMensaje.value = `Estoy interesado en el producto: ${currentProduct.title}\n${currentProduct.desc}\n`;
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
// ANIMACIÓN DE NÚMEROS
// ===========================

function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number[data-target]');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                stat.innerText = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.innerText = target;
            }
        };
        
        updateNumber();
    });
}

// Iniciar animación cuando hero está en vista
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateNumbers();
            observer.unobserve(heroStats);
        }
    }, observerOptions);
    
    observer.observe(heroStats);
}

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

// ===========================
// FORMULARIO DE CONTACTO
// ===========================

const contactoForm = document.getElementById('contactoForm');

if (contactoForm) {
    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const data = {
            nombre: contactoForm.querySelector('input[placeholder="Tu Nombre"]').value,
            email: contactoForm.querySelector('input[placeholder="Tu Email"]').value,
            telefono: contactoForm.querySelector('input[placeholder="Tu Teléfono"]').value,
            empresa: contactoForm.querySelector('input[placeholder="Empresa"]').value,
            proyecto: contactoForm.querySelector('textarea[placeholder="Describe tu proyecto"]').value,
        };
        
        if (!data.nombre || !data.email || !data.telefono || !data.proyecto) {
            alert('Por favor completa todos los campos requeridos');
            return;
        }
        
        console.log('Datos del formulario:', data);
        alert('¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.');
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

