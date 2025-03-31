# Problem: Battle ships: Sunk damaged or not touched?
	Difficulty: 5
	Date Completed: 2025/03/31

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/58d06bfbc43d20767e000074)

## 🛠Function(s) Usage:
	Function: damagedOrSunk(board, attacks);

### Inputs:
	A 2d array representing one side of a Battleship game board, and a
	2d array representing attacks delivered to that board.
	board = [[0,0,0,2,2,0],
			[0,3,0,0,0,0],
			[0,3,0,1,0,0],
			[0,3,0,1,0,0]];
	attacks = [[2, 1], [1, 3], [4, 2]];

### Returns or Examples:
	A key-value encoded array of the results of the attacks.
    { sunk: 0, damaged: 2, notTouched: 1, points: 0 }
