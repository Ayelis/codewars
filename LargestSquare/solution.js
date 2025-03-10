/*
  Solution for "Area of Largest Square in a Circle"
  CodeWars Link: https://www.codewars.com/kata/5887a6fe0cfe64850800161c

  Complexity Analysis:
  - Time Complexity: O(1) - Constant, as it's a direct calculation
  - Space Complexity: O(1) - Constant, no extra data structures created
*/

function areaLargestSquare(r) {
	//Using the Pythagorean theorem, if the diagonal is 2r,
	//then the side length s of the square is: r√2
    return 2 * r * r;
}