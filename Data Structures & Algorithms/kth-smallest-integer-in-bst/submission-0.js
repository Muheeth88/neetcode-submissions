/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let data = []
        function dfs (node) {
            if(!node) return
            node.left && dfs(node.left)
            data.push(node.val)
            node.right && dfs(node.right)
        }
        dfs(root)
        console.log(data)
        return data[k-1]
    }
}
