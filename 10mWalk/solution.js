function isValidWalk(walk){
	//count array length, return false if not 10 min
	if(walk.length != 10) return false;

	//parse array, reduces direction list into distinct values and counts
	const result = walk.reduce((accumulate, currentDirection) => {
		accumulate[currentDirection] = accumulate[currentDirection] ? accumulate[currentDirection] + 1 : 1;
		return accumulate;
	}, {});

	//s must equal n to return to correct latitude
	if(result['n'] != result['s']) return false;

	//e must equal w to return to correct longitude
	if(result['e'] != result['w']) return false;

	//otherwise return true
	return true;
}
