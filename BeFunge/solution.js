function interpret(code) {
	var output = "", stack = [];
	let pointerDirection = 0; //Pointer moves analyzer each tick to a new cell
	//0 default: right/east, 1: down/south, 2: left/west, 3:up/north
	let codePosition = {y:0,x:-1}; //Keep track of where we are, and start by interpreting square 0 (start at -1 and travel right)
	code = code.split("\n"); //Let's make it an array for reasons
	let isTrampolined = false; //code for flow control
	let stringMode = false; //code for entering strings
	let a, b, x, y;

	for(;;){ //The Analyzer
		switch(pointerDirection){ //travel
			case 0: codePosition.x++;break;
			case 1: codePosition.y++;break;
			case 2: codePosition.x--;break;
			case 3: codePosition.y--;break;
		}

		pos = (`Position: (${codePosition.x},${codePosition.y}) | `);

		if (
		  codePosition.x < 0 || 
		  codePosition.y < 0 || 
		  codePosition.y >= code.length || 
		  codePosition.x >= code[codePosition.y]?.length
		){
			break; //End program (vectored off scope)
		}

		if(isTrampolined){ //skip this instruction
			isTrampolined = false;
			continue;
		}

		currentChar = code[codePosition.y][codePosition.x]; //Let's analyze this!

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
			case "/":
				[a, b] = [stack.pop(), stack.pop()];
				if(a===0) stack.push(0);
				else stack.push(Math.floor(b/a));
				continue; //Pop a and b, then push b/a, rounded down. If a is zero, push zero.
			case "%": 
				[a, b] = [stack.pop(), stack.pop()];
				if(a===0) stack.push(0);
				stack.push(b%a);
				continue; //Pop a and b, then push the b%a. If a is zero, push zero.
		//Conditionals
			case "!": 
				a = stack.pop();
				if(a==1) stack.push(1);
				else stack.push(0);
				continue; //Pop a value. If the value is zero, push 1; otherwise, push zero.
			case "_":
				const val = stack.length ? stack.pop() : 0;
				pointerDirection = (val === 0) ? 0 : 2; // 0=right, 2=left
				continue;
			case "|": 
				a = stack.pop();
				if(a==0) pointerDirection=1;
				else pointerDirection=3;
				continue; //move down if value = 0, up otherwise.
		//Stack Manipulation
			case "\"": 
				stringMode = !stringMode;
				continue; //Start string mode
			case ":":
				if (stack.length === 0) {
					stack.push(0);
				} else {
					stack.push(stack[stack.length - 1]);
				}
				continue;
			case "\\":
				while (stack.length < 2) stack.push(0);
				[a, b] = [stack.pop(), stack.pop()];
				stack.push(a, b);
				continue; //Swap two values on top of the stack. If there is only one value, pad it with 0s.
			case "$": 
				stack.pop();
				continue; //Pop value from the stack and discard it.
			case "`": 
				[a, b] = [stack.pop(), stack.pop()];
				stack.push(a, b);
				continue; //Greater than: Pop a and b, then push 1 if b>a, otherwise push zero.
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
			case "p": // 'put' command
				y = Math.max(0, stack.pop() || 0);
				x = Math.max(0, stack.pop() || 0);
				b = stack.pop() || 0;

				// Ensure the row exists
				if (!code[y]) {
					code[y] = [];
				}
				// Store the character (truncated to 8-bit ASCII)
				code[y][x] = String.fromCharCode(b & 0xFF);
				console.log("Putting "+String.fromCharCode(b & 0xFF)+" ("+b+") at ["+x+","+y+"]");
				continue;

			case "g": // 'get' command
				y = Math.max(0, stack.pop() || 0);
				x = Math.max(0, stack.pop() || 0);
				
				// Default to space if cell is undefined
				var row = code[y] || [];
				var cell = row[x] || ' ';
				stack.push(cell.charCodeAt(0));
				console.log("Got char code "+cell.charCodeAt(0)+" from ["+x+","+y+"]");
				continue;

		} //Space, or any other character: does nothing
	}
	return output;
}