(($, Drupal) => {
  Drupal.behaviors.location = {
    attach(context) {
      $(document, context).ready(function () {
        if ($(window).width() < 450) {
          $('.view-location .view-content .item-list h3', context).after(
            '<div class="select-location"> Select One</div>'
          );

          $('.view-location .select-location', context).click(function () {
            $(this).next().toggleClass('active');
          });
        }
      });
    },
  };
})(jQuery, Drupal);
