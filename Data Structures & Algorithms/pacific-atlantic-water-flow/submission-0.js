class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const pacific = new Set();
        const atlantic = new Set();
        const result = [];

        const directions = [
            [0, -1],
            [0, 1],
            [1, 0],
            [-1, 0],
        ];

        function dfs(r, c, visited) {
            visited.add(`${r},${c}`);
            for (let [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr < 0 ||
                    nr >= rows ||
                    nc < 0 ||
                    nc >= cols ||
                    visited.has(`${nr},${nc}`) ||
                    heights[nr][nc] < heights[r][c]
                ) {
                    continue;
                }

                dfs(nr, nc, visited);
            }
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacific);
            dfs(r, cols - 1, atlantic);
        }

        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacific);
            dfs(rows - 1, c, atlantic);
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const key = `${r},${c}`;
                if (pacific.has(key) && atlantic.has(key)) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}
