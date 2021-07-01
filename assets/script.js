$(document).ready(function() {
    var today =moment().format('LLLL')
    $("#currentDay").text(today);
});

function updateColor () {
    var today = moment();
    var currentHour = today.hours();
    console.log(currentHour);
    $(".time-block").each(function () {
        var rowHour = parseInt($(this).attr("id"));
         console.log(rowHour);
        if (rowHour < currentHour) {
            $(this).addClass("past");
        } else if (rowHour > currentHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
    
        }
    })
 }
 updateColor ();

 
 $(".saveBtn").on("click", function () {
    var agendaTime = $(this).parent().text();
    var agenda = $(this).siblings(".col-sm-10").val();
    localStorage.setItem(agendaTime, agenda);   
         console.log(agenda);
         console.log(agendaTime);
 });
