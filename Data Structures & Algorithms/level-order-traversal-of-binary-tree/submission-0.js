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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        let data = []
        const queue = [root]

        while(queue.length) {
            const size = queue.length;
            const level = []

            for (let i = 0; i < size; i++) {
                const node = queue.shift()
                level.push(node.val)

                node.left && queue.push(node.left)
                node.right && queue.push(node.right)
            }
            data.push(level)
        }


        return data
    }
}
