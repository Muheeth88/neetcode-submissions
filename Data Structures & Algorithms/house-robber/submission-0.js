class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if (nums.length === 1) {
            return nums[0];
        }

        const dp = []

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            const robCurrent = nums[i] + dp[i-2];
            const skipCurrent = dp[i-1]

            dp[i] = Math.max(robCurrent , skipCurrent)
        }

        return dp[nums.length - 1]

    }
}
