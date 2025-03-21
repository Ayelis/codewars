/*
  Solution for "Finish this Mini Sudoku"
  CodeWars Link: https://www.codewars.com/kata/556b4fdfc0f8bbbd2d000019

  Complexity Analysis:
  - Time Complexity: O(1) - Due to the fixed size of the board and the limited number of operations performed
  - Space Complexity: O(1) - Space is determined by the fixed number of rows, columns, and arrays
*/

function solve(board) {
    // Track seen numbers per row, column, and 2x2 block using sets
    let seenRows = Array(4).fill().map(() => new Set());
    let seenCols = Array(4).fill().map(() => new Set());
    let seenBlocks = Array(4).fill().map(() => new Set());

    // Helper function to get the block index for a given cell
    const getBlockIndex = (row, col) => Math.floor(row / 2) * 2 + Math.floor(col / 2);

    // Initial linear scan through array
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            let num = board[row][col];
            if (num !== 0) {
                seenRows[row].add(num);
                seenCols[col].add(num);
                seenBlocks[getBlockIndex(row, col)].add(num);
            }
        }
    }

    // Function to get missing numbers in O(1) constant time
    const getMissingNumbers = (seenSet) => [1, 2, 3, 4].filter(n => !seenSet.has(n));

    // Function to solve a cell
    function solveCell(row, col) {
        if (board[row][col] !== 0) return false; // Already solved

        // Get missing numbers for the row, column, and block
        let missingInRow = getMissingNumbers(seenRows[row]);
        let missingInCol = getMissingNumbers(seenCols[col]);
        let missingInBlock = getMissingNumbers(seenBlocks[getBlockIndex(row, col)]);

        // Find intersection of missing numbers (valid candidates)
        let candidates = missingInRow.filter(n => missingInCol.includes(n) && missingInBlock.includes(n));

        // If only one candidate, fill it in
        if (candidates.length === 1) {
            let value = candidates[0];
            board[row][col] = value;
            seenRows[row].add(value);
            seenCols[col].add(value);
            seenBlocks[getBlockIndex(row, col)].add(value);
            return true; // Cell solved
        }
        return false; // No unique candidate
    }

    // Continue solving until no more progress is made
    let progressMade;
    do {
        progressMade = false;
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (solveCell(row, col)) {
                    progressMade = true;
                }
            }
        }
    } while (progressMade);

    // Check if puzzle is solved
    let isSolved = true;
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] === 0) {
                isSolved = false;
                break;
            }
        }
        if (!isSolved) break;
    }

    // Return the solved board or an unsolvable message
    return isSolved ? board : "This sudoku is unsolvable!";
}
