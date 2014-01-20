$(function () {
  $('td').click(function () {   
    var $i = $(this).children('i');
    var disp = $(this).attr('data-display');
    
    if($('.tooltip').is(':visible') && $(disp).is(':visible')) {
      $('.tooltip').fadeOut('fast');
    }
    else {
      if(!$('.tooltip').is(':visible')) {
        $('.tooltip').fadeIn('fast');
      }
      
      $('.tooltip-arrow').animate({left:  ($i.position().left + $i.width() / 2)});
      $('.tooltip-content > div').fadeOut('100');
      $(disp).fadeIn('fast');
    }
  });
});
