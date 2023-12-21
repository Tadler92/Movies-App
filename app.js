$('#submit-button').on('click', function (e) {
  e.preventDefault();
  $('table').append(`<tr>
  <td>${$('#movie-title').val()}</td>
  <td>${$('#movie-rating').val()}/10</td>
  <td><button>Remove Film</button></td>
  </tr>`);
  $('#movie-title').val('');
  $('#movie-rating').val('');
});

$('table').on('click', 'tr button', function () {
  $(this).parent().parent().remove();
});