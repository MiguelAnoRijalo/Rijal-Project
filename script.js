// ====== Mobile Menu Toggle ======
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu saat link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ====== Typing Effect ======
const typingText = document.querySelector('.typing-text');
const texts = ['Web Developer', 'Frontend Designer', 'UI/UX Enthusiast', 'Freelancer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const current = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 500;
    }

    setTimeout(type, speed);
}

type();

// ====== Navbar Scroll Effect ======
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// ====== Form Submission ======
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.');
    contactForm.reset();
});

// ====== Scroll Reveal Animation ======
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ====== Smooth Scroll untuk semua anchor link ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
