(($, Drupal) => {
  Drupal.behaviors.disquisComment = {
    attach() {
      $('.user-login .resetyourpassword').text('Reset Password');
    },
  };
})(jQuery, Drupal);
