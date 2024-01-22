
//Global variables
var inputRow = $(".input-group");
var localData = [];

//display current day on header
setCurrentDay();
//set time and color on timeblocks
setTimeblocks();
//display existing work descriptions on textareas
setText();

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
        timeCol.text(thisHour.format("hA"));
        //set color on timeblock textarea
        setColor(thisHour, i);
    }
}

function setColor(rowHour, i) {
    var textRow = $("#text" + i);
    var thisTextarea = textRow.children(".workDesc");
    if (dayjs().isAfter(rowHour)) {
        //if current hour has past timeblock row hour, past
        thisTextarea.addClass('past');
    } else if (dayjs().isBefore(rowHour)) {
        //if current hour is before timeblock row hour, future
        thisTextarea.addClass('future');
    }else {
        // if current hour is within timeblock row hour, present
        thisTextarea.addClass('present');
    }
} 

function setText() {
    //get data from local storage and assign it to textarea elements
    if (localStorage.getItem("workData") !== null) {
        localData = JSON.parse(localStorage.getItem("workData"));
        localData.forEach(function display(data) {
            var inputGrp = $("#" + data.id);
            inputGrp.children(".workDesc").val(data.text);
        });
    }
}

//event listener for save buttons
inputRow.on("click", ".saveBtn", function (event) {
    var thisButton = $(event.target);
    var thisText = thisButton.siblings(".workDesc").val().trim();
    var thisId = thisButton.parent().attr("id");
    var thisData = {
        id: thisId,
        text: thisText
    }
    if (localStorage.getItem("workData") !== null) {
        localData = JSON.parse(localStorage.getItem("workData"));
    }
    localData.push(thisData);
    //update localStorage
    localStorage.setItem("workData", JSON.stringify(localData));
})

