class Solution {
    longestConsecutive(nums) {
        let u = new Set([...nums])
        let max = 0
        for(let i = 0; i < nums.length; i++) {
            if(!u.has(nums[i] - 1) ){
                let current = nums[i]
                let length = 0
                while(u.has(current)) {
                    current++
                    length++
                }
                if(length > max) {
                    max = length
                }
            }

        }
        return max


    }
}
