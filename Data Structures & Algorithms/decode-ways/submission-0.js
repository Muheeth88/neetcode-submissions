class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {

        if(s[0] === "0") return 0

        let n = s.length

        let prev2 = 1;
        let prev1 = 1;

        for (let i = 1; i < n; i++) {
            let current = 0

            if(s[i] !== "0") {
                current = current + prev1
            }

            const twoDigit = Number(s.substring(i-1, i+1))

            if(twoDigit >= 10 && twoDigit <= 26) {
                current = current + prev2
            }

            prev2 = prev1
            prev1 = current


        }

        return prev1

    }
}
