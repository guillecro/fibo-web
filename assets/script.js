$(document).ready(function() {
  $('.navbar-item.has-dropdown').hover(
    function() {
      $(this).addClass('is-active');
    },
    function() {
      $(this).removeClass('is-active');
    }
  );
});