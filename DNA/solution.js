/*
  Solution for "Translate DNA in 6 frames"
  CodeWars Link: https://www.codewars.com/kata/5708ef48fe2d018413000776

  Complexity Analysis:
  - Time Complexity: O(_) - _
  - Space Complexity: O(_) - _
*/
function reverseComplement(str) {
  const complement = { 'A':'T', 'T':'A', 'C':'G', 'G':'C' };
  return Array.from(str).reverse().map(c => complement[c] || '').join('');
}
function translateWithFrame(dna, frames=[1,2,3,-1,-2,-3]){
  let frameset=[];

  const getAminos = (s, o) => [...Array(Math.floor((s.length - o)/3))].map((_,i) => codons[s.substr(o + i*3,3)] || '').join('');

  let frame = [0,1,2].map(o => getAminos(dna, o));
  let RCframe = [0,1,2].map(o => getAminos(reverseCompliment(dna), o));
  const frameset = {1: f[0], 2: f[1], 3: f[2], '-1': r[0], '-2': r[1], '-3': r[2]};

  return [frameset];
}
