(function() {
  var PageRouter, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  PageRouter = (function(_super) {
    __extends(PageRouter, _super);

    function PageRouter() {
      _ref = PageRouter.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    PageRouter.prototype.routes = {
      'places-to-stay': 'places_to_stay',
      'registries': 'registries',
      'song-recs': 'song_recs',
      'about': 'about'
    };

    PageRouter.prototype.places_to_stay = function() {
      return this.show_page('places-to-stay');
    };

    PageRouter.prototype.registries = function() {
      return this.show_page('wedding-registries');
    };

    PageRouter.prototype.song_recs = function() {
      return this.show_page('song-recs');
    };

    PageRouter.prototype.about = function() {
      return this.show_page('about');
    };

    PageRouter.prototype.show_page = function(page) {
      $('nav a').removeClass('current');
      $("nav a[data-page=" + page + "]").addClass('current');
      $('.info').addClass('up');
      $('.page').removeClass('current');
      $("#" + page).addClass('current');
      return $(".details").addClass('small');
    };

    return PageRouter;

  })(Backbone.Router);

  $(document).on('ready', function() {
    var router;
    $('form').submit(function() {
      var song;
      event.preventDefault();
      song = $('input:text').val();
      ga('send', 'event', 'Song Recommendation', song);
      $('input:text').val('');
      return $('#song-recs p').text("Thanks for recommending " + song + ". We'll think about it!");
    });
    router = new PageRouter;
    return Backbone.history.start();
  });

}).call(this);
