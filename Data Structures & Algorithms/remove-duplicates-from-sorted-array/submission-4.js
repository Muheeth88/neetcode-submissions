class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const dup = [...new Set(nums)]

        for(let i = 0 ; i < dup.length; i++) {
            nums[i] = dup[i]
        }
        return dup.length
    }
}
