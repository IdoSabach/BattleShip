import { createGridPlayer,createGrid,createGame} from "./UI";
import { exportFunc } from "./DragDrop";


document.addEventListener('DOMContentLoaded', function () {
  // Your code here
  exportFunc()
  createGame();
  createGridPlayer()
  createGrid();
});

// const box = document.querySelector('.boxForStart')

// box.addEventListener('touchmove', function(event) {
//   event.preventDefault();
//   // Your dragging logic here
// });



