/*
  Solution for "ROT13"
  CodeWars Link: https://www.codewars.com/kata/52223df9e8f98c7aa7000062

  Complexity Analysis:
  - Time Complexity: O(n) - where n is the length of the input string `str`.
  This is because the function processes each character in the string exactly
  once through the `replace` method, which iterates over the string to find
  matches for the regular expression. For each letter, the function performs
  a constant amount of work to compute the transformation.
  - Space Complexity: O(n) - creating a new string that will have the same
  length as the input string, plus a constant amount of space for variables
  `i` and `c`.
*/

function rot13(str) {
  //How many rotations?
  let i=13;
  //Return the rotated string with only these characters replaced
  return str.replace(/[a-zA-Z]/g, function (c) {
    //Shift char c by i positions in the alphabet, wrapping around
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + i) ? c : c - 26);
  });
}
