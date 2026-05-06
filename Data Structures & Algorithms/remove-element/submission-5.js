class Solution {
    removeElement(nums, val) {
        let res = nums.filter((num) => num !== val)
        for(let i = 0 ; i < res.length; i++) {
            nums[i] = res[i]
        }
        return res.length
    }
}
