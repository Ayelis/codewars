/*
  Solution for "Crash Override"
  CodeWars Link: https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f

  Complexity Analysis:
  - Time Complexity: O(1) - Efficient lookup time using straight array mapping
  - Space Complexity: O(1) - Fixed lookup tables and input strings
*/

function aliasGen(firstName, surname) {
    // Check if first characters are letters
    const firstInitial = firstName[0].toUpperCase();
    const surInitial = surname[0].toUpperCase();
    
    if (!/[A-Z]/.test(firstInitial) || !/[A-Z]/.test(surInitial)) {
        return "Your name must start with a letter from A - Z.";
    }
    
    // Define the name maps
    const firstNameMap = {
        A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Data', E: 'Energy', 
        F: 'Function', G: 'Glitch', H: 'Half-life', I: 'Ice', J: 'Java',
        K: 'Keystroke', L: 'Logic', M: 'Malware', N: 'Nagware', O: 'OS',
        P: 'Phishing', Q: 'Quantum', R: 'RAD', S: 'Strike', T: 'Trojan',
        U: 'Ultraviolet', V: 'Vanilla', W: 'WiFi', X: 'Xerox', Y: 'Y', 
        Z: 'Zero'
    };
    
    const surNameMap = {
        A: 'Analogue', B: 'Bomb', C: 'Catalyst', D: 'Discharge', E: 'Electron', 
        F: 'Faraday', G: 'Gig', H: 'Hacker', I: 'IP', J: 'Jabber',
        K: 'Killer', L: 'Lazer', M: 'Mike', N: 'n00b', O: 'Overclock',
        P: 'Payload', Q: 'Quark', R: 'Roy', S: 'Spy', T: 'T-Rex',
        U: 'Unit', V: 'Virus', W: 'Worm', X: 'X', Y: 'Yob', 
        Z: 'Zombie'
    };
    
    // Get the aliases - default to the initial if not found
    const firstAlias = firstNameMap[firstInitial] || firstInitial;
    const surAlias = surNameMap[surInitial] || surInitial;
    
    return `${firstAlias} ${surAlias}`;
}