$(document).ready(function() {
    $('.articleBlock').slick({
      centerMode : true,
      slidesToShow : 3,
      slidesToScroll : 1,
      variableWidth : true,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });
    $('.articleBlock2').slick({
      centerMode : true,
      slidesToShow : 3,
      slidesToScroll : 1,
      variableWidth : true,
      prevArrow: $('.prev2'),
      nextArrow: $('.next2')
    });
  });