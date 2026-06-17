class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxEnding = nums[0]
        let minEnding = nums[0]
        let result = nums[0]

        for(let i = 1; i < nums.length; i++) {
            const current = nums[i]

            const tempMax = Math.max(current, current * maxEnding, current * minEnding)
            minEnding = Math.min(current, current * maxEnding, current * minEnding)
            maxEnding = tempMax

            result = Math.max(result, maxEnding)
        }

        return result
    }
}
