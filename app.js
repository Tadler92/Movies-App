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
  $('tbody').append(`<tr>
  <td>${$('#movie-title').val()}</td>
  <td>${$('#movie-rating').val()}/10</td>
  <td><button>Remove Film</button></td>
  </tr>`);
  $('#movie-title').val('');
  $('#movie-rating').val('');
});

$('tbody').on('click', 'tr button', function () {
  $(this).parent().parent().remove();
});


// function sortMovies(table, column, ascend = true) {
//   const direction = ascend ? 1 : -1;
//   // const tbody = table.tbodies[0];
//   const rows = Array.from($('tbody tr'));

//   // sorts rows
//   // const sortedRows = rows.sort((a, b) => {
//   const sortedRows = $('tbody tr').eq(`${column}`).sort((a, b) => {
//     console.log(a);
//     console.log(b);
//     // const aColumnText = $(`${a}`).eq(`${column}`).text();
//     // const bColumnText = $(`${b}`).eq(`${column}`).text();

//     // console.log(aColumnText);
//     // console.log(bColumnText);
//   })
// }


// function sortMovies(column) {
//   const columnSort = $('tbody tr th').eq(`${column}`)
// }



// $('th').on('click', function (e) {
//   e.preventDefault()
//   const table = $(this).parent('table').eq(0);
//   let rows = table.find('tr:gt(0)')
//     .toArray().sort(comparer($(this)
//       .index()));
//   this.ascend = !this.ascend;
//   if (!this.ascend) { rows = rows.reverse() };
//   for (let i = 0; i < rows.lenght; i++) {
//     table.append(rows[i]);
//   };
// })

// function comparer(index) {
//   return function (a, b) {
//     const aValue = getCellValue(a, index);
//     const bValue = getCellValue(b, index);
//     return $.isNumeric(aValue) && $.isNumeric(bValue) ? aValue - bValue : aValue.toString().localeCompare(bValue);
//   };
// }

// function getCellValue(row, index) {
//   return $(row).children('td').eq(index).text();
// }