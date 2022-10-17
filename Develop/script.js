var dateDisplayEl = $('#date-display');
var planEl = $('.col');
var saveButton = $('.saveBtn');

//displays the current date
function showDate () {
    var currentD = moment().format('dddd, MMMM Do YYYY');
    dateDisplayEl.text(currentD);
}

showDate();
//edit this
function saveEvent() {
    //adds eventlistener on saveBtn
    saveButton.on("click", function() {

        var calNote = $(".description").val();
        var hour = saveButton.parent().attr("id");
        // stores text in local storage
        localStorage.setItem(hour, calNote);
    })
    saveEvent();

    function scheduleTrack() {
    var presentTime = moment().hour()

    $('.time-block').each(function() {
        //fix this
        var timeSlot = parseInt($('.time-block').attr("id").split("hour")[1])
    
        if(timeSlot === presentTime) {
            $('.time-block').addClass("present");
            $('.time-block').removeClass("past");
            $('.time-block').removeClass("future");

        } else if(timeSlot < presentTime) {
            $('.time-block').addClass("past");
            $('.time-block').removeClass("present");
            $('.time-block').removeClass("future");
        } else {
            $('.time-block').addClass("future");
            $('.time-block').removeClass("past");
            $('.time-block').removeClass("present");        
        }
    });

    }
    
    $("#nine .description").val(localStorage.getItem("#nine"));
    $("#ten .description").val(localStorage.getItem("#ten"));
    $("#eleven .description").val(localStorage.getItem("#eleven"));
    $("#twelve .description").val(localStorage.getItem("#twelve"));
    $("#one .description").val(localStorage.getItem("#one"));
    $("#two .description").val(localStorage.getItem("#two"));
    $("#three .description").val(localStorage.getItem("#three"));
    $("#four .description").val(localStorage.getItem("#four"));
    $("#five .description").val(localStorage.getItem("#five"));

    scheduleTrack();
};

