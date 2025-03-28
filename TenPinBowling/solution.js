/*
  Solution for "Ten-Pin Bowling"
  CodeWars Link: https://www.codewars.com/kata/5531abe4855bcc8d1f00004c

  Complexity Analysis:
  - Time Complexity: O(n) - Linear, checking a string array...
  - Space Complexity: O(n) - Linear, considering the input size, O(1) elsewise for the Rolls array...
*/

function bowlingScore(frames) {
    const frameList = frames.split(' ');
    let score = 0;
    const rolls = [];

    // Convert frames to rolls with proper 10th frame handling
    for (let i = 0; i < frameList.length; i++) {
        const frame = frameList[i];
        if (i === 9) { // 10th frame
            if (frame === 'XXX') {
                rolls.push(10, 10, 10);
            } else if (frame[1] === '/') {
                const first = parseInt(frame[0], 10);
                rolls.push(first, 10 - first);
                if (frame.length === 3) {
                    const third = frame[2] === 'X' ? 10 : parseInt(frame[2], 10);
                    rolls.push(third);
                }
            } else if (frame[0] === 'X') {
                rolls.push(10);
                const second = frame[1] === 'X' ? 10 : parseInt(frame[1], 10);
                rolls.push(second);
                if (frame.length === 3) {
                    const third = frame[2] === 'X' ? 10 : parseInt(frame[2], 10);
                    rolls.push(third);
                }
            } else {
                for (let j = 0; j < frame.length; j++) {
                    rolls.push(parseInt(frame[j], 10));
                }
            }
        } else if (frame === 'X') {
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
        const currentFrame = frameList[frame];
        if (currentFrame[0] === 'X') { // Check first character for strike
            // Strike: 10 + next two rolls
            score += 10;
            if (rollIndex + 1 < rolls.length) score += rolls[rollIndex + 1];
            if (rollIndex + 2 < rolls.length) score += rolls[rollIndex + 2];
            rollIndex += 1;
        } else if (currentFrame.includes('/')) {
            // Spare: 10 + next roll
            score += 10;
            if (rollIndex + 2 < rolls.length) score += rolls[rollIndex + 2];
            rollIndex += 2;
        } else {
            // Open frame: sum of rolls
            score += (rolls[rollIndex] || 0) + (rolls[rollIndex + 1] || 0);
            rollIndex += 2;
        }
    }

    return score;
}
