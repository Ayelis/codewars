/*
  Solution for "Ranking Poker Hands"
  CodeWars Link: https://www.codewars.com/kata/5739174624fc28e188000465

  Complexity Analysis:
  - Time Complexity: O(_) - _
  - Space Complexity: O(_) - _
*/

const Result = { "win": 1, "loss": 2, "tie": 3 }
const rankOrder = '23456789TJQKA'; // T=10, J=11, ..., A=14

function PokerHand(hand) {
	this.strength = 0;
	this.primary = 0;
	this.secondary = 0;
	this.kickers = [];

	var suits = new Set();
	var ranks = [];

	//Split up the cards 
	hand = hand.split(' ');

	//Parse out the hand
	for (const card of hand) {
		const rankChar = card[0]; // 'A' (from "AS")
		const suitChar = card[1]; // 'S' (from "AS")
		ranks.push(rankOrder.indexOf(rankChar) + 2); // A=14, ... 2=2
		suits.add(suitChar);
	}

	//Find the best kickers
	ranks.sort((a, b) => b - a);
	
	const isFlush = suits.size === 1; // All cards same suit
	const isStraight = ranks.every((rank, i) => i === 0 || ranks[i-1] - rank === 1);
	const isAceLowStraight = ranks.join() === '5,4,3,2,1';
	const rankCounts = {};
	ranks.forEach(rank => rankCounts[rank] = (rankCounts[rank] || 0) + 1);
	const duplicates = Object.values(rankCounts).sort((a, b) => b - a);
	this.kickers = ranks.filter(rank => rankCounts[rank] === 1);

	switch(true){
		case (isFlush && isStraight):
			this.strength = 8; this.primary = ranks[0]; break;
		case (duplicates[0] == 4):
			this.strength = 7; this.primary = ranks.find(rank => rankCounts[rank] === 4); break;
		case (duplicates[0] == 3 && duplicates[1] == 2):
			this.strength = 6; this.primary = ranks.find(rank => rankCounts[rank] === 3); this.secondary = ranks.find(rank => rankCounts[rank] === 2); break;
		case (isFlush):
			this.strength = 5; this.primary = ranks[0]; break;
		case (isAceLowStraight):
			this.strength = 4; this.primary = 5; break;
		case (isStraight):
			this.strength = 4; this.primary = ranks[0]; break;
		case (duplicates[0] == 3):
			this.strength = 3; this.primary = ranks.find(rank => rankCounts[rank] === 3); break;
		case (duplicates[1] == 2):
			const pairs = ranks.filter(rank => rankCounts[rank] === 2);
			this.primary = Math.max(...pairs);
			this.secondary = Math.min(...pairs);
			this.kicker = ranks.find(rank => rankCounts[rank] === 1);
			this.strength = 2; break;
		case (duplicates[0] == 2):
			this.strength = 1; this.primary = ranks.find(rank => rankCounts[rank] === 2); break;
		default:
			this.strength = 0; this.primary = ranks[0]; break;
	}
}

PokerHand.prototype.compareWith = function(hand) {
  if (this.strength !== hand.strength) {
    return this.strength > hand.strength ? Result.win : Result.loss;
  }
  if (this.primary !== hand.primary) {
    return this.primary > hand.primary ? Result.win : Result.loss;
  }
  // Compare secondary (e.g., Full House's pair)
  if (this.secondary !== undefined || hand.secondary !== undefined) {
    if (this.secondary !== hand.secondary) {
      return this.secondary > hand.secondary ? Result.win : Result.loss;
    }
  }
  // Compare kickers for Flush, High Card, etc.
  for (let i = 0; i < Math.max(this.kickers.length, hand.kickers.length); i++) {
    const thisKicker = this.kickers[i] || 0;
    const handKicker = hand.kickers[i] || 0;
    if (thisKicker !== handKicker) {
      return thisKicker > handKicker ? Result.win : Result.loss;
    }
  }
  return Result.tie;
};
