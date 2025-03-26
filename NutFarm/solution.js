/*
  Solution for "Nut Farm"
  CodeWars Link: https://www.codewars.com/kata/59884371d1d8d3d9270000a5

  Complexity Analysis:
  - Time Complexity: O(m*n) - each element of the tree is processed once.
  - Space Complexity: O(n) - The `ground` array and the `newNuts` array both have a length equal to the number of columns `n`
*/

var shakeTree = function(tree) {
    let ground = Array(tree[0].length).fill(0);
    
    for (let i = 0; i < tree.length; i++) {
        let newNuts = Array(tree[0].length).fill(0);
        
        // Process existing falling nuts
        for (let j = 0; j < tree[i].length; j++) {
            if (ground[j] > 0) {
                const current = tree[i][j];
                
                // Stop immediately if hitting _
                if (current === '_') {
                    newNuts[j] = ground[j] = 0;
                    continue;
                }
                
                // Handle branch directions
                if (current === '\\') {
                    // Move right if possible
                    const newPos = j + 1;
                    if (newPos < tree[i].length && tree[i][newPos] !== '_') {
                        newNuts[newPos] += ground[j];
                    } else {
                        newNuts[j] += ground[j]; // Stuck if can't move
                    }
                } else if (current === '/') {
                    // Move left if possible
                    const newPos = j - 1;
                    if (newPos >= 0 && tree[i][newPos] !== '_') {
                        newNuts[newPos] += ground[j];
                    } else {
                        newNuts[j] += ground[j]; // Stuck if can't move
                    }
                } else {
                    // Fall straight down
                    newNuts[j] += ground[j];
                }
            }
        }
        
        // Add new nuts from this level
        for (let j = 0; j < tree[i].length; j++) {
            if (tree[i][j] === 'o') {
                newNuts[j]++;
            }
        }
        
        ground = newNuts;
    }
    
    return ground;
}
