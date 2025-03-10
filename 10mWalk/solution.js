/*
  Solution for "Take a Ten Minutes Walk"
  CodeWars Link: https://www.codewars.com/kata/54da539698b8a2ad76000228

  Complexity Analysis:
  - Time Complexity: O(n) - Linear, though the walk array length is constant
  - Space Complexity: O(1) - Constant, a boolean regardless of the input size
*/

function isValidWalk(walk){
	//count array length, return false if not 10 min
	if(walk.length != 10) return false;

	//parse array, reduces direction list into distinct values and counts
	const result = walk.reduce((accumulate, currentDirection) => {
		accumulate[currentDirection] = accumulate[currentDirection] ? accumulate[currentDirection] + 1 : 1;
		return accumulate;
	}, {});

	//s must equal n to return to correct latitude
	if(result['n'] != result['s']) return false;

	//e must equal w to return to correct longitude
	if(result['e'] != result['w']) return false;

	//otherwise return true
	return true;
}
