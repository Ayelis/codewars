/*
  Solution for "Count characters in your string"
  CodeWars Link: https://www.codewars.com/kata/52efefcbcdf57161d4000091

  Complexity Analysis:
  - Time Complexity: O(n) - Linear: Iterating through a string
  - Space Complexity: O(k) - Linear-ish scaling with the # of unique keys
*/

function count(string) {
	//create the object literal
	let response = {};
	//loop through the string
	for(chr=0;chr<string.length;chr++){
		//grab the current character
		let key = string.charAt(chr);
		//add it to the list and increment
		response[key] = (response[key] || 0) + 1; 
	}
	//and return
	return response;
}
