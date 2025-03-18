# Problem: Finish this Mini Sudoku
	Difficulty: 4
	Date Completed: 2025/03/18

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/556b4fdfc0f8bbbd2d000019)

## 🛠Function(s) Usage:
	Function: solve(board);

### Inputs:
	A 2d array "board" representing a partially filled out 4x4 mini sudoku, the zeros representing blank spaces.
	[[0, 0, 2, 0], 
	 [0, 3, 0, 4],
	 [3, 0, 4, 0],
	 [0, 2, 0, 0]]

### Returns or Examples:
	The completed board, or a string: "This sudoku is unsolvable!"
    [[0, 0, 2, 0],		[[1, 4, 2, 3],
	 [0, 3, 0, 4], =>	 [2, 3, 1, 4],
	 [3, 0, 4, 0],		 [3, 1, 4, 2],
	 [0, 2, 0, 0]]		 [4, 2, 3, 1]]
