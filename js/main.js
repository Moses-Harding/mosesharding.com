/**
 * Moses Harding Portfolio - Main JavaScript
 * Handles theme switching, scroll animations, and interactive elements
 */

// ========================================
// Populate Contact Links from Config
// ========================================

function populateContactLinks() {
    const container = document.getElementById('contact-links');
    if (!container || typeof CONFIG === 'undefined') return;

    const links = [
        {
            href: `mailto:${CONFIG.email}`,
            label: 'Email',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
            </svg>`,
            external: false
        },
        {
            href: CONFIG.github,
            label: 'GitHub',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>`,
            external: true
        },
        {
            href: CONFIG.linkedin,
            label: 'LinkedIn',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>`,
            external: true
        }
    ];

    container.innerHTML = links.map(link => `
        <a href="${link.href}" class="contact-link"${link.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>
            ${link.icon}
            <span>${link.label}</span>
        </a>
    `).join('');
}

// ========================================
// Populate Apps from Config
// ========================================

function populateApps() {
    const container = document.getElementById('apps-grid');
    if (!container || typeof CONFIG === 'undefined') return;

    container.innerHTML = CONFIG.apps.map((app, index) => `
        <article class="app-card" data-app-id="${app.id}" data-index="${index}">
            <div class="app-card-inner">
                <!-- Left side: Info -->
                <div class="app-card-content">
                    <div class="app-card-header">
                        ${app.iconUrl
                            ? `<div class="app-icon"><img src="${app.iconUrl}" alt="${app.name} icon"></div>`
                            : `<div class="app-icon placeholder-icon"><span>${app.iconPlaceholder}</span></div>`
                        }
                        <div class="app-info">
                            <h3 class="app-name">${app.name}</h3>
                            <p class="app-subtitle">${app.tagline}</p>
                        </div>
                    </div>

                    <p class="app-description">${app.description}</p>

                    <ul class="app-features">
                        ${app.features.slice(0, 4).map(feature => `<li>${feature}</li>`).join('')}
                    </ul>

                    <div class="app-cta">
                        ${app.appStoreUrl
                            ? `<a href="${app.appStoreUrl}" class="app-store-link" target="_blank" rel="noopener noreferrer">
                                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store">
                               </a>`
                            : `<span class="coming-soon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                                Coming Soon
                               </span>`
                        }
                    </div>
                </div>

                <!-- Right side: Device mockups with screenshots -->
                <div class="app-card-visuals">
                    <div class="device-mockups">
                        ${app.screenshots && app.screenshots.length > 0
                            ? app.screenshots.slice(0, 3).map((screenshot, i) => `
                                <div class="device-mockup device-mockup-${i + 1}">
                                    <div class="device-frame">
                                        <div class="device-notch"></div>
                                        <div class="device-screen">
                                            <img class="app-screenshot" src="${screenshot}" alt="${app.name} screenshot ${i + 1}">
                                        </div>
                                    </div>
                                </div>
                            `).join('')
                            : `<div class="device-mockup device-mockup-1">
                                <div class="device-frame">
                                    <div class="device-notch"></div>
                                    <div class="device-screen">
                                        ${app.iconUrl
                                            ? `<div class="app-screenshot-placeholder" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);">
                                                 <img src="${app.iconUrl}" alt="${app.name}" class="placeholder-app-icon">
                                               </div>`
                                            : `<div class="app-screenshot-placeholder">
                                                 <span>${app.iconPlaceholder}</span>
                                               </div>`
                                        }
                                    </div>
                                </div>
                            </div>`
                        }
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    // Re-initialize animations after populating
    if (window.refreshAnimations) {
        setTimeout(window.refreshAnimations, 100);
    }
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    populateContactLinks();
    populateApps();
    initializeAppCardEffects();
    initializeRevealAnimations();
});

// ========================================
// Theme Toggle (Light/Dark Mode)
// ========================================

const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function getThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return prefersDarkScheme.matches ? 'dark' : 'light';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#09090b' : '#0055ff');
    }
}

// Initialize theme immediately to prevent flash
setTheme(getThemePreference());

// Toggle theme on button click with animation
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Add rotation animation to the button
    themeToggle.style.transform = 'scale(0.9) rotate(180deg)';
    setTimeout(() => {
        setTheme(newTheme);
        themeToggle.style.transform = '';
    }, 150);
});

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// ========================================
// Header Scroll Effect
// ========================================

const header = document.getElementById('header');
let lastScrollY = 0;
let ticking = false;

function updateHeader() {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
}, { passive: true });

// ========================================
// Scroll Reveal Animations
// ========================================

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation to improve performance
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
});

function initializeRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    revealElements.forEach(el => revealObserver.observe(el));

    // Handle reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealElements.forEach(el => el.classList.add('visible'));
    }
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const target = document.querySelector(targetId);
        if (target) {
            const headerHeight = header.offsetHeight;
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Navigation Link
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateActiveNav();
        });
    }
}, { passive: true });

// ========================================
// Screenshot Parallax Effect on App Cards
// ========================================

function initializeAppCardEffects() {
    const appCards = document.querySelectorAll('.app-card');

    appCards.forEach(card => {
        const screenshots = card.querySelectorAll('.screenshot');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            screenshots.forEach((screenshot, index) => {
                const depth = (index - 1) * 5;
                const moveX = x * depth;
                const moveY = y * depth;

                if (index === 0) {
                    screenshot.style.transform = `rotate(-5deg) translateY(10px) translate(${moveX}px, ${moveY}px)`;
                } else if (index === 1) {
                    screenshot.style.transform = `scale(1.05) translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
                } else {
                    screenshot.style.transform = `rotate(5deg) translateY(10px) translate(${moveX}px, ${moveY}px)`;
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            screenshots.forEach((screenshot, index) => {
                if (index === 0) {
                    screenshot.style.transform = 'rotate(-5deg) translateY(10px)';
                } else if (index === 1) {
                    screenshot.style.transform = 'scale(1.05)';
                } else {
                    screenshot.style.transform = 'rotate(5deg) translateY(10px)';
                }
            });
        });
    });
}

// ========================================
// Contact Link Hover Effect (delegated for dynamic elements)
// ========================================

document.addEventListener('mouseenter', function(e) {
    if (e.target.closest('.contact-link')) {
        const link = e.target.closest('.contact-link');
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        link.style.setProperty('--mouse-x', `${x}px`);
        link.style.setProperty('--mouse-y', `${y}px`);
    }
}, true);

// ========================================
// Keyboard Navigation
// ========================================

document.addEventListener('keydown', (e) => {
    // Theme toggle with 'T' key
    if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            themeToggle.click();
        }
    }
});

// ========================================
// Console Easter Egg
// ========================================

console.log(
    '%c👋 Hey there, fellow developer!',
    'font-size: 16px; font-weight: bold; color: #0055ff;'
);
console.log(
    '%cThanks for checking out my portfolio. Built with vanilla HTML, CSS, and JS.',
    'font-size: 12px; color: #666;'
);
console.log(
    '%cInterested in working together? Reach out!',
    'font-size: 12px; color: #666;'
);
