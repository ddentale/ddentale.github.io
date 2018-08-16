$(function() {

  //ANCHOR
  $('.nav-link').click(function(){    
    const divId = $(this).attr('href').substring(1);
    $('html, body').animate({
      scrollTop: $(divId).offset().top - 54
    }, 100);
   });

  // ANIMATIONS
  //new WOW().init();
  
  // GDPR
  if(!Cookies.get('gdpr')) {
    setTimeout(function () { $('#gdpr').addClass('show'); }, 2000);
  }
  $('#gdpr').on('closed.bs.alert', function () {
    Cookies.set('gdpr', 'true', { expires: 365 });
  })

})

