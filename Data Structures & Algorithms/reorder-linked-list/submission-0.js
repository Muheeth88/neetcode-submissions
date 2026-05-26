

class Solution {
    reorderList(head) {
        if (!head || !head.next) return;
        let slow = head;
        let fast  = head;

        while(fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let prev = null
        let current = slow.next

        slow.next = null;

        while(current) {
            let next = current.next
            current.next = prev

            prev = current
            current = next
        }


        let first = head
        let second = prev

        while(second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }



    }
}
