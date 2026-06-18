class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let left = 0
        let middle = 0
        let right = nums.length - 1

        while (middle <= right) {
            if(nums[middle] === 0) {
                [nums[left], nums[middle]] = [nums[middle], nums[left]]
                left++
                middle++
            } else if(nums[middle] === 1) {
                middle++
            } else {
                [nums[right], nums[middle]] = [nums[middle], nums[right]]
                right--
            }
        }
    }
}
