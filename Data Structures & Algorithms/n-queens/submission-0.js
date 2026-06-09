class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result = []
        const board = Array(n).fill().map(() => Array(n).fill("."))
        const cols = new Set();
        const diagonals = new Set();
        const antiDiagonals = new Set();

        function backtrack(row) {
            if(row === n) {
                result.push(board.map(r => r.join("")))
                return
            }

            for (let col = 0; col < n; col++) {
                const diagonal = row - col
                const antiDiagonal = row + col

                if(cols.has(col) || diagonals.has(diagonal) || antiDiagonals.has(antiDiagonal) ) {
                    continue
                }

                board[row][col] = "Q"
                cols.add(col)
                diagonals.add(diagonal)
                antiDiagonals.add(antiDiagonal)

                backtrack(row+1)

                board[row][col] = ".";
                cols.delete(col);
                diagonals.delete(diagonal);
                antiDiagonals.delete(antiDiagonal);

            }
        }

        backtrack(0)

        console.log(board)
        return result
    }
}
