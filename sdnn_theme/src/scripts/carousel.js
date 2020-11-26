(($, Drupal) => {
  Drupal.behaviors.carousel = {
    attach() {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
    },
  };
})(jQuery, Drupal);
