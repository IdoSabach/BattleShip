const board = document.querySelector('.boardOfStart')
const btn = document.querySelector('.btnSwitch')
const allBox = document.querySelector('.boxForStart')


const arrBox = [];

export function createBoardStart(){

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const box = document.createElement("div");
      box.classList.add("boxStart");
      box.dataset.row = row;
      box.dataset.column = col;

      box.style["border-style"] = "solid";
      box.style["border-width"] = "0.5px";

      board.appendChild(box);
      arrBox.push(box);
    }
  }

  console.log(arrBox )
}

export function closeBox(){
  btn.addEventListener('click',function(){
    allBox.style.display = "none"
  })
}