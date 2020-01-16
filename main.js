var hamburgerMenu = $('.hamburger-menu');

$('.header-right > a').click(function() {
  hamburgerMenu.show(1000);
})

$('.close').click(function() {
  hamburgerMenu.hide('fast');
})

//-------ALTRO METODO------

//var hamburgerMenu = $('.hamburger-menu');

//$('.header-right > a').click(function() {
//  hamburgerMenu = fadeIn(2000);
//})

//$('.close').click(function() {
//  hamburgerMenu = fadeOut('fast');
//})
