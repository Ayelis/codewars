/*
  Solution for "Ten-Pin Bowling"
  CodeWars Link: https://www.codewars.com/kata/5531abe4855bcc8d1f00004c

  Complexity Analysis:
  - Time Complexity: O(n) - Linear, checking a string array...
  - Space Complexity: O(n) - Linear, increasing up to the length of the array...
*/

function bowlingScore(frames) {
    const frameList = frames.split(' ');
    let score = 0;
    const rolls = [];
    
    // Convert all frames into individual rolls
    for (let i = 0; i < frameList.length; i++) {
        const frame = frameList[i];
        if (frame === 'X') {
            rolls.push(10);
        } else if (frame.includes('/')) {
            const first = parseInt(frame[0], 10);
            rolls.push(first);
            rolls.push(10 - first);
        } else {
            for (let j = 0; j < frame.length; j++) {
                rolls.push(parseInt(frame[j], 10));
            }
        }
    }
    
    // Calculate score
    let rollIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
        if (frameList[frame] === 'X') {
            // Strike - add 10 plus next two rolls
            score += 10;
            // Only add bonus if the rolls exist (handles 10th frame)
            if (rollIndex + 1 < rolls.length) score += rolls[rollIndex + 1];
            if (rollIndex + 2 < rolls.length) score += rolls[rollIndex + 2];
            rollIndex += 1;
        } else if (frameList[frame].includes('/')) {
            // Spare - add 10 plus next roll
            score += 10;
            if (rollIndex + 2 < rolls.length) score += rolls[rollIndex + 2];
            rollIndex += 2;
        } else {
            // Open frame
            score += rolls[rollIndex] + rolls[rollIndex + 1];
            rollIndex += 2;
        }
    }
    return score;
}