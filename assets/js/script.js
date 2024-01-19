//p element to display current day
var currentDayP = $('#currentDay'); 

//get today's day using dayjs library
var currentDay = dayjs().format("D MMMM YYYY");

currentDayP.text(currentDay);


