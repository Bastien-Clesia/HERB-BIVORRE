// ===============================
// MENU MOBILE
// ===============================

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {

    burger.addEventListener('click', () => {

        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');

    });

}

// ===============================
// FERMETURE MENU AU CLIC
// ===============================

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('active');
        burger.classList.remove('toggle');

    });

});

// ===============================
// FAQ ACCORDÉON
// ===============================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {

    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll('.faq-answer').forEach(item => {

            if (item !== answer) {

                item.style.maxHeight = null;
                item.parentElement.classList.remove('open');

            }

        });

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;
            question.parentElement.classList.remove('open');

        } else {

            answer.style.maxHeight =
                answer.scrollHeight + 'px';

            question.parentElement.classList.add('open');

        }

    });

});

// ===============================
// ANIMATION APPARITION AU SCROLL
// ===============================

const revealElements = document.querySelectorAll(
    '.service-card, .review-card, .gallery-grid img, .about-text, .stat'
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top =
            element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add('show');

        }

    });

};

window.addEventListener(
    'scroll',
    revealOnScroll
);

revealOnScroll();

// ===============================
// COMPTEURS ANIMÉS
// ===============================

const stats = document.querySelectorAll('.stat span');

let countersStarted = false;

function startCounters() {

    if (countersStarted) return;

    const statsSection =
        document.querySelector('.stats');

    if (!statsSection) return;

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 150) {

        countersStarted = true;

        stats.forEach(counter => {

            const value = counter.innerText;

            if (value === "100%") {

                let current = 0;

                const interval = setInterval(() => {

                    current++;

                    counter.innerText =
                        current + "%";

                    if (current >= 100) {

                        clearInterval(interval);

                    }

                }, 20);

            }

        });

    }

}

window.addEventListener(
    'scroll',
    startCounters
);

startCounters();

// ===============================
// LIGHTBOX GALERIE
// ===============================

const galleryImages =
    document.querySelectorAll('.gallery-grid img');

const lightbox =
    document.createElement('div');

lightbox.id = 'lightbox';

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener('click', () => {

        lightbox.classList.add('active');

        const img =
            document.createElement('img');

        img.src = image.src;

        while (lightbox.firstChild) {

            lightbox.removeChild(
                lightbox.firstChild
            );

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener('click', () => {

    lightbox.classList.remove('active');

});

// ===============================
// BOUTON RETOUR EN HAUT
// ===============================

const backToTop =
    document.createElement('button');

backToTop.id = 'backToTop';

backToTop.innerHTML = "↑";

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {

        backToTop.classList.add('show');

    } else {

        backToTop.classList.remove('show');

    }

});

backToTop.addEventListener('click', () => {

    window.scrollTo({

        top: 0,
        behavior: 'smooth'

    });

});

// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header =
    document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 80) {

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');

    }

});

// ===============================
// FAUX ENVOI FORMULAIRE
// ===============================

const contactForm =
    document.querySelector('.contact-form');

if (contactForm) {

    contactForm.addEventListener(
        'submit',
        function (e) {

            e.preventDefault();

            alert(
                "Merci pour votre demande. Cette démonstration portfolio ne possède pas encore de backend connecté."
            );

        }
    );

}

// ===============================
// ANIMATION TITRE HERO
// ===============================

window.addEventListener('load', () => {

    const heroTitle =
        document.querySelector('.hero-content h1');

    if (heroTitle) {

        heroTitle.style.opacity = "0";
        heroTitle.style.transform =
            "translateY(30px)";

        setTimeout(() => {

            heroTitle.style.transition =
                "1s ease";

            heroTitle.style.opacity = "1";

            heroTitle.style.transform =
                "translateY(0)";

        }, 300);

    }

});

// ===============================
// PRELOADER OPTIONNEL
// ===============================

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});

// ===============================
// ANNÉE AUTOMATIQUE FOOTER
// ===============================

const yearSpan =
    document.getElementById('year');

if (yearSpan) {

    yearSpan.textContent =
        new Date().getFullYear();

}
