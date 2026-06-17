class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const words = new Set(wordDict);
        console.log("words>>>", words);
        const n = s.length;

        const dp = Array(n + 1).fill(false);

        dp[0] = true;

        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                if (dp[j] && words.has(s.slice(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n];
    }
}
