class Solution {
    removeElement(nums, val) {
         let k = 0

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== val) {
                nums[k] = nums[i]
                k++
            }
        }
        console.log(nums)
        return k
    }
}
