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

  // Form Validation
  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  // Particle js
  particlesJS.load('particles-js', 'js/particles.json',
    function () {
      console.log('particles loaded')
    });

  // ensures the captcha is completed
  $('form').on('submit', function (e) {
    if (grecaptcha.getResponse() == "") {
      e.preventDefault();
    };

  });


});
