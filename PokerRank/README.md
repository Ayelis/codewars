# Problem: Ranking Poker Hands
	Difficulty: 4
	Date Completed: 2025/04/12

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/5739174624fc28e188000465)

## 🛠Class/Function(s) Usage:
	new PokerHand(hand);
	Function: hand1.compareWith(hand2);

### Inputs:
	hand - A string representing a hand in Texas Hold 'Em.
	Suits are H, D, C, and S for hearts, diamonds, clubs, and spades
	respectively. Ranks include numbers 2-9, T for ten, J for Jack,
	Q for Queen, K for King, and A for Ace.
	One hand might be "2H 5C TD QC AS"

### Returns or Examples:
 	var p = new PokerHand("2H 5C TD QC AS");
  	var o = new PokerHand("AD 4C 5H 6H 2C");

  	if(p.compareWith(o)) {console.log("You win!")} else {console.log("You lose...")};
