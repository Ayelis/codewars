# Problem: Strip Comments
	Difficulty: 4
	Date Completed: 2025/03/17

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/51c8e37cee245da6b40000bd)

## 🛠Function(s) Usage:
	Function: solution(text,markers);

### Inputs:
	A single string with newlines and comment markdown, and a delimited array showing chosen comment markers

### Returns or Examples:
    The string with comments removed.
    var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
    // result should == "apples, pears\ngrapes\nbananas"
