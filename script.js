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

// Domain Modal Functions
// Domain Modal Functions
const domainData = {
    insurance: {
        icon: 'fas fa-shield-alt',
        name: 'Insurance',
        description: 'Comprehensive testing experience in insurance platforms including parametric insurance for natural catastrophe risks (wind, flood, earthquake, hail), workers compensation case management, and risk management solutions. Expertise in testing policy management, claims processing, and regulatory compliance features.'
    },
    risk: {
        icon: 'fas fa-chart-line',
        name: 'Risk Management',
        description: 'Specialized in testing risk analytics platforms using factor-based models for portfolio risk decomposition. Experience with Layers Module, Program Builder, Summary Module, Insurer Module, Exposure Summary, SOV Module, and comprehensive reporting systems for portfolio optimization and scenario analysis.'
    },
    healthcare: {
        icon: 'fas fa-heartbeat',
        name: 'Healthcare & E-learning',
        description: 'Extensive experience in healthcare staffing technology platforms with ATS, VMS, compliance engines, and mobile applications. Also worked on U.S.-based training and certification platforms for healthcare professionals, including Agency Panel, Caregiver Support Panel, and compliance monitoring systems.'
    },
    gaming: {
        icon: 'fas fa-gamepad',
        name: 'Gaming',
        description: 'AI-powered gaming application testing with focus on advanced features, interactive gameplay elements, user experience optimization, and performance testing across multiple platforms and devices.'
    },
    ecommerce: {
        icon: 'fas fa-shopping-cart',
        name: 'E-commerce',
        description: 'Global e-commerce platform testing including Colgate Pet Care supporting 30+ countries with multi-language and multi-currency functionality. Experience with pet profiles, product recommendations, subscription programs, and cross-browser compatibility testing.'
    },
    consumer: {
        icon: 'fas fa-users',
        name: 'Consumer Goods (CG)',
        description: 'TouchCG® mobile retail execution tool testing for sales representatives, managers, and merchandisers. Expertise in Direct Store Delivery optimization, Van Sales route management, and back office support systems for consumer goods companies like Mondelez International.'
    },
    ai: {
        icon: 'fas fa-robot',
        name: 'AI Chatbots',
        description: 'AI-driven chatbot platform evaluation and testing against competitor analysis. Experience testing chatbot characters with comprehensive scenario coverage including sensitive content handling, child exploitation prevention, self-harm detection, and misinformation filtering across multiple categories.'
    }
};

function openDomainModal(domainKey) {
    const modal = document.getElementById('domain-modal');
    const icon = document.getElementById('domain-icon');
    const name = document.getElementById('domain-name');
    const description = document.getElementById('domain-description');

    if (modal && domainData[domainKey]) {
        const data = domainData[domainKey];
        icon.className = data.icon;
        name.textContent = data.name;
        description.textContent = data.description;
        modal.style.display = 'block';
    }
}

function closeDomainModal() {
    const modal = document.getElementById('domain-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Domain Modal Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const domainCloseBtn = document.querySelector('.domain-close');
    const domainModal = document.getElementById('domain-modal');

    if (domainCloseBtn) {
        domainCloseBtn.addEventListener('click', closeDomainModal);
    }

    if (domainModal) {
        domainModal.addEventListener('click', (e) => {
            if (e.target === domainModal) {
                closeDomainModal();
            }
        });
    }

    // ESC key to close domain modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDomainModal();
        }
    });
});
