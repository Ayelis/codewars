/*
  Solution for "Nut Farm 2"
  CodeWars Link: https://www.codewars.com/kata/59b24a2158ef58966e00005e

  Complexity Analysis:
  - Time Complexity: O(n) - where n is total cells (checked a constant amount)
  - Space Complexity: O(n) - dominated by the `fallTo` array O(rows*cols)=O(n)
*/

var shakeTree = function(tree) {
    const rows = tree.length;
    const cols = tree[0].length;
    const ground = Array(cols).fill(0);
    
    // For each position, find where a nut would fall to
    const fallTo = Array(rows).fill().map(() => Array(cols).fill(null));
    
    // Process from bottom to top
    for (let i = rows - 1; i >= 0; i--) {
        for (let j = 0; j < cols; j++) {
            if (tree[i][j] === '\\') {
                // Right branch - move right until something stops us
                let k = j + 1;
                while (k < cols && tree[i][k] === '\\') k++;
                if (k < cols && tree[i][k] === '/') {
                    // We're in a \/ pattern - nut gets stuck
                    fallTo[i][j] = {row: i, col: j};
                } else if (k < cols) {
                    // Move to column k
                    fallTo[i][j] = i + 1 < rows ? fallTo[i + 1][k] : {row: i + 1, col: k};
                } else {
                    // Falls off the tree
                    fallTo[i][j] = null;
                }
            } else if (tree[i][j] === '/') {
                // Left branch - move left until something stops us
                let k = j - 1;
                while (k >= 0 && tree[i][k] === '/') k--;
                if (k >= 0 && tree[i][k] === '\\') {
                    // We're in a \/ pattern - nut gets stuck
                    fallTo[i][j] = {row: i, col: j};
                } else if (k >= 0) {
                    // Move to column k
                    fallTo[i][j] = i + 1 < rows ? fallTo[i + 1][k] : {row: i + 1, col: k};
                } else {
                    // Falls off the tree
                    fallTo[i][j] = null;
                }
            } else {
                // Empty space or nut - falls straight down
                fallTo[i][j] = i + 1 < rows ? fallTo[i + 1][j] : {row: i + 1, col: j};
            }
        }
    }
    
    // Now collect all nuts and see where they fall
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (tree[i][j] === 'o') {
                let dest = fallTo[i][j];
                if (dest && dest.row === rows) {
                    ground[dest.col]++;
                }
            }
        }
    }
    
    return ground;
}
