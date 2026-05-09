class Solution {
    longestConsecutive(nums) {
              if (nums.length === 0) return 0;
        const x = nums.sort((a,b) => a - b)
        let longest = 1;
        const sorted = [...new Set(x)]
        let count = 1
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] === sorted[i-1]+1) {
                count++
            longest = Math.max(longest, count)
            } else {
                count = 1
            }
        }
        return longest 
    }
}
