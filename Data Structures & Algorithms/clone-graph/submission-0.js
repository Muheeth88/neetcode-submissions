/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        const map = new Map();

        function dfs (current) {

            if (map.has(current)) {
                return map.get(current)
            }

            const clone = new Node(current.val)
            map.set(current, clone)

            for (let neighbor of current.neighbors) {
                clone.neighbors.push(dfs(neighbor))
            }

            return clone
        }

        return dfs(node)
    }
}
