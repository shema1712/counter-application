var countLabelRef = document.getElementById("countlabel");
var buttonRef = document.getElementById("btnbtn1");
var containerRef = document.getElementById("container");
var counterApp = document.getElementById("counterapp");

var count = 0;

function increase() {
  var increaseRef = document.getElementById("increase");
  increaseRef = count += 1;
  countLabelRef.innerHTML = count;
}
function decrease() {
  var decreaseRef = document.getElementById("decrease");
  decreaseRef = count -= 1;
  countLabelRef.innerHTML = count;
}
function reset() {
  var resetRef = document.getElementById("reset");
  resetRef = count = 0;
  countLabelRef.innerHTML = count;
}

function submit() {
  var inputRef = document.getElementById("input").value;
  count = parseInt(inputRef) || 0;
  countLabelRef.innerHTML = count;
  containerRef.style.display = "none";
  counterApp.style.display = "block";
}

function closeCounterApp() {
  counterApp.style.display = "none";
  containerRef.style.display = "block";
}
