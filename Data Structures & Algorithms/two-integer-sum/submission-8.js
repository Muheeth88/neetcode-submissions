class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(let i = 0; i< nums.length; i++) {
            const c = target - nums[i]
            if(map.has(c)) {
                console.log([ map.get(c), i ])
                return [ map.get(c), i ]
            } else {
                map.set(nums[i], i)
            }
        }
    }
}
