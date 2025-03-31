/*
  Solution for "Anakins Colorful Protocol Droids"
  CodeWars Link: https://www.codewars.com/kata/562086bbaacc2b4d13000047

  Complexity Analysis, Droid init:
  - Time Complexity: O(1) - Constant
  - Space Complexity: O(n) - Linear, due to the number of guesses

  Complexity Analysis, Droid guess:
  - Time Complexity: O(n log n) - Quasilinear/Linearithmic
      [Something like O((G + R) log(G + R) + (G + R) * K)]
  - Space Complexity: O(n) - Linear based on colors and guesses

  Complexity Analysis, Anakin hint:
  - Time Complexity: O(n log n) - Quasilinear, better with fewer colors
  - Space Complexity: O(n) - Linear, colors and unique colors
*/

Droid.prototype.init = function() {
  // Initialize to store the color hint when it's received
  this.hint = null;

  // Initialize empty list for previous guesses
  this.guessesSoFar = [];

  // When the hint is given, store it for later
  this.on('hint', function(hint) {
    this.hint = hint;
  });

  // Every time a guess is heard, record it in the guesses list
  this.on('guess', function(guess) {
    this.guessesSoFar.push(guess);
  });
};

Droid.prototype.guess = function(remainingDroidColors) {
  // Step 1: Combine previous guesses and remaining colors
  let knownColors = [...this.guessesSoFar, ...remainingDroidColors];

  // Step 2: Create a sorted array of unique colors (including the hint)
  let uniqueColors = [...new Set([this.hint, ...knownColors])].sort();
  let K = uniqueColors.length;

  // Step 3: Compute the sum of known colors' indices
  let sumKnown = knownColors.reduce((sum, color) => {
    return sum + uniqueColors.indexOf(color);
  }, 0);

  // Step 4: Solve for the current droid's color
  // Total sum (hint + known + guess) ≡ 0 mod K
  // => guess ≡ (-hintIndex - sumKnown) mod K
  let hintIndex = uniqueColors.indexOf(this.hint);
  let guessIndex = (-hintIndex - sumKnown) % K;
  if (guessIndex < 0) guessIndex += K; // Ensure positive

  let guess = uniqueColors[guessIndex];
  return guess;
};

Anakin.prototype.hint = function(droidColors) {
  // Step 1: Create a sorted list of unique colors
  let uniqueColors = [...new Set(droidColors)].sort();
  let K = uniqueColors.length;

  // Step 2: Calculate the sum of all color indices
  let total = droidColors.reduce((sum, color) => {
    return sum + uniqueColors.indexOf(color);
  }, 0);

  // Step 3: The hint is the color that makes the total sum ≡ 0 mod K
  let hintIndex = (-total % K + K) % K; // Ensure positive modulo
  let hint = uniqueColors[hintIndex];
  return hint;
};