var dateDisplayEl = $('#date-display');

function showDate () {
    var currentD = moment().format('dddd, MMMM Do YYYY');
    dateDisplayEl.text(currentD);
}
showDate();

