/*
  Solution for "Unique In Order"
  CodeWars Link: https://www.codewars.com/kata/54e6533c92449cc251001667

  Complexity Analysis:
  - Time Complexity: O(n) - Linear, iterating through strings and arrays
  - Space Complexity: O(n) - Linear, we generate a variable length array
*/

var uniqueInOrder=function(iterable){
  // Iterate through array or string
  const result = [...iterable].reduce((acc, char) => {
    // Push the current unique character to the result accumulator
    if (acc.at(-1) !== char) acc.push(char);
    //return the accumulation
    return acc;
  }, []);
  //return the result
  return (result);
}
