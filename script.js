//Toggle button show/hide table
function ToggleCourse() {
    let x = document.getElementById("courseId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function ToggleTrainer() {
    let x = document.getElementById("trainerId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function ToggleStudent() {
    let x = document.getElementById("studentId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function ToggleAssignment() {
    let x = document.getElementById("assignmentId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function ToggleTrainersPerCourse() {
    let x = document.getElementById("trainersPerCourseId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function ToggleStudentsPerCourse() {
    let x = document.getElementById("studentsPerCourseId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function ToggleAssignmentsPerCourse() {
    let x = document.getElementById("assignmentsPerCourseId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function ToggleAssignmentsPerStudentPerCourse() {
    let x = document.getElementById("assignmentsPerStudentPerCourseId");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


//Toggle Button change color
var button1 = document.getElementById('toggleCourse')
var color1 = button1.style.backgroundColor;
button1.addEventListener('click', function () {
    color1 = button1.style.backgroundColor = color1 === 'Lightblue' ? 'Orange' : 'Lightblue';
});

var button2 = document.getElementById('ToggleTrainer')
var color2 = button2.style.backgroundColor;
button2.addEventListener('click', function () {
    color2 = button2.style.backgroundColor = color2 === 'Lightblue' ? 'Orange' : 'Lightblue';
});

var button3 = document.getElementById('ToggleStudent')
var color3 = button3.style.backgroundColor;
button3.addEventListener('click', function () {
    color3 = button3.style.backgroundColor = color3 === 'Lightblue' ? 'Orange' : 'Lightblue';
});

var button4 = document.getElementById('ToggleAssignment')
var color4 = button4.style.backgroundColor;
button4.addEventListener('click', function () {
    color4 = button4.style.backgroundColor = color4 === 'Lightblue' ? 'Orange' : 'Lightblue';
});

var button5 = document.getElementById('ToggleTrainersPerCourse')
var color5 = button5.style.backgroundColor;
button5.addEventListener('click', function () {
    color5 = button5.style.backgroundColor = color5 === 'Lightblue' ? 'Orange' : 'Lightblue';
});

var button6 = document.getElementById('ToggleStudentsPerCourse')
var color6 = button6.style.backgroundColor;
button6.addEventListener('click', function () {
    color6 = button6.style.backgroundColor = color6 === 'Lightblue' ? 'Orange' : 'Lightblue';
});

var button7 = document.getElementById('ToggleAssignmentsPerCourse')
var color7 = button7.style.backgroundColor;
button7.addEventListener('click', function () {
    color7 = button7.style.backgroundColor = color7 === 'Lightblue' ? 'Orange' : 'Lightblue';
});

var button8 = document.getElementById('ToggleAssignmentsPerStudentPerCourse')
var color8 = button8.style.backgroundColor;
button8.addEventListener('click', function () {
    color8 = button8.style.backgroundColor = color8 === 'Lightblue' ? 'Orange' : 'Lightblue';
});


//Scrolling sticky Home Button
$(document).ready(function () {
    $(window).bind('scroll', function () {
        var distance = 10;
        if ($(window).scrollTop() > distance) {
            $('.logo').addClass('scrolled');
        }
        else {
            $('.logo').removeClass('scrolled');
        }
    });
});

$(document).ready(function () {
    $(".deleteLink").click(function () {
        var answer = confirm("Είστε σίγουροι ότι θέλετε να σβήσετε την εγγραφή?");
        if (answer == true) {
            $(this).parent().parent().fadeOut();
        }
        else {
            return false;
        }
    });
});



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}