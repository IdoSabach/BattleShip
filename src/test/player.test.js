const GameBoard = require('../classes/gameBoard');
const Player = require('../classes/player');
const Ship = require('../classes/ship');


// jest.spyOn(Math, 'random').mockReturnValue(0.5);

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
    // computerPlayer.isComputer = true;

    playerGameBoard.placeShip(new Ship(3), 2, 3);
    playerGameBoard.placeShip(new Ship(4), 4, 5);
    playerGameBoard.placeShip(new Ship(5), 5, 1);

    computerGameBoard.placeShip(new Ship(3), 2, 3);
    computerGameBoard.placeShip(new Ship(4), 4, 5);
    computerGameBoard.placeShip(new Ship(5), 5, 1);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should switch turns and attack each other', () => {
    // console.log(playerGameBoard)
    // console.log(computerGameBoard)
    
    player.makeAttack(computerGameBoard, 2, 3);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 2, 4);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 4, 5);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 4, 6);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 4, 7);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 2, 5);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 4, 8);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 4, 9);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 5, 2);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 5, 3);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 5, 4);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 5, 5);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 5, 6);
    computerPlayer.makeRandomAttack(playerGameBoard);
    player.makeAttack(computerGameBoard, 5, 1);
    


    playerGameBoard.checkShipsStatus()
    computerGameBoard.checkShipsStatus()

    if(playerGameBoard.areAllShipsSunk()){
      console.log('sunk')
    }
    if(computerGameBoard.areAllShipsSunk()){
      console.log('sunk')
    }

    console.log(playerGameBoard)
    console.log(computerGameBoard)
  });
});
