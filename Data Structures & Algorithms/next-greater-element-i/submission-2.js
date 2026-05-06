class Solution {
    nextGreaterElement(nums1, nums2) {
              const stack = []
        const map = new Map()

        for (let num of nums2) {
            while (stack.length && stack[stack.length - 1] < num) {
                map.set(stack.pop(), num)
            }
            stack.push(num)
        }

        return nums1.map(num => map.get(num) ?? -1)
    }
}
