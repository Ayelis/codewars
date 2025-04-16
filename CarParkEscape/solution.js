/*
Solution for "Car Park Escape"
CodeWars Link: https://www.codewars.com/kata/591eab1d192fe0435e000014

Complexity Analysis:
- Time Complexity: O(n) - Linear: n*m; number of floors in the carpark * number of columns in the carpark
- Space Complexity: O(n) - Linear: n+m; number of floors in the carpark + number of columns in the carpark
*/

function escape(carpark) {
	//initialize some variables
	let result = []; //return empty set if already at the exit
	let floor = 0;
	let pos = 0;
	let descended = 0;

	// Find the starting position (2)
	for (let i = 0; i < carpark.length; i++) {
		const idx = carpark[i].indexOf(2);
		// And keep track of its position
		if (idx !== -1) {
			floor = i;
			pos = idx;
			break;
		}
	}
	// Handles repeated descents
	function showDescent(desc){
		// Show how far downward we've gone
		if(desc){ result.push(`D${desc}`); }
		// And reset the descendometer
		return 0;
	}
	// For all floors above ground level
	while (floor < carpark.length - 1) {
		// Get our bearings
		const currentFloor = carpark[floor];
		const stairIndex = currentFloor.indexOf(1);

		// Where's the next path down? There can be only one
		if (stairIndex < pos) {
			// In case we went down a level
			descended=showDescent(descended);
			// Maybe it's left...
			result.push(`L${pos - stairIndex}`);
		} else if (stairIndex > pos) {
			// In case we went down a level
			descended=showDescent(descended);
			// Or maybe right...
			result.push(`R${stairIndex - pos}`);
		}

		// Descend
		descended++;
		floor++;
		pos = stairIndex;
	}
	// Down to the final level
	descended=showDescent(descended);

	// Move to exit on the ground floor
	const exitIndex = carpark[carpark.length - 1].length - 1;
	// Are we already at the exit? If so, we're done
	if (pos < exitIndex) {
		// If not, let's move there
		result.push(`R${exitIndex - pos}`);
	}

	// And show the path
	return result;
}
