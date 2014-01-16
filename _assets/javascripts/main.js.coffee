$(document).on 'ready', ->
  nav_buttons = $('nav a')
  nav_buttons.click ->
    nav_buttons.removeClass('current')
    page = $(event.currentTarget).addClass('current').data('page')
    $('.info').addClass('up')
    $('.page').slideUp 100
    callback = ->
      $("##{page}, .details").addClass('small').slideDown(100)
    if $('.details').hasClass('small')
      callback()
    else
      $('.details').slideUp 200, callback

  $('form').submit ->
    event.preventDefault()
    song = $('input:text').val()
    ga('send', 'event', 'Song Recommendation', song)
    $('input:text').val('')
    $('#song-recs p').text("Thanks for recommending #{song}. We'll think about it!")
