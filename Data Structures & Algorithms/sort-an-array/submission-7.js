class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let swapped
        for (let i = 0; i < nums.length - 1; i++) {
            swapped = false;
            for (let j = 0; j < nums.length - i - 1; j++) {
                if(nums[j] > nums[j + 1]) {
                    [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
        return nums
    }
}
