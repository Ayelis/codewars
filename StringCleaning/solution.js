/*
  Solution for "String cleaning"
  CodeWars Link: https://www.codewars.com/kata/57e1e61ba396b3727c000251

  Complexity Analysis:
  - Time Complexity: O(n) - The regex scans through each character for digits
  - Space Complexity: O(n) - In the worst case, the first string is duplicated
  
  Considerations:
  A filter method could do this too, but replace is cleaner and perhaps
  slightly more efficient in Space complexity.
*/

function stringClean(s){
	// Function will return the cleaned string, minus all digits
    return s.replace(/\d/g, '');  
}
