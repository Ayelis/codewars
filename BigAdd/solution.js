/*
  Solution for "Adding Big Numbers"
  CodeWars Link: https://www.codewars.com/kata/525f4206b73515bffb000b21

  Complexity Analysis:
  - Time Complexity: O(n) - Length of the numbers
  - Space Complexity: O(n) - Limited variables plus length of result.
*/

function add(a, b) {
  let result = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  //iterate through the digits
  while (i >= 0 || j >= 0 || carry > 0) {
    //account for numbers of mismatched size
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;
    //add it up, with the previous carry
    const sum = digitA + digitB + carry;
    //carry the one
    carry = Math.floor(sum / 10);
    //extract the current sum and add it in
    result = (sum % 10) + result;
    //iteration
    i--;
    j--;
  }
  return result;
}