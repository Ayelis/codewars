/*
  Solution for "Simplify the number"
  CodeWars Link: https://www.codewars.com/kata/5800b6568f7ddad2c10000ae

  Complexity Analysis:
  - Time Complexity: O(n) - Linear, iterating through the integer to answer
  - Space Complexity: O(n) - Linear in the worst case, depending on the input
*/

function simplify(number){
	let strNum = num.toString();// Convert number to string for easy digit access
    let length = strNum.length;   // Get number of digits
    let parts = [];

    for (let i = 0; i < length; i++) {
        let digit = strNum[i];  
        if (digit !== "0") {  // Skip zeros (no need to represent them)
            let placeValue = Math.pow(10, length - i - 1);  // Compute place value
            parts.push(`${digit}${placeValue > 1 ? '*' + placeValue : ''}`);  // Format term
        }
    }

    return parts.join('+');  // Join terms into final expression
}