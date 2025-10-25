# Problem: Fluent Calculator
	Difficulty: 4
	Date Completed: 2025/06/27

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/5578a806350dae5b05000021)

## 🛠Function(s) Usage:
	Function: FluentCalculator.value.operation.value;

### Inputs:
	value - returns a value
	operation - when placed between values, commits the requested operation

### Returns or Examples:
    FluentCalculator.two // Should be 2
    FluentCalculator.one.plus.two // this should have a value of 3
    FluentCalculator.one.one // undefined
    FluentCalculator.one.plus.plus // undefined
    FluentCalculator.one.plus.two.plus.three.minus.one.minus.two.minus.four // Should be -1
    FluentCalculator.one.plus.ten - 10 // Should be 1