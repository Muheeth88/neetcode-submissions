class Solution {
    longestConsecutive(nums) {
    if (!nums || nums.length === 0) return 0;
    const map = new Set(nums)
    let max = 0

    for (let num of map) {
        if(!map.has(num - 1)) {
            let current = num
            let length = 1

            while(map.has(current + 1)) {
                current++
                length++
            }
       if (length > max) max = length;
        }
    }
    return max

    
    }
}
