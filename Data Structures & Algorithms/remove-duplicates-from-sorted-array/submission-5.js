class Solution {
    removeDuplicates(nums) {
        let k = 1;
        for (let i = 1; i < nums.length; i++) {
            if(nums[i] !== nums[i-1]) {
                nums[k] = nums[i] 
                k++
            }
    
        }
        console.log(nums)
        return k
    }
}
