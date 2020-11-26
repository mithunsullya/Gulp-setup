(($, Drupal) => {
  Drupal.behaviors.select = {
    attach(context) {
      $(document).ready(function () {
        // Get the selected label value.

        var typeValue = $('.facets-widget-dropdown .select-hidden')
          .children('option:selected')
          .html();
        var relevanceValue = $('.form-item-sort-by .select-hidden')
          .children('option:selected')
          .html();

        // Add active class to the selected option.

        $('.facets-widget-dropdown .select-options li').each(function () {
          if ($(this).text() == typeValue) {
            $(this).addClass('active');
          }
        });
        $('.form-item-sort-by .select-options li').each(function () {
          if ($(this).text() == relevanceValue) {
            $(this).addClass('active');
          }
        });

        // Set the label value after the form submit.

        $('.facets-widget-dropdown .select-label').text(typeValue);
        $('.form-item-sort-by .select-label').text(relevanceValue);

        $('.bef--secondary .details-wrapper', context).append(
          '<div class="reset"> <a href="/search"> Clear All </a></div>'
        );
      });

      $(document).on('keydown', function (e) {
        if (e.key == 'Escape') {
          $('.select .select-options').removeClass('active');
        }
      });

      // Render the select option with custom style.

      $('select', context).each(function () {
        var $this = $(this),
          numberOfOptions = $(this).children('option').length;
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after("<div class='select-label' tabindex='0'></div>");
        var $selectLabel = $this.next('div.select-label');
        $selectLabel.text($this.children('option').eq(0).text());

        // List of options inside a select-option class.

        var $list = $('<ul />', {
          class: 'select-options',
        }).insertAfter($selectLabel);

        for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val(),
            tabindex: '0',
          }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $listItems.on('click keypress', function (e) {
          if (e.keyCode == 13 || e.type === 'click') {
            $this.val($(this).attr('rel'));
          }
        });
      });

      // Show or hide the dropdown menu.

      $('.select-label')
        .off()
        .on('click keypress', function (e) {
          if (e.type === 'click' || e.keyCode === 13) {
            if ($('.select .select-options').hasClass('active')) {
              $('.select .select-options').removeClass('active');
            } else {
              $(this).next().toggleClass('active');
            }
          }
        });

      $('.select-options li').on('click keypress', function (e) {
        if (e.keyCode == 13 || e.type === 'click') {
          $('#views-exposed-form-search-page .form-submit').trigger('click');
        }
      });
    },
  };
})(jQuery, Drupal);
