# Problem: Xiangqi/Chinese Chess Board Validator
	Difficulty: 4
	Date Completed: 2025/04/09

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/58f1e4a2445a4ccef600006d)

## 🛠Function(s) Usage:
	Function: chessValidator(board);

### Inputs:
	board = a linebreak-delimited string representing a Xiangqi board
	Each line is 9 characters wide
	The board is 10 rows tall

### Returns or Examples:
    true = the pieces are placed legally
	false = the pieces are in the wrong positions

  board = "\
車馬象士將士象馬車\n\
　　　｜Ｘ｜　　　\n\
　砲　＋－＋　砲　\n\
卒　卒　卒　卒　卒\n\
－－－－－－－－－\n\
－－－－－－－－－\n\
兵　兵　兵　兵　兵\n\
　炮　＋－＋　炮　\n\
　　　｜Ｘ｜　　　\n\
俥傌相仕帥仕相傌俥"
=> true
"A starting board is always valid"

  board = "\
俥傌相仕帥仕相傌俥\n\
　　　｜Ｘ｜　　　\n\
　炮　＋－＋　炮　\n\
兵　兵　兵　兵　兵\n\
－－－－－－－－－\n\
－－－－－－－－－\n\
卒　卒　卒　卒　卒\n\
　砲　＋－＋　砲　\n\
　　　｜Ｘ｜　　　\n\
車馬象士將士象馬車"
=> false
"A flipped starting board will not work"
