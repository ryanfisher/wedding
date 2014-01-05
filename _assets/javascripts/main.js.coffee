$(document).on 'ready', ->
  $('nav a').click ->
    page = $(event.currentTarget).data('page')
    $('.info').addClass('up')
    $('.page').slideUp    300
    callback = ->
      $('.date, .location, .venue').addClass('small')
      $('.details').slideDown(100)
      $("##{page}").slideDown()
    if $('.date').hasClass('small')
      callback()
    else
      $('.details').slideUp 300, callback
