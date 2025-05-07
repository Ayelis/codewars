/*
  Solution for "Decoding A Message"
  CodeWars Link: https://www.codewars.com/kata/565b9d6f8139573819000056

  Complexity Analysis:
  - Time Complexity: O(n) - The length of the string to be decoded
  - Space Complexity: O(n) - One more string of variable size
*/

function decode(message){
  return message.replace(/[a-z]/gi, char => {
    const base = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
    return String.fromCharCode(base + (25 - (char.charCodeAt(0) - base)));
  });
}