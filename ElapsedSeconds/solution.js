/*
  Solution for "Elapsed Seconds"
  CodeWars Link: https://www.codewars.com/kata/517b25a48557c200b800000c

  Complexity Analysis:
  - Time Complexity: O(1) - Constant for basic math and date object creation
  - Space Complexity: O(1) - Constant, we're only storing 2 dates and seconds
*/

function elapsedSeconds(startDate, endDate){
  //format the date inputs properly
    const start = new Date(startDate);
    const end = new Date(endDate);

  //divide out the milliseconds and round to the nearest second
    return Math.round((end - start) / 1000);
}