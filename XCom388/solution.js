/*
  Solution for "[BUG] XCOM-388: Mass spectrometer crashes"
  CodeWars Link: https://www.codewars.com/kata/66001d26a43fba02c5c8adc4

  Complexity Analysis:
  - Time Complexity: O(n) - Scanning through an array for the maximum value
  - Space Complexity: O(1) - Just a few extra variables created to chunk and track max
*/

const Spectrometer = {
  getHeaviest: function(atomicMasses) {
    //for an empty set
    if(!atomicMasses.length) return 0;
    //let's get ready to chunk
    let chunkSize = 100000, max = 0;

    for (let i = 0; i < atomicMasses.length; i += chunkSize) {
        //perforate and sever
        const chunk = atomicMasses.slice(i, i + chunkSize);
        const chunkMax = chunk.reduce((max, num) => Math.max(max, num), -Infinity);
        //find the needle in the haystack
        max = Math.max(max, chunkMax);
    }
    return max;
  }  
};
