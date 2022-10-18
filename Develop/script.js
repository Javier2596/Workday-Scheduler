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





    
//function scheduleTrack() {
  //  var presentTime = moment().hour();

    //$('.time-block').each(function() {
        //fix this
      //  var timeSlot = $('.hour').val();
    
        //if(timeSlot === presentTime) {
          //  $('.time-block').addClass("present");
            //$('.time-block').removeClass("past");
            //$('.time-block').removeClass("future");

       // } else if(timeSlot < presentTime) {
           // $('.time-block').addClass("past");
         //   $('.time-block').removeClass("present");
            //$('.time-block').removeClass("future");
       // } else {
         //   $('.time-block').addClass("future");
           // $('.time-block').removeClass("past");
            //$('.time-block').removeClass("present");        
       // }
        //console.log(timeSlot);
    //});
 
  //  };
    
    $("#nine .description").val(localStorage.getItem("nine"));
    $("#ten .description").val(localStorage.getItem("ten"));
    $("#eleven .description").val(localStorage.getItem("eleven"));
    $("#twelve .description").val(localStorage.getItem("twelve"));
    $("#one .description").val(localStorage.getItem("one"));
    $("#two .description").val(localStorage.getItem("two"));
    $("#three .description").val(localStorage.getItem("three"));
    $("#four .description").val(localStorage.getItem("four"));
    $("#five .description").val(localStorage.getItem("five"));

//    scheduleTrack();
