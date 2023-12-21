import { colorCell} from "../UI";
export default class Player {
  constructor(name) {
    this.name = name;
  }

  makeRandomAttack(opponentGameBoard) {
    let success = false;
  
    while (!success) {
      const coordinates = opponentGameBoard.getRandomAttackCoordinates();
      const { row, column } = coordinates;
  
      if (!opponentGameBoard.isCoordinateAttacked(row, column)) {
        // If the chosen coordinates are not attacked, make the attack
        success = opponentGameBoard.receiveAttack(row, column);
        console.log(`${this.name} attacked: (${row}, ${column})`);
        colorCell(row, column)
      }
      
    }
  }
  

  makeAttack(opponentGameBoard, row, column) {
    opponentGameBoard.receiveAttack(row, column);
    // console.log(`${this.name} attacked: (${row}, ${column})`);
  }
}

// module.exports = Player;
