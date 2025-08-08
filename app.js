// Funcionalidad del menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    // Sincronizar estado ARIA inicial
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    if (navMenu) navMenu.setAttribute('aria-hidden', 'true');

    // Toggle del menú móvil
    if (hamburger && navMenu) hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        const expanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        navMenu.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            hamburger.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-hidden', 'true');
        });
    });

    // Animación del hamburger
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const bars = this.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (this.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    if (index === 0) bar.style.transform = 'none';
                    if (index === 1) bar.style.opacity = '1';
                    if (index === 2) bar.style.transform = 'none';
                }
            });
        });
    }
});

// Efecto de scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({
                top: offsetPosition,
                behavior: prefersReduced ? 'auto' : 'smooth'
            });
            // Mover el foco al destino para accesibilidad
            if (!target.hasAttribute('tabindex')) {
                target.setAttribute('tabindex', '-1');
            }
            setTimeout(() => {
                try { target.focus({ preventScroll: true }); } catch (_) {}
            }, 350);
        }
    });
});

// Cambiar apariencia del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 15, 35, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(15, 15, 35, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animación de aparición de elementos al hacer scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.project-card, .section-header, .hero-content, .about-content');

    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        observer.observe(element);
    });
});

// Actualizar aria-current en navegación según sección visible
document.addEventListener('DOMContentLoaded', function() {
    const sections = ['home','projects','about','contact']
        .map(id => document.getElementById(id))
        .filter(Boolean);
    const linkMap = new Map();
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) linkMap.set(href.slice(1), link);
    });

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = linkMap.get(id);
            if (!link) return;
            if (entry.isIntersecting) {
                // Limpiar estados previos
                document.querySelectorAll('.nav-link[aria-current]')
                    .forEach(a => a.removeAttribute('aria-current'));
                link.setAttribute('aria-current', 'page');
            }
        });
    }, { root: null, threshold: 0.6 });

    sections.forEach(sec => navObserver.observe(sec));
});

// Efectos de hover mejorados para las tarjetas de proyecto
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.01)';
    this.style.transition = 'transform 0.25s ease, box-shadow 0.25s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Efecto de typing para el título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Contador animado para las estadísticas (con sufijo opcional, ej: '%')
function animateCounter(element, target, duration = 2000, suffix = '') {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    }

    updateCounter();
}

// Inicializar contadores cuando sean visibles
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.stat-number');
            numbers.forEach(number => {
                const text = number.textContent.trim();
                if (text.includes('%')) {
                    const percentTarget = parseInt(text, 10) || 0;
                    animateCounter(number, percentTarget, 2000, '%');
                } else {
                    const target = parseInt(text, 10) || 0;
                    animateCounter(number, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        statsObserver.observe(aboutSection);
    }
});

// Respeto a preferencias de movimiento
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Efecto de partículas en el fondo (opcional)
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: 3px;
        height: 3px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.3;
        z-index: -1;
        animation: particleMove 6s linear infinite;
    `;

    // Posición aleatoria
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';

    document.body.appendChild(particle);

    // Remover partícula después de la animación
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// CSS para animación de partículas
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleMove {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Crear partículas periódicamente si no se prefiere reducir movimiento
let particlesInterval = null;
if (!prefersReducedMotion) {
    particlesInterval = setInterval(createParticle, 800);
}

// Efecto de cursor personalizado
document.addEventListener('mousemove', function(e) {
    if (prefersReducedMotion) return;
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'custom-cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(newCursor);
    }

    const actualCursor = document.querySelector('.custom-cursor');
    if (actualCursor) {
        actualCursor.style.left = e.clientX + 'px';
        actualCursor.style.top = e.clientY + 'px';
    }
});

// Efecto de parallax suave
// Parallax desactivado por falta de selector DOM válido (::before no es seleccionable)

// Preloader simple
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }
});

// Función para cambiar tema (modo oscuro/claro) - opcional
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('light-theme');

    if (isDark) {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Cargar tema guardado
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
});

// Efecto de click en botones
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
    if (prefersReducedMotion) return; // evitar efecto ripple si reduce motion
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// CSS para efecto ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Función para detectar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Añadir animaciones de entrada escalonadas para las tarjetas de proyecto
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                }, index * 100); // Retraso escalonado
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        cardObserver.observe(card);
    });
});

console.log('🚀 Portafolio Alura ONE G9 cargado correctamente');
console.log('✨ Desarrollado por MiyoBran');
console.log('📚 Programa Oracle Next Education + Alura LATAM');
