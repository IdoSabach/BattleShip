// const GameBoard = require('../classes/gameBoard');
// const Ship = require('../classes/ship');

import Ship from '../classes/ship';
import GameBoard from '../classes/gameBoard';

describe('GameBoard', () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new GameBoard("ido");
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
    // expect(() => gameBoard.placeShip(overlappingShip, 2, 4)).toThrowError(/Cannot place the ship at the given coordinates. Another ship is already there./);

    const outOfBoundsShip = new Ship(4);
    // expect(() => gameBoard.placeShip(outOfBoundsShip, 8, 8)).toThrowError(/Cannot place the ship at the given coordinates. Out of bounds./);
  });

  it('should handle incorrect ship placement', () => {
    const ship = new Ship(3);

    // expect(() => gameBoard.placeShip(ship, 8, 8)).toThrowError(/Cannot place the ship at the given coordinates. Out of bounds./);

    gameBoard.placeShip(new Ship(2), 2, 4);
    // expect(() => gameBoard.placeShip(ship, 2, 3)).toThrowError(/Cannot place the ship at the given coordinates. Another ship is already there./);
  });

  it('should receive an attack and update the board', () => {
    const ship = new Ship(3);
    gameBoard.placeShip(ship, 2, 3);

    gameBoard.receiveAttack(2, 3);
    expect(ship.hits()).toEqual(1);

    gameBoard.receiveAttack(4, 4);
    expect(gameBoard.attacks).toContainEqual({ row: 4, column: 4 });
    
    // const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    // gameBoard.reportAttacks();
    // expect(consoleSpy).toHaveBeenCalledWith('Attacks:');
    // expect(consoleSpy).toHaveBeenCalledWith('(4, 4)');
    // consoleSpy.mockRestore();
  });

  it('should check if all ships are sunk', () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(3);
    const ship3 = new Ship(5);
    // const ship4 = new Ship(4);
    gameBoard.placeShip(ship1, 2, 3);
    gameBoard.placeShip(ship2, 4, 5);
    gameBoard.placeShip(ship3, 5, 1);
    // gameBoard.placeShip(ship4, 0, 1,true);

  
    expect(gameBoard.areAllShipsSunk()).toBe(false);


    ship1.hits();
    ship1.hits();
    ship3.hits();
    ship3.hits();
    ship3.hits();
    expect(gameBoard.areAllShipsSunk()).toBe(false);

  
    ship2.hits();
    ship2.hits();
    ship2.hits();
    ship3.hits();
    ship3.hits();
    expect(gameBoard.areAllShipsSunk()).toBe(true);
  });

  it('should handle attacks on already attacked coordinates', () => {
    const ship = new Ship(3);
    gameBoard.placeShip(ship, 2, 3);


    gameBoard.receiveAttack(2, 3);
    expect(ship.hits()).toEqual(1);


    // const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    // gameBoard.receiveAttack(2, 3);
    // expect(consoleSpy).toHaveBeenCalledWith(
    //   'Coordinates (2, 3) have already been attacked. Please choose another pair.'
    // );
    // consoleSpy.mockRestore();
  });

  it('should place a ship on the board with vertical placement', () => {
    const ship = new Ship(3);
    gameBoard.placeShip(ship, 2, 3, true);

    expect(gameBoard.grid[2][3]).toBe(ship);
    expect(gameBoard.grid[3][3]).toBe(ship);
    expect(gameBoard.grid[4][3]).toBe(ship);

    const overlappingShip = new Ship(2);
    // expect(() => gameBoard.placeShip(overlappingShip, 3, 3, true)).toThrowError(/Cannot place the ship at the given coordinates. Another ship is already there./);

    const outOfBoundsShip = new Ship(4);
    // expect(() => gameBoard.placeShip(outOfBoundsShip, 8, 8, true)).toThrowError(/Cannot place the ship at the given coordinates. Out of bounds./);
  });
  
});
