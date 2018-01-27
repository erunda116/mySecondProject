var mql = window.matchMedia('all and (max-width: 480px)');
if (mql.matches) {
   $('.meet-our-team-images').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});
} else {
    $('.meet-our-team-images').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
});
}