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
        let count = 0
        let answer = null
        function dfs (node) {
            if(!node) return
            node.left && dfs(node.left)
            count++
            if(count === k) {
                answer = node.val
                return 
            }
            node.right && dfs(node.right)
        }
        dfs(root)
        return answer
    }
}
