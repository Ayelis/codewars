/*
  Solution for "DnD Character generator 1: attribute modifiers and spells"
  CodeWars Link: https://www.codewars.com/kata/596a690510ffee5c0b00006a

  Complexity Analysis:
  - Time Complexity: O(n) - n = level, iterated and character info tallied
  - Space Complexity: O(1) - the space used does not grow with the input size
*/

function charAttribute(level){
	//Create the player return object
	let player = {modifier: 0, maximumSpellLevel: -1, extraSpells: []};
	//Initialize the level range counter for spell deductions
	let spellRange = Math.floor(level/2)-5;
	if(level===0){ //cover nonexistant player case
		return player;
	}
	player.modifier = -6; //start below the bottom and work our way up...
	//Every 2 levels, iterate
	for(let eachLevel = 0; eachLevel <= level; eachLevel+=2){
		//The modifier increases per level*2
		player.modifier++; 
		//Spell level increase at the same rate as the level beyond 10
		player.maximumSpellLevel = level - 10;
		//Cap the spell level on both ends
		switch(true){
			case (player.maximumSpellLevel<0):
				player.maximumSpellLevel = -1; break;
			case (player.maximumSpellLevel>9):
				player.maximumSpellLevel = 9; break;
		}
	}
	//Iterate through each extra spell [but no lvl 10 spells!]
	for(let eachExtra=0;eachExtra < spellRange && eachExtra < 9;eachExtra++){
		//Calculate how many extra spells the player gets
		player.extraSpells.push(Math.ceil((spellRange - eachExtra)/4));
	}
	//And return the result
	return player;
}
