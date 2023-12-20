import Ship from "./classes/ship.js";
import Player from "./classes/player.js";
import GameBoard from "./classes/gameBoard.js";
import pubsub from "./pubsub.js";

// pubsub.subscribe("giveBoardPlayer",)
// pubsub.subscribe("data",handleClickComputer)

const playerGameBoard = new GameBoard("player");
const computerGameBoard = new GameBoard("computer");
const player = new Player("Player");
const computerPlayer = new Player("Computer");

export function createGame() {
  playerCreateShip(playerGameBoard);
  computerCreateShip(computerGameBoard);
}


function playerCreateShip(playerGameBoard) {
  playerGameBoard.placeShip(new Ship(3), 2, 3);
  playerGameBoard.placeShip(new Ship(4), 4, 5);
  playerGameBoard.placeShip(new Ship(5), 5, 1);
  playerGameBoard.placeShip(new Ship(3), 1, 6, true);
  playerGameBoard.placeShip(new Ship(2), 0, 7, true);
  console.log(playerGameBoard);
}

function computerCreateShip(computerGameBoard) {
  computerGameBoard.placeRandomShip(new Ship(3));
  computerGameBoard.placeRandomShip(new Ship(4));
  computerGameBoard.placeRandomShip(new Ship(5));
  computerGameBoard.placeRandomShip(new Ship(3), true);
  computerGameBoard.placeRandomShip(new Ship(2), true);
  console.log(computerGameBoard);
}

export function createGrid() {
  const main = document.querySelector(".main");

  const gridPlayer = document.createElement("div");
  gridPlayer.classList.add("gridPlayer");
  main.appendChild(gridPlayer);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const boxPlayer = document.createElement("div");
      boxPlayer.classList.add(".boxPlayerOnGridToPlayer");
      boxPlayer.dataset.row = row;
      boxPlayer.dataset.column = col;
      // boxPlayer.textContent = `${row}, ${col}`;
      boxPlayer.style["border-style"] = "solid";
      boxPlayer.style["border-width"] = "1px";

      gridPlayer.appendChild(boxPlayer);
      // pubsub.publish('data',boxPlayer)
    }
  }

  const gridComputer = document.createElement("div");
  gridComputer.classList.add("gridComputer");
  main.appendChild(gridComputer);
  // let boxComputer

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const boxComputer = document.createElement("button");
      boxComputer.classList.add(".boxOnGridToComputer");
      boxComputer.dataset.row = row;
      boxComputer.dataset.column = col;
      // boxComputer.textContent = `${row}, ${col}`;

      boxComputer.style["border-style"] = "solid";
      boxComputer.style["border-width"] = "1px";
      boxComputer.style.background = "none";
      boxComputer.style.cursor = "pointer";

      boxComputer.addEventListener("click", function (e) {
        if (boxComputer.style.background === "none") {
          handleClick(e,boxComputer);
        }
      });

      gridComputer.appendChild(boxComputer);
    }
  }
}

function handleClick(event,boxComputer) {
  const row = event.currentTarget.dataset.row;
  const column = event.currentTarget.dataset.column;

  if(computerGameBoard.grid[row][column]!==null){
    boxComputer.style.background = "green";
    player.makeAttack(computerGameBoard, row, column);
    playerGameBoard.checkShipsStatus()
    computerGameBoard.checkShipsStatus()
    if(computerGameBoard.areAllShipsSunk()){
      alert("wonnnnnnnnnn")
    }
  }else{
    boxComputer.style.background = "red";
  }
  console.log(playerGameBoard.grid)
  console.log(computerGameBoard.grid)
  // console.log(`Clicked on box: (${row}, ${column})`);
  return {
    row,
    column,
  };
}

// function handleClickComputer(boxPlayer){
//   setTimeout(() => {
//     computerPlayer.makeRandomAttack(playerGameBoard);
//     // boxPlayer.style.background = "green";
//   },500)
  
// }



