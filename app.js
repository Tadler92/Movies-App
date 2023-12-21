$('#submit-button').on('click', function (e) {
  e.preventDefault();
  if ($('#movie-rating').val() < 0 || $('#movie-rating').val() > 10) {
    alert("Ratings must be between 0 and 10");
    return;
  }
  if ($('#movie-title').val().length < 2) {
    alert('Movie Titles must have at least 2 characters in them.');
    return;
  }
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