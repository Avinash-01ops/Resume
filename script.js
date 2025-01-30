// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pagination for Professional Experience Section
const jobs = document.querySelectorAll('.job');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageIndicator = document.getElementById('page-indicator');
let currentPage = 0;

function showJob(index) {
    jobs.forEach((job, i) => {
        job.classList.toggle('active', i === index);
    });
    pageIndicator.textContent = `${index + 1}/${jobs.length}`;
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showJob(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < jobs.length - 1) {
        currentPage++;
        showJob(currentPage);
    }
});

// Initialize first job
showJob(currentPage);

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