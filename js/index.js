$(document).ready(function () {
  $nav = $(".header");
  $toggleCollapse = $(".header__toggle-icon");
  $navbar = $(".header__navbar");

  /* Event on toggle menu*/
  $toggleCollapse.click(function () {
    $navbar.toggleClass("border-top");
    $nav.toggleClass("collapse");
  });

  /* Owl-carousel load */
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      800: {
        items: 2,
      },

      1000: {
        items: 3,
      },
    },
  });
});
