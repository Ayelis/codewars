/*
  Solution for "The Office I - Outed"
  CodeWars Link: https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1

  Complexity Analysis:
  - Time Complexity: O(n) - Iterating in a linear fashion through the meeting
  - Space Complexity: O(1) - Uses limted variables that do not grow with input
*/

function outed(meet, boss) {
  //initialize values
    let totalHappiness = 0;
    let numPeople = Object.keys(meet).length;

  //iterate through the room
    for (let person in meet) {
      //add the collective happiness
			totalHappiness += meet[person];
    }

  //count everyone including the boss
    totalHappiness += meet[boss];

  //average out the happiness per person
    let averageHappiness = totalHappiness / numPeople;
    
  //reply in kind (or pack your things!)
    return (averageHappiness <= 5)?"Get Out Now!":"Nice Work Champ!";
}
