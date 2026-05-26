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
        let current = head;

        while(current) {
            const copy = new Node(current.val);

            copy.next = current.next
            current.next = copy

            current = copy.next
        }

        current = head;
        while(current) {
            if (current.random) {
                current.next.random = current.random.next
            }
            current = current.next.next;
        }

        current = head
        let dummy = new Node(0)
        let copyPointer = dummy

        while (current) {
            let copy = current.next

            copyPointer.next = copy
            copyPointer = copy

            current.next = copy.next

            current = current.next;
        }
        return dummy.next
    }
}
