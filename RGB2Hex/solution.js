function validate(n){
  //Remove invalid values outside of range (0 through 255 ONLY)
  switch(true){
    case (n<0):
      n=0;break; //Too low!
    case (n>255):
      n=255; //Too high!
  }
  //Convert the integers to hex strings, padding out with zeroes, uppercased
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