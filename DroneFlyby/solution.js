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
