class PageRouter extends Backbone.Router

  routes:
    'places-to-stay': 'places_to_stay'
    'registries': 'registries'
    'song-recs': 'song_recs'

  places_to_stay: -> @show_page('places-to-stay')

  registries: -> @show_page('wedding-registries')

  song_recs: -> @show_page('song-recs')

  show_page: (page) ->
    $('nav a').removeClass('current')
    $("nav a[data-page=#{page}]").addClass('current')
    $('.info').addClass('up')
    $('.page').removeClass('current')
    $("##{page}").addClass('current')
    $(".details").addClass('small')

$(document).on 'ready', ->
  $('form').submit ->
    event.preventDefault()
    song = $('input:text').val()
    ga('send', 'event', 'Song Recommendation', song)
    $('input:text').val('')
    $('#song-recs p').text("Thanks for recommending #{song}. We'll think about it!")

  router = new PageRouter
  Backbone.history.start()
