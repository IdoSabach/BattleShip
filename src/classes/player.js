// import GameBoard from "./gameBoard"


export default class Player {
  constructor(name) {
    this.name = name;
    this.isComputer = false;
  }

  makeRandomAttack(opponentGameBoard) {
    if (this.isComputer) {
      const coordinates = opponentGameBoard.getRandomAttackCoordinates();
      opponentGameBoard.receiveAttack(coordinates.row, coordinates.column);
      console.log(`${this.name} attacked: (${coordinates.row}, ${coordinates.column})`);
    } else {
      console.log(`${this.name}, it's your turn to attack!`);
    }
  }

  makeAttack(opponentGameBoard, row, column) {
    if (!this.isComputer) {
      opponentGameBoard.receiveAttack(row, column);
      console.log(`${this.name} attacked: (${row}, ${column})`);
    } else {
      console.log("Computer does not take manual attacks.");
    }
  }
}

module.exports = Player