(function() {
  $(document).on('ready', function() {
    var nav_buttons;
    nav_buttons = $('nav a');
    nav_buttons.click(function() {
      var page;
      nav_buttons.removeClass('current');
      page = $(event.currentTarget).addClass('current').data('page');
      $('.info').addClass('up');
      $('.page').removeClass('current');
      $("#" + page).addClass('current');
      return $(".details").addClass('small');
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
