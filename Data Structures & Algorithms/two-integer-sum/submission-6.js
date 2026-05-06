class Solution {

    twoSum(nums, target) {
           let sol = []
    for(let i = 0; i < nums.length ; i++) {
        let x = target - nums[i]
        if(nums.includes(x) && i !== nums.indexOf(x)) {
            sol = [i, nums.indexOf(x)]
        }
    }
    return sol
    }
}
