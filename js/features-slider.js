var mql = window.matchMedia('all and (max-width: 736px)');
if (mql.matches) {
   $('.features-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});
} else {
    $('.features-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
});
}
