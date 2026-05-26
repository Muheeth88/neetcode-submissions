class Solution {
    removeNthFromEnd(head, n) {
        let arr = [];
        let current = head

        while(current) {
            arr.push(current.val)
            current = current.next
        }

        let ind = arr.length - n
        arr.splice(ind, 1)

        let dummy = new ListNode(0)
        current = dummy

        for (let val of arr) {
            let newNode = new ListNode(val)
            current.next = newNode
            current = current.next
        }

        return dummy.next

    }
}
