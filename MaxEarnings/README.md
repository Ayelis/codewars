# Problem: Maximize your earnings with mandatory breaks
	Difficulty: 5
	Date Completed: 2025/04/13

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/66e03a09eeaad7e94d9f40a9)

## 🛠Function(s) Usage:
	Function: maximizeEarnings(earnings,k);

### Inputs:
	earnings - an array of non-negative integers ( 0 <= earnings < 100 )
	k - an integer: max consecutive working days ( 1 <= k < 100 )
	
	You have a list of daily earnings from a freelance job. You can choose to work or skip those days. You can work for up to k consecutive days, but after that, you must take at least one break day where you earn nothing.

### Returns or Examples:
    an integer representing the maximum earnings you can achieve while respecting the mandatory break rule.
earnings [60, 70, 80, 40, 80, 90, 100, 20]
k = 3
=> 480
