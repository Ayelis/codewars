# Problem: Snakes and Ladders
	Difficulty: 5
	Date Completed: 2025/04/03

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/587136ba2eefcb92a9000027)

## 🛠Object(s) Usage:
	Object: const game = new SnakesLadders();

### Inputs:
	Function: game.play(1, 1);
	Params: Two die rolls (1-6)

### Returns or Examples:
    Player 2 is on square 38
    or
    Player 1 Wins!
    or
    Game over!

### Notes:
    Barebones implementation of player order is specified in the task. When a player rolls doubles, they roll again, but neither error messages nor functionality were specified for keeping track of who is rolling the dice, so it must be handled responsibly by the one who calls the play() function.
