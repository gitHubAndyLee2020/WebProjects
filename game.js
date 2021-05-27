var restart = document.querySelector("#b")
var squares = document.querySelectorAll("td")
var pResult = document.querySelector("#result")
var pTurn = document.querySelector("#turn")
var turn = true
var end = false

function clearBoard() {
  for (square of squares) {
    square.textContent = ""
  }
  pResult.textContent = "In Progress..."
  pTurn.textContent = "O's turn"
  turn = true
  end = false
}

restart.addEventListener("click",clearBoard)

function changeSymbol() {
  if (!end && this.textContent === "") {
    if (turn) {
      this.innerHTML = "<div style='color:red'>O</div>"
      pTurn.textContent = "X's turn"
      turn = false
    } else {
      this.innerHTML = "<div style='color:blue'>X</div>"
      pTurn.textContent = "O's turn"
      turn = true
    }
    result = findResult()
    if (result==="O") {
      pResult.innerHTML = "<strong style='color:red'>O has won!</strong>"
      end = true
    } else if (result==="X") {
      pResult.innerHTML = "<strong style='color:blue'>X has won!</strong>"
      end = true
    } else if (result==="F") {
      pResult.textContent = "Tie"
      end = true
    }
  }
}

for (square of squares) {
  square.addEventListener("click",changeSymbol)
}

function findResult() {
  var result = ""
  var symbols = ["O","X"]
  for (symbol of symbols) {
    if (squares[0].textContent === symbol && squares[1].textContent === symbol && squares[2].textContent === symbol) {
      result = symbol
    } else if (squares[3].textContent === symbol && squares[4].textContent === symbol && squares[5].textContent === symbol) {
      result = symbol
    } else if (squares[6].textContent === symbol && squares[7].textContent === symbol && squares[8].textContent === symbol) {
      result = symbol
    } else if (squares[0].textContent === symbol && squares[3].textContent === symbol && squares[6].textContent === symbol) {
      result = symbol
    } else if (squares[1].textContent === symbol && squares[4].textContent === symbol && squares[7].textContent === symbol) {
      result = symbol
    } else if (squares[2].textContent === symbol && squares[5].textContent === symbol && squares[8].textContent === symbol) {
      result = symbol
    } else if (squares[0].textContent === symbol && squares[4].textContent === symbol && squares[8].textContent === symbol) {
      result = symbol
    } else if (squares[2].textContent === symbol && squares[4].textContent === symbol && squares[6].textContent === symbol) {
      result = symbol
    }
  }
  var finished = true
  for (square of squares) {
      if (square.textContent === "") {
        finished = false
      }
  }
  if (finished && result === "") {
    result = "F"
  }
  return result
}
