class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const word1 = s.split("").sort().join("")
        const word2 = t.split("").sort().join("")
        return word1 === word2
    }
}
