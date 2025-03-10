/*
  Solution for "Unique In Order"
  CodeWars Link: https://www.codewars.com/kata/58356a94f8358058f30004b5

  Complexity Analysis:
  - Time Complexity: O(1) - Constant, we're only dealing with numbers
  - Space Complexity: O(1) - Constant, we generate a fixed length string
*/

function validate(n){
  //Truncate invalid values outside of range (0 through 255 ONLY)
  switch(true){
    case (n<0):
      n=0;break; //Too low!
    case (n>255):
      n=255; //Too high!
  }
  //Convert the integers to hex strings, padding out with zeroes, uppercased
  //Since n will always be 0-255, all three functions run in Constant Time
  return n.toString(16).padStart(2, '0').toUpperCase();
}
function rgb(r, g, b) {
  //validate each color
	r = validate(r);
	g = validate(g);
	b = validate(b);
  //return the parsed color code
  return r + g + b;
}