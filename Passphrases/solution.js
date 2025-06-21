/*
  Solution for "Playing with passphrases"
  CodeWars Link: https://www.codewars.com/kata/559536379512a64472000053

  Complexity Analysis:
  - Time Complexity: O(n) - Linear
  - Space Complexity: O(n) - Linear
*/

function playPass(s, n) {
  // Step 1: shift and transform in one loop
  let transformed = '';

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (/[A-Z]/.test(ch)) {
      let shifted = String.fromCharCode(((ch.charCodeAt(0) - 65 + n) % 26) + 65);
      transformed += shifted;
    } else if (/[0-9]/.test(ch)) {
      transformed += (9 - parseInt(ch)).toString();
    } else {
      transformed += ch;
    }
  }

  // Step 2: reverse and apply case in final string
  let result = '';
  for (let i = transformed.length - 1, j = 0; i >= 0; i--, j++) {
    let ch = transformed[i];
    if (/[A-Z]/i.test(ch)) {
      result += j % 2 === 0 ? ch.toLowerCase() : ch.toUpperCase();
    } else {
      result += ch;
    }
  }

  return result;
}
