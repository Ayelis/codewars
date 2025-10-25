/*
  Solution for "Distance between points in 2D"
  CodeWars Link: https://www.codewars.com/kata/58dced7b702b805b200000be

  Complexity Analysis:
  - Time Complexity: O(1) - Constant time operation involving basic arithmetic operations (subtraction, multiplication, square root)
  - Space Complexity: O(1) - Only uses a constant amount of extra space for variables (dx, dy)
*/

function distanceBetweenPoints(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}