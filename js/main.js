const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");
const languageButtons = document.querySelectorAll(".language-option");

const galeriaModal = document.getElementById("galeriaModal");
const galeriaModalClose = document.getElementById("galeriaModalClose");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const galleryQuoteButton = document.getElementById("galleryQuoteButton");

const testimoniosTrack = document.getElementById("testimoniosTrack");
const testimonioPrevBtn = document.getElementById("testimonioPrevBtn");
const testimonioNextBtn = document.getElementById("testimonioNextBtn");

const contactoForm = document.getElementById("contactoForm");
const contactoNombre = document.getElementById("contactoNombre");
const contactoEmail = document.getElementById("contactoEmail");
const contactoTelefono = document.getElementById("contactoTelefono");
const contactoEmpresa = document.getElementById("contactoEmpresa");
const contactoMensaje = document.getElementById("contactoMensaje");

const translations = {
    es: {
        metaTitle: "TRACTOCAR - Carrocerias Pesadas Premium | Metalmecanica Industrial",
        metaDescription: "TRACTOCAR - Expertos en carrocerias pesadas de metalmecanica. Nineras, planchas, patinetas y estructuras personalizadas para tu industria.",
        "nav.home": "Inicio",
        "nav.services": "Servicios",
        "nav.gallery": "Galeria",
        "nav.about": "Nosotros",
        "nav.clients": "Clientes",
        "nav.location": "Ubicacion",
        "nav.contact": "Contacto",
        "hero.kicker": "Lideres en metalmecanica pesada",
        "hero.title": "Fabricamos carrocerias industriales que venden confianza en carretera.",
        "hero.text": "Nineras, planchas, patinetas, montaje integral y personalizacion total. Disenamos soluciones resistentes, funcionales y listas para el trabajo duro.",
        "hero.ctaMain": "Solicitar cotizacion",
        "hero.ctaAlt": "Ver trabajos",
        "hero.metricYears": "Anos de experiencia",
        "hero.metricSpeed": "Entrega agil",
        "hero.metricCustom": "Personalizacion",
        "hero.visualLabel": "Estructuras de alto desempeno para carga pesada",
        "advantages.eyebrow": "Por que elegirnos",
        "advantages.title": "Calidad real, tiempos claros y equipo experto.",
        "advantages.qualityTitle": "Calidad Garantizada",
        "advantages.qualityText": "Cada proyecto cumple con estandares internacionales de manufactura y calidad.",
        "advantages.fastTitle": "Entrega Rapida",
        "advantages.fastText": "Procesos optimizados que garantizan entregas en tiempo record sin comprometer calidad.",
        "advantages.teamTitle": "Equipo Especializado",
        "advantages.teamText": "Profesionales con experiencia en los mas complejos proyectos metalmecanicos.",
        "advantages.teamBadge": "Expertos",
        "advantages.customTitle": "Personalizacion Total",
        "advantages.customText": "Adaptamos nuestros servicios a tus especificaciones y necesidades unicas.",
        "services.eyebrow": "Soluciones",
        "services.title": "Nuestros Servicios",
        "services.maintenanceTitle": "Mantenimiento",
        "services.maintenanceText": "Fabricacion de nineras de alta capacidad para transporte de carga pesada con acabados de precision.",
        "services.flatbedsTitle": "Planchas",
        "services.flatbedsText": "Planchas metalicas estructurales de diferentes dimensiones y especificaciones segun tus necesidades.",
        "services.skatesTitle": "Patinetas",
        "services.skatesText": "Patinetas para transporte especializado con sistemas de carga y descarga eficientes.",
        "services.customTitle": "Personalizacion",
        "services.customText": "Disenos personalizados segun tus especificaciones y requerimientos tecnicos particulares.",
        "services.assemblyTitle": "Montaje Integral",
        "services.assemblyText": "Montaje completo de sistemas integrales para proyectos de ingenieria metalmecanica.",
        "services.chassisTitle": "Alargue de chasis",
        "services.chassisText": "Montaje completo de sistemas integrales para proyectos de ingenieria metalmecanica.",
        "gallery.eyebrow": "Resultados",
        "gallery.title": "Trabajos Realizados",
        "gallery.quote": "Solicitar Cotizacion",
        "about.eyebrow": "Sobre Nosotros",
        "about.title": "Pasion, innovacion y experiencia.",
        "about.text": "TRACTOCAR TRUCK S.A.S es una empresa lider en la fabricacion de carrocerias pesadas y soluciones metalmecanicas industriales. Con mas de 20 anos de experiencia, nuestro equipo combina tecnologia de punta, talento humano y pasion por la excelencia para entregar proyectos unicos y personalizados.",
        "about.bullet1": "<i class=\"fas fa-check-circle\"></i> Compromiso con la calidad y la seguridad",
        "about.bullet2": "<i class=\"fas fa-check-circle\"></i> Innovacion constante en procesos y diseno",
        "about.bullet3": "<i class=\"fas fa-check-circle\"></i> Atencion personalizada y asesoria tecnica",
        "about.bullet4": "<i class=\"fas fa-check-circle\"></i> Equipo multidisciplinario de expertos",
        "clients.eyebrow": "Confianza industrial",
        "clients.title": "Nuestros Clientes",
        "clients.text": "Trabajamos con las principales empresas del sector industrial.",
        "testimonials.eyebrow": "Resenas reales",
        "testimonials.title": "Lo que dicen nuestros clientes",
        "testimonials.t1": "\"TRACTOCAR supero todas nuestras expectativas. La calidad de sus carrocerias es inmejorable y sus tiempos de entrega son impecables.\"",
        "testimonials.t2": "\"Trabajar con TRACTOCAR ha sido la mejor decision. Su profesionalismo y dedicacion a cada proyecto es extraordinario.\"",
        "testimonials.t3": "\"Excelente servicio, productos de alta calidad y un equipo que realmente se preocupa por hacer bien las cosas. Altamente recomendado.\"",
        "location.eyebrow": "Visitanos",
        "location.title": "Ubicacion",
        "location.addressTitle": "Direccion",
        "location.phoneTitle": "Telefono",
        "location.hoursTitle": "Horario",
        "location.hoursText": "Lunes - Viernes: 8:00 - 18:00<br>Sabado: 8:00 - 13:00<br>Domingo: Cerrado",
        "contact.eyebrow": "Conversemos",
        "contact.title": "Ponte en Contacto",
        "contact.text": "Tienes un proyecto en mente? Cuentanos y te proporcionaremos una cotizacion personalizada.",
        "contact.name": "Nombre",
        "contact.email": "Email",
        "contact.phone": "Telefono",
        "contact.company": "Empresa",
        "contact.project": "Proyecto",
        "contact.send": "Enviar Mensaje",
        "footer.text": "Especialistas en carrocerias pesadas de metalmecanica desde hace mas de 20 anos.",
        "footer.linksTitle": "Enlaces Rapidos",
        "footer.home": "Inicio",
        "footer.services": "Servicios",
        "footer.gallery": "Galeria",
        "footer.contact": "Contacto",
        "footer.follow": "Siguenos",
        "footer.bottom": "© 2024 TRACTOCAR. Todos los derechos reservados. | Politica de Privacidad | Terminos de Servicio",
        menuAria: "Abrir menu",
        switchAria: "Selector de idioma",
        formRequired: "Por favor completa todos los campos requeridos.",
        formSuccess: "Gracias. Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.",
        galleryInterestPrefix: "Estoy interesado en el producto:"
    },
    en: {
        metaTitle: "TRACTOCAR - Premium Heavy Bodyworks | Industrial Metalworking",
        metaDescription: "TRACTOCAR - Experts in heavy-duty metalworking bodyworks. Car carriers, flatbeds, skate trailers, and custom industrial structures.",
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.gallery": "Gallery",
        "nav.about": "About",
        "nav.clients": "Clients",
        "nav.location": "Location",
        "nav.contact": "Contact",
        "hero.kicker": "Leaders in heavy metalwork",
        "hero.title": "We build industrial bodyworks that earn trust on the road.",
        "hero.text": "Car carriers, flatbeds, skate trailers, full assembly, and total customization. We design durable and practical solutions ready for hard work.",
        "hero.ctaMain": "Request quote",
        "hero.ctaAlt": "See projects",
        "hero.metricYears": "Years of experience",
        "hero.metricSpeed": "Agile delivery",
        "hero.metricCustom": "Customization",
        "hero.visualLabel": "High-performance structures for heavy load",
        "advantages.eyebrow": "Why choose us",
        "advantages.title": "Real quality, clear timing, and expert team.",
        "advantages.qualityTitle": "Guaranteed Quality",
        "advantages.qualityText": "Every project meets international manufacturing and quality standards.",
        "advantages.fastTitle": "Fast Delivery",
        "advantages.fastText": "Optimized processes ensure fast delivery without compromising quality.",
        "advantages.teamTitle": "Specialized Team",
        "advantages.teamText": "Professionals experienced in demanding metalworking projects.",
        "advantages.teamBadge": "Experts",
        "advantages.customTitle": "Total Customization",
        "advantages.customText": "We adapt our services to your specifications and unique needs.",
        "services.eyebrow": "Solutions",
        "services.title": "Our Services",
        "services.maintenanceTitle": "Maintenance",
        "services.maintenanceText": "High-capacity car carrier fabrication for heavy cargo transport with precision finishes.",
        "services.flatbedsTitle": "Flatbeds",
        "services.flatbedsText": "Structural metal flatbeds in different dimensions and specifications according to your needs.",
        "services.skatesTitle": "Skate Trailers",
        "services.skatesText": "Specialized transport skate trailers with efficient loading and unloading systems.",
        "services.customTitle": "Customization",
        "services.customText": "Custom designs based on your specifications and technical requirements.",
        "services.assemblyTitle": "Full Assembly",
        "services.assemblyText": "Complete assembly of integrated systems for metalworking engineering projects.",
        "services.chassisTitle": "Chassis Extension",
        "services.chassisText": "Complete assembly of integrated systems for metalworking engineering projects.",
        "gallery.eyebrow": "Results",
        "gallery.title": "Completed Work",
        "gallery.quote": "Request Quote",
        "about.eyebrow": "About Us",
        "about.title": "Passion, innovation, and experience.",
        "about.text": "TRACTOCAR TRUCK S.A.S is a leading company in heavy bodywork manufacturing and industrial metalworking solutions. With more than 20 years of experience, our team combines advanced technology, skilled people, and a passion for excellence to deliver unique and customized projects.",
        "about.bullet1": "<i class=\"fas fa-check-circle\"></i> Commitment to quality and safety",
        "about.bullet2": "<i class=\"fas fa-check-circle\"></i> Constant innovation in processes and design",
        "about.bullet3": "<i class=\"fas fa-check-circle\"></i> Personalized support and technical guidance",
        "about.bullet4": "<i class=\"fas fa-check-circle\"></i> Multidisciplinary team of experts",
        "clients.eyebrow": "Industrial trust",
        "clients.title": "Our Clients",
        "clients.text": "We work with leading companies in the industrial sector.",
        "testimonials.eyebrow": "Real reviews",
        "testimonials.title": "What our clients say",
        "testimonials.t1": "\"TRACTOCAR exceeded all our expectations. Their bodywork quality is unmatched and delivery times are flawless.\"",
        "testimonials.t2": "\"Working with TRACTOCAR has been our best decision. Their professionalism and dedication are outstanding.\"",
        "testimonials.t3": "\"Excellent service, high-quality products, and a team that truly cares about doing things right. Highly recommended.\"",
        "location.eyebrow": "Visit us",
        "location.title": "Location",
        "location.addressTitle": "Address",
        "location.phoneTitle": "Phone",
        "location.hoursTitle": "Business Hours",
        "location.hoursText": "Monday - Friday: 8:00 - 18:00<br>Saturday: 8:00 - 13:00<br>Sunday: Closed",
        "contact.eyebrow": "Lets talk",
        "contact.title": "Get in Touch",
        "contact.text": "Do you have a project in mind? Tell us about it and we will provide a tailored quote.",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.company": "Company",
        "contact.project": "Project",
        "contact.send": "Send Message",
        "footer.text": "Specialists in heavy metalworking bodyworks for more than 20 years.",
        "footer.linksTitle": "Quick Links",
        "footer.home": "Home",
        "footer.services": "Services",
        "footer.gallery": "Gallery",
        "footer.contact": "Contact",
        "footer.follow": "Follow Us",
        "footer.bottom": "© 2024 TRACTOCAR. All rights reserved. | Privacy Policy | Terms of Service",
        menuAria: "Open menu",
        switchAria: "Language switcher",
        formRequired: "Please complete all required fields.",
        formSuccess: "Thank you. Your message has been sent. We will contact you soon.",
        galleryInterestPrefix: "I am interested in the product:"
    }
};

