class Solution {
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let current = 0
        for (let num of nums) {
            if(num === 1) {
                current++
            maxCount = Math.max(current, maxCount)
            } else {
                current = 0
            }
        }
        return maxCount
    }
}
