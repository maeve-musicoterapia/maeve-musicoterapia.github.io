(function ($) {
  "use strict";

  /* Preloader */
  $(window).on("load", function () {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
      var preloader = $(".spinner-wrapper");
      setTimeout(function () {
        preloader.fadeOut(preloaderFadeOutTime);
      }, 500);
    }
    hidePreloader();
  });

  /* Navbar Scripts */
  // jQuery to collapse the navbar on scroll
  $(window).on("scroll load", function () {
    if ($(window).scrollTop() === 0) {
      $(".fixed-top").removeClass("top-nav-collapse");
    } else {
      $(".fixed-top").addClass("top-nav-collapse");
    }
  });

  function toggleNavbarLogo(e) {
    e.preventDefault();
    if ($(window).scrollTop() === 0 && window.innerWidth > 767) {
      $(".logo-image img").attr("src", "images/logo-black.png");
    } else {
      $(".logo-image img").attr("src", "images/logo-white.png");
    }
  }
  $(window).scroll(toggleNavbarLogo);
  $(window).resize(toggleNavbarLogo);
  $(window).on("load", toggleNavbarLogo);

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $(document).on("click", "a.page-scroll", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          600,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });

  // closes the responsive menu on menu item click
  $(".navbar-nav li a").on("click", function (event) {
    if (!$(this).parent().hasClass("dropdown")) $(".navbar-collapse").collapse("hide");
  });

  $("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
      // Called after the entrance animation is executed.
    },
  });

  /* Back To Top Button */
  // create the back to top button
  $("body").prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
  var amountScrolled = 700;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("500");
    } else {
      $("a.back-to-top").fadeOut("500");
    }
  });

  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function () {
    $(this).blur();
  });

  /* Copyright Date */
  $("#current-year").text(new Date().getFullYear());
})(jQuery);
