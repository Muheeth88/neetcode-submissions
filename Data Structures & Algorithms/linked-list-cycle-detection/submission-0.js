class Solution {
    hasCycle(head) {
        const visited = new Set()

        let currentNode = head;
        while(currentNode) {
            if(visited.has(currentNode)) {
                return true
            }
            visited.add(currentNode)
            currentNode = currentNode.next
        }
        return false
    }
}
