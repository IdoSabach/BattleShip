import { createGridPlayer,createGrid,createGame} from "./UI";
import { createBoardStart,closeBox } from "./DragDrop";


document.addEventListener('DOMContentLoaded', function () {
  // Your code here
  createBoardStart()
  createGame();
  createGridPlayer()
  createGrid();
  closeBox()
});


