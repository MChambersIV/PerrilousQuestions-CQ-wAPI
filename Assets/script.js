var question = document.getElementById('qquestion');
var answer = document.getElementById('qanswer');
var start = document.getElementById('qstart');
var timer = document.getElementById('qtimer');
var scores = document.getElementById('qscores');
var scoreBoard = document.getElementById('scoreboard');
var winnerSubmit = document.getElementById('wsub');
var winnerName = document.getElementById('wname')


function hidescore(){scores.style.display = "none"};

hidescore();

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
    "Python",
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
            scores.style.display = "block";
            
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

    qq1.onclick = function() {
        qq1.textContent = "Correct!";
        runQuizTwo();
    };

    qq2.onclick = function() {
        qq2.textContent = "Incorrect -2s";
        time - 2;
    };   
    qq3.onclick = function() {
        qq3.textContent = "Incorrect -2s";
        time - 2;
    };   
    qq4.onclick = function() {
        qq4.textContent = "Incorrect -2s";
        time - 2;
    };     
};

function runQuizTwo() {
    question.textContent = qlist[1];
    qq1.textContent = qans2[0];
    qq2.textContent = qans2[1];
    qq3.textContent = qans2[2];
    qq4.textContent = qans2[3];

    qq3.onclick = function() {
        qq3.textContent = "Correct";
        runQuizThree();
    };
    qq1.onclick = function() {
        qq1.textContent = "Incorrect -2s";
        time - 2;
    };   
    qq2.onclick = function() {
        qq2.textContent = "Incorrect -2s";
        time - 2;
    };   
    qq4.onclick = function() {
        qq2.textContent = "Incorrect -2s";
        time - 2;
    };   
};

function runQuizThree() {
    question.textContent = qlist[2];
    qq1.textContent = qans3[0];
    qq2.textContent = qans3[1];
    qq3.textContent = qans3[2];
    qq4.textContent = qans3[3];

    qq4.onclick = function() {
        qq4.textContent = "Correct";
        runQuizFour();
    };
    qq1.onclick = function() {
        qq1.textContent = "Incorrect -2s";
        time - 2;
    };   
    qq2.onclick = function() {
        qq2.textContent = "Incorrect -2s";
        time - 2;
    };   
    qq3.onclick = function() {
        qq3.textContent = "Incorrect -2s";
        time - 2;
    };
};

function runQuizFour() {
    question.textContent = qlist[3];
    qq1.textContent = qans4[0];
    qq2.textContent = qans4[1];
    qq3.textContent = qans4[2];
    qq4.textContent = qans4[3];

    qq2.onclick = function() {
        qq2.textContent = "Correct!";
        runQuizDone();
    };

    qq1.onclick = function() {
        qq1.textContent = "Incorrect -2s";
        time - 2;
    };
    qq3.onclick = function() {
        qq3.textContent = "Incorrect -2s";
        time - 2;
    };
    qq4.onclick = function() {
        qq4.textContent = "Incorrect -2s";
        time - 2;
    };
};

function runQuizDone() {
    question.style.display = 'none';
    qq1.style.display = 'none';
    qq2.style.display = 'none';
    qq3.style.display = 'none';
    qq4.style.display = 'none';
    
    clearInterval(timeCount);
    runScoreBoard();

};


function runScoreBoard() {
    scores.style.display = "block";
    savedScore();
};

function savedScore() {
    var scores = JSON.parse(localStorage.getItem("winner"));
    console.log(scores);

    
            var savedWinnerRow = document.createElement('tr');
            var savedWinnerN = document.createElement('td');
            var savedWinnerHS = document.createElement('td');

            savedWinnerN.innerHTML = scores.name;
            savedWinnerHS.innerHTML = scores.score;

            scoreBoard.appendChild(savedWinnerRow);
            savedWinnerRow.appendChild(savedWinnerN);
            savedWinnerRow.appendChild(savedWinnerHS);
    
};

winnerSubmit.addEventListener("click", function(event) {
        event.preventDefault();
        
        var highScore = [];

        highScore.push(time+1);

        var winnerRow = document.createElement('tr');
        var winnerN = document.createElement('td');
        var winnerHS = document.createElement('td');


        winnerN.innerHTML = winnerName.value.trim();
        winnerHS.innerHTML = highScore[0];

        scoreBoard.appendChild(winnerRow);
        winnerRow.appendChild(winnerN);
        winnerRow.appendChild(winnerHS);


        var winner = {
        name: winnerName.value.trim(),
        score: highScore[0],
        };
    
    localStorage.setItem("winner", JSON.stringify(winner));
        
    });




start.addEventListener("click", runClock);
start.addEventListener("click", runQuiz);