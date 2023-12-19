export function createGrid() {
  const main = document.querySelector(".main");

  const gridPlayer = document.createElement("div");
  gridPlayer.classList.add("gridPlayer");
  main.appendChild(gridPlayer);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const boxPlayer = document.createElement('div');
      boxPlayer.classList.add('.boxPlayerOnGridToPlayer');
      boxPlayer.dataset.row = row;
      boxPlayer.dataset.column = col;
      // boxPlayer.textContent = `${row}, ${col}`;
      boxPlayer.style["border-style"] = "solid"
      boxPlayer.style["border-width"] = "1px"
  
      // boxPlayer.addEventListener('click', handleClick);
  
      gridPlayer.appendChild(boxPlayer);
    }
  }

  const gridComputer = document.createElement("div");
  gridComputer.classList.add("gridComputer");
  main.appendChild(gridComputer);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const boxComputer = document.createElement('button');
      boxComputer.classList.add('.boxOnGridToComputer');
      boxComputer.dataset.row = row;
      boxComputer.dataset.column = col;
      // boxComputer.textContent = `${row}, ${col}`;

      boxComputer.style["border-style"] = "solid"
      boxComputer.style["border-width"] = "1px"
      boxComputer.style.background = 'none'
      boxComputer.style.cursor = 'pointer'
  
      boxComputer.addEventListener('click', handleClick);
  
      gridComputer.appendChild(boxComputer);
    }
  }
  
}

function handleClick(event) {
  const row = event.currentTarget.dataset.row;
  const column = event.currentTarget.dataset.column;

  console.log(`Clicked on box: (${row}, ${column})`);
}