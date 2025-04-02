/*
  Solution for "Battle ships: Sunk damaged or not touched?"
  CodeWars Link: https://www.codewars.com/kata/58d06bfbc43d20767e000074

  Complexity Analysis:
  - Time Complexity: O(n*m+k) - Approaching quadratic for all square boards
	It could be optimized to linear time if we map the ship locations and
	track hits in a hash table.
  - Space Complexity: O(n) - Linear, mostly affected by the number of ships
*/

function damagedOrSunk(board, attacks) {
	//No board. No ships. What are we even doing here?
	if(!board)
		return score;

	//Keep track of the ship count and track each ship in an object
    let shipCount = 0;
    const ships = {};

    // 1. Scan board to record ship sizes
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
			//Let's process the current tile
            const tile = board[row][col];
			//Is there a ship here?
            if (tile > 0) {
				//Is this a new ship?
                if (!ships[tile]) {
					//Initialize the ship HP/size counter
                    ships[tile] = 0;
					//Track the number of ships
                    shipCount++;
                }
				//Add to the ship HP
                ships[tile]++;
            }
        }
    }
	//Keep track of the score
    const score = { sunk: 0, damaged: 0, notTouched: shipCount, points: 0 };
    const hits = {}; // { shipId: hits }

    // 2. Process attacks
    attacks.forEach(([x, y]) => {
        const col = x - 1;
        const row = board.length - y; // Convert to 0-based row
		//Shot missed the board lol
        if (row < 0 || row >= board.length || col < 0 || col >= board[row].length) return;

		//Find location of shot
        const tile = board[row][col];
		//Did we hit a ship?
        if (tile > 0 && ships[tile]) {
            hits[tile] = (hits[tile] || 0) + 1;

            // First hit on this ship
            if (hits[tile] === 1) {
				//Keep track of whether each ship was damaged
                score.damaged++;
                score.notTouched--;
            }

			//Keep track of how many ships were sunk
            if (hits[tile] === ships[tile]) {
                score.sunk++;
                score.damaged--; // Its not injured, its dead. Its an ex-ship!
            }
        }
    });
	
    // Calculate final points
    score.points += (score.sunk * 1) + (score.damaged * 0.5) - (score.notTouched * 1);
    
	  // Return final score
    return score;
}
