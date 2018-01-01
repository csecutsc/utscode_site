$(document).ready(function () {
  $('a[href*="#"]')
    // Remove links that don't link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 70
          }, 1000, function () {
            var $target = $(target);
          });
        }
      }
    });
  // toggle collapse with nav bar items
  var navCollapseToggle = $("#navbar-items");
  navCollapseToggle.on("click", "a", null, function () {
    navCollapseToggle.collapse('hide');
  });
});
