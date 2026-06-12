class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let maxArea = 0
        // const visited = Array(rows).fill().map(() => Array(cols).fill(false))

        function dfs(r, c) {
            if(r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
                return 0
            }
            // visited[r][c] = true;
            grid[r][c] = 0
            return (1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1))
        }
        
        for(let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if(grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, dfs(r, c))
                }
            }
        }
        return maxArea
    }
}
