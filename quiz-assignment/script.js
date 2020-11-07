var timeEl = document.querySelector(".timer");
var questEl = document.getElementById("question");
var startEl = document.getElementById("start")
var oneQ = document.getElementById("one")
var twoQ = document.getElementById("two")
var threeQ = document.getElementById("three")
var fourQ = document.getElementById("four")
var scoreReport = document.getElementById("report")
var checkAnswer = document.getElementById("response")
var buttonBar = document.getElementById("buttons")
var formAdd = document.getElementById("theform")
var sub = document.getElementById("submitform")
var finalClick = document.getElementById("button-addon1")
var enterName = document.getElementById("userName")
var secondsLeft = 100;
var userScores = []

sub.style.visibility = "hidden"

startEl.addEventListener("click", function () {  //Start time and remove welcome banner
    setTime();
    startEl.style.display = "none"
});
function setTime() {
    var timerInterval = setInterval(function () {  //timer start
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft < 1) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

function questionOne() {
    questEl.textContent = "Inside which HTML element do we put JavaScript"
    oneQ.textContent = "<script>"  //Correct Answer
    twoQ.textContent = "<js>"
    threeQ.textContent = "<javascript>"
    fourQ.textContent = "<scripting>"

    function removeListenersOne() {
        oneQ.removeEventListener("click", handleOneOne);
        twoQ.removeEventListener("click", handleOneTwo);
        threeQ.removeEventListener("click", handleOneThree);
        fourQ.removeEventListener("click", handleOneFour);
    }

    function handleOneOne() {
        removeListenersOne();
        questiontwo()
    }
    function handleOneTwo() {
        secondsLeft = secondsLeft - 10
        removeListenersOne();
        questiontwo()
    }
    function handleOneThree() {
        secondsLeft = secondsLeft - 10
        removeListenersOne();
        questiontwo()
    }
    function handleOneFour() {
        secondsLeft = secondsLeft - 10
        removeListenersOne();
        questiontwo()
    }


    oneQ.addEventListener("click", handleOneOne);
    twoQ.addEventListener("click", handleOneTwo);
    threeQ.addEventListener("click", handleOneThree);
    fourQ.addEventListener("click", handleOneFour);
}

function questiontwo() {
    questEl.textContent = "How do you write 'Hello World' in an alert box?"
    oneQ.textContent = "msgBox ('Hello World');"
    twoQ.textContent = "alertBob('Hello World');"
    threeQ.textContent = "alert('Hello World');"//Correct Answer
    fourQ.textContent = "msg('Hello World');"

    function removeListenersTwo() {
        oneQ.removeEventListener("click", handleTwoOne);
        twoQ.removeEventListener("click", handleTwoTwo);
        threeQ.removeEventListener("click", handleTwoThree);
        fourQ.removeEventListener("click", handleTwoFour);
    }

    function handleTwoOne() {
        secondsLeft = secondsLeft - 10
        removeListenersTwo();
        questionthree()
    }
    function handleTwoTwo() {
        secondsLeft = secondsLeft - 10
        removeListenersTwo();
        questionthree()
    }
    function handleTwoThree() {
        removeListenersTwo();
        questionthree()
    }
    function handleTwoFour() {
        secondsLeft = secondsLeft - 10
        removeListenersTwo();
        questionthree()
    }

    oneQ.addEventListener("click", handleTwoOne);
    twoQ.addEventListener("click", handleTwoTwo);
    threeQ.addEventListener("click", handleTwoThree);
    fourQ.addEventListener("click", handleTwoFour);
}

function questionthree() {
    questEl.textContent = "How to write an IF statement for executing some code if 'i' is NOT equal to 5?"
    oneQ.textContent = "if i <> 5"
    twoQ.textContent = "if(i<>5)"
    threeQ.textContent = "if i =! 5 then"
    fourQ.textContent = "if(i!=5)"//Correct Answer

    function removeListenersThree() {
        oneQ.removeEventListener("click", handleThreeOne);
        twoQ.removeEventListener("click", handleThreeTwo);
        threeQ.removeEventListener("click", handleThreeThree);
        fourQ.removeEventListener("click", handleThreeFour);
    }

    function handleThreeOne() {
        secondsLeft = secondsLeft - 10
        removeListenersThree();
        questionfour()
    }
    function handleThreeTwo() {
        secondsLeft = secondsLeft - 10
        removeListenersThree();
        questionfour()
    }
    function handleThreeThree() {
        secondsLeft = secondsLeft - 10
        removeListenersThree();
        questionfour()
    }
    function handleThreeFour() {
        removeListenersThree();
        questionfour()
    }

    oneQ.addEventListener("click", handleThreeOne);
    twoQ.addEventListener("click", handleThreeTwo);
    threeQ.addEventListener("click", handleThreeThree);
    fourQ.addEventListener("click", handleThreeFour);
}

function questionfour() {
    questEl.textContent = "How can you add a comment in Javascript"
    oneQ.textContent = "'This is a comment"
    twoQ.textContent = "//This is a comment"  //Correct Answer
    threeQ.textContent = "<!--This is a comment-->"
    fourQ.textContent = "Not possible in JS"

    function removeListenersFour() {
        oneQ.removeEventListener("click", handleFourOne);
        twoQ.removeEventListener("click", handleFourTwo);
        threeQ.removeEventListener("click", handleFourThree);
        fourQ.removeEventListener("click", handleFourFour);
    }

    function handleFourOne() {
        secondsLeft = secondsLeft - 10
        removeListenersFour();
        gameOver()
    }
    function handleFourTwo() {
        removeListenersFour();
        gameOver()
    }
    function handleFourThree() {
        secondsLeft = secondsLeft - 10
        removeListenersFour();
        gameOver()
    }
    function handleFourFour() {
        secondsLeft = secondsLeft - 10
        removeListenersFour();
        gameOver()
    }

    oneQ.addEventListener("click", handleFourOne);
    twoQ.addEventListener("click", handleFourTwo);
    threeQ.addEventListener("click", handleFourThree);
    fourQ.addEventListener("click", handleFourFour);
}

function gameOver() {
    score = secondsLeft
    questEl.textContent = "All Done"
    scoreReport.textContent = "Your Score is " + score
    buttonBar.style.display = "none"
    timeEl.style.display = "none"
    sub.style.visibility = "visible"
   
}



function submitScore() {
    pushToArray()

    
    
}
finalClick.addEventListener("click", function() {
    
    submitScore()
    localStorage.setItem("score", JSON.stringify(userScores));
    


    window.location.assign("results.html")
})

startEl.addEventListener("click", function () {  //question 1
    questionOne();
});

function pushToArray() {
    userScores.push({"name": enterName.value, "score": score});
    console.log(userScores)
    return userScores;
    
}


