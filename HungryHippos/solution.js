/*
  Solution for "Hungry Hippos"
  CodeWars Link: https://www.codewars.com/kata/590300eb378a9282ba000095

  Complexity Analysis:
  - Time Complexity: O(n) - Linear, matching Rows * Columns of the board array
  - Space Complexity: O(n) - Again, Linear, matching Rows * Columns of the board array
*/

function Game(board) {
	this.board = board;
};

function countRegions(grid) {
  if (!grid || grid.length === 0) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let regions = 0;
  
  // Only consider vertical and horizontal neighbors
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
  // Iterative DFS using a stack
  const floodFill = (startRow, startCol) => {
    const stack = [[startRow, startCol]];
    
    while (stack.length) {
      const [r, c] = stack.pop();
      
      // Skip out-of-bounds, already visited, or zero cells
      if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || grid[r][c] === 0) {
        continue;
      }
      
      visited[r][c] = true; // Mark as visited
      
      // Push all adjacent neighbors
      for (const [dr, dc] of directions) {
        stack.push([r + dr, c + dc]);
      }
    }
  };
  
  // Loop through each cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] !== 0 && !visited[r][c]) {
        regions++;
        floodFill(r, c); // Mark the entire region
      }
    }
  }
  
  return regions;
}

Game.prototype.play = function() {
  //Find the total leaps, synonymous with the total number of contiguous regions
	return countRegions(this.board);
}
