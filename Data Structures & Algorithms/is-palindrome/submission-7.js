class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        const arr = [...cleaned]
        let start = 0
        let end = arr.length - 1
        while (start < end) {
            if(arr[start] !== arr[end]) {
                return false
            }
            start++
            end--
        }
        return true
    }
}
