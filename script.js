document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContainer = document.getElementById('mainContainer');

    setTimeout(function () {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
        if (mainContainer) {
            mainContainer.classList.add('visible');
        }
    }, 1500);

    const typingName = document.getElementById('typingName');
    const fullName = 'Cedric Nichole Quiel';
    let charIndex = 0;

    function typeWriter() {
        if (typingName && charIndex < fullName.length) {
            typingName.textContent += fullName.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(function () {
        typeWriter();
    }, 1600);

    function animateSkillBars() {
        const skillItems = document.querySelectorAll('.skill-item');

        skillItems.forEach(function (item, index) {
            const progressBar = item.querySelector('.skill-progress');
            if (!progressBar) return;

            const progress = progressBar.getAttribute('data-progress') || '0';

            setTimeout(function () {
                item.classList.add('animated');
                progressBar.style.setProperty('--progress-width', progress + '%');
            }, index * 100);
        });
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills-list')) {
                    animateSkillBars();
                }

                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(function (section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    const skillsList = document.querySelector('.skills-list');
    if (skillsList) {
        observer.observe(skillsList);
    }

    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
        if (scrollToTopBtn) {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }

        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header && scrolled < 500) {
            header.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
            header.style.opacity = 1 - (scrolled / 500);
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    document.querySelectorAll('.project-card').forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.style.borderLeftColor = '#0f3fae';
        });

        card.addEventListener('mouseleave', function () {
            this.style.borderLeftColor = '#2f6fed';
        });
    });

    document.querySelectorAll('.education-item').forEach(function (item) {
        item.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(function () {
                ripple.remove();
            }, 600);
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        .education-item {
            position: relative;
            overflow: hidden;
            cursor: pointer;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(47, 111, 237, 0.25);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    function createParticles() {
        const header = document.querySelector('.header');
        if (!header) return;

        const existingParticles = header.querySelectorAll('.particle');
        if (existingParticles.length > 0) return;

        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.width = (Math.random() * 4 + 2) + 'px';
            particle.style.height = (Math.random() * 4 + 2) + 'px';
            particle.style.background = 'rgba(255, 255, 255, 0.5)';
            particle.style.borderRadius = '50%';
            particle.style.left = (Math.random() * 100) + '%';
            particle.style.top = (Math.random() * 100) + '%';
            particle.style.animation = 'float ' + (Math.random() * 3 + 2) + 's ease-in-out infinite';
            particle.style.animationDelay = (Math.random() * 2) + 's';
            header.appendChild(particle);
        }
    }

    setTimeout(createParticles, 2000);

    document.querySelectorAll('.contact-item').forEach(function (item) {
        item.addEventListener('click', function () {
            this.style.transform = 'scale(0.98)';
            setTimeout(function () {
                item.style.transform = 'translateX(5px)';
            }, 100);
        });
    });

    console.log('%cHello Developer!', 'font-size: 20px; color: #2f6fed; font-weight: bold;');
    console.log('%cThis resume website is built with HTML, CSS, and JavaScript', 'font-size: 14px; color: #0f3fae;');
    console.log('%cFeel free to check out my GitHub: https://github.com/CedricQuiel', 'font-size: 12px; color: #666;');

    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];

    document.addEventListener('keydown', function (e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join('') === konamiSequence.join('')) {
            document.body.style.animation = 'rainbow 2s linear infinite';

            const rainbowStyle = document.createElement('style');
            rainbowStyle.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(rainbowStyle);

            setTimeout(function () {
                document.body.style.animation = '';
            }, 5000);
        }
    });

    window.addEventListener('load', function () {
        if (performance && performance.timing) {
            const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
            console.log('%cPage loaded in ' + loadTime + 'ms', 'color: #2f6fed; font-weight: bold;');
        }
    });
});