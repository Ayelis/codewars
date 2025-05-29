/*
  Solution for "Shortest Knight Path"
  CodeWars Link: https://www.codewars.com/kata/549ee8b47111a81214000941

  Complexity Analysis:
    Time Complexity: O(1) - While technically O(64) since chessboards are fixed size (8x8), we consider this constant time
    Space Complexity: O(1) - Uses fixed-size storage (max 64 positions in BFS queue)
*/

function knight(start, finish) {
    // Convert positions to coordinates (0-7)
    const fileToX = (f) => f.charCodeAt(0) - 'a'.charCodeAt(0);
    const rankToY = (r) => parseInt(r) - 1;
    
    const startX = fileToX(start[0]);
    const startY = rankToY(start[1]);
    const finishX = fileToX(finish[0]);
    const finishY = rankToY(finish[1]);
    
    // Knight's possible moves (dx, dy)
    const moves = [
        [2, 1], [2, -1],
        [-2, 1], [-2, -1],
        [1, 2], [1, -2],
        [-1, 2], [-1, -2]
    ];
    
    // BFS setup
    const queue = [[startX, startY, 0]];
    const visited = new Set();
    visited.add(`${startX},${startY}`);
    
    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();
        
        // Check if we've reached the destination
        if (x === finishX && y === finishY) {
            return steps;
        }
        
        // Explore all possible moves
        for (const [dx, dy] of moves) {
            const newX = x + dx;
            const newY = y + dy;
            const key = `${newX},${newY}`;
            
            // Check if move is valid and not visited
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8 && !visited.has(key)) {
                visited.add(key);
                queue.push([newX, newY, steps + 1]);
            }
        }
    }
}