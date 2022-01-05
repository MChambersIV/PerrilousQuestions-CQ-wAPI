var question = document.getElementById('qquestion');
var answer = document.getElementById('qanswer');
var start = document.getElementById('qstart');
var timer = document.getElementById('qtimer');

var qlist = [
    "Of the three major coding languages, which is the most integral part of a webpage",
    "What is Javascript's file extension?",
    "You notice an error on a webpage, you open the developer tools of your browser to find the error in the code, where do you look first?",
    "Which file type is not typically associated with a webpage?",
];

var qans1 = [
    "HTML",
    "CSS",
    "Javascript",
];

var qans2 = [
    ".jar",
    ".jss",
    ".js",
    ".java"
];

var qans3 = [
    "Storage",
    "Memory",
    "Application",
    "Console",

];

var qans4 = [
    ".html",
    ".mp3",
    ".js",
    ".css",
    

];


function runClock() {
    var time = 30;
    var timeCount = setInterval(function () {

        if (timeCount > 1) {
            timer.textContent = time + ' seconds left!';
            time--;
        } else if (timeCount === 1) {
            timer.textContent = time + ' second left!'
            time--;
        } else {
            timer.textContent = 'TIMES UP!';
            clearInterval(timeCount);
            
        }
    }, 1000);

};

start.addEventListener("click", runClock)