// document.getElementsByClassName('site-logo-image')[0].style.display = 'none';
$(document).ready(function() {
  // $('.site-logo-image').hide();

  $('#custom_panel').html('<p>updated text</p>');
  // $('.site-description').css('color', '#A42137');
  $('.site-description').css('color', '#2C5727');
  $('.site-description').css('background-color', 'rgba(255,255,255,.6)');
  $('.site-description').text('Site Enhancement Activated!');
});
