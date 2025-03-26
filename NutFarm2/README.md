# Problem: Nut Farm 2
	Difficulty: 5
	Date Completed: 2025/03/26

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/59b24a2158ef58966e00005e)

## 🛠Function(s) Usage:
	Function: shakeTree(tree);

### Inputs:
	A 2d array representing an ascii-based diagram of a tree.
	o = a nut
	\ = branch. A nut hitting this branch bounces right
	/ = branch. A nut hitting this branch bounces left
	. = leaves, which have no effect on falling nuts
	| = tree trunk, which has no effect on falling nuts
	  = empty space, which has no effect on falling nuts
	The nuts may be anywhere in the canopy of the tree
	Nuts do not affect the falling patterns of other nuts
	Falling nuts are only affected by the branches beneath them
	There is not always space for nuts to fall between branches
	A left/right bouncing nut may continue hitting other branches that bounces it further in that direction
	If a nut bouncing in one direction bounces backwards then it will become stuck in the tree
	There are no branches at the extreme left/right edges of the tree so it is not possible for a nut to fall "out of bounds"

### Returns or Examples:
.\..\..o//.o....\o.
.\./\\.///....\.o\.
.oo.\..o/\....\\o/.
..o.o\\//.o/.......
.\/.\/.\.o\oo\o.oo.
././..//o..o..oo\o.
.\.o\oo/\.o.o..\.\.
.\.\..o/oo\...//...
            
            
            
                
=> 0000112013052200106