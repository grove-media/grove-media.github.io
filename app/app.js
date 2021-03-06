﻿$(function () {
  $('td').click(function () {   
    var $i = $(this).children('i');
    var disp = $(this).attr('data-display');
    
    if($('.tooltip').is(':visible') && $(disp).is(':visible')) {
      $('.tooltip').fadeOut('fast');
    }
    else {
      var pos = ($i.position().left + $i.width() / 2);
    
      if(!$('.tooltip').is(':visible')) {
        $('.tooltip').fadeIn('fast');
        $('.tooltip-arrow').css('left', ($i.position().left + $i.width() / 2));
        $('.tooltip-content > div:visible').hide();
        $(disp).fadeIn('fast');
      }
      else {
        $('.tooltip-arrow').animate({left:  pos});
        $('.tooltip-content > div:visible').fadeOut('100', function () {
          $(disp).fadeIn('fast');
        });
      }
    }
  });
  
  $('#contact').click(function () {
    $(this).after('<a href="mailto:info@grovemedia.se">info@grovemedia.se</a>');
    $(this).remove();
  });
});
