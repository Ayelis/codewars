/*
  Solution for "Lottery machine"
  CodeWars Link: https://www.codewars.com/kata/5832db03d5bafb7d96000107

  Complexity Analysis:
  - Time Complexity: O(n) - Scanning through a string...
  - Space Complexity: O(n) - Two strings. :/
*/

function lottery(str){
  let result = "";

//loop through the string
  for (const char of str) {
    //only include unique digits...
    if (/\d/.test(char) && !result.includes(char)) {
      result += char;
    }
  }
//return the correct response
  return result || "One more run!";
}
