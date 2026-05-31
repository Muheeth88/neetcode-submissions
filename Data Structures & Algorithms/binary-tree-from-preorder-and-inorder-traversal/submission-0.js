class Solution {
    buildTree(preorder, inorder) {
        if (!preorder.length || !inorder.length) {
            return null;
        }

        let rootVal = preorder[0]
        const root = new TreeNode(rootVal);

        let rootIdx = inorder.indexOf(rootVal)
        
        let leftInOrder = inorder.slice(0, rootIdx)
        let rightInOrder = inorder.slice(rootIdx + 1)

        let leftPreOrder = preorder.slice(1, 1+leftInOrder.length)
        let rightPreOrder = preorder.slice(1+leftPreOrder.length)

        root.left = this.buildTree(leftPreOrder, leftInOrder);

        root.right = this.buildTree(rightPreOrder, rightInOrder)
        
        return root
    }
}
