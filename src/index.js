import { createGridPlayer,createGrid,createGame} from "./UI";
import { exportFunc } from "./DragDrop";
import { audioFun } from "./audio";


document.addEventListener('DOMContentLoaded', function () {
  exportFunc()
  createGame();
  createGridPlayer()
  createGrid();
  audioFun()
});




