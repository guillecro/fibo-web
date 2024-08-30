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
});