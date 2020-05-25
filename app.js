let cells = document.querySelectorAll(".row div");
let winner = document.getElementById('wins');
let player = "x";
let moves = 0;
let gameOver = false;

cells.forEach((cell) => {
    cell.onclick = (e) => {
        let cell = e.target;
        if (gameOver == true) {
            replay()
            return;
        } else {
            if (cell.textContent !== "") {
                return;
            }
            cell.textContent = player;
            moves++;
            checkWinner();
            togglePlayer();
        }
    };
});

const togglePlayer = () => {
    if (player === "x") {
        player = "o";
    } else {
        player = "x";
    }
};

//main function for checking if the game has a winner or a tie. Runs on EVERY click to check
const checkWinner = () => {
    if (checkTop() || checkMidRow() || checkBottom() || checkLeft() || checkMidCol() || checkRight() || checkDiagonals()) {
        gameOver = true;
        winner.textContent = (player + ' wins');
    } else if (moves === 9) {
        gameOver = true;
        winner.textContent = ('Tie Game!');
    }
};

//checks any 3 cells if all their text content is the same
const checkCells = (a, b, c) => {
    if (cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
        return true;
    } else {
        return false;
    }
}

//checks 3 cells to see if any are empty
const checkEmpty = (a, b, c) => {
    if (cells[a].textContent === '' || cells[b].textContent === '' || cells[c].textContent === '') {
        return true;
    } else {
        return false;
    }
}

//top cells, aka index positions in the array of "cells" (index 0, 1, 2 for top row)
//makes sure checkCells returns true and checkEmpty returns false, meaning they all have the same value and they arne't empty
const checkTop = () => {
    if (checkCells(0, 1, 2) && !checkEmpty(0, 1, 2)) {
        return true;
    } else {
        return false;
    }
}

const checkMidRow = () => {
    if (checkCells(3, 4, 5) && !checkEmpty(3, 4, 5)) {
        return true;
    } else {
        return false;
    }
}

const checkBottom = () => {
    if (checkCells(6, 7, 8) && !checkEmpty(6, 7, 8)) {
        return true;
    } else {
        return false;
    }
}

const checkLeft = () => {
    if (checkCells(0, 3, 6) && !checkEmpty(0, 3, 6)) {
        return true;
    } else {
        return false;
    }
}

const checkMidCol = () => {
    if (checkCells(1, 4, 7) && !checkEmpty(1, 4, 7)) {
        return true;
    } else {
        return false;
    }
}

const checkRight = () => {
    if (checkCells(2, 5, 8) && !checkEmpty(2, 5, 8)) {
        return true;
    } else {
        return false;
    }
}

const checkDiagonals = () => {
    if ((checkCells(0, 4, 8) && !checkEmpty(0, 4, 8)) || ((checkCells(2, 4, 6) && !checkEmpty(2, 4, 6)))) {
        return true;
    } else {
        return false;
    }
}

//resets board when gameOver is true
//clears the board and winner message; resets player and moves to original values
const replay = document.getElementById('replay').onclick = () => {
    //window.location.reload()
    winner.textContent = '';
    player = "x";
    moves = 0;
    gameOver = false;
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    };
}