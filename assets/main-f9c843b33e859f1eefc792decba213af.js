(function() {

  $(document).on('ready', function() {
    return $('nav a').click(function() {
      var callback, page;
      page = $(event.currentTarget).data('page');
      $('.info').addClass('up');
      $('.page').slideUp(300);
      callback = function() {
        $('.date, .location, .venue').addClass('small');
        $('.details').slideDown(100);
        return $("#" + page).slideDown();
      };
      if ($('.date').hasClass('small')) {
        return callback();
      } else {
        return $('.details').slideUp(300, callback);
      }
    });
  });

}).call(this);
