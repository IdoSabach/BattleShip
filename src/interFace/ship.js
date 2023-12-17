export default class Ship {
  _length;
  _shipSunk = false;
  constructor(length) {
    this._length = length;
  }

  get lengthOfShip() {
    return this._length;
  }

  hits() {
    return (this._length -= 1);
  }

  isSunk() {
    if (this._length === 0) {
      return this._shipSunk = true;
    }
    return this._shipSunk = false;
  }
}

module.exports = Ship;




