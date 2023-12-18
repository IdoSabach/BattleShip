const Ship = require('../classes/ship'); 

describe('Ship', () => {

  it('should create a ship with the specified length', () => {
    const ship = new Ship(3);
    expect(ship.lengthOfShip).toBe(3);
  });

  it('should decrease the length of the ship when hits method is called', () => {
    const ship = new Ship(3);
    ship.hits();
    expect(ship.lengthOfShip).toBe(2);
  });


  it('should return true if the ship has sunk', () => {
    const ship = new Ship(1);
    ship.hits(); 
    expect(ship.isSunk()).toBe(true);
  });

  it('should return false if the ship has not sunk', () => {
    const ship = new Ship(2);
    ship.hits(); 
    expect(ship.isSunk()).toBe(false);
  });

  it('should return true if the ship has sunk', () => {
    const ship1 = new Ship(5);
    ship1.hits(); 
    ship1.hits(); 
    ship1.hits(); 
    ship1.hits(); 
    ship1.hits(); 
    ship1.isSunk()
    expect(ship1.shipSunk).toEqual(true);
  });

});
