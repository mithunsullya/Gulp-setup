(($, Drupal) => {
  Drupal.behaviors.disquisComment = {
    attach(context) {
      $('#disqus_thread', context).append(
        "<div class='hide-social-discuss'></div>"
      );
    },
  };
})(jQuery, Drupal);
