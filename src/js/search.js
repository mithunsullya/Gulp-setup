$(document).ready(function () {
  if ($(window).width() > 992) {
    $("#search-trigger").click(function () {
      $(".region-navigation .block--search").toggle();
    });
  }

  $(document).on("click", "#close-search", function () {
    $('input[type="text"]').val("");
  });
});
