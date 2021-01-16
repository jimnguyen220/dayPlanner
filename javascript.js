//inserts current date
var insertDate = $("#currentDay").text(GetCurrentDate());

function GetCurrentDate() {
    var tDate = new Date();
    var dd = tDate.getDate();
    var MM = tDate.getMonth();
    var yyyy = tDate.getFullYear();
    var currentDate = (MM+1)  + "-" + dd + "-" + yyyy;
    return currentDate;
};

//schedule