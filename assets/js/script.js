
// Real-time IST clock
function updateISTTime() {
    const options = {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const istTime = new Date().toLocaleString('en-IN', options);
    document.getElementById('ist-time').textContent = istTime;
}
updateISTTime();
setInterval(updateISTTime, 1000);

// Carousel functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.review-card');
const totalSlides = slides.length;
function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const offset = -currentIndex * (100 / 3);
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Show/hide back-to-top button
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});
