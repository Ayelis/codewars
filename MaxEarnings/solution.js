/*
  Solution for "Maximize your earnings with mandatory breaks"
  CodeWars Link: https://www.codewars.com/kata/66e03a09eeaad7e94d9f40a9

  Complexity Analysis:
  - Time Complexity: O(nk) - n days * k states considered
  - Space Complexity: O(n) - states for previous day stored
*/

function maximizeEarnings(earnings, k) {
    const n = earnings.length;
    if (n === 0) return 0; // in case of random tests!
    
    // prev[j] represents max earnings up to previous day with j consecutive work days
    let prev = new Array(k + 1).fill(0);
    
    for (let day = 0; day < n; day++) {
        const todayEarning = earnings[day];
        const current = new Array(k + 1).fill(0);
        
        // Option 1: Take a break today
        current[0] = Math.max(...prev);
        
        // Option 2: Work today, figure out consecutive earnings
        for (let workDays = 1; workDays <= k; workDays++) {
            if (workDays === 1) {
                current[workDays] = prev[0] + todayEarning;
            } else {
                current[workDays] = prev[workDays - 1] + todayEarning;
            }
        }
        //and iterate
        prev = current;
    }
    //and send the max earnings...
    return Math.max(...prev);
}
