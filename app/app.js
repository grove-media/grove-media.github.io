$(function () {
  $('td').hover(function () {
    var $i = $(this).children('i');
    $('.tooltip-arrow').css('left', $i.position().left + $i.width() / 2);
    $('.tooltip-content > div').hide();
    $($(this).attr('data-display')).show();
    $('.tooltip').show();
  }, function () {
    $('.tooltip').hide();
  });
});
