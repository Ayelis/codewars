/*
  Solution for "Lottery machine"
  CodeWars Link: https://www.codewars.com/kata/5832db03d5bafb7d96000107

  Complexity Analysis:
  - Time Complexity: O(n) - Scanning through a string with constant time operations...
  - Space Complexity: O(k) - Just the unique digits
*/

function lottery(str) {
  //Let's try this in O(k) time instead of O(n^2)...
  let result = "";
  //Scan through the string
  for (let char of str) {
    //Is this character a digit we haven't seen yet?
    if (/\d/.test(char) && !result.includes(char)) {
      //Append unique digits to the string
      result += char;
    }
  }
  //Return the right response...
  return result || "One more run!";
}