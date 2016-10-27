document.addEventListener('DOMContentLoaded', function() {

  //create variable to hold value of div containing the chessboard
  var chessBoard = document.getElementsByClassName("main-board")[0];

  function createBoard(rows, col) {
    //create rows
    for (var i = 0; i < rows; i++) {
      var section = document.createElement("section");
      //create rows to add
      var row = document.createElement("div");
      //give rows a classname of row
      row.className = "row";
      chessBoard.append(row);
    }

    var eachRow = document.getElementsByClassName("row");
    console.log('this is eachRow: ', eachRow);

    //iterate through eachRow to add columns
    for (var j = 0; j < eachRow.length; j++) {
      //create the columns as squares in each row
      for (var k = 0; k < col; k++) {
        var square = document.createElement("div");
        square.className = "square";
        eachRow[j].append(square);
      }
    }
  }

  createBoard(5, 5);

});

