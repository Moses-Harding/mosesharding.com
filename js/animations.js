/**
 * GSAP Animations & Lenis Smooth Scroll
 * Core animation system for the portfolio
 */

// Wait for libraries to load
function initAnimations() {
    if (typeof gsap === 'undefined' || typeof Lenis === 'undefined') {
        setTimeout(initAnimations, 100);
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    initLenis();

    // Initialize all animations
    initPreloader();
    initHeroAnimations();
    initScrollAnimations();
    initHorizontalScroll();
    initTextReveals();
    initParallax();
}

// ========================================
// Lenis Smooth Scroll
// ========================================

let lenis;

function initLenis() {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker for Lenis
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

// ========================================
// Preloader Animation
// ========================================

function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    const logo = preloader.querySelector('.preloader-logo');
    const logoPath = preloader.querySelector('.preloader-logo-path');

    // Timeline for preloader
    const tl = gsap.timeline({
        onComplete: () => {
            preloader.classList.add('preloader--hidden');
            document.body.classList.remove('loading');

            // Trigger hero animations after preloader
            animateHeroContent();
        }
    });

    // Animate logo drawing
    if (logoPath) {
        const pathLength = logoPath.getTotalLength();
        gsap.set(logoPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });

        tl.to(logoPath, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power2.inOut'
        });
    }

    // Scale and fade logo
    tl.to(logo, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
    }, '+=0.3');

    // Slide preloader away
    tl.to(preloader, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power3.inOut'
    }, '-=0.2');
}

// ========================================
// Hero Section Animations
// ========================================

function initHeroAnimations() {
    // Hero animations are now CSS-only, no cursor tracking
}

function animateHeroContent() {
    // Hero animations are handled by CSS, this function is called after preloader
    // for any additional JS-based animations if needed
}

// ========================================
// Scroll-Based Animations
// ========================================

function initScrollAnimations() {
    // Section headers animate in
    gsap.utils.toArray('.section-label, .section-title, .section-subtitle').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // About section content
    gsap.from('.about-text p', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Contact links - no stagger animation, just visible

    // Scroll progress indicator
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (progressBar) {
        gsap.to(progressBar, {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3
            }
        });
    }
}

// ========================================
// Horizontal Scroll Section
// ========================================

function initHorizontalScroll() {
    const container = document.querySelector('.apps-horizontal');
    if (!container) return;

    const wrapper = container.querySelector('.apps-horizontal-wrapper');
    const cards = container.querySelectorAll('.app-card-horizontal');

    if (!wrapper || cards.length === 0) return;

    // Calculate total scroll width
    const totalWidth = wrapper.scrollWidth - window.innerWidth;

    // Create horizontal scroll animation
    gsap.to(wrapper, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                // Update progress indicator
                const progress = document.querySelector('.horizontal-progress-fill');
                if (progress) {
                    progress.style.width = `${self.progress * 100}%`;
                }
            }
        }
    });

    // Cards scale up as they enter center
    cards.forEach((card, i) => {
        gsap.fromTo(card,
            { scale: 0.9, opacity: 0.7 },
            {
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: card,
                    containerAnimation: gsap.getById('horizontalScroll'),
                    start: 'left center',
                    end: 'center center',
                    scrub: true
                }
            }
        );
    });
}

// ========================================
// Text Split & Reveal Animations
// ========================================

function initTextReveals() {
    // Split text into words for animation
    const splitTargets = document.querySelectorAll('[data-split-text]');

    splitTargets.forEach(target => {
        const text = target.textContent;
        const words = text.split(' ');

        target.innerHTML = words.map(word =>
            `<span class="word"><span class="word-inner">${word}</span></span>`
        ).join(' ');

        const wordInners = target.querySelectorAll('.word-inner');

        gsap.from(wordInners, {
            scrollTrigger: {
                trigger: target,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: '100%',
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: 'power3.out'
        });
    });
}

// ========================================
// Parallax Effects
// ========================================

function initParallax() {
    // Background parallax
    gsap.utils.toArray('[data-parallax]').forEach(el => {
        const speed = el.dataset.parallax || 0.5;

        gsap.to(el, {
            y: () => -100 * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: el.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Hero shapes parallax on scroll
    const heroShapes = document.querySelectorAll('.hero-shape');
    heroShapes.forEach((shape, i) => {
        gsap.to(shape, {
            y: -150 * (i + 1) * 0.3,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

// ========================================
// 3D Card Tilt Effect - DISABLED
// ========================================

function init3DCards() {
    // 3D rotation removed per user request
}

// ========================================
// Video Preview on Hover
// ========================================

function initVideoPreview() {
    const cards = document.querySelectorAll('.app-card[data-video], .app-card-horizontal[data-video]');

    cards.forEach(card => {
        const video = card.querySelector('.app-video');
        if (!video) return;

        card.addEventListener('mouseenter', () => {
            video.play().catch(() => { });
            video.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
            video.style.opacity = '0';
        });
    });
}

// ========================================
// Magnetic Buttons - Only for nav links
// ========================================

function initMagneticElements() {
    const magnetics = document.querySelectorAll('.nav-links a');

    magnetics.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(el, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

// ========================================
// Initialize Everything
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();

    // Initialize interactive effects after a short delay
    setTimeout(() => {
        init3DCards();
        initVideoPreview();
        initMagneticElements();
    }, 100);
});

// Re-initialize after dynamic content loads
window.refreshAnimations = function () {
    ScrollTrigger.refresh();
    init3DCards();
    initVideoPreview();
};
