# Problem: Hungry Hippos
	Difficulty: 5
	Date Completed: 2025/04/04

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/590300eb378a9282ba000095)

## 🛠Object(s) Usage:
	Object: const game = new HungryHippos(board);

### Inputs:
	Function: game.play();
	board: a 2d array which contains 0’s for spaces and 1’s for food
	board.length = board[0].length = (5 to 50)

### Returns or Examples:
    An integer for the amount of leaps needed to collect all of the food.

	One leap consists of food items that are either horizontally or
	vertically connected to each other. If they are not connected,
	then another leap is needed.

board = [[1,1,0,0,0],
         [1,1,0,0,0],
         [0,0,0,0,0],
         [0,0,0,1,1],
         [0,0,0,1,1]]
=> 2
(There are 2 blocks of food connected horizontally or vertically so you must
	return 2.)