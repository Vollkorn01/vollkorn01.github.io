/*------------------------------------------------------------------
[Main Script]

Project     : p1-FountainHtml
Version     : 1.0
Author      : Md. Ekramul Hassan Avi
Author URI  : https://www.tigertemplate.com
-------------------------------------------------------------------*/

// scroll down to menu sticky
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 1) {
    $(".sticky_header").addClass("position-fixed bg-white bg-opacity-50 backdrop_32 py-2");
  } else {
    $(".sticky_header").removeClass("position-fixed bg-white bg-opacity-50 backdrop_32 py-2");
  }
});

// mobile menu call
$("#phn-menu").slicknav({
  prependTo: "#nav-menu",
});

jQuery(".partner_slider").owlCarousel({
  items: 4,
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 6000,
  autoplaySpeed: 6000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// magnificPopup
$(document).ready(function () {
  $(".popup-youtube").magnificPopup({
    type: "iframe",
  });
});

// how_it_work scroll effects
$(document).ready(function () {
  $(window).scroll(function () {
    // mobile size
    if ($(window).width() >= 200) {
      if ($(document).scrollTop() > 200) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:first").addClass("current");
      }
      if ($(document).scrollTop() > 1500) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:nth-child(2)").addClass("current");
      }
      if ($(document).scrollTop() > 1700) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:nth-child(3)").addClass("current");
      }
      if ($(document).scrollTop() > 1900) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:nth-child(4)").addClass("current");
      }
    }
    // tablet size
    if ($(window).width() >= 576) {
      if ($(document).scrollTop() > 200) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:first-child").addClass("current");
      }
      if ($(document).scrollTop() > 800) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:nth-child(2)").addClass("current");
      }
      if ($(document).scrollTop() > 1000) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:nth-child(3)").addClass("current");
      }
      if ($(document).scrollTop() > 1200) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:nth-child(4)").addClass("current");
      }
    }
    // laptop and desktop size
    if ($(window).width() >= 1000) {
      if ($(document).scrollTop() > 200) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:first-child").addClass("current");
      }
      if ($(document).scrollTop() > 1200) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:nth-child(2)").addClass("current");
      }
      if ($(document).scrollTop() > 1350) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:nth-child(3)").addClass("current");
      }
      if ($(document).scrollTop() > 1500) {
        $(".how_it_work_list li").removeClass("current");
        $(".how_it_work_list li:nth-child(4)").addClass("current");
      }
    }
  });
});

// drinks page your_game scroll effects
$(document).ready(function () {
  $(window).scroll(function () {
    // tablet size
    if ($(window).width() >= 200) {
      if ($(document).scrollTop() > 3800) {
        $(".your_game_list li").removeClass("current");
        $(".your_game_list li:first-child").addClass("current");
      }
      if ($(document).scrollTop() > 4800) {
        $(".your_game_list li").removeClass("current");
        $(".your_game_list li:nth-child(2)").addClass("current");
      }
      if ($(document).scrollTop() > 5000) {
        $(".your_game_list li").removeClass("current");
        $(".your_game_list li:nth-child(3)").addClass("current");
      }
    }
    // tablet size
    if ($(window).width() >= 576) {
      if ($(document).scrollTop() > 2200) {
        $(".your_game_list li").removeClass("current");
        $(".your_game_list li:first-child").addClass("current");
      }
      if ($(document).scrollTop() > 3200) {
        $(".your_game_list li").removeClass("current");
        $(".your_game_list li:nth-child(2)").addClass("current");
      }
      if ($(document).scrollTop() > 3400) {
        $(".your_game_list li").removeClass("current");
        $(".your_game_list li:nth-child(3)").addClass("current");
      }
    }
    // laptop and desktop size
    if ($(window).width() >= 1000) {
      if ($(document).scrollTop() > 1400) {
        $(".your_game_list li").removeClass("current");
        $(".your_game_list li:first-child").addClass("current");
      }
      if ($(document).scrollTop() > 2600) {
        $(".your_game_list li").removeClass("current");
        $(".your_game_list li:nth-child(2)").addClass("current");
      }
      if ($(document).scrollTop() > 2800) {
        $(".your_game_list li").removeClass("current");
        $(".your_game_list li:nth-child(3)").addClass("current");
      }
    }
  });
});
