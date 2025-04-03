/*
  Solution for "Translate DNA in 6 frames"
  CodeWars Link: https://www.codewars.com/kata/5708ef48fe2d018413000776

  Complexity Analysis:
  - Time Complexity: O(n) - Linear due to the length of the DNA string
  - Space Complexity: O(n) - storing the reverse complement and the resulting amino acid strings.
*/

// Function to generate the reverse complement of a DNA sequence
function reverseComplement(str) {
  // DNA base pairing: A <-> T, C <-> G
  const complement = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
  
  // Reverse the string and replace each nucleotide with its complement
  return [...str].reverse().map(c => complement[c]).join('');
}

// Function to translate a DNA sequence into amino acids in different reading frames
function translateWithFrame(dna, frames = [1, 2, 3, -1, -2, -3]) {
  // Handle empty DNA string case
  if (!dna) {
    return frames.length === 0 ? [] : frames.map(() => '');
  }

  // Helper function to extract amino acid sequence from a DNA string
  // s: DNA sequence, o: offset (frame shift)
  const getAminos = (s, o) => 
    [...Array(Math.floor((s.length - o) / 3))] // Create an array of triplets
      .map((_, i) => codons[s.substr(o + i * 3, 3)] || '') // Translate each triplet into an amino acid
      .join('');

  // Compute the reverse complement of the input DNA
  const rc = reverseComplement(dna);
  
  // Store translations for all six reading frames
  const frameSet = {
    1: getAminos(dna, 0),  // Forward strand, frame 1
    2: getAminos(dna, 1),  // Forward strand, frame 2
    3: getAminos(dna, 2),  // Forward strand, frame 3
    '-1': getAminos(rc, 0), // Reverse complement strand, frame 1
    '-2': getAminos(rc, 1), // Reverse complement strand, frame 2
    '-3': getAminos(rc, 2)  // Reverse complement strand, frame 3
  };
  
  // Return translations for the specified frames
  return frames.map(f => frameSet[f] || '');
}
