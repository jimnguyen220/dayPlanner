//inserts current date
var insertDate = $("#currentDay")

insertDate.text(moment().format('LL'));


// var btnNine = document.getElementById("btnNine");
var saveBtn = document.getElementsByClassName("saveBtn");
var nineEl = document.querySelector("#nine");
var tenEl = document.querySelector("#ten");
var elevenEl = document.querySelector("#eleven");
var twelveEl = document.querySelector("#twelve");
var oneEl = document.querySelector("#one");
var twoEl = document.querySelector("#two");
var threeEl = document.querySelector("#three");
var fourEl = document.querySelector("#four");
var fiveEl = document.querySelector("#five");

//timer code
var currentText = $(".form-control");
var currentTime = $(".time");
var t = new Date().getHours();

if (t < 9 || t < 10) {
    nineEl.setAttribute("class", "form-control present");
    tenEl.setAttribute("class", "form-control future");
    elevenEl.setAttribute("class", "form-control future");
    twelveEl.setAttribute("class", "form-control future");
    oneEl.setAttribute("class", "form-control future");
    twoEl.setAttribute("class", "form-control future");
    threeEl.setAttribute("class", "form-control future");
    fourEl.setAttribute("class", "form-control future");
    fiveEl.setAttribute("class", "form-control future");
} else if (t < 10 || t < 11) {
    nineEl.setAttribute("class", "form-control past");
    tenEl.setAttribute("class", "form-control present");
    elevenEl.setAttribute("class", "form-control future");
    twelveEl.setAttribute("class", "form-control future");
    oneEl.setAttribute("class", "form-control future");
    twoEl.setAttribute("class", "form-control future");
    threeEl.setAttribute("class", "form-control future");
    fourEl.setAttribute("class", "form-control future");
    fiveEl.setAttribute("class", "form-control future");
} else if (t < 11 || t < 12) {
    nineEl.setAttribute("class", "form-control past");
    tenEl.setAttribute("class", "form-control past");
    elevenEl.setAttribute("class", "form-control present");
    twelveEl.setAttribute("class", "form-control future");
    oneEl.setAttribute("class", "form-control future");
    twoEl.setAttribute("class", "form-control future");
    threeEl.setAttribute("class", "form-control future");
    fourEl.setAttribute("class", "form-control future");
    fiveEl.setAttribute("class", "form-control future");
} else if (t < 12 || t < 13) {
    nineEl.setAttribute("class", "form-control past");
    tenEl.setAttribute("class", "form-control past");
    elevenEl.setAttribute("class", "form-control past");
    twelveEl.setAttribute("class", "form-control present");
    oneEl.setAttribute("class", "form-control future");
    twoEl.setAttribute("class", "form-control future");
    threeEl.setAttribute("class", "form-control future");
    fourEl.setAttribute("class", "form-control future");
    fiveEl.setAttribute("class", "form-control future");
} else if (t < 13 || t < 14) {
    nineEl.setAttribute("class", "form-control past");
    tenEl.setAttribute("class", "form-control past");
    elevenEl.setAttribute("class", "form-control past");
    twelveEl.setAttribute("class", "form-control past");
    oneEl.setAttribute("class", "form-control present");
    twoEl.setAttribute("class", "form-control future");
    threeEl.setAttribute("class", "form-control future");
    fourEl.setAttribute("class", "form-control future");
    fiveEl.setAttribute("class", "form-control future");
} else if (t < 14 || t < 14) {
    nineEl.setAttribute("class", "form-control past");
    tenEl.setAttribute("class", "form-control past");
    elevenEl.setAttribute("class", "form-control past");
    twelveEl.setAttribute("class", "form-control past");
    oneEl.setAttribute("class", "form-control past");
    twoEl.setAttribute("class", "form-control present");
    threeEl.setAttribute("class", "form-control future");
    fourEl.setAttribute("class", "form-control future");
    fiveEl.setAttribute("class", "form-control future");
} else if (t < 14 || t < 15) {
    tenEl.setAttribute("class", "form-control past");
    elevenEl.setAttribute("class", "form-control past");
    twelveEl.setAttribute("class", "form-control past");
    oneEl.setAttribute("class", "form-control past");
    twoEl.setAttribute("class", "form-control past");
    threeEl.setAttribute("class", "form-control present");
    fourEl.setAttribute("class", "form-control future");
    fiveEl.setAttribute("class", "form-control future");
} else if (t < 15 || t < 16) {
    tenEl.setAttribute("class", "form-control past");
    elevenEl.setAttribute("class", "form-control past");
    twelveEl.setAttribute("class", "form-control past");
    oneEl.setAttribute("class", "form-control past");
    twoEl.setAttribute("class", "form-control past");
    threeEl.setAttribute("class", "form-control past");
    fourEl.setAttribute("class", "form-control present");
    fiveEl.setAttribute("class", "form-control future");
} else if (t < 16 || t < 17) {
    tenEl.setAttribute("class", "form-control past");
    elevenEl.setAttribute("class", "form-control past");
    twelveEl.setAttribute("class", "form-control past");
    oneEl.setAttribute("class", "form-control past");
    twoEl.setAttribute("class", "form-control past");
    threeEl.setAttribute("class", "form-control past");
    fourEl.setAttribute("class", "form-control past");
    fiveEl.setAttribute("class", "form-control present");
} else {

}

//tried getting this code to work because it is cleaner, but unable to update object on local storage 
// var plannerContent = {
//     nineContent: nineEl.value,
//     tenContent: tenEl.value,
//     elevenContent: elevenEl.value,
//     twelveContent: twelveEl.value,
//     oneContent: oneEl.value,
//     twoContent: twoEl.value,
//     threeContent: threeEl.value,
//     fourContent: fourEl.value,
//     fiveContent: fiveEl.value
// };

// btnNine.addEventListener("click", function(event) {
//     event.preventDefault();
//     localStorage.setItem("plannerContent", JSON.stringify(plannerContent));
//     renderObjectContent ();
// });

// renderObjectContent();

// function renderObjectContent() {
//     var lastObjectContent = JSON.parse(localStorage.getItem("plannerContent"));
//     if (lastObjectContent == null) {
//         return
//     }
// }

renderContent();
buttonListener();

function buttonListener() {
    for (i = 0; saveBtn.length; i++) {
        saveBtn[i].addEventListener("click", setItem);
    }
};


//longhanded local storage code, it works, but it's messy
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

    nineEl.setAttribute("value", nineText);
    tenEl.setAttribute("value", tenText);
    elevenEl.setAttribute("value", elevenText);
    twelveEl.setAttribute("value", twelveText);
    oneEl.setAttribute("value", oneText);
    twoEl.setAttribute("value", twoText);
    threeEl.setAttribute("value", threeText);
    fourEl.setAttribute("value", fourText);
    fiveEl.setAttribute("value", fiveText);

}

function setItem() {
    var nineText = document.getElementById("nine").value;
    var tenText = document.getElementById("ten").value;
    var elevenText = document.getElementById("eleven").value;
    var twelveText = document.getElementById("twelve").value;
    var oneText = document.getElementById("one").value;
    var twoText = document.getElementById("two").value;
    var threeText = document.getElementById("three").value;
    var fourText = document.getElementById("four").value;
    var fiveText = document.getElementById("five").value;

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

// ///////////////////////////////////////////////////////////////////////////////