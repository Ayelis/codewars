/*
  Solution for "Codewars style ranking system"
  CodeWars Link: https://www.codewars.com/kata/51fda2d95d6efda45e00004e

  Complexity Analysis:
  - Time Complexity: O(1) - Constant: Overall, the time complexity of the `incProgress` method is O(1).
	1. The method starts with a constant time check to see if the user's rank is already at the maximum (rank 8). This is O(1).
	2. It then checks if the provided `activityRank` is valid, which is also O(1).
	3. The method calculates the rank difference using `rankDifference`, which involves a few arithmetic operations and condition checks, resulting in O(1) time complexity.
	4. The points are calculated using `calculatePoints`, which uses a switch statement with constant time complexity, thus O(1).
	5. The main loop that updates the user's progress and potentially ranks up the user runs while the progress is 100 or more and the rank is less than 8. In the worst case, this loop could run a maximum of 8 times (from rank -8 to rank 8), but since the rank is capped at 8, this is still considered O(1) in terms of time complexity.

  - Space Complexity: O(1) - Constant: The space complexity of the `User` class is also O(1). The class maintains a fixed number of properties (rank and progress), and no additional data structures that grow with input size are used. Thus, the space used does not depend on any input size and remains constant.
*/

class User {
	constructor(rank, progress) {
		this.rank = -8;  // All users start at rank -8
		this.progress = 0;  // With 0 progress
	}
  
  incProgress(activityRank) {
    // First validate the input rank
    if (activityRank < -8 || activityRank > 8 || activityRank === 0) {
      throw new Error("Invalid rank");
    }

    // Check if user is already at max rank (8)
    if (this.rank === 8) {
      this.progress = 0;  // Maintain progress at 0 for max rank
      return;  // Exit early since max rank can't progress further
    }

    // Calculate the difference between activity rank and user's rank
    // (accounting for the missing 0 in the rank sequence)
    let rankDiff = this.rankDifference(activityRank);
    
    // Determine how many points to award based on the rank difference
    let points = this.calculatePoints(rankDiff);

    // Add the points to current progress
    this.progress += points;

    // While we have enough progress to level up AND we're not at max rank
    while (this.progress >= 100 && this.rank < 8) {
      this.progress -= 100;  // Deduct 100 points
      this.rank = this.rankUp(this.rank);  // Increase rank
    }
    
    // Final check in case we just reached rank 8
    if (this.rank === 8) {
      this.progress = 0;  // Ensure progress is reset at max rank
    }
  }

  // Helper method to calculate rank difference accounting for missing 0
  rankDifference(activityRank) {
    let diff = activityRank - this.rank;
    
    // Adjust for the missing 0 in the rank sequence:
    // If going from negative to positive ranks, subtract 1
    if (activityRank > 0 && this.rank < 0) {
        diff--;
    }
    // If going from positive to negative ranks, add 1
    else if (activityRank < 0 && this.rank > 0) {
        diff++;
    }
    
    return diff;
  }

  // Determines how many points to award based on rank difference
  calculatePoints(diff) {
    switch (true) {
      case diff <= -2: return 0;    // Activity is too far below user's rank
      case diff === -1: return 1;   // Activity is 1 rank below
      case diff === 0: return 3;    // Activity is same rank
      default: return 10 * diff * diff;  // Activity is higher rank
    }
  }

  // Handles rank increases, skipping 0
  rankUp(currentRank) {
    if (currentRank === 8) return 8;    // Can't progress beyond 8
    if (currentRank === -1) return 1;   // Skip 0 when ranking up from -1
    return currentRank + 1;            // Normal case - just increment
  }
}