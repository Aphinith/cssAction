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

  var allRows = document.getElementsByClassName("row");
  // console.log('this is allRows: ', allRows);

  for (var l = 0; l < allRows.length; l++) {
    if (l%2 === 0) {
      //do something here
      var evenSquares = allRows[l].childNodes;
      // console.log('evenSquares: ', evenSquares);
      for (var m = 0; m < evenSquares.length; m++) {
        if (m%2 === 0) {
          evenSquares[m].style.backgroundColor = "red"
        }
      }
    } else {
      //do something here
      var oddSquares = allRows[l].childNodes;
      // console.log('oddSquares: ', oddSquares);
      for (var n = 0; n < oddSquares.length; n++) {
        if (n%2 !== 0) {
          oddSquares[n].style.backgroundColor = "red"
        }
      }
    }
  }

});

