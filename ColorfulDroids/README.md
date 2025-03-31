# Problem: Anakins Colorful Protocol Droids
	Difficulty: 4
	Date Completed: 2025/03/30

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/562086bbaacc2b4d13000047)

## 🛠Function(s) Usage:
	Function: Anakin.hint(droidColors); //Anakin is prompted to give a single
		hint to the droids, knowing their colors
	Function: Droid.guess(remainingDroidColors); //A droid is prompted to make
		a guess as to its own color knowing only the colors of the droids who
		haven't guessed their colors yet, and what it's "heard" through events

	Event: hint(hint); //All droids "hear" Anakin give a hint
	Event: guess(guess); //All droids "hear" other droids guesses

### Inputs:
	Droid.prototype.init = function() //set up the event listeners, internal variables; return void
	Droid.prototype.guess = function(remainingDroidColors) //return string (the current droid's color)
	Anakin.prototype.hint = function(droidColors) //return string (a color matching one droid)

### Returns or Examples:
    droidColors = ['black', 'black', 'white', 'black', 'white', 'black', 'white', 'black'];
=>
	Anakin hint: white
	Droid guesses: black
	Droid guesses: black
	Droid guesses: white
	Droid guesses: black
	Droid guesses: white
	Droid guesses: black
	Droid guesses: white
	Droid guesses: black
