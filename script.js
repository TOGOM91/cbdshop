

const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Parallax effect on scroll for smoke and palms
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Smoke parallax
    const smokes = document.querySelectorAll('.smoke');
    smokes.forEach((smoke, index) => {
        const speed = (index + 1) * 0.05;
        smoke.style.transform = `translateY(${scrolled * speed}px)`;
    });

    // Palms parallax
    const palms = document.querySelectorAll('.palm');
    palms.forEach((palm, index) => {
        const speed = 0.3 + (index * 0.1);
        palm.style.transform = `translateY(${-scrolled * speed}px)`;
    });

    // Scroll to top button visibility
    const scrollTop = document.getElementById('scrollTop');
    if (scrolled > 500) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

// Scroll to top functionality
document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Product cards animation on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .value-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(60px)';
    card.style.transition = 'all 0.8s ease-out';
    observer.observe(card);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Add to cart animation
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.innerHTML = '✓ Added';
        this.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        setTimeout(() => {
            this.innerHTML = 'Add Cart';
            this.style.background = 'linear-gradient(135deg, var(--sunset-orange), var(--sunset-red))';
        }, 2000);
    });
});
