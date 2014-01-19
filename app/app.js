$(function () {
  $('td > i').hover(function () {
    $('.tooltip-arrow').css('left', $(this).position().left + $(this).width() / 2);
    $('.tooltip').show();
  }, function () {
    $('.tooltip').hide();
  });
});