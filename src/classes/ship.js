export default class Ship {
  constructor(length) {
    this.length = length;
    this.shipSunk = false;
  }

  get lengthOfShip() {
    return this.length;
  }

  hits() {
    return (this.length -= 1);
  }

  isSunk() {
    if (this.length === 0) {
      return this.shipSunk = true;
    }
    return this.shipSunk = false;
  }
}

// module.exports = Ship;




