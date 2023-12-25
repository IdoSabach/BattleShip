

import Ship from '../classes/ship';
import GameBoard from '../classes/gameBoard';
import Player from '../classes/player';


describe('Player', () => {
  let player;
  let computerPlayer;
  let playerGameBoard;
  let computerGameBoard;

  beforeEach(() => {
    playerGameBoard = new GameBoard("player");
    computerGameBoard = new GameBoard("computer");

    

    player = new Player('Player');
    computerPlayer = new Player('Computer');

    playerGameBoard.placeShip(new Ship(3), 2, 3);
    playerGameBoard.placeShip(new Ship(4), 4, 5);
    playerGameBoard.placeShip(new Ship(5), 5, 1);
    playerGameBoard.placeShip(new Ship(3), 1, 6,true);
    playerGameBoard.placeShip(new Ship(2), 0, 7,true);

    computerGameBoard.placeRandomShip(new Ship(3));
    computerGameBoard.placeRandomShip(new Ship(4));
    computerGameBoard.placeRandomShip(new Ship(5));
    computerGameBoard.placeRandomShip(new Ship(3),true);
    computerGameBoard.placeRandomShip(new Ship(2),true);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should switch turns and attack each other', () => {
    
    while(!playerGameBoard.areAllShipsSunk() || !computerGameBoard.areAllShipsSunk()){
      let crd = playerGameBoard.getRandomAttackCoordinates()
      computerPlayer.makeRandomAttack(playerGameBoard);
      player.makeAttack(computerGameBoard, crd.row, crd.column);
    }

    const str = "game over"
    if(computerGameBoard.areAllShipsSunk()){
      console.log(str) 
    }
    if(playerGameBoard.areAllShipsSunk()){
      console.log(str)
    }
    playerGameBoard.checkShipsStatus()
    computerGameBoard.checkShipsStatus()

    console.log(playerGameBoard)
    console.log(computerGameBoard)

  });

});
