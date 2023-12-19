export default class GameBoard {
  constructor(name) {
    this.rows = 10;
    this.columns = 10;
    this.grid = this.createBoard();
    this.attacks = [];
    this.ships = [];
    this.name = name;
  }

  createBoard() {
    return Array.from({ length: this.rows }, () => Array(this.columns).fill(null));
  }

  placeShip(ship, row, column, isVertical = false) {
    if (isVertical) {
      this.placeShipInColumn(ship, row, column);
    } else {
      this.placeShipInRow(ship, row, column);
    }
  }

  placeRandomShip(ship, isVertical = false) {
    let placedSuccessfully = false;
  
    while (!placedSuccessfully) {
      const randomRow = Math.floor(Math.random() * this.rows);
      const randomColumn = Math.floor(Math.random() * this.columns);
  
      // console.log(`Trying to place random ship at (${randomRow}, ${randomColumn})`);
  
      try {
        if (isVertical) {
          this.placeShipInColumn(ship, randomRow, randomColumn);
        } else {
          this.placeShipInRow(ship, randomRow, randomColumn);
        }
        
        placedSuccessfully = true;
      } catch (error) {

        console.error(`Error placing random ship: ${error.message}`);
      }
    }
  }
  
  

  placeShipInRow(ship, row, column) {
    if (row + ship.lengthOfShip > this.rows || column + ship.lengthOfShip > this.columns) {
      throw new Error('Cannot place the ship at the given coordinates. Out of bounds.');
    }

    for (let i = 0; i < ship.lengthOfShip; i++) {
      if (this.grid[row][column + i] !== null) {
        throw new Error('Cannot place the ship at the given coordinates. Another ship is already there.');
      }
    }

    for (let i = 0; i < ship.lengthOfShip; i++) {
      this.grid[row][column + i] = ship;
    }

    this.ships.push(ship);
  }

  placeShipInColumn(ship, row, column) {
    if (row + ship.lengthOfShip > this.rows || column + ship.lengthOfShip > this.columns) {
      throw new Error('Cannot place the ship at the given coordinates. Out of bounds.');
    }

    for (let i = 0; i < ship.lengthOfShip; i++) {
      if (this.grid[row + i][column] !== null) {
        throw new Error('Cannot place the ship at the given coordinates. Another ship is already there.');
      }
    }

    for (let i = 0; i < ship.lengthOfShip; i++) {
      this.grid[row + i][column] = ship;
    }

    this.ships.push(ship);
  }

  receiveAttack(row, column) {
    const coordinatesAlreadyAttacked = this.attacks.some(
      (attack) => attack.row === row && attack.column === column
    );
  
    if (coordinatesAlreadyAttacked) {
      console.log(
        `Coordinates (${row}, ${column}) have already been attacked. Please choose another pair.`
      );
    } else {
      const shipAtLocation = this.grid[row][column];
  
      if (shipAtLocation === null) {
        console.log(`Missed at (${row}, ${column})`);
        this.grid[row][column] = 'o'; 
      } else {
        console.log(`Hit at (${row}, ${column})`);
        shipAtLocation.hits();
        this.grid[row][column] = 'x'; 
      }
  
      this.attacks.push({ row, column });
    }
  }
  

  reportAttacks() {
    console.log('Attacks:');
    this.attacks.forEach((attack) => console.log(`(${attack.row}, ${attack.column})`));
  }

  areAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  checkShipsStatus() {
    this.ships.forEach((ship) => {
      if (ship.lengthOfShip === 0) {
        ship.shipSunk = true;
      }
    });
  }

  getRandomAttackCoordinates() {
    const randomRow = Math.floor(Math.random() * this.rows);
    const randomColumn = Math.floor(Math.random() * this.columns);
    return { row: randomRow, column: randomColumn };
  }

  // getRandomPlacesCoordinates() {
  //   const randomRow = Math.floor(Math.random() * this.rows);
  //   const randomColumn = Math.floor(Math.random() * this.columns);
  //   return { row: randomRow, column: randomColumn };
  // }
}

module.exports = GameBoard;
