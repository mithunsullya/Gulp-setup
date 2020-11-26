(($, Drupal) => {
  Drupal.behaviors.mainMenu = {
    attach(context) {
      $('.header .menu .menu-item--expanded', context).click(function () {
        if ($(this).hasClass('active--menu')) {
          $(this).removeClass('active--menu');
        } else {
          $('.header .menu .menu-item--expanded').removeClass('active--menu');
          $(this).addClass('active--menu');
        }
      });
      $('.header .menu .menu-item--expanded > a', context).click(function () {
        if (
          $(this).closest('.menu .menu-item--expanded').hasClass('active--menu')
        ) {
          $(this)
            .closest('.menu .menu-item--expanded')
            .removeClass('active--menu');
        } else {
          $('.menu .menu-item--expanded').removeClass('active--menu');
          $(this)
            .closest('.menu .menu-item--expanded')
            .addClass('active--menu');
        }
      });
      $('.hamburger').click(function () {
        if ($('.mobile__navigation').hasClass('d-none')) {
          $('.mobile__navigation').removeClass('d-none');
        }
        $('.mobile__navigation').addClass('d-block');
      });
      $('.mobile__navigation .menu--close-button').click(function () {
        if ($('.mobile__navigation').hasClass('d-block')) {
          $('.mobile__navigation').removeClass('d-block');
        }
        $('.mobile__navigation').addClass('d-none');
      });

      if (screen.width > 1200) {
        $('.header__navigation').addClass('d-lg-block');
        $('.header__branding .desktop-branding').addClass('d-lg-block');
      }

      if (screen.width < 1200) {
        $('.header__branding .mobile-branding').removeClass('d-lg-none');
        $('.hamburger').removeClass('d-lg-none');
        $('.mobile__navigation').removeClass('d-lg-none');
      }
    },
  };
})(jQuery, Drupal);
