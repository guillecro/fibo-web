$(document).ready(function() {
  $('.navbar-item.has-dropdown').hover(
    function() {
      $(this).addClass('is-active');
    },
    function() {
      $(this).removeClass('is-active');
    }
  );

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
      $(".navbar").toggleClass("is-open");
  });

  // if they click on a navbar-item, close the navbar
  $(".navbar-item").click(function() {
    $(".navbar-burger").removeClass("is-active");
    $(".navbar-menu").removeClass("is-active");
    $(".navbar").removeClass("is-open");
  });

  // $('.navbar-burger').each(function() {
  //   var $this = $(this);

  //   // Add a click event on each of them
  //   $this.click(function() {

  //     // Get the target from the "data-target" attribute
  //     var target = $this.data('target');
  //     var $target = $('#' + target);

  //     // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  //     $this.toggleClass('is-active');
  //     $target.toggleClass('is-active');

  //   });
  // });

  // Make a function that when I click a section link, the site scrolls to that section
  $(".navbar-item").click(function() {
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top - ($(".navbar").height() + 20)
    }, 1000);
  });
  $(".navbar-link").click(function() {
    var section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top - ($(".navbar").height() + 20)
    }, 1000);
  });
  
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function checkForAnimationAndRemove() {
    $('.animatex').each(function() {

        // Check if the element is in the viewport
        if (isScrolledIntoView(this) === true) {
          console.log('in view');
          $(this).addClass('animate__animated animate__fadeInUp');
          // remove .animate class to prevent animation on scroll
          $(this).removeClass('animatex');
        } else {
          console.log('not in view');
        }
    });
  }

  $(window).on('scroll', checkForAnimationAndRemove);

  checkForAnimationAndRemove();
});