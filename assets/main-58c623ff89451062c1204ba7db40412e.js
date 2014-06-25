(function() {
  $(document).on('ready', function() {
    var nav_buttons;
    nav_buttons = $('nav a');
    nav_buttons.click(function() {
      var callback, page;
      nav_buttons.removeClass('current');
      page = $(event.currentTarget).addClass('current').data('page');
      $('.info').addClass('up');
      $('.page').removeClass('current');
      $("#" + page).addClass('current');
      callback = function() {
        return $("#" + page + ", .details").addClass('small').slideDown(100);
      };
      if ($('.details').hasClass('small')) {
        return callback();
      } else {
        return $('.details').slideUp(200, callback);
      }
    });
    return $('form').submit(function() {
      var song;
      event.preventDefault();
      song = $('input:text').val();
      ga('send', 'event', 'Song Recommendation', song);
      $('input:text').val('');
      return $('#song-recs p').text("Thanks for recommending " + song + ". We'll think about it!");
    });
  });

}).call(this);
