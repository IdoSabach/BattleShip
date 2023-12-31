import { playerGameBoard, playerCreateShip ,markerBox} from "./UI";

const board = document.querySelector(".boardOfStart");
const btn = document.querySelector(".btnSwitch");
const allBox = document.querySelector(".boxForStart");
const shipsBox = document.querySelector(".ships");
const subTitle = document.querySelector(".subTitle");
const ships = document.querySelectorAll(".ship");



const ship1 = document.querySelector(".one");
const ship2 = document.querySelector(".two");
const ship3 = document.querySelector(".three");
const ship4 = document.querySelector(".four");
const ship5 = document.querySelector(".five");

export function exportFunc() {
  createBoardStart();
  closeBox();
  dragDrop();
  if (window.innerWidth < 767) {
    board.style.display = "none"
    btn.style.display = "none"
    shipsBox.style.display = "none"
    subTitle.style.display = "none"
  }
}

let boardArray = [];
const shipsPlaced = {};

function checkCloseBoard() {
  if (Object.keys(shipsPlaced).length === 5) {
    allBox.style.display = "none";
  }
}

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

let isColumnOrientation = false;

function closeBox() {
  btn.addEventListener("click", function () {
    isColumnOrientation = !isColumnOrientation;
    colShips();
  });
}

function colShips() {
  if (isColumnOrientation) {
    if (ship1 && ship1.getAttribute("data-towed") === "false") {
      ship1.style.width = "30px";
      ship1.style.height = "60px";
    }
    if (ship2 && ship2.getAttribute("data-towed") === "false") {
      ship2.style.width = "30px";
      ship2.style.height = "90px";
    }
    if (ship3 && ship3.getAttribute("data-towed") === "false") {
      ship3.style.width = "30px";
      ship3.style.height = "90px";
    }
    if (ship4 && ship4.getAttribute("data-towed") === "false") {
      ship4.style.width = "30px";
      ship4.style.height = "120px";
    }
    if (ship5 && ship5.getAttribute("data-towed") === "false") {
      ship5.style.width = "30px";
      ship5.style.height = "150px";
    }
  } else {
    if (ship1 && ship1.getAttribute("data-towed") === "false") {
      ship1.style.width = "60px";
      ship1.style.height = "30px";
    }
    if (ship2 && ship2.getAttribute("data-towed") === "false") {
      ship2.style.width = "90px";
      ship2.style.height = "30px";
    }
    if (ship3 && ship3.getAttribute("data-towed") === "false") {
      ship3.style.width = "90px";
      ship3.style.height = "30px";
    }
    if (ship4 && ship4.getAttribute("data-towed") === "false") {
      ship4.style.width = "120px";
      ship4.style.height = "30px";
    }
    if (ship5 && ship5.getAttribute("data-towed") === "false") {
      ship5.style.width = "150px";
      ship5.style.height = "30px";
    }
  }
}

function dragDrop() {
  const boxes = document.querySelectorAll(".boxStart");

  ships.forEach((ship) => {
    ship.addEventListener("dragstart", function (e) {
      const shipName = ship.classList[1];
      if (!shipsPlaced[shipName]) {
        e.dataTransfer.setData("text/plain", shipName);
      } else {
        e.preventDefault();
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
        checkCloseBoard();
        ship.setAttribute("data-towed", "true");
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
    if (isColumnOrientation) {
      for (let i = 0; i < shipLength; i++) {
        boardArray[row + i][col] = "x";
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        boardArray[row][col + i] = "x";
      }
    }
    placeShip(shipLength, row, col);

  }
}


function placeShip(length, row, col) {
  if(isColumnOrientation){
    playerCreateShip(playerGameBoard, length, row, col,true);
    markerBox(length,row, col,true)
  }else{
    playerCreateShip(playerGameBoard, length, row, col);
    markerBox(length,row, col)
  }
  
}
