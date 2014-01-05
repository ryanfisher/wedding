$(document).on 'ready', ->
  $('nav a').click ->
    page = $(event.currentTarget).data('page')
    $('.info').addClass('up')
    $('.page').slideUp 100
    callback = ->
      $("##{page}, .details").addClass('small').slideDown(100)
    if $('.details').hasClass('small')
      callback()
    else
      $('.details').slideUp 200, callback
