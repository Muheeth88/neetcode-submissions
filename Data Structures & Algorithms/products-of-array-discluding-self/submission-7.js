class Solution {
    productExceptSelf(nums) {

        const res = new Array(nums.length).fill(1)
        let prefix = 1
        for(let i = 0; i < res.length; i++) {
            res[i] = prefix
            prefix = prefix * nums[i]
        }

        let suffix = 1

        for(let j = nums.length -1; j >= 0; j--) {
            res[j] = res[j] * suffix
            suffix = suffix * nums[j]
        }
        return res
    }
}
