# Problem: Car Park Escape
	Difficulty: 5
	Date Completed: 2025/04/06

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/591eab1d192fe0435e000014)

## 🛠Function(s) Usage:
	Function: escape(carpark);

### Inputs:
	carpark: A multi-dimensional array consisting only of integer values;
		rows: each level of the car park
		columns: each space in the car park
	0 represents empty space. 1 represents a downward ramp or stairs. 2 represents where you start.
	carpark[0] is the topmost floor. carpark[carpark.length-1] is the bottommost floor.
	You must "exit" by moving to the rightmost element in the final row.

### Returns or Examples:
	Directions are provided in an array of strings. L and R are left and right. D is down.
	Numbers represent how far in that direction to travel. "L5" means go five spaces left.
	If you're already at the end, return an empty set.

	carpark = [[1, 0, 0, 0, 2],
               [0, 0, 0, 0, 0]];
	result = ["L4", "D1", "R4"];
	
	carpark = [[2, 0, 0, 1, 0],
               [0, 0, 0, 1, 0],
               [0, 0, 0, 0, 0]];
	result = ["R3", "D2", "R1"];

	carpark = [[0, 0, 0, 0, 2]];
	result = [];
