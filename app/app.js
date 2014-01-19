$(function () {
  $('td > i').hover(function () {
    $('.tooltip-arrow').css('left', $(this).position().left + 10);
    $('.tooltip').show();
  }, function () {
    $('.tooltip').hide();
  });
});