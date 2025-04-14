/*
  Solution for "Xiangqi/Chinese Chess Board Validator"
  CodeWars Link: https://www.codewars.com/kata/58f1e4a2445a4ccef600006d

  Complexity Analysis:
  - Time Complexity: O(1) - Fixed to the length of the input string: always a 10x9 Xiangqi board
  - Space Complexity: O(1) - Constant space usage due to fixed variables and object
*/

function chessValidator(board) {
    let row = 0, col = 0, k1col = -1;
	const counts = {
		俥:-2, 車:-2, 傌:-2, 馬:-2,
		炮:-2, 砲:-2, 相:-2, 象:-2,
		仕:-2, 士:-2, 帥:-1, 將:-1,
		兵:-5, 卒:-5
	};
	//empty space between kings
	const spaces = { "將": true, "　": true, "－":true, "Ｘ":true, "｜":true, "＋":true };

	//Iterate through the board
    for (let i = 0; i < board.length; i++) {
        const char = board[i]; let isOnDiagonal = false;
        if (char === '\n') {
			//Next row
            row++;col = 0;
        } else {
	//Check:The pieces are placed in a legal position
			//Count the piece
			counts[char]++;
			//Position checks
			switch(char){
				//elephants
				case "象":
					if (![[0,2],[0,6],[2,0],[2,4],[2,8],[4,2],[4,6]].some(([r,c]) => row === r && col === c)) { return false; }
					break;
				case "相": 
					if (![[9,2],[9,6],[7,0],[7,4],[7,8],[5,2],[5,6]].some(([r,c]) => row === r && col === c)) { return false; }
					break;
				//advisors - palace x
				case "士":
					isOnDiagonal = (row + col + 1) % 2 == 0;
					if(!(row<3 && col>2 && col<6 && isOnDiagonal)){ return false; }
					break;
				case "仕": 
					isOnDiagonal = (row + col) % 2 == 0;
					if(!(row>6 && col>2 && col<6 && isOnDiagonal)){ return false; }
					break;
				case "將":
					if(!(row<3 && col>2 && col<6)){ return false; }
					//Let's track this...
					k1col = col;
					break;
				case "帥": 
					
					if(!(row>6 && col>2 && col<6)){ return false; }
					//Check: Kings can't see eachother
					if(col == k1col){ return false; }
					break;
				//pawns
				case "卒":
					if(!(row>2&&(col%2)==0 || row>4)){ return false; }
					if((row>2&&(col%2)==0 && row==4 && board[30+col] == "卒")){ return false; }
					break;
				case "兵":
					if(!(row<7&&(col%2)==0 || row<5)){ return false; }
					if((row<7&&(col%2)==0 && row==5 && board[60+col] == "兵")){ return false; }
					break;
			}
			//Check if a piece (not the king) blocks the sight of the kings, and reset the column indicator
			if(!(char in spaces) && col==k1col && char.charCodeAt(0) > 128){ k1col = -1; }
			//Next square
            col++;
        }
		//Check: Number of pieces of each side is within their respective limits
		if(counts[char]>0){ return false; } 
    }
	//Check: Number of kings of each side must equal 1
	if(counts['帥'] || counts['將']){ return false; }
	//Board is valid
	return true;
}
