# Problem: ⚠️Fusion Chamber Shutdown⚠️
	Difficulty: 7
	Date Completed: 2025/04/16

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/5fde1ea66ba4060008ea5bd9)

## 🛠Function(s) Usage:
	Function: burner(c,h,o);

### Inputs:
	Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the fusion chamber...

### Returns or Examples:
    [water, co2, methane]
	Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced by the ordered reaction:
First Priority: Water (H₂O)
Hydrogen reacts with Oxygen to form water.
Each water molecule requires 2 Hydrogen atoms and 1 Oxygen atom.
Reaction: 2H + O → H₂O

Second Priority: Carbon Dioxide (CO₂)
Carbon reacts with Oxygen to form carbon dioxide.
Each CO₂ molecule requires 1 Carbon atom and 2 Oxygen atoms.
Reaction: C + 2O → CO₂

Third Priority: Methane (CH₄)
Carbon reacts with Hydrogen to form methane.
Each CH₄ molecule requires 1 Carbon atom and 4 Hydrogen atoms.
Reaction: C + 4H → CH₄

EXAMPLE: burner(45,11,100); => (5,45,0)