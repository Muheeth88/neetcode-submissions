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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []
        let data = []
        let queue = [root]

        while(queue.length) {
            let size = queue.length
            for (let i = 0; i < size; i++) {
                let node = queue.shift()

                node.left && queue.push(node.left)
                node.right && queue.push(node.right)

                if(i === size - 1) {
                    data.push(node.val)
                }
            }

        }

        return data
    }
}
