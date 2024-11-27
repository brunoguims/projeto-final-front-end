function initializeCarousel(carouselId) {
    var carouselElement = document.getElementById(carouselId);
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000,
        pause: false,
        ride: false
    });

    carouselElement.addEventListener('mouseenter', function () {
        carousel.cycle();
    });

    carouselElement.addEventListener('mouseleave', function () {
        carousel.pause();
    });
}

initializeCarousel('carouselBrasil');
initializeCarousel('carouselItalia');
initializeCarousel('carouselChina');
initializeCarousel('carouselJapao');