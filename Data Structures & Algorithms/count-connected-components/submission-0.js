class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = Array.from({ length: n }, () => []);

        // Build adjacency list
        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const visited = new Set();
        let count = 0;

        const dfs = (node) => {
            visited.add(node);

            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor)
                }
            }
        }

        for (let node = 0; node < n; node++) {
            if(!visited.has(node)) {
                count++
                dfs(node)
            }
        }

        return count
    }
}
