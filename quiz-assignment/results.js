var records = JSON.parse(localStorage.getItem("score"));
var redirect = document.getElementById("restart")
var clearScores = document.getElementById("clear")


for(i=0;i<records.length; i++){
  var li =  document.createElement("li")
  li.textContent=records[i].name +" - "+ records[i].score
  document.getElementById("list").appendChild(li)

}

redirect.addEventListener("click", function() {
    


    window.location.assign("index.html")
})

  clearScores.addEventListener("click", function(){

    storage.clear();
  })