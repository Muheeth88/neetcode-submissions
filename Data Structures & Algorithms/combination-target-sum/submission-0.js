class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []

        function backtrack (start, remaining, combination) {

            if(remaining < 0) {
                return
            }

            if(remaining === 0) {
                result.push([...combination])
                return
            }

            for(let i = start; i < nums.length; i++) {
                combination.push(nums[i])
                backtrack(i, remaining - nums[i], combination)
                combination.pop(nums[i])
            }

        }

        backtrack(0, target, [])

        return result
    }
}
