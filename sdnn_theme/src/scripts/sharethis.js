(($, Drupal) => {
  Drupal.behaviors.shareThis = {
    attach() {
      $(document).ready(function () {
        getRightOffsetValue();
        $('.sharethis-inline-share-buttons').addClass('d-lg-none');
        $(window).resize(function () {
          getRightOffsetValue();
        });
      });

      function getRightOffsetValue() {
        var window_width = $(window).width();
        if (window_width > 1200) {
          right_offset = (window_width - 1280) / 2 + 20;
          $('.sharethis-inline-share-buttons').css({ right: right_offset });
        } else {
          right_offset = 20;
          $('.sharethis-inline-share-buttons').css({ right: right_offset });
        }
      }

      $(window).scroll(function () {
        if ($('.block-field-blocknodenews-articlecreated').length > 0) {
          var image_offset = $(
            '.block-field-blocknodenews-articlecreated'
          ).offset().top;
        }
        if ($('.block-field-blocknodevideocreated').length > 0) {
          var image_offset = $('.block-field-blocknodevideocreated').offset()
            .top;
        }
        if ($('.block-field-blocknodepodcastcreated').length > 0) {
          var image_offset = $('.block-field-blocknodepodcastcreated').offset()
            .top;
        }
        var footer_block_offset = $('.footer').offset().top;
        var st_offset = $(window).scrollTop();
        var st_offset = st_offset + 600;
        image_offset = image_offset + 250;
        if (st_offset >= image_offset && st_offset < footer_block_offset) {
          $('.sharethis-inline-share-buttons').removeClass('d-lg-none');
        } else {
          $('.sharethis-inline-share-buttons').addClass('d-lg-none');
        }
      });
    },
  };
})(jQuery, Drupal);
