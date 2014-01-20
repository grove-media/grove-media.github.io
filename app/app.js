$(function () {
  $('td').hover(function () {
    var $i = $(this).children('i');
    $('.tooltip-arrow').animate({'left: ' + ($i.position().left + $i.width() / 2 + 'px')});
    $('.tooltip-content > div').hide();
    $($(this).attr('data-display')).show();
    $('.tooltip').fadeIn('fast');
  }, function () {
    $('.tooltip').fadeOut('fast');
  });
});
