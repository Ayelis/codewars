/*
  Solution for "Traverse array elements diagonally"
  CodeWars Link: https://www.codewars.com/kata/5968fb556875980bd900000f

  Complexity Analysis:
  - Time Complexity: O(n²) - Quadratic: Scanning every value of a 2d array
  - Space Complexity: O(n²) - Quadratic: Storing a 2d array and a new 1d array
  
  Considerations:
  I've discovered this is likely the best way to do this. I've pondered
  pushing each successive line over one and reading the arrays vertically
  (what I like to call the "slide rule approach") but we're still reading
  each value and returning the same amount, just making the code less
  readable. Since neither temporal nor spatial complexity is reduced by
  that creative approach, I'm going with this one.
*/

function diagonal(arr) {
  //Get the array size, assuming a square 2d array
    let size = arr.length;
  //Form the return array
    let result = [];

  //Start from the bottom-right corner and move upwards then left
    for (let diag = 2 * size - 2; diag >= 0; diag--) {
        // Calculate the starting row for the current diagonal:
        // - If diag >= size, start at row (diag - size + 1)
		// to avoid going out of bounds.
        // - Otherwise, start at row 0.
        let yStart = Math.max(0, diag - size + 1);
        // Calculate the starting column for the current diagonal:
        // - If diag < size, start at column diag
		// to avoid going out of bounds.
        // - Otherwise, start at the last column (size - 1).
        let xStart = Math.min(diag, size - 1);

        // Traverse the diagonal (down-left)
        for (let y = yStart, x = xStart; y < size && x >= 0; y++, x--) {
          //return the current targeted value
            result.push(arr[y][x]);
        }
    }

  // Send the resulting 1d array
    return result;
}