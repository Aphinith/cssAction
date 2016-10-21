//Change colors of boxes to random color upon clicking

var changeColor = document.querySelectorAll(".second_row div");

function randomColor(e) {
  var box = e.target;
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  box.style.backgroundColor = color;
}

changeColor.forEach(function(val) {
  val.addEventListener("click", randomColor);
})