function validate(n){
  switch(true){
    case (n<0):
      n=0;break;
    case (n>255):
      n=255;
  }
  return n.toString(16).padStart(2, '0').toUpperCase();
}
function rgb(r, g, b) {
	r = validate(r);
	g = validate(g);
	b = validate(b);
  return r + g + b;
}