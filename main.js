// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? 1 : 0;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Animation trigger
function checkAnimations() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            section.classList.add('in-view');
        }
    });
}

window.addEventListener('scroll', checkAnimations);
window.addEventListener('load', checkAnimations);

// Form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea').value;
    console.log('Form Submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});