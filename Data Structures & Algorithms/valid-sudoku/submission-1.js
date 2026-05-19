class Solution {
    isValidSudoku(board) {
        let rows = new Map();
        let cols = new Map();
        let boxes = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let value = board[r][c];

                if (value === ".") {
                    continue
                }

                let boxKey = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

                if(!rows.has(r)) {
                    rows.set(r, new Set())
                }

                if (!cols.has(c)) {
                    cols.set(c, new Set())
                }

                if (!boxes.has(boxKey)) {
                    boxes.set(boxKey, new Set())
                }

                if( rows.get(r).has(value) 
                    || cols.get(c).has(value) 
                    || boxes.get(boxKey).has(value)) {
                    return false
                }

                rows.get(r).add(value)
                cols.get(c).add(value)
                boxes.get(boxKey).add(value)
            }
        }
    return true
    }
}
