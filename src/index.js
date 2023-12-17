function createBoard(){
  let bored = []
  let miss = []
  for (let i = 0; i < 10; i++) {
    this.board[i] = []; 
    this.missing[i] = []
    for (let j = 0; j < 10; j++) {
      this.board[i][j] = null; 
      this.missing[i][j] = false
    }
  }
  console.log(this.board);
  return this.board
}

createBoard()