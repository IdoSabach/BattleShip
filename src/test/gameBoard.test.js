const GameBoard = require('../interFace/gameBoard');
const Ship = require('../interFace/ship');

describe('GameBoard', () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new GameBoard();
  });

  it('should create a 10x10 grid', () => {
    expect(gameBoard.grid).toHaveLength(10);
    expect(gameBoard.grid[0]).toHaveLength(10);
  });

  it('should place a ship on the board', () => {
    const ship = new Ship(3);
    gameBoard.placeShip(ship, 2, 3);

    expect(gameBoard.grid[2][3]).toBe(ship);
    expect(gameBoard.grid[2][4]).toBe(ship);
    expect(gameBoard.grid[2][5]).toBe(ship);

    const overlappingShip = new Ship(2);
    expect(() => gameBoard.placeShip(overlappingShip, 2, 4)).toThrowError(/Another ship is already there/);

    const outOfBoundsShip = new Ship(4);
    expect(() => gameBoard.placeShip(outOfBoundsShip, 8, 8)).toThrowError(/Out of bounds/);
  });

  it('should receive an attack and update the board', () => {
    const ship = new Ship(3);
    gameBoard.placeShip(ship, 2, 3);

    // Receive an attack that hits a ship
    gameBoard.receiveAttack(2, 3);
    expect(ship.hits()).toEqual(1);

    // Receive an attack that misses
    gameBoard.receiveAttack(4, 4);
    expect(gameBoard.attacks).toContainEqual({ row: 4, column: 4 });

    // Check reporting attacks
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    gameBoard.reportAttacks();
    expect(consoleSpy).toHaveBeenCalledWith('Attacks:');
    expect(consoleSpy).toHaveBeenCalledWith('(4, 4)');
    consoleSpy.mockRestore();
  });

  it('should check if all ships are sunk', () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(3);
    const ship3 = new Ship(5);
    gameBoard.placeShip(ship1, 2, 3);
    gameBoard.placeShip(ship2, 4, 5);
    gameBoard.placeShip(ship3, 5, 1);

    // Initially, no ships are sunk
    expect(gameBoard.areAllShipsSunk()).toBe(false);

    // Hit all cells of ship1
    ship1.hits();
    ship1.hits();
    ship3.hits();
    ship3.hits();
    ship3.hits();
    expect(gameBoard.areAllShipsSunk()).toBe(false);

    // Hit all cells of ship2
    ship2.hits();
    ship2.hits();
    ship2.hits();
    ship3.hits();
    ship3.hits();
    expect(gameBoard.areAllShipsSunk()).toBe(true);
  });
});
