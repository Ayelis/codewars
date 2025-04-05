/*
  Solution for "Which Gas Station should I pick?"
  CodeWars Link: https://www.codewars.com/kata/5877839c0594a6ead600012c

  Complexity Analysis:
  - Time Complexity: O(n) - Linear
  - Space Complexity: O(1) - Constant
*/

function gasStation(obj, currentFuel, fuelConsumption){
	//sanity check
	if(fuelConsumption<=0) return undefined;

	let bestStation, bestPrice=Infinity;

	//find Distance Per Liter (km/consumption)
	let distancePerLiter = 100 / fuelConsumption;
	//find Range (fuel*dpl)
	let drivingRange = currentFuel * distancePerLiter;

	for (const [station, { distance, price }] of Object.entries(obj)) {
		//can we reach this station AND get home?
		if(distance <= drivingRange *2){
			// Fuel used to get there (AND home?!)(in liters)
			const fuelUsed = distance * (fuelConsumption / 100) *2;
			// Fuel left in the tank
			const fuelLeft = currentFuel - fuelUsed;
			// Space left for more fuel
			const fuelToBuy = 60 - fuelLeft;
			// Cost to fill 60L
			const totalCost = fuelToBuy * price;

			//is the price lowest to fillerup?
			if(totalCost < bestPrice){
				//keep it
				bestStation = station;
			        bestPrice = totalCost;
			}
		}
	}
	return bestStation;
}
