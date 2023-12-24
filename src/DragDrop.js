const board = document.querySelector(".boardOfStart");
const btn = document.querySelector(".btnSwitch");
const allBox = document.querySelector(".boxForStart");
const ships = document.querySelectorAll(".ship");

export function exportFunc() {
  createBoardStart();
  closeBox();
  dragDrop();
}

let boardArray = [];

const shipsPlaced = {};

console.log(boardArray);


function createBoardStart() {
  for (let row = 0; row < 10; row++) {
    boardArray[row] = [];
    for (let col = 0; col < 10; col++) {
      const box = document.createElement("div");
      box.classList.add("boxStart");
      box.dataset.row = row;
      box.dataset.column = col;
      box.style["border-style"] = "solid";
      box.style["border-width"] = "0.5px";
      board.appendChild(box);

      boardArray[row][col] = 0;
    }
  }
}
console.log(boardArray);

let isColumnOrientation = false;

function closeBox() {
  btn.addEventListener("click", function () {
    // allBox.style.display = "none";
    isColumnOrientation = !isColumnOrientation;
    console.log(isColumnOrientation);
  });
}

function dragDrop() {
  const boxes = document.querySelectorAll(".boxStart");

  ships.forEach((ship) => {
    ship.addEventListener("dragstart", function (e) {
      const shipName = ship.classList[1]; // Get the class name of the ship
      if (!shipsPlaced[shipName]) {
        e.dataTransfer.setData("text/plain", shipName);
      } else {
        // Ship already placed, prevent dragging again
        e.preventDefault();
        console.log(ship.dataset.length);
      }
    });
  });

  boxes.forEach((box) => {
    box.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    box.addEventListener("drop", function (e) {
      const shipName = e.dataTransfer.getData("text/plain");
      const ship = document.querySelector(`.${shipName}`);
      const row = parseInt(box.dataset.row);
      const col = parseInt(box.dataset.column);

      if (isValidPlacement(ship, row, col)) {
        box.appendChild(ship);
        updateBoardArray(shipName, row, col);
        shipsPlaced[shipName] = true;
      }
    });
  });

  function isValidPlacement(ship, row, col) {
    const shipLength = parseInt(ship.dataset.length);

    if (isColumnOrientation) {
      if (
        boardArray[row][col] === "x" ||
        boardArray[row + 1][col] === "x" ||
        boardArray[row + 2][col] === "x" ||
        boardArray[row + 3][col] === "x" ||
        boardArray[row + 4][col] === "x" ||
        boardArray[row + 5][col] === "x"
      ) {
        return false;
      }
      if (row + shipLength <= 10) {
        return true;
      }
    } else {
      if (
        boardArray[row][col] === "x" ||
        boardArray[row][col + 1] === "x" ||
        boardArray[row][col + 2] === "x" ||
        boardArray[row][col + 3] === "x" ||
        boardArray[row][col + 4] === "x" ||
        boardArray[row][col + 5] === "x"
      ) {
        return false;
      }
      if (col + shipLength <= 10) {
        return true;
      }
    }
    return false;
  }

  function updateBoardArray(shipName, row, col) {
    const shipLength = parseInt(
      document.querySelector(`.${shipName}`).dataset.length
    );
    console.log(shipLength);
    if (isColumnOrientation) {
      for (let i = 0; i < shipLength; i++) {
        boardArray[row + i][col] = "x"; 
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        boardArray[row][col + i] = "x"; 
      }
    }

    placeShip(length,row,col)

    console.log("Updated Board Array:", boardArray);
  }
}
console.log(boardArray);

function placeShip(length,row,col){

  console.log(`this is places ${length},${row},${col}`)
}
