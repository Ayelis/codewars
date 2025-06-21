/*
  Solution for "Playing with passphrases"
  CodeWars Link: https://www.codewars.com/kata/559536379512a64472000053

  Complexity Analysis:
  - Time Complexity: O(n) - Linear
  - Space Complexity: O(n) - Linear
*/

function playPass(s, n) {
  s = s.toUpperCase(); // Rule: start with uppercase text

  let transformed = '';

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (/[A-Z]/.test(ch)) {
      // Shift A-Z letters with wrap-around
      let shifted = String.fromCharCode(((ch.charCodeAt(0) - 65 + n) % 26) + 65);
      // Apply case based on ORIGINAL index before reversal
      shifted = i % 2 === 0 ? shifted.toUpperCase() : shifted.toLowerCase();
      transformed += shifted;
    } else if (/[0-9]/.test(ch)) {
      // Complement digit to 9
      transformed += (9 - Number(ch)).toString();
    } else {
      // Keep symbols
      transformed += ch;
    }
  }

  // Reverse the final string
  return transformed.split('').reverse().join('');
}
