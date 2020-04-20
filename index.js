$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 400) {
    $('.fixed-top').css('background', 'transparent');
  } else {
    $('.fixed-top').css('background', 'rgb(103,162,218)');
  }
});
