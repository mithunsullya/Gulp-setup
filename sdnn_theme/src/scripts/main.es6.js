(($, Drupal) => {
  Drupal.behaviors.viewport = {
    attach() {
      if (screen.width > 450) {
        document
          .getElementById('viewport')
          .setAttribute('content', 'width=1200');
      }
    },
  };
})(jQuery, Drupal);
