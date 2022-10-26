/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = new Array(9).fill().map(() => new Set());
    const cols = new Array(9).fill().map(() => new Set());
    const squares = new Array(9).fill().map(() => new Set());
    for(let row=0;row<board.length;row++){
        for(let column=0;column<board.length;column++){
            if(board[row][column]==".") continue;
            let value=board[row][column];
            let sqr=(Math.floor(row/3)*3)+(Math.floor(column/3));
            if(rows[row].has(value)||cols[column].has(value)||squares[sqr].has(value)) return false;
            rows[row].add(value);
            cols[column].add(value);
            squares[sqr].add(value);
        }
    }
    return true;
};

