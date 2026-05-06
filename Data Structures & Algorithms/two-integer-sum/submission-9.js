class Solution {

    twoSum(nums, target) {
        let obj = new Map()
        for(let i = 0; i < nums.length;i++) {
            let compliment = target - nums[i]
            if(obj.has(compliment)) {
                return [obj.get(compliment), i]
            }else {
                obj.set( nums[i], i)
            }
        } 
    }
}
