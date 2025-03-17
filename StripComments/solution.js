/*
  Solution for "Strip Comments"
  CodeWars Link: https://www.codewars.com/kata/51c8e37cee245da6b40000bd

  Complexity Analysis:
  - Time Complexity: O(n) - Linear as we're analyzing a variable length string and comment array
  - Space Complexity: O(n+m) - Linear as we're creating a variable length string (n) and using a fixed comment array (m)
*/

function solution(text, markers) {
  // Catchall escape: if no comments are required, no changes to the string.
  if (markers.length == 0) return text.replace(/[ \t]+$/gm, "");
  // Initialize some vars, pull some levers!
  let solution = "", comment = false;

  for (let iter = 0; iter < text.length; iter++) {
    // Extract a 2-character substring starting at iter
    const newLine = text.substr(iter, 2);
    // The current character is always the first character of newLine
    const currentChar = newLine[0];

    // If we encounter a newline, reset the comment flag and add the newline to the solution
    if (newLine[0] === "\n") {
      comment = false; // No multi-line comments exist
      solution = solution.replace(/[ \t]+$/gm, "") + newLine[0]; // Trim whitespace and add newline
    }
    // If this isn't already a comment section...
    else if (!comment) {
      // Check if there's a comment marker here
      if (markers.includes(currentChar)) {
        comment = true; // Begin the comment section
      } else {
        solution += currentChar; // Add the character to the solution
      }
    }
  }

  return solution.replace(/[ \t]+$/gm, ""); // Trim any trailing whitespace, but not newlines
}
