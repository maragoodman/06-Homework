var todaysDate = $(".lead");
var plannerContainer = $(".container");
var hoursDisplayed = 12;
var hoursBefore = 3;

var fullDate = new Date();
console.log(fullDate);

//convert month to 2 digits
var twoDigitMonth =
  fullDate.getMonth().length + 1 === 1
    ? fullDate.getMonth() + 1
    : "0" + (fullDate.getMonth() + 1);

var currentDate =
  fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
console.log(currentDate);
todaysDate.append(currentDate);

function generateTime() {
  var jumboContainer = $("<div>");
  jumboContainer.addClass("jumbotron");
  plannerContainer.append(jumboContainer);
  for (var i = 0; i < hoursDisplayed; i++) {
    if (hoursBefore > 0) {
      var hourName = $("<p>")
        .text(
          moment()
            .subtract(hoursBefore, "h")
            .format("hA")
        )
        .addClass("hour");
      hoursBefore--;
    } else {
      var hourName = $("<p>")
        .text(
          moment()
            .add(i - 3, "h")
            .format("hA")
        )
        .addClass("hour");
    }
    if (i === 3) {
      var hourTextArea = $("<textarea>").addClass("present");
    } else if (i > 3) {
      var hourTextArea = $("<textarea>").addClass("future");
    } else {
      var hourTextArea = $("<textarea>").addClass("past");
    }
    var saveIcon = $("<i>").addClass("far fa-save");
    var saveBtn = $("<button>")
      .addClass("saveBtn")
      .append(saveIcon)
      .on("click", saveEvent);
    var hourRow = $("<div>")
      .addClass("row")
      .append(hourName, hourTextArea, saveBtn);
    jumboContainer.append(hourRow);
  }
}

function saveEvent() {
  alert("Your schedule has been saved!");
}
// function to clear storage and reload page
// function reloadCal() {
//   var reloadContainer = $("<div").addClass("reload");
//   var reloadBtn = $("<button>").addClass("reloadBtn").on("click", function(){
//     localStorage.clear();
//   location.reload();
//   }));
//   reloadContainer.append("reloadBtn");
// }

generateTime();
