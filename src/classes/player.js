export default class Player {
  constructor(name) {
    this.name = name;
  }

  makeRandomAttack(opponentGameBoard) {
    const coordinates = opponentGameBoard.getRandomAttackCoordinates();
    opponentGameBoard.receiveAttack(coordinates.row, coordinates.column);
    console.log(
      `${this.name} attacked: (${coordinates.row}, ${coordinates.column})`
    );
  }

  makeAttack(opponentGameBoard, row, column) {
    opponentGameBoard.receiveAttack(row, column);
    console.log(`${this.name} attacked: (${row}, ${column})`);
  }
}

module.exports = Player;
