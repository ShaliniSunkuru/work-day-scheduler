var hourCol = $(".hour");

var rowNumber = 1;

//p element to display current day
var currentDayP = $('#currentDay'); 

//get today's day using dayjs library
var currentDay = dayjs().format("D MMMM YYYY");

currentDayP.text(currentDay);

//set time for the timeblocks

var startHour = dayjs().set('hour', 8).set('minute', 0).set('second', 0);
// console.log(startHour.format("D M YYYY [at] h mm ss a"));
var numberOfWorkingHours = 9;
for(var i = 1; i <= numberOfWorkingHours; i++){
    var thisHour = startHour.add(i, 'hour');
    console.log(thisHour.format("D M YYYY [at] h mm ss a"));
    var hourRow=$("#hour"+i);
    hourRow.children(".hour").text(thisHour.format("h a"));
    // hourCol.text(thisHour.format("h a"));
}




