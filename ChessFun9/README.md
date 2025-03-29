# Problem: Chess Fun
	Difficulty: 5
	Date Completed: 2025/03/28

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/58a3b28b2f949e21b3000001)

## 🛠Function(s) Usage:
	Function: bishopsAndRooks(chessboard);

### Inputs:
	chessboard: A 2d array of integers representing a chessboard. 1 represents a rook and -1 represents a bishop.
	The array will always be 8x8 or 64 integers long separated into 8 sets.

### Returns or Examples:
	Return the number of safe squares, ie: unoccupied squares that are not being attacked by any rook or bishop.
	[1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, -1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0]
=>42