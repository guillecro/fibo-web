$(document).ready(function() {
  $('.navbar-item.has-dropdown').hover(
    function() {
      $(this).addClass('is-active');
    },
    function() {
      $(this).removeClass('is-active');
    }
  );

  $('.navbar-burger').each(function() {
    var $this = $(this);

    // Add a click event on each of them
    $this.click(function() {

      // Get the target from the "data-target" attribute
      var target = $this.data('target');
      var $target = $('#' + target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $this.toggleClass('is-active');
      $target.toggleClass('is-active');

    });
  });

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
});