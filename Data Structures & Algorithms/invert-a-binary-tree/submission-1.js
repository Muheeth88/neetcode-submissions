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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null;
        function traverse(node) {
            [node.left, node.right] = [node.right, node.left];
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }
        traverse(root);
        return root;
    }
}
