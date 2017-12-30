$(document).ready(function () {
  // smooth scrolling
  $("a[href^='#']").on('click', function (e) {
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function () {
      window.location.hash = hash;
    });
    e.preventDefault();
  });
});
