$(function() {

  // ANIMATION
  new WOW().init();
  
  // GDPR
  if(!Cookies.get('gdpr')) {
    setTimeout(function () { $('#gdpr').addClass('show'); }, 2000);
  }
  $('#gdpr').on('closed.bs.alert', function () {
    Cookies.set('gdpr', 'true', { expires: 365 });
  })

})

