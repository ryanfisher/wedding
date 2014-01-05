(function() {

  $(document).on('ready', function() {
    return $('nav a').click(function() {
      $('.info').addClass('up');
      $('.details').slideUp(function() {
        $('.date, .location, .venue').addClass('small');
        return $('.details').slideDown(100);
      });
      return $('#places-to-stay').slideDown();
    });
  });

}).call(this);
