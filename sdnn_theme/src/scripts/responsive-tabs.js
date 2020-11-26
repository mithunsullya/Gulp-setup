(($, Drupal) => {
  Drupal.behaviors.responsive_tabs = {
    attach() {
      $(document).ready(function () {
        var $tabs = $('#magazineTabs');
        $tabs.responsiveTabs({
          rotate: false,
        });
      });
    },
  };
})(jQuery, Drupal);
