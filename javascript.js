//inserts current date
var insertDate = $("#currentDay")

insertDate.text(moment().format('LL'));

//daily planner code here
var textNine = document.getElementsByName("nine").value;
var btnNine = document.getElementById("btnNine");


var nineText = localStorage.getItem("nineText");

textNine.textContent = nineText;

btnNine.addEventListener("click", function() {
    
    localStorage.setItem("nineText", nineText);
});



// var currentText = $(".form-control");
// var currentTime = $(".time");
// var hour = new Date().getHours();
// if (hour >= 9 && hour <= 10) {
//     currentTime.addClass("present");
//     currentText.addClass("present");
// } else if(hour >= 10 && hour <=11) {
//     currentTime.addClass("present");
//     currentText.addClass("present");
// } else if (hour >= 11 && hour <= 12) {
//     currentTime.addClass("present");
//     currentText.addClass("present");
// } else if (hour >= 12 && hour <= 1){
//     currentTime.addClass("present");
//     currentText.addClass("present");
// } else if (hour >= 1 && hour <= 2){
//     currentTime.addClass("present");
//     currentText.addClass("present");
// } else if (hour >= 2 && hour <= 3){
//     currentTime.addClass("present");
//     currentText.addClass("present");
// } else if (hour >= 3 && hour <= 4){
//     currentTime.addClass("present");
//     currentText.addClass("present");
// }else if (hour >= 4 && hour <= 5){
//     currentTime.addClass("present");
//     currentText.addClass("present");
// }else {
//     if (hour <= 9 && hour <10) {
//         currentTime.addClass("future");
//         currentText.addClass("future");
//     }
//     else if (hour <= 10 && hour <11) {
//         currentTime.addClass("future");
//         currentText.addClass("future");
//     } else if (hour <= 11 && hour <12) {
//         currentTime.addClass("future");
//         currentText.addClass("future");
//     } else if (hour <= 12 && hour <1) {
//         currentTime.addClass("future");
//         currentText.addClass("future");
//     } else if (hour <= 1 && hour <2) {
//         currentTime.addClass("future");
//         currentText.addClass("future");
//     } else if (hour <= 2 && hour <3) {
//         currentTime.addClass("future");
//         currentText.addClass("future");
//     } else if (hour <= 3 && hour <4) {
//         currentTime.addClass("future");
//         currentText.addClass("future");
//     } else if (hour <= 4 && hour <5) {
//         currentTime.addClass("future");
//         currentText.addClass("future");
//     }else {
//         currentTime.addClass("past");
//         currentText.addClass("past");
//     }
// }

