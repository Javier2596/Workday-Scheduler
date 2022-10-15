var dateDisplayEl = $("#currentDay");

function showDate () {
    var currentD = moment().format('MMM Do YY');
    dateDisplayEl.text(currentD);
}




//function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  //}