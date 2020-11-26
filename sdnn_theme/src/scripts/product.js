(($, Drupal) => {
  Drupal.behaviors.product = {
    attach(context) {
      if (screen.width < 450) {
        $('.block-sdnn-blocks-products .product-list__item', context)
          .first()
          .before(
            '<select class="select-product"><option> Select One</option></select>'
          );

        $(
          '.layout .block-sdnn-blocks-products >.product-list__item >h2 ',
          context
        ).each(function () {
          $('.select-product').append(
            $('<option>', {
              value: $(this).text(),
              text: $(this).text(),
            })
          );
        });

        $('.select-product').selectmenu();

        $('.select-product').selectmenu({
          change: function () {
            var selectedText = $(
              '.block-sdnn-blocks-products .ui-selectmenu-text'
            ).text();
            $(
              '.layout .block-sdnn-blocks-products >.product-list__item >h2'
            ).each(function () {
              if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
              }

              if ($(this).text() == selectedText) {
                $(this).parent().addClass('active');
              }
            });
          },
        });
      }
    },
  };
})(jQuery, Drupal);
