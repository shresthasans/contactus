"use strict";
"use strict";

$(function() {
  // Form Validation
    $('input, textarea').on('change', function() {
        var input = $(this);
        if (input.val().length) {
            input.addClass('populated');
            textarea.addClass('populated');
        } else {
            input.removeClass('populated');
            textarea.removeClass('populated');
        }
    });

    /*
    setTimeout(function() {
      $('#fname').trigger('focus');
    }, 500);
    */

    $("#contactForm").validate();
});
