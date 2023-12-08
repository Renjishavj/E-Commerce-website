const carouselWrapper = document.querySelector('.carousel-wrapper');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth;
let currentIndex = 0;

function nextSlide() {
    if (currentIndex + 2 < items.length) {
        currentIndex += 2;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex -= 2;
        updateCarousel();
    }
}

function updateCarousel() {
    carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}