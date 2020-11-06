var timeEl = document.querySelector(".timer");
var questEl = document.getElementById("question");
var startEl = document.getElementById("start")
var oneQ = document.getElementById("one")
var twoQ = document.getElementById("two")
var threeQ = document.getElementById("three")
var fourQ = document.getElementById("four")
var checkAnswer = document.getElementById("response")
var secondsLeft = 100;

startEl.addEventListener("click", function () {  //Start time and remove welcome banner
    setTime();
    startEl.style.display = "none"

});


function setTime() {
    var timerInterval = setInterval(function () {  //timer start
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;  

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}


startEl.addEventListener("click", function () {  //question 1
    questEl.textContent = "Question 1"
    oneQ.textContent = "Answer 1"  //Correct Answer
    twoQ.textContent = "Answer 2"
    threeQ.textContent = "Answer 3"
    fourQ.textContent = "Answer 4"

    oneQ.addEventListener("click",function(){
      questiontwo()

    } )
    twoQ.addEventListener("click",function(){
        secondsLeft=secondsLeft - 10
        questiontwo()
  
      } )
      threeQ.addEventListener("click",function(){
        secondsLeft=secondsLeft - 10
        questiontwo()
  
      } )
      fourQ.addEventListener("click",function(){
        secondsLeft=secondsLeft - 10
        questiontwo()
  
      } )








});



function questiontwo(){
    questEl.textContent = "Question 2"
    oneQ.textContent = "Answer one"  
    twoQ.textContent = "Answer two"
    threeQ.textContent = "Answer three"  //Correct Answer
    fourQ.textContent = "Answer four"

    oneQ.addEventListener("click",function(){
        secondsLeft=secondsLeft - 10
        questionthree()
  
      } )
      twoQ.addEventListener("click",function(){
          secondsLeft=secondsLeft - 10
          questionthree()
    
        } )
        threeQ.addEventListener("click",function(){
          
          questionthree()
    
        } )
        fourQ.addEventListener("click",function(){
          secondsLeft=secondsLeft - 10
          questionthree()
    
        } )
  
    
}

function questionthree(){
    questEl.textContent = "Question 3 blah blah"
    oneQ.textContent = "Answer wan"  
    twoQ.textContent = "Answer too"   //Correct Answer
    threeQ.textContent = "Answer trey"  
    fourQ.textContent = "Answer for"

    oneQ.addEventListener("click",function(){
        secondsLeft=secondsLeft - 10
        questionfour()
  
      } )
      twoQ.addEventListener("click",function(){
          
          questionfour()
    
        } )
        threeQ.addEventListener("click",function(){
            secondsLeft=secondsLeft - 10
          questionfour()
    
        } )
        fourQ.addEventListener("click",function(){
          secondsLeft=secondsLeft - 10
          questionfour()
    
        } )
    
}

function questionfour(){
    questEl.textContent = "Question 4 blah blah"
    oneQ.textContent = "Answer wand"  
    twoQ.textContent = "Answer to"
    threeQ.textContent = "Answer tres"  
    fourQ.textContent = "Answer quatro" //Correct Answer

    oneQ.addEventListener("click",function(){
        secondsLeft=secondsLeft - 10
        gameOver()
  
      } )
      twoQ.addEventListener("click",function(){
        secondsLeft=secondsLeft - 10
          gameover()
    
        } )
        threeQ.addEventListener("click",function(){
            secondsLeft=secondsLeft - 10
          gameOver()
    
        } )
        fourQ.addEventListener("click",function(){
          gameOver()
          
    
        } )
    
}

function gameOver(){
    score = secondsLeft
    alert(score)

}