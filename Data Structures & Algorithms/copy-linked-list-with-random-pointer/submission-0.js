// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        const map = new Map();
        let current = head;

        while(current) {
            map.set(current, new Node(current.val))
            current = current.next
        }

        current = head
        while(current) {
            const copiedNode = map.get(current)
            copiedNode.next = map.get(current.next) ?? null
            copiedNode.random = map.get(current.random) ?? null
            current = current.next
        }

        return map.get(head)
    }
}
