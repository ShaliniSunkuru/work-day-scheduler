
var numberOfWorkingHours = 9;
var hourRow;
var timeCol;
var textCol;
var inputRow = $(".input-group");
var localData = [];

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
        setColor(thisHour, i);
    }
}

function setColor(rowHour, i){
    var inputRow = $("#text" + i);
    var thisTextarea = inputRow.children(".workDesc");
    if(dayjs().isAfter(rowHour) && dayjs().isBefore(rowHour.add(1, 'hour'))){
            // if current hour is within timeblock row hour, present
        // console.log("this hour");
        thisTextarea.addClass('present');
    }else if(dayjs().isAfter(rowHour)){ 
            //if current hour has past timeblock row hour, past
        // console.log("past");
        thisTextarea.addClass('past');
    }else if(dayjs().isBefore(rowHour)){
            //if current hour is before timeblock row hour, future
        console.log("future");
        thisTextarea.addClass('future');
    }
}

inputRow.on("click",".saveBtn", function(event){
    // console.log("button clicked")
    var thisButton = $(event.target);
    var thisText = thisButton.siblings(".workDesc").val();
    var thisId = thisButton.parent().attr("id");
    var thisData = {
        id: thisId,
        text: thisText
    }
    console.log(thisData)
    localData.push(thisData);
    console.log(localData)
    
})


