class Solution {
    characterReplacement(s, k) {
        let left = 0
        let right = 0
        let longest = 0
        let maxFreq = 0

        const count = new Map()

        for (right; right < s.length; right++) {
            count.set(s[right], (count.get(s[right]) || 0) + 1)
            maxFreq = Math.max(maxFreq, count.get(s[right]))
            let windowLength = right - left + 1
            while (windowLength - maxFreq > k){
                count.set(s[left], count.get(s[left]) - 1)
                left++
                windowLength = right - left + 1
            } 
            longest = Math.max(longest, windowLength)
        }

        return longest
    }
}
