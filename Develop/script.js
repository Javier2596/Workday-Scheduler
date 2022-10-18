var dateDisplayEl = $('#date-display');
var containerEl = $('container')



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

   //ask at office hours how to fix function  
function scheduleTrack() {
     var presentTime = moment().hour();

        $('.time-block').each(function () {
            var timeSlot = parseInt($(this).attr('hour')); 
        
            if(timeSlot < presentTime) {
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            }
    });
 
    };
    
    $("#nine .description").val(localStorage.getItem("nine"));
    $("#ten .description").val(localStorage.getItem("ten"));
    $("#eleven .description").val(localStorage.getItem("eleven"));
    $("#twelve .description").val(localStorage.getItem("twelve"));
    $("#one .description").val(localStorage.getItem("one"));
    $("#two .description").val(localStorage.getItem("two"));
    $("#three .description").val(localStorage.getItem("three"));
    $("#four .description").val(localStorage.getItem("four"));
    $("#five .description").val(localStorage.getItem("five"));

    scheduleTrack();
