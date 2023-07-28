//For auto Scrolling of carousal without user interaction.
var carouselElement = document.querySelector('#carouselExampleIndicators');
var carousel = new bootstrap.Carousel(carouselElement);

window.addEventListener('load', function () {
    carouselElement.addEventListener('slid.bs.carousel', function () {
      carousel.cycle();
    });
    carousel.cycle();
});