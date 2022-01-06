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
    "",
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

var time = 30;

function runClock() {
    
    timeCount = setInterval(function () {

        if (time > 1) {
            timer.textContent = time + ' seconds left!';
            time--;
        } else if (time === 1) {
            timer.textContent = time + ' second left!'
            time--;
        } else {
            timer.textContent = 'TIMES UP!';
            clearInterval(timeCount);
            
        }
    }, 1000);

};

var qq1 = document.getElementById('qanswer1')
var qq2 = document.getElementById('qanswer2')
var qq3 = document.getElementById('qanswer3')
var qq4 = document.getElementById('qanswer4')

function runQuiz() {
    question.textContent = qlist[0];
    qq1.textContent = qans1[0];
    qq2.textContent = qans1[1];
    qq3.textContent = qans1[2];
    qq4.textContent = qans1[3];

    qq1.addEventListener("click", runQuizTwo);
};

function runQuizTwo() {
    question.textContent = qlist[1];
    qq1.textContent = qans2[0]
    qq2.textContent = qans2[1]
    qq3.textContent = qans2[2]
    qq4.textContent = qans2[3]

    qq3.addEventListener("click", runQuizThree);
};

function runQuizThree() {
    question.textContent = qlist[2];
    qq1.textContent = qans3[0];
    qq2.textContent = qans3[1];
    qq3.textContent = qans3[2];
    qq4.textContent = qans3[3];

    qq4.addEventListener("click", runQuizFour);
};

function runQuizFour() {
    question.textContent = qlist[3];
    qq1.textContent = qans4[0];
    qq2.textContent = qans4[1];
    qq3.textContent = qans4[2];
    qq4.textContent = qans4[3];

    qq2.addEventListener("click", runQuizDone);
};

function runQuizDone() {
    question.style.display = 'none';
    qq1.style.display = 'none';
    qq2.style.display = 'none';
    qq3.style.display = 'none';
    qq4.style.display = 'none';
    
    clearInterval(timeCount);
    return(timeCount);

};

start.addEventListener("click", runClock)
start.addEventListener("click", runQuiz)