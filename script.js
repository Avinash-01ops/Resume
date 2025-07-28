// 1. Hello World Typing Animation
const helloText = document.getElementById('hello-text');
const helloString = 'Hello, World';
let helloIndex = 0;
function typeHello() {
    if (helloText && helloIndex <= helloString.length) {
        helloText.textContent = helloString.slice(0, helloIndex);
        helloIndex++;
        setTimeout(typeHello, 120);
    }
}
typeHello();

// 2. Skills Tabs Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const skillCards = document.querySelectorAll('.skills-card');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        skillCards.forEach(card => {
            card.classList.remove('active');
            if (card.id === btn.dataset.tab) card.classList.add('active');
        });
    });
});

// 3. Expandable Project Cards
const expandBtns = document.querySelectorAll('.expand-btn');
expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.project-card');
        card.classList.toggle('expanded');
    });
});

// 4. Contact Form Modal
const contactForm = document.querySelector('.contact-form');
const thankyouModal = document.getElementById('thankyou-modal');
const closeModalBtn = document.querySelector('.close-modal');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        thankyouModal.classList.add('active');
        contactForm.reset();
    });
}
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function () {
        thankyouModal.classList.remove('active');
    });
}
window.addEventListener('click', function (e) {
    if (e.target === thankyouModal) {
        thankyouModal.classList.remove('active');
    }
});

// 5. Smooth Fade-in Animations on Scroll
const fadeEls = document.querySelectorAll('.summary-section, .skills-section, .domains-section, .experience-section, .projects-section, .contact-section');
const fadeInOnScroll = () => {
    fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
            el.style.transition = 'opacity 0.6s, transform 0.6s';
        } else {
            el.style.opacity = 0;
            el.style.transform = 'translateY(40px)';
        }
    });
};
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Fade-in animations for sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Certificate Modal Functions
function openModal(imgSrc, title, desc) {
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('cert-img');
    const modalTitle = document.getElementById('cert-title');
    const modalDesc = document.getElementById('cert-desc');
    
    modal.style.display = 'block';
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
}

function closeModal() {
    document.getElementById('cert-modal').style.display = 'none';
}

// Certificate Modal Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.cert-close');
    const modal = document.getElementById('cert-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});