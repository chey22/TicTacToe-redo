let cells = document.querySelectorAll(".row div");
let player = "x";
let gameOver = false;
let moves = 0;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

const cellClicked = (e) => {
    let cell = e.target;
    if(cell.textContent !== '') {
        return;
    }
    cell.textContent = player;
    moves++
    console.log(e.target.textContent)
    console.log(moves)
    checkWinner
    togglePlayer();
};

cells.forEach((cell) => {
//   cell.addEventListener("click", cellClicked);
    cell.onclick = cellClicked;
});

const togglePlayer = () => {
  if (player === "x") {
    player = "o";
  } else {
    player = "x";
  }
};

const checkWinner = () => {
    if (condition) { //if game is won or tied
        return true;
    } else {
        return false;
    }
}
