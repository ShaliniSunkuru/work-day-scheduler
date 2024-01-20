var rowNumber = 1;

//p element to display current day
var currentDayP = $('#currentDay'); 

//get today's day using dayjs library
var currentDay = dayjs().format("D MMMM YYYY");

currentDayP.text(currentDay);

//set time for the timeblocks

var startHour = dayjs().set('hour', 9).set('minute', 0).set('second', 0);
// console.log(startHour.format("D M YYYY [at] h mm ss a"));
var numberOfWorkingHours = 9;
for(var i = 0; i < numberOfWorkingHours; i++){
    var thisHour = startHour.add(i, 'hour');
    console.log(thisHour.format("D M YYYY [at] h mm ss a"));
//create time column for timeblocks
var timeCol = $("<div>");
timeCol.addClass("col-2");
timeCol.text(thisHour.format("h a"));

//create textarea column for input text

//create save button column

//Create row and append col to row
var timeblockRow = $("<div>");
timeblockRow.addClass("row text-center");
timeblockRow.attr("id", "row"+(rowNumber+i));
timeblockRow.append(timeCol);

//append row to container
var containerEl = $("#timeblockContainer");
containerEl.append(timeblockRow);
}



