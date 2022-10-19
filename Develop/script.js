var dateDisplayEl = $('#date-display');

//displays the current date
function showDate () {
    var currentD = moment().format('dddd, MMMM Do YYYY');
    dateDisplayEl.text(currentD);
}
showDate();
 
    //adds eventlistener on saveBtn
$('.saveBtn').on('click', function () {
    var descriptEl = $(this).siblings('.description').val();
    var hourEl = $(this).parent().attr('id');

    localStorage.setItem(hourEl, descriptEl);
});

//function that changes color of the timeblock
function scheduleTrack() {
//military present time 
     var presentTime = moment().hour();
//grabs each time block for this function
        $('.time-block').each(function () {
        //grabs the id value attribute 
            var timeSlot = parseInt($(this).attr('id')); 
//compares id value to military time and adds/removes correct class
            if(timeSlot < presentTime) {
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            } else if(timeSlot === presentTime) {
                $(this).removeClass('future');
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
    });
 
    };
    scheduleTrack();
//grabs the value of in the descriptions saved in the local storage displays them even when you refresh the page    
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

   
