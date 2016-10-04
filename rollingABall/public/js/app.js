$('.success').click(function() {
  alert('Jquery successfully installed!');
})

// $(window).load(function(){
//   $("body").addClass("playing");
// });

$(".meow").click(function() {
  $("body").addClass("playing");
})

$(".reset").click(function() {
  $("body").removeClass("playing");
})

var colors = ['red', 'blue', 'green', 'black', 'orange', 'purple', 'yellow']

$(document).ready(function() {
  setInterval(function() {
    var random = Math.floor((Math.random() * (colors.length) ));
    $("button").css("background-color", colors[random]);
  }, 300);
})