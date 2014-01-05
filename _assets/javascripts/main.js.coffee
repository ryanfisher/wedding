$(document).on 'ready', ->
  $('nav a').click ->
    $('.info').addClass('up')
    $('.details').slideUp ->
      $('.date, .location, .venue').addClass('small')
      $('.details').slideDown(100)
    $('#places-to-stay').slideDown()
