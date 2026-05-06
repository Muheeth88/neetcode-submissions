class Solution {
    sortArray(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0 ; j < nums.length - i; j++) {
                if(nums[j] > nums[j+1]) {
                    [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                }
            }
        }
        return nums
    }
}