let currentLanguage = localStorage.getItem("tractocar-language") || "es";
let testimonialIndex = 0;
let testimonialTimer;
let selectedGalleryTitle = "";
let selectedGalleryDesc = "";

function setNavbarState() {
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 18);
}

function toggleMobileMenu() {
    if (!navMenu) return;
    navMenu.classList.toggle("is-open");
}

function closeMobileMenu() {
    if (!navMenu) return;
    navMenu.classList.remove("is-open");
}

function initRevealObserver() {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        }
    );

    revealItems.forEach((item) => observer.observe(item));
}

function openGalleryModal(imgSrc, title, desc) {
    if (!galeriaModal || !modalImg || !modalTitle || !modalDesc) return;

    selectedGalleryTitle = title;
    selectedGalleryDesc = desc;

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    galeriaModal.classList.add("is-open");
    galeriaModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
    if (!galeriaModal) return;

    galeriaModal.classList.remove("is-open");
    galeriaModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function initGallery() {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const imgSrc = item.getAttribute("data-img") || "";
            const title = item.getAttribute("data-title") || "";
            const desc = item.getAttribute("data-desc") || "";
            openGalleryModal(imgSrc, title, desc);
        });
    });

    if (galeriaModalClose) {
        galeriaModalClose.addEventListener("click", closeGalleryModal);
    }

    if (galeriaModal) {
        galeriaModal.addEventListener("click", (event) => {
            if (event.target === galeriaModal) {
                closeGalleryModal();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeGalleryModal();
        }
    });

    if (galleryQuoteButton) {
        galleryQuoteButton.addEventListener("click", () => {
            closeGalleryModal();

            if (contactoMensaje) {
                const t = translations[currentLanguage];
                contactoMensaje.value = `${t.galleryInterestPrefix} ${selectedGalleryTitle}\n${selectedGalleryDesc}\n`;
            }
        });
    }
}

