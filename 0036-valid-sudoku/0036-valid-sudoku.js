/**
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function(board) {
//     for(let row=0;row<board.length;row++){
//             let rowHash= new Map();
//             let columnHash= new Map();
//         for(let column=0;column<board.length;column++){
//             if(rowHash.has())
//         }
//     }
// };

var isValidSudoku = function(board) {
    const rows = [{},{},{},{},{},{},{},{},{}];
    const cols = [{},{},{},{},{},{},{},{},{}];
    const boxes =  [{},{},{},{},{},{},{},{},{}];
    
    for (let r = 0; r <9; r ++) {
        for (let c = 0; c <9; c ++) {
            let val = board[r][c];
            
            if (val === ".") continue;
			
			let box = (Math.floor(r/3)*3) + Math.floor(c/3);
            // (Math.floor(row / 3) * 3) + Math.floor(col / 3);

			if (rows[r][val] || cols[c][val] || boxes[box][val]) return false;

			rows[r][val] = cols[c][val] = boxes[box][val] = true;
        }
    }
    
    return true;
};