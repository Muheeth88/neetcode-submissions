

class Solution {
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0);
        let tail = dummy

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                console.log(tail)
                tail.next = list1
                list1 = list1.next
                console.log(tail)
                tail = tail.next;
                console.log(tail)
            } else {
                tail.next = list2
                list2 = list2.next
                tail = tail.next;
            }
        }

        if(list1) {
            tail.next = list1
        }


        if (list2) {
            tail.next = list2;
        }
      return dummy.next;

    }
}
