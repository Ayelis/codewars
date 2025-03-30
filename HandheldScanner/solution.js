/*
  Solution for "Hand-held text scanner"
  CodeWars Link: https://www.codewars.com/kata/5831a1d3a31721767b000120

  Complexity Analysis:
  - Time Complexity: O(n) - Array length * lines, in the worst case
  - Space Complexity: O(n) - determined by the storage of the lines and the result
*/

function fullScan(parts) {
    if (!parts || parts.length === 0) return "";
    
    // Split each part into lines
    const linesArrays = parts.map(part => part.split('\n'));
    
    // Find maximum number of lines in any part
    const maxLines = Math.max(...linesArrays.map(lines => lines.length));
    let resultLines = [];
    
    for (let lineIdx = 0; lineIdx < maxLines; lineIdx++) {
        // Collect all parts for this line (default to "")
        const lineParts = linesArrays.map(lines => 
            lineIdx < lines.length ? lines[lineIdx] : ""
        );
        
        // Process this line
        let lineResult = lineParts[0];
        for (let i = 1; i < lineParts.length; i++) {
            let part = lineParts[i];
            let overlap = 0;
            let max_possible = Math.min(lineResult.length, part.length);
            for (let j = max_possible; j > 0; j--) {
                if (lineResult.endsWith(part.substring(0, j))) {
                    overlap = j;
                    break;
                }
            }
            lineResult += part.substring(overlap);
        }   
        resultLines.push(lineResult);
    }
    return resultLines.join('\n');
}
