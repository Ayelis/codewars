/*
  Solution for "Lottery machine"
  CodeWars Link: https://www.codewars.com/kata/5832db03d5bafb7d96000107

  Complexity Analysis:
  - Time Complexity: O(n) - Scanning through a string...
  - Space Complexity: O(n) - Two strings. :/
*/

function lottery(str) {
 //scan through the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    //check if the current character is a digit, or if it's already in the string
    if (!/\d/.test(char) || str.indexOf(char) !== i) {
      // Remove the interlopers!
      str = str.slice(0, i) + str.slice(i + 1);
      i--; //the length has decreased...
    }
  }
  return str || "One more run!";
}
