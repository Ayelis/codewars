/*
  Solution for "Pick peaks"
  CodeWars Link: https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

  Complexity Analysis:
  - Time Complexity: O(n) - Scanning over an array to fetch a few values
  - Space Complexity: O(1) - Using the original array and a couple iterators
	A new array is also built which varies in size, but it's always less than
	the size of the given array.
*/

function pickPeaks(arr){
  //declare return array
  let result = {pos: [], peaks: []}, i=1;

  //controlled iteration over array
  while (i < arr.length - 1) {
    let start = i;

    // Move forward through a plateau
    while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
        i++;
    }

    // Check if it is a peak (using first index of plateau)
    if (arr[start] > arr[start - 1] && arr[i] > arr[i + 1]) {
        result.pos.push(start); // Store first index of plateau
        result.peaks.push(arr[start]); // Store peak value
    }

    i++; // Move to next element after checking plateau
  }
  return result;
}
