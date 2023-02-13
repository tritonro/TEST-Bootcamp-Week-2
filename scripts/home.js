const recipeButton = document.querySelector("span");
const aF = document.getElementById("animeFrog");

recipeButton.addEventListener("click", hiWorld);
aF.addEventListener("load", myMove);

function hiWorld (){
    window.location.href = "list.html";
}


//test code for frog - fail

function myMove() {
  var elem = document.getElementById("animeFrog");
  var pos = 0;
  elem.style.top = 0;
  elem.style.left =0;
  clearInterval(id);s
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}