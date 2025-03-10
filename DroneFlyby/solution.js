/*
  Solution for "Drone Fly-By"
  CodeWars Link: https://www.codewars.com/kata/58356a94f8358058f30004b5

  Complexity Analysis:
  - Time Complexity: O(n) - Linear, as we're dealing with strings
  - Space Complexity: O(n) - Linear, we create a new string of varying length
*/

function flyBy(lamps, drone){
	// determine how far the drone has flown
    let overwriteLength = drone.length;
	// turn on all the lights if the drone has passed them all
    if (overwriteLength >= lamps.length) {
        return 'o'.repeat(lamps.length);
    }
	// otherwise, only turn on lights the drone has visited
    return 'o'.repeat(overwriteLength) + lamps.slice(overwriteLength);
}
