const GameBoard = require('../classes/gameBoard');
const Player = require('../classes/player');
const Ship = require('../classes/ship');


jest.spyOn(Math, 'random').mockReturnValue(0.5);

describe('Player', () => {
  let player;
  let computerPlayer;
  let playerGameBoard;
  let computerGameBoard;

  beforeEach(() => {
    playerGameBoard = new GameBoard();
    computerGameBoard = new GameBoard();

    player = new Player('Player');
    computerPlayer = new Player('Computer');
    computerPlayer.isComputer = true;

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
    // Player makes a random attack
    player.makeRandomAttack(computerGameBoard);

    // Computer makes a random attack
    computerPlayer.makeRandomAttack(playerGameBoard);

    // Player makes a manual attack
    player.makeAttack(computerGameBoard, 2, 3);

    // Computer makes a random attack
    computerPlayer.makeRandomAttack(playerGameBoard);

    // Check the state of the game boards or other assertions as needed
  });
});
