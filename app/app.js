$(function () {
  $('td').hover(function () {
    $('.tooltip-arrow').css('left', $(this).children('i').position().left + $(this).children('i').width() / 2);
    $('.tooltip').show();
  }, function () {
    $('.tooltip').hide();
  });
});