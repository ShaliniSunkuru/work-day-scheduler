
var numberOfWorkingHours = 9;
var hourRow;
var timeCol;
var textCol;


setCurrentDay();
setTimeblocks();

function setCurrentDay() {
    //p element to display current day
    var currentDayP = $('#currentDay');

    //get today's day using dayjs library
    var currentDay = dayjs().format("D MMMM YYYY");

    currentDayP.text(currentDay);
}

function setTimeblocks() {
    //set time on the time column on timeblocks
    var startHour = dayjs().set('hour', 8).set('minute', 0).set('second', 0);
    for (var i = 1; i <= numberOfWorkingHours; i++) {
        var thisHour = startHour.add(i, 'hour');
        hourRow = $("#hour" + i);
        timeCol = hourRow.children(".hour");
        timeCol.text(thisHour.format("h A"));
    
    //set color on timeblock textarea
    var inputRow = $("#text" + i);
    var thisTextarea = inputRow.children(".workDesc");
    if(dayjs().isAfter(thisHour) && dayjs().isBefore(thisHour.add(1, 'hour'))){
            // if current hour is within timeblock row hour, present
        console.log("this hour");
        thisTextarea.addClass('present');
    }else if(dayjs().isAfter(thisHour)){ 
            //if current hour has past timeblock row hour, past
        console.log("past");
        thisTextarea.addClass('past');
    }else if(dayjs().isBefore(thisHour)){
            //if current hour is before timeblock row hour, future
        console.log("future");
        thisTextarea.addClass('future');
    }
}
}



