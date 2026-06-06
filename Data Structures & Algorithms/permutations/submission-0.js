class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        function backtrack(start) {
            if (start === nums.length) {
                result.push([...nums]);
                return;
            }
            for (let i = start; i < nums.length; i++) {
                [nums[i], nums[start]] = [nums[start], nums[i]]
                backtrack(start + 1);
                [nums[i], nums[start]] = [nums[start], nums[i]]
            }
        }

        backtrack(0);
        return result;
    }
}
