/*
  Solution for "⚠️Fusion Chamber Shutdown⚠️"
  CodeWars Link: https://www.codewars.com/kata/5fde1ea66ba4060008ea5bd9

  Complexity Analysis:
  - Time Complexity: O(1) - We use a constant number of operations
  - Space Complexity: O(1) - A fixed amount of memory is used for outputs

  Considerations:
	Here, I create 3 additional variables for readability.
If Space Complexity is of utmost importance, I can get away with only needing
1 additional variable by working in reverse and reusing the inputs as outputs.
In that case, O is unused after the second step and can be repurposed to hold
the co2 value. Methane can be assigned to either C or H in the last step. We
only need one extra variable to hold water in the first step.
The space-optimized is shown below the expanded function.
*/

function burner(C, H, O) {
    // Calculate Water (H2O)
    let water = Math.min(Math.floor(H / 2), O);
    // Consume the atoms as they cannot be used in future interactions
    H -= water * 2;
    O -= water;
    
    // Calculate Carbon Dioxide (CO2)
    let co2 = Math.min(C, Math.floor(O / 2));
    // Consume the atoms
    C -= co2;
    O -= co2 * 2;
    
    // Calculate Methane (CH4)
    let methane = Math.min(C, Math.floor(H / 4));
    // No need to update C and H further as they're not used after this
    
    return [water, co2, methane];
}

//Optimized for Space
function burner(C, H, O) {
    // Calculate Water (H2O)
    let water = Math.min(Math.floor(H / 2), O);
    // Consume the atoms as they cannot be used in future interactions
    H -= water * 2;
    O -= water;
    
    // Calculate Carbon Dioxide (CO2) as O
    O = Math.min(C, Math.floor(O / 2));
    // Consume the carbon atoms
    C -= co2;
    
    // Calculate Methane (CH4) as H
    H = Math.min(C, Math.floor(H / 4));
    
    return [water, O, H];
}