var hamburgerMenu = $('.hamburger-menu');

$('.header-right > a').click(function() {
  hamburgerMenu.show(1000);
})

$('.close').click(function() {
  hamburgerMenu.hide('fast');
})
