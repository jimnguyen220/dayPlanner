//inserts current date
var insertDate = $("#currentDay")

insertDate.text(moment().format('LL'));


var nineEl = $(".nine");
var tenEl = $(".ten");
var elevenEl = $(".eleven");
var twelveEl = $(".twelve");
var oneEl = $(".one");
var twoEl = $(".two");
var threeEl = $(".three");
var fourEl = $(".four");;
var fiveEl = $(".five");

//timer code
var currentText = $(".form-control");
var currentTime = $(".time");
var t = moment().format('HH'); 
//to update time insert '{hour:XX}' inside moment() with 'XX' representing hour in military time to simulate what hour you want


if (t < 9) {
    nineEl.addClass("future");
    tenEl.addClass("future");
    elevenEl.addClass("future");
    twelveEl.addClass("future");
    oneEl.addClass("future");
    twoEl.addClass("future");
    threeEl.addClass("future");
    fourEl.addClass("future");
    fiveEl.addClass("future");
} else if (t < 9 || t < 10) {
    nineEl.addClass("present");
    tenEl.addClass("future");
    elevenEl.addClass("future");
    twelveEl.addClass("future");
    oneEl.addClass("future");
    twoEl.addClass("future");
    threeEl.addClass("future");
    fourEl.addClass("future");
    fiveEl.addClass("future");
} else if (t < 10 || t < 11) {
    nineEl.addClass("past");
    tenEl.addClass("present");
    elevenEl.addClass("future");
    twelveEl.addClass("future");
    oneEl.addClass("future");
    twoEl.addClass("future");
    threeEl.addClass("future");
    fourEl.addClass("future");
    fiveEl.addClass("future");
} else if (t < 11 || t < 12) {
    nineEl.addClass("past");
    tenEl.addClass("past");
    elevenEl.addClass("present");
    twelveEl.addClass("future");
    oneEl.addClass("future");
    twoEl.addClass("future");
    threeEl.addClass("future");
    fourEl.addClass("future");
    fiveEl.addClass("future");
} else if (t < 12 || t < 13) {
    nineEl.addClass("past");
    tenEl.addClass("past");
    elevenEl.addClass("past");
    twelveEl.addClass("present");
    oneEl.addClass("future");
    twoEl.addClass("future");
    threeEl.addClass("future");
    fourEl.addClass("future");
    fiveEl.addClass("future");
} else if (t < 13 || t < 14) {
    nineEl.addClass("past");
    tenEl.addClass("past");
    elevenEl.addClass("past");
    twelveEl.addClass("past");
    oneEl.addClass("present");
    twoEl.addClass("future");
    threeEl.addClass("future");
    fourEl.addClass("future");
    fiveEl.addClass("future");
} else if (t < 14 || t < 15) {
    nineEl.addClass("past");
    tenEl.addClass("past");
    elevenEl.addClass("past");
    twelveEl.addClass("past");
    oneEl.addClass("past");
    twoEl.addClass("present");
    threeEl.addClass("future");
    fourEl.addClass("future");
    fiveEl.addClass("future");
} else if (t < 15 || t < 16) {
    nineEl.addClass("past");
    tenEl.addClass("past");
    elevenEl.addClass("past");
    twelveEl.addClass("past");
    oneEl.addClass("past");
    twoEl.addClass("past");
    threeEl.addClass("present");
    fourEl.addClass("future");
    fiveEl.addClass("future");
} else if (t < 16 || t < 17) {
    nineEl.addClass("past");
    tenEl.addClass("past");
    elevenEl.addClass("past");
    twelveEl.addClass("past");
    oneEl.addClass("past");
    twoEl.addClass("past");
    threeEl.addClass("past");
    fourEl.addClass("present");
    fiveEl.addClass("future");
} else if (t < 17 || t < 18) {
    nineEl.addClass("past");
    tenEl.addClass("past");
    elevenEl.addClass("past");
    twelveEl.addClass("past");
    oneEl.addClass("past");
    twoEl.addClass("past");
    threeEl.addClass("past");
    fourEl.addClass("past");
    fiveEl.addClass("present");
} else if (t < 18 || t <= 23) {
    nineEl.addClass("past");
    tenEl.addClass("past");
    elevenEl.addClass("past");
    twelveEl.addClass("past");
    oneEl.addClass("past");
    twoEl.addClass("past");
    threeEl.addClass("past");
    fourEl.addClass("past");
    fiveEl.addClass("past");
} 
else {
    nineEl.addClass("future");
    tenEl.addClass("future");
    elevenEl.addClass("future");
    twelveEl.addClass("future");
    oneEl.addClass("future");
    twoEl.addClass("future");
    threeEl.addClass("future");
    fourEl.addClass("future");
    fiveEl.addClass("future");
}

renderContent();







function renderContent () {
    var nineText = localStorage.getItem("nineText");
    var tenText = localStorage.getItem("tenText");
    var elevenText = localStorage.getItem("elevenText");
    var twelveText = localStorage.getItem("twelveText");
    var oneText = localStorage.getItem("oneText");
    var twoText = localStorage.getItem("twoText");
    var threeText = localStorage.getItem("threeText");
    var fourText = localStorage.getItem("fourText");
    var fiveText = localStorage.getItem("fiveText");

    if (nineText === null || tenText === null || elevenText === null || twelveText === null || oneText === null || twoText === null || threeText === null || fourText === null || fiveText === null) {
        return
    }

    nineEl.attr("value", nineText);
    tenEl.attr("value", tenText);
    elevenEl.attr("value", elevenText);
    twelveEl.attr("value", twelveText);
    oneEl.attr("value", oneText);
    twoEl.attr("value", twoText);
    threeEl.attr("value", threeText);
    fourEl.attr("value", fourText);
    fiveEl.attr("value", fiveText);

}

function setItem() {
    var nineText = document.getElementById("nine-text").value;
    var tenText = document.getElementById("ten-text").value;
    var elevenText = document.getElementById("eleven-text").value;
    var twelveText = document.getElementById("twelve-text").value;
    var oneText = document.getElementById("one-text").value;
    var twoText = document.getElementById("two-text").value;
    var threeText = document.getElementById("three-text").value;
    var fourText = document.getElementById("four-text").value;
    var fiveText = document.getElementById("five-text").value;

    localStorage.setItem("nineText", nineText);
    localStorage.setItem("tenText", tenText);
    localStorage.setItem("elevenText", elevenText);
    localStorage.setItem("twelveText", twelveText);
    localStorage.setItem("oneText", oneText);
    localStorage.setItem("twoText", twoText);
    localStorage.setItem("threeText", threeText);
    localStorage.setItem("fourText", fourText);
    localStorage.setItem("fiveText", fiveText);
};

$(".saveBtn").on('click', setItem);