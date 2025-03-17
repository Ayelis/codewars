/*
  Solution for "Dreidel dreidel"
  CodeWars Link: https://www.codewars.com/kata/52b013920b1d45c8b4000355

  Complexity Analysis:
  - Time Complexity: O(n) - Linear, checking through an array
  - Space Complexity: O(1) - Constant, only using specific scalar values
*/

function gamble(rolls, myCoins, pot) {
	//check through the rolls array
	for(let roll=0;roll<rolls.length;roll++){
		//based on the roll, do something specific
		switch(rolls[roll]){
			case "Gimel": //win the pot!
				myCoins+=pot;
				pot=0; //and empty it!
			break;
			case "Hei": //take half, rounded down
				let winnings = Math.floor(pot/2);
				myCoins+=winnings;
				pot-=winnings;
			break;
			case "Shin": //lose 1
				myCoins--;
				pot++; //and the pot gains
			//break not needed
		}//accounting for Nun is not needed since nothing happens
	}
	return myCoins; //return the final value
}
