// Enhanced 3D effects initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scroll with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 70;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
    
    // Initialize enhanced tilt effects
VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});

// Initialize 3D tilt effect on skill categories
VanillaTilt.init(document.querySelectorAll(".skill-category"), {
    max: 10,
    speed: 400,
    scale: 1.05
});

// Mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card');
    const skills = document.querySelectorAll('.skill-category');
    const hero = document.querySelector('.hero h1');
    
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const moveX = (mouseX - windowWidth / 2) / 50;
    const moveY = (mouseY - windowHeight / 2) / 50;
    
    // Apply parallax to hero text
    if (hero) {
        hero.style.transform = `translateX(${moveX}px) translateY(${moveY}px) translateZ(20px)`;
    }
    
    // Apply subtle movement to cards
    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const distanceX = mouseX - cardCenterX;
        const distanceY = mouseY - cardCenterY;
        
        const strength = 0.1;
        card.style.transform = `translate3d(${distanceX * strength}px, ${distanceY * strength}px, 0)`;
    });
});

// Add 3D depth effect to logo
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'translateZ(50px) rotateY(180deg)';
    });
    
    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'translateZ(0) rotateY(0)';
    });
}

// Smooth parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.skill-category, .project-card');
    
    parallaxElements.forEach(element => {
        const speed = 0.1;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateZ(${yPos}px)`;
    });
});