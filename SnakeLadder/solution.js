/*
  Solution for "Snakes and Ladders"
  CodeWars Link: https://www.codewars.com/kata/587136ba2eefcb92a9000027

  Complexity Analysis:
  - Time Complexity: O(1) - Constant time per move.
  - Space Complexity: O(1) - Constant space. No complex calculations or string manipulation.
*/

function SnakesLadders() {
  this.currentPlayer = 1; // Player 1 starts first
  this.positions = { 1: 0, 2: 0 }; // Track positions for both players
  this.gameOver = false; // Flag to check if the game is already won
};
// Helper: Switch player (unless dice are equal)
SnakesLadders.prototype.switchPlayer = function() {
  this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
};
// Helper: Apply snake/ladder logic (return new square)
SnakesLadders.prototype.checkSnakesLadders = function(square) {
  //Both snakes and ladders are simple teleports
  const jumps = {
    2: 38, 7: 14, 8: 31, 15: 26, 16: 6, 21: 42,
    28: 84, 36: 44, 46: 25, 49: 11, 51: 67,
    62: 19, 64: 60, 71: 91, 74: 53, 78: 98,
    87: 94, 89: 68, 92: 88, 95: 75, 99: 80
  };
  return jumps[square] || square; // Jump if snake/ladder exists
};
SnakesLadders.prototype.play = function(die1, die2) {
  if (this.gameOver) return "Game over!";

  // Let's get our bearings
  let me = this.currentPlayer;
  let roll = die1 + die2;

  // Move player (Using Absolute to rebound)
  let distanceToGoal = 100 - this.positions[me];
  let square = 100 - Math.abs(distanceToGoal - roll);

  // Snakes / Ladders check
  square = this.checkSnakesLadders(square);

  // End of Turn. Update game state...
  this.positions[me] = square;
  if(square==100) this.gameOver = true;
  if(die1!==die2) this.switchPlayer();

  // ...and send results
  switch(true){
    case (square == 100):
      return `Player ${me} Wins!`;
    case (this.gameOver):
      return "Game over!";
  } //falls through 
  return `Player ${me} is on square ${square}`;
};
