class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
  const rows = grid.length
    const cols = grid[0].length
    let minutes = 0
    let fresh = 0
    const queue = []

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                fresh++
            }
        }
    }

    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]

    while (queue.length  && fresh > 0) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift();

            for (let [dr, dc] of directions) {
                let nr = row + dr
                let nc = col + dc

                if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || grid[nr][nc] !== 1) {
                    continue
                }
                grid[nr][nc] = 2
                fresh--
                queue.push([nr, nc])

            }
        }
        minutes++

    }

    return fresh === 0 ? minutes : -1
    }
}
