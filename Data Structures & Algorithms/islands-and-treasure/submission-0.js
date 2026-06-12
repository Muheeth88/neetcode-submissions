class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        if(!grid.length) return grid

        const rows = grid.length
        const cols = grid[0].length
        const queue = []
        const directions = [[1, 0],[-1, 0],[0, 1],[0, -1]];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if(grid[r][c] === 0) {
                    queue.push([r,c]);
                }
            }
        }

        while(queue.length) {
            const [row, col] = queue.shift();

            for(let [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                if(newRow < 0 || newCol < 0 || newRow >= rows || newCol >= cols ||  grid[newRow][newCol] !== 2147483647) {
                    continue
                }

                grid[newRow][newCol] = grid[row][col] + 1
                queue.push([newRow, newCol]);
            }
        }

        return grid
    }
}
