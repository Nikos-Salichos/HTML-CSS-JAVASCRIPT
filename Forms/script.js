function ToggleCourseForm() {
    let x = document.getElementById("courseId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function ToggleTrainerForm() {
    let x = document.getElementById("trainerId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function ToggleStudentForm() {
    let x = document.getElementById("studentId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function ToggleAssignmentForm() {
    let x = document.getElementById("assignmentId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


var flname = document.querySelectorAll(".flname");
var submit = document.querySelector("#submit");

function validateElement(flname) {
    if (flname.validity.patternMismatch) {
        flname.setCustomValidity('Only Letters accepted');
    } else if (flname.validity.valueMissing) {
        flname.setCustomValidity('Required, please fill the field');
    }
    else {
        flname.setCustomValidity('');
    }
}


submit.addEventListener('click', () => {
    var flnames = document.getElementsByClassName('flname');
    for (var i = 0; i < flnames.length; i++) {
        validateElement(flnames[i]);
    }
})




//Minimum start date = today for start date
var todayStart = new Date();
var ddStart = todayStart.getDate();
var mmStart = todayStart.getMonth() + 1;
var yyyyStart = todayStart.getFullYear();
if (ddStart < 10) {
    ddStart = '0' + ddStart
}
if (mmStart < 10) {
    mmStart = '0' + mmStart
}

todayStart = yyyyStart + '-' + mmStart + '-' + ddStart;
document.getElementById("startDate").setAttribute("min", todayStart);


//Minimum start date = today for end date
var todayEnd = new Date();
var ddEnd = todayEnd.getDate();
var mmEnd = todayEnd.getMonth() + 1;
var yyyyEnd = todayEnd.getFullYear();
if (ddEnd < 10) {
    ddEnd = '0' + ddEnd
}
if (mmEnd < 10) {
    mmEnd = '0' + mmEnd
}

todayEnd = yyyyEnd + '-' + mmEnd + '-' + ddEnd;
document.getElementById("endDate").setAttribute("min", todayEnd);




