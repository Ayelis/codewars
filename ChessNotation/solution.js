/*
  Solution for "Explain the Algebraic Chess Notation"
  CodeWars Link: https://www.codewars.com/kata/65b9af728732e1002463ab5e

  Complexity Analysis:
  - Time Complexity: O(n) - Linear depending on the size of the move notation
  - Space Complexity: O(n) - Linear depending on the length of the return string
*/

function toWords(move) {
    // Handle castling first
    if (move === 'O-O') return 'A kingside castle.';
    if (move === 'O-O-O') return 'A queenside castle.';
    
    let piece = 'Pawn';
    let fromFile = '';
    let fromRank = '';
    let capture = false;
    let promotion = '';
    let check = '';
    let enPassant = false;
    
    // Check for en passant
    if (move.includes(' e.p.')) {
        enPassant = true;
        move = move.replace(' e.p.', '');
    }
    
    // Check for check or checkmate
    if (move.endsWith('#')) {
        check = ', checkmate';
        move = move.slice(0, -1);
    } else if (move.endsWith('+')) {
        check = ', check';
        move = move.slice(0, -1);
    }
    
    // Check for promotion
    const promotionMatch = move.match(/=(.+)$/);
    if (promotionMatch) {
        promotion = promotionMatch[1];
        move = move.split('=')[0];
    }
    
    // First determine if this is a piece move (starts with K, Q, B, R, N)
    const pieceLetters = ['K', 'Q', 'B', 'R', 'N'];
    if (pieceLetters.includes(move[0])) {
        piece = {
            'K': 'King',
            'Q': 'Queen',
            'B': 'Bishop',
            'R': 'Rook',
            'N': 'Knight'
        }[move[0]];
        move = move.slice(1);
    }
    
    // Check for capture
    if (move.includes('x')) {
        capture = true;
        // For pawn captures, the part before 'x' is the source file
        if (piece === 'Pawn') {
            const parts = move.split('x');
            fromFile = parts[0];
            move = parts[1];
        } else {
            move = move.replace('x', '');
        }
    }
    
    // Check for disambiguation (file or rank) - only for non-pawn pieces
    // This looks for patterns like N7xc3 or Red5
    if (piece !== 'Pawn') {
        // Check for rank disambiguation (e.g., N7f3)
        if (/^[1-8]/.test(move)) {
            fromRank = move[0];
            move = move.slice(1);
        }
        // Check for file disambiguation (e.g., Rbc1)
        else if (/^[a-h][a-h]/.test(move)) {
            fromFile = move[0];
            move = move.slice(1);
        }
    }
    
    // The remaining part is the destination square
    const destination = move;
    
    // Build the result string
    let result = '';
    
    if (piece !== 'Pawn' && fromFile) {
        result = `${piece} on file ${fromFile} moved to ${destination}`;
    } else if (piece !== 'Pawn' && fromRank) {
        result = `${piece} on rank ${fromRank} moved to ${destination}`;
    } else {
        result = `${piece} moved to ${destination}`;
    }
    
    if (capture && enPassant) {
        result += ', capturing en passant';
    } else if (capture) {
        result += ' and captured';
    }
    
    if (promotion) {
        const promotedPiece = {
            'K': 'king',
            'Q': 'queen',
            'B': 'bishop',
            'R': 'rook',
            'N': 'knight'
        }[promotion];
        result += ` and promoted to ${promotedPiece}`;
    }
    
    result += check;
    
    if (enPassant && !capture) {
        result += ', capturing en passant';
    }
    
    return result + '.';
}
