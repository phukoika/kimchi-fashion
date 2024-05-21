$(".owl-carousel.slide").owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  loop: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    601: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".owl-carousel.category-slide").owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  loop: true,
  margin: 40,
  nav: true,
  responsive: {
    0: {
      items: 3,
    },
    601: {
      items: 6,
    },
    1000: {
      items: 6,
    },
  },
});
$(".owl-carousel.product-slide").owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    601: {
      items: 2,
    },

    1024: {
      items: 4,
    },
  },
});
