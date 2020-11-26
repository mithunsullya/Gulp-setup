/**
 * @file
 * Global JS file for Britline.
 */

(function ($, Drupal, drupalSettings) {
  $(document).ready(function () {

    $(this).scrollTop(0);
    $(".region-branding a").replaceWith(function(){
      return $("<span class='site-logo'>" + $(this).html() + "</span>");
    });
    $('.site-logo').click(function () {
      window.location.href = '/';
    })

    // edit-profile-upload
    // To close the webform opportunity pop-up.
    $(document).on('click', '.webform--opportunities .close-icon', function () {
      $('.ui-dialog-titlebar-close').trigger('click');
    });

    // To close the webform opportunity pop-up.
    $(document).on('click', '.webform--opportunities .career-submit', function (e) {
      var fname = $(".webform--opportunities .js-form-item-first-name input").val();
      var email = $(".webform--opportunities .js-form-item-email input").val();
      var phone = $(".webform--opportunities .js-form-item-phone-number input").val();
      var file_value = $(".webform--opportunities .js-form-item-profile-upload input").val();
      if(fname && email && phone ){
        if (!file_value) {
          $(".webform--opportunities .form-item-profile-upload").append("<div class='error-msg'>Please upload the file</div>");
          e.preventDefault();
        }
      }
    });

    // Add class to body tag.
    if($('.region-content article').hasClass('about-us') || $('.region-content article').hasClass('meet-our-team')) {
      $('body').addClass('team-pop-up');
    }
    // Add class to body tag to open marketing link in a popup.
    if($('.region-content article .marketing .cta a').hasClass('use-ajax') || $('.region-content article .service-attributes .cta a').hasClass('use-ajax')) {
      $('body').addClass('contact-popup');
    }

    // To close the webform contact-team pop-up.
    $(document).on('click', '.webform--contact-team .close-icon', function () {
      $('.ui-dialog-titlebar-close').trigger('click');
    });

    // To close the webform contact us pop-up.
    $(document).on('click', '.weform--contact-us .close-icon', function () {
      $('.ui-dialog-titlebar-close').trigger('click');
    });

    //adding a wrapper to the explore-the-opportunities views
    if( $('.views--job-opportunities').hasClass('view-explore-the-opportunities') ) {
      $( ".block-views-blockexplore-the-opportunities-block-1" ).wrap( "<div class='explore-opportunity-wrapper'></div>" );
    }
    else {
      ;
    }

    // add styling for menu items for contact-us page
    if ($(".region-content article").hasClass('contact-us') || $(".region-content article").hasClass('homepage') || $(".region-content article").hasClass('capabilities') ) {
      $("#block-briteline-theme-main-menu").addClass('main-menu--featured');
      $(".header__container").addClass('featured-header');
    }

      // Adding style on scroll.
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var width = $(window).width();
        if ( width > 768) {
          if (scroll > 70)  {
            $(".header").addClass("scrolled");
          }
          else  {
            $(".header").removeClass("scrolled");
          }
        }
      });
    $('.banner-sync__container').click(function() {
      $('.banner-sync__container .thumbnail-title').trigger('click');
    });

    $('.carousel-media').owlCarousel({
     items: 1,
     slideSpeed: 2000,
     nav: true,
     autoplay: true,
     dots: false,
     loop: true,
     navText: ['<i class="icon icon-left-arrow"></i>', '<i class="icon icon-right-arrow"></i>'],
   });

// Menu items in mobile view.
if ($(window).width() < 1024) {
  $('.menu-item--expanded > a').click(function (e) {
    e.preventDefault();
    $(this).addClass('menu-item--dropdown');
    if ($(this).next().hasClass('menu-open')) {
      $(this).next().removeClass('menu-open');
    }
    else {
      $(this).next().addClass('menu-open');
    }
  });

  $('.header__mobile-hamburger').click(function () {
    $('.header__navigation-mobile').slideToggle();
  })

  $(".header__navigation-mobile").focusout(function(){
    $(this).hide();
  });
}

  $('.work-with-us .plain-card').wrap('<div class="card-background-wrapper"></div>');

  $('.webform-submission-customer-credit-form-form .cust-credit__agreement').wrapAll('<div class="customer-form"> </div>');
  $('.webform-submission-customer-credit-form-form .cust-credit__reference').wrapAll('<div class="customer-form"> </div>');
  $('.webform-submission-customer-credit-form-form .cust-credit__bank').wrapAll('<div class="customer-form"> </div>');
  $('.form-type-checkbox .form-checkbox').addClass('custom-checkbox');

  $('.our-capabilities .sidebar-image-wrapper .paragraph__sidebar-small').parent().wrapAll('<div class="sidebar-media-container"></div>');
  $('.homepage .video-embed-field-launch-modal img').after('<div class="video-icon"></div>');
  $('.homepage .viewsreference--view-title').append('<div class="news__link"><a href="/news" target=""> VIEW ALL <i class="icon icon-right-long-arrow"></i></a></div>');

  // Homepage attachment

    if( !($('.homepage .news .views-element-container .view-news').children().hasClass('view-content'))) {
      $('.homepage .news .attachment-before').remove();
    }

    $('#briteline-banner .modal .modal-body img').click(function () {
      window.location.href = '/contact-us';
    });
    // Add a class to the file field
    $('.webform-submission-form .form-type-managed-file').parent().attr('class', 'form-file-field');

    //Align table in center.
    $('table').parent().addClass('table-center');
  });
})(jQuery, Drupal, drupalSettings);
