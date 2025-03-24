# Problem: Codewars style ranking system
	Difficulty: 4
	Date Completed: 2025/03/24

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/51fda2d95d6efda45e00004e)

## 🛠Class(es) Usage:
	class: user = new User();
	user.incProgress(n);

### Inputs:
	new User() instantiates a User object.
	incProgress(level) increases the progress counter by a variable amount.

### Returns or Examples:
	Declaring a new user will create an object with a rank of -8 and
	0 progress. Calling the incProgress function with a problem ranked
	-8 through -1 or 1 through 8 will increase the user's progress by
	an amount that varies with the level of the user. When the progress
	counter reaches 100, the user "levels up" to the next rank.
	
    var user = new User()
	user.rank // => -8
	user.progress // => 0
	user.incProgress(-7)
	user.progress // => 10
	user.incProgress(-5) // will add 90 progress
	user.progress # => 0 // progress is now zero
	user.rank # => -7 // rank was upgraded to -7