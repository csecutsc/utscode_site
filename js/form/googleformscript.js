var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxtusyS26tTnCcgth8FRbHNJi46tLFkP01GbPmwXbUr9DIQsxI/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})