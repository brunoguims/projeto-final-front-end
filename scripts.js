var carouselBrasil = document.getElementById('carouselBrasil');
var carousel = new bootstrap.Carousel(carouselBrasil, {
    interval: 2000,
    pause: false,
    ride: false
});

carouselBrasil.addEventListener('mouseenter', function () {
    carousel.cycle();
});

carouselBrasil.addEventListener('mouseleave', function () {
    carousel.pause();
});