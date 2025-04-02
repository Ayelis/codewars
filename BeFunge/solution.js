	function interpret(code) {
		var output = "", stack = [];
		let pointerDirection = 0; //Pointer moves analyzer each tick to a new cell
		//0 default: right/east, 1: down/south, 2: left/west, 3:up/north
		let codePosition = {y:0,x:-1}; //Keep track of where we are, and start by interpreting square 0 (start at -1 and travel right)
		code = code.split("\n"); //Let's make it an array for reasons
		let isTrampolined = false; //code for flow control
		let stringMode = false; //code for entering strings
		let a, b, x, y, cd;

		for(;;){ //The Analyzer
			switch(pointerDirection){ //travel
				case 0: codePosition.x++;break;
				case 1: codePosition.y++;break;
				case 2: codePosition.x--;break;
				case 3: codePosition.y--;break;
			}
			//Wrap if vectored off scope
			if (codePosition.x < 0){
				codePosition.x = code[codePosition.y].length-1;
			}else if (codePosition.y < 0){
				codePosition.y = code.length-1;
			}else if (codePosition.x > code[codePosition.y].length){
				codePosition.x = 0;
			}else if (codePosition.y > code.length){
				codePosition.y = 0;
			}

			if(isTrampolined){ //skip this instruction
				isTrampolined = false;
				continue;
			}

			currentChar = code[codePosition.y][codePosition.x]; //Let's analyze this!
			cd+=currentChar;
			if(cd.length > 20){
				console.log(cd);
				cd="";	
			} 

			console.log (`Char: [${currentChar}]`);
			if(currentChar == "@"){ //Halt and catch fire...
				break; //Like tears in the rain...
			}

			//String Mode: Push characters
			if(stringMode && currentChar != "\""){
				stack.push(currentChar?.charCodeAt(0) || 0);
				continue;
			}

			//0-9 Push this number onto the stack.
			if (!isNaN(parseInt(currentChar))){
				stack.push(parseInt(currentChar));
				continue;
			}

			//everything else
			switch(currentChar){
			//Flow traversal
				case "#":
					isTrampolined = true;
					continue;				
				case ">": pointerDirection=0; continue;
				case "v": pointerDirection=1; continue;
				case "<": pointerDirection=2; continue;
				case "^": pointerDirection=3; continue;
				case "?": pointerDirection=Math.floor(Math.random() * 4); continue;
			//Mathematics
				case "+": [a, b] = [stack.pop(), stack.pop()]; stack.push(a+b); continue; //Pop a and b, then push a+b.
				case "-": [a, b] = [stack.pop(), stack.pop()]; stack.push(b-a); continue; //Pop a and b, then push b-a.
				case "*": [a, b] = [stack.pop(), stack.pop()]; stack.push(a*b); continue; //Pop a and b, then push a*b.
				case "/": //Pop a and b, then push b/a, rounded down. If a is zero, push zero.
					[a, b] = [stack.pop(), stack.pop()];
					if(a===0) stack.push(0);
					else stack.push(Math.floor(b/a));
					continue;
				case "%": //Pop a and b, then push the b%a. If a is zero, push zero.
					[a, b] = [stack.pop(), stack.pop()];
					if(a===0) stack.push(0);
					stack.push(b%a);
					continue;
			//Conditionals
				case "!": //NOT
					a = stack.pop();
					stack.push((a===0)?1:0);
					continue;
				case "_": //SWITCH 0=right, left otherwise.
					a = stack.pop();
					pointerDirection = (a === 0) ? 0 : 2;
					continue;
				case "|": //SWITCH 0=down, up otherwise.
					a = stack.pop();
					pointerDirection = (a === 0) ? 1 : 3;
					continue;
			//Stack Manipulation
				case "\"": //Start string mode
					stringMode = !stringMode;
					continue;
				case ":": //Duplicate
					stack.push((stack.length !== 0)?stack[stack.length - 1]:0);
					continue;
				case "\\": //Swap
					a = stack.pop() || 0;
					b = stack.pop() || 0;
					stack.push(a);
					stack.push(b);
					continue;
				case "$": //Pop and drop
					stack.pop();
					continue;
				case "`": //push 1 if b>a, otherwise zero.
					[a, b] = [stack.pop(), stack.pop()];
					stack.push((b > a) ? 1 : 0);
					continue;
			//Output
				case ".": //Pop value and output as an integer.
					output+=stack.pop()?.toString() || "0"; // Force string conversion
					continue;
				case ",": //Pop integer and output the ASCII character represented by the integer.
					b = stack.pop();
					if (b === undefined) b = 0;
					output += String.fromCharCode(b & 0x7F); // Standard ASCII
					continue;
					a = stack.pop() || 0;
					output += String.fromCharCode(a & 0xFF); // Force 8-bit ASCII
					continue;
			//Self-modifying code
				case "p": //Pop y, x and v, then change the character at the position (x,y)
					y = Math.max(0, stack.pop() || 0);
					x = Math.max(0, stack.pop() || 0);
					b = stack.pop() || 0;
					// Store the character
	    			code[y] = code[y].substring(0, x) + b + code[y].substring(x + 1);
					continue;
				case "g": //Pop y and x, then push ASCII value of the character at that position in the program.
					y = Math.max(0, stack.pop() || 0);
					x = Math.max(0, stack.pop() || 0);
					// Default to space if cell is undefined
					var row = code[y] || [];
					var cell = row[x] || ' ';
					stack.push(cell.charCodeAt(0));
					continue;
			} //Space, or any other character: does nothing
		}
		return output;
	}
	interpret('2>:3g" "-!v\  g30          <\n |!`"&":+1_:.:03p>03g+:"&"`|\n @               ^  p3\" ":<\n2 2345678901234567890123456789012345678');
