/*
  Solution for "Exes and Ohs"
  CodeWars Link: https://www.codewars.com/kata/55908aad6620c066bc00002a

  Complexity Analysis:
  - Time Complexity: O(n) - Linear, namely the length of the input string
  - Space Complexity: O(1) - Constant space used regardless of the input
*/

function XO(str){
	let counted = 0;
	//loop through the string
	for(let chr=0;chr<str.length;chr++){
		//grab the current character
		switch(str.charAt(chr).toLowerCase()){
			//find the difference between x count and o count
			case("x"):
				counted++;
				break;
			case("o"):
				counted--;
		}
	}
	//and return boolean if the count is equal
	return (counted==0);
}
