(function() {

  $(document).on('ready', function() {
    return $('nav a').click(function() {
      var callback, page;
      page = $(event.currentTarget).data('page');
      $('.info').addClass('up');
      $('.page').slideUp(100);
      callback = function() {
        return $("#" + page + ", .details").addClass('small').slideDown(100);
      };
      if ($('.details').hasClass('small')) {
        return callback();
      } else {
        return $('.details').slideUp(200, callback);
      }
    });
  });

}).call(this);
