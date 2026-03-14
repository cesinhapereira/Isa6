// ===============================
// SCRIPT DO CARROSSEL
// ===============================
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}
// Troca a cada 10 segundos (10000ms)
setInterval(showNextSlide, 4500);
const photo = document.querySelector(".home-image");

document.addEventListener("mousemove", (e) => {

    if(!photo) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    photo.style.transform = `translate(${x}px, ${y}px)`;

});
