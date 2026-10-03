
/**
* @param {character[][]} board
* @return {boolean}
*/
function isValidSudoku(board) {

    /**
     * 
     */
    const cols = new Map();
    const rows = new Map();
    const squares = new Map();
    for (let i = 0; i < 9; i++) {
        cols.set(i, new Set());
        rows.set(i, new Set());
        squares.set(i, new Set());
    }

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {


            if (board[row][col] === ".") {
                continue;
            }
            if (
                cols.get(col).has(board[row][col]) ||
                rows.get(row).has(board[row][col]) ||
                squares.get(Math.floor((row / 3) + (col / 3))).has(board[row][col])
            ) {
                return false

            }
            cols.get(col).add(board[row][col]);
            rows.get(row).add(board[row][col]);
            squares.get(Math.floor((row / 3) + (col / 3))).add(board[row][col]);
        }
    }
    return true
}

const board = [["1", "2", ".", ".", "3", ".", ".", ".", "."], ["4", ".", ".", "5", ".", ".", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", ".", "3"], ["5", ".", ".", ".", "6", ".", ".", ".", "4"], [".", ".", ".", "8", ".", "3", ".", ".", "5"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", ".", ".", ".", ".", ".", "2", ".", "."], [".", ".", ".", "4", "1", "9", ".", ".", "8"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

const result = isValidSudoku(board);

console.log(result)