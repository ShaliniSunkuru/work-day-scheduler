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
    var numberOfWorkingHours = 9;
    var startHour = dayjs().set('hour', 8).set('minute', 0).set('second', 0);
    for (var i = 1; i <= numberOfWorkingHours; i++) {
        var thisHour = startHour.add(i, 'hour');
        var hourRow = $("#hour" + i);
        var timeCol = hourRow.children(".hour");
        timeCol.text(thisHour.format("h A"));
    
        //set color on timeblock textarea
        setColor(thisHour, i);
    }
}

function setColor(rowHour, i){
    var textRow = $("#text" + i);
    var thisTextarea = textRow.children(".workDesc");
    if(dayjs().isAfter(rowHour) && dayjs().isBefore(rowHour.add(1, 'hour'))){
            // if current hour is within timeblock row hour, present
        thisTextarea.addClass('present');
    }else if(dayjs().isAfter(rowHour)){ 
            //if current hour has past timeblock row hour, past
        thisTextarea.addClass('past');
    }else if(dayjs().isBefore(rowHour)){
            //if current hour is before timeblock row hour, future
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


