class Solution {
    getConcatenation(nums) {
        let array = new Array(nums.length * 2).fill(0)
        for(let i = 0; i < nums.length; i++) {
            array[i]  = nums[i]
            array[i + nums.length] = nums[i]
        }
        return array
    }
}
