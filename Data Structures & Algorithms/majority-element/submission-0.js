class Solution {

    majorityElement(nums) {
    const freq = new Map()

    for(let i = 0; i<nums.length;i++) {
        if(freq.has(nums[i])) {
            freq.set(nums[i], freq.get(nums[i]) + 1)
        } else {
            freq.set(nums[i], 1)
        }
        if(freq.get(nums[i]) > nums.length/2) {
            return nums[i]
        }
    }
    }
}
