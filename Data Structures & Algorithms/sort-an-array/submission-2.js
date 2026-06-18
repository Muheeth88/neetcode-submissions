class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                if(nums[i] < nums[j]) {
                    [nums[i], nums[j]] = [nums[j], nums[i]]
                }
            }
        }
        return nums
    }
}
