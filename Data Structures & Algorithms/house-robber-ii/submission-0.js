class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0]

        function helper(start, end) {
            let prev2 = 0
            let prev1 = 0

            for (let i = start; i <= end; i++) {
                const current = Math.max(prev1, nums[i] + prev2)

                prev2 = prev1;
                prev1 = current
            }

            return prev1
        }

        return Math.max(helper(0, nums.length-2), helper(1, nums.length-1))
    }
}