function updateTestimonials() {
    if (!testimoniosTrack) return;
    testimoniosTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
}

function nextTestimonial() {
    if (!testimoniosTrack) return;
    const slidesCount = testimoniosTrack.children.length;
    testimonialIndex = (testimonialIndex + 1) % slidesCount;
    updateTestimonials();
}

function prevTestimonial() {
    if (!testimoniosTrack) return;
    const slidesCount = testimoniosTrack.children.length;
    testimonialIndex = (testimonialIndex - 1 + slidesCount) % slidesCount;
    updateTestimonials();
}

function restartTestimonialAutoplay() {
    clearInterval(testimonialTimer);
    testimonialTimer = setInterval(nextTestimonial, 5500);
}

function initTestimonials() {
    if (testimonioNextBtn) {
        testimonioNextBtn.addEventListener("click", () => {
            nextTestimonial();
            restartTestimonialAutoplay();
        });
    }

    if (testimonioPrevBtn) {
        testimonioPrevBtn.addEventListener("click", () => {
            prevTestimonial();
            restartTestimonialAutoplay();
        });
    }

    restartTestimonialAutoplay();
}

function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    currentLanguage = lang;
    localStorage.setItem("tractocar-language", lang);

    document.documentElement.lang = lang;
    document.title = dict.metaTitle;

    const metaDescription = document.getElementById("metaDescription");
    if (metaDescription) {
        metaDescription.content = dict.metaDescription;
    }

    if (menuToggle) {
        menuToggle.setAttribute("aria-label", dict.menuAria);
    }

    const languageSwitch = document.getElementById("languageSwitch");
    if (languageSwitch) {
        languageSwitch.setAttribute("aria-label", dict.switchAria);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = dict[key];
        if (!value) return;

        if (value.includes("<i")) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });

    languageButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });

    if (galleryQuoteButton) {
        galleryQuoteButton.textContent = dict["gallery.quote"];
    }
}

function initLanguageSwitch() {
    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.lang || "es");
        });
    });

    applyLanguage(currentLanguage);
}

function initForm() {
    if (!contactoForm) return;

    contactoForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = {
            nombre: contactoNombre ? contactoNombre.value.trim() : "",
            email: contactoEmail ? contactoEmail.value.trim() : "",
            telefono: contactoTelefono ? contactoTelefono.value.trim() : "",
            empresa: contactoEmpresa ? contactoEmpresa.value.trim() : "",
            mensaje: contactoMensaje ? contactoMensaje.value.trim() : ""
        };

        if (!data.nombre || !data.email || !data.telefono || !data.mensaje) {
            alert(translations[currentLanguage].formRequired);
            return;
        }

        console.log("Datos del formulario:", data);
        alert(translations[currentLanguage].formSuccess);
        contactoForm.reset();
    });
}

setNavbarState();
window.addEventListener("scroll", setNavbarState);

if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
}

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

initRevealObserver();
initGallery();
initTestimonials();
initLanguageSwitch();
initForm();
