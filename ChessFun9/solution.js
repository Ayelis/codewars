/*
  Solution for "Chess Fun"
  CodeWars Link: https://www.codewars.com/kata/58a3b28b2f949e21b3000001

  Complexity Analysis:
  - Time Complexity: O(n^2)- To reduce time used while returning the count of
  safe squares, we temporarily use O(n) space to flatten and filter the array.
  - Space Complexity: O(n) - To reduce space used while we scan the board,
  we'll mark threatened squares in place.
*/

function bishopsAndRooks(chessboard){
  const boardSize = chessboard.length;
  if (boardSize === 0) return 0; //handle the empty set case

  // Directions: 4 for rook(orthagonal), 4 for bishop(diagonal)
  const rookDirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]; //ortha
  const bishDirs = [[1, 1], [1, -1], [-1, 1], [-1, -1]]; //dia
  const EMPTY = 0;
  const PIECE = 1; // Absolutely
  const THREATENED = -2; // Let's paint the board red!

  // Iterate through the board, of course. A constant 64 squares is O(1) right? ;)
  for(let row=0;row<boardSize;row++){
    for(let col=0;col<boardSize;col++){ // Better be 8x8!
      // Check! (Pun intended)
      const HERE = chessboard[row][col];

      // Skip empty or already marked squares
      if(HERE === EMPTY || HERE === THREATENED) continue;

      // Do we have a piece?
      if(Math.abs(HERE) === 1){
        // Do we have a bishop, or a rook? Assign directions properly
        const pieceDirs = (HERE === -1) ? bishDirs : rookDirs;

        // Wherein we do a little raycasting...
        for(const [deltaRow, deltaCol] of pieceDirs){
          let nextRow=row+deltaRow, nextCol=col+deltaCol;
          // Stay inside the lines
          while(nextRow >= 0 && nextRow < boardSize && nextCol >= 0 && nextCol < boardSize) {
            if (Math.abs(chessboard[nextRow][nextCol]) === PIECE) break; // Blocked by another piece
            chessboard[nextRow][nextCol] = THREATENED; // Mark as threatened
            nextRow += deltaRow; nextCol += deltaCol; // Cast the next ray...
          }
        }
      }
    }
  }

  // Return remaining safe squares, saving time complexity at the cost of space
  // We saved space earlier by marking threats in place, so the tradeoff is fair
  return chessboard.flat().filter(square => square === 0).length;
}
