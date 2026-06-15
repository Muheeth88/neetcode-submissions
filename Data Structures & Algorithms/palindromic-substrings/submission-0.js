class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
          let res = "";
          let count = 0

        for (let i = 0; i < s.length; i++) {

            let left = i;
            let right = i;

            while (left >= 0 && right < s.length && s[left] === s[right]) {

                if(right - left + 1 > res.length) {
                    res = s.slice(left, right + 1)
                }
                count++
                left--
                right++
            }

            left = i;
            right = i + 1;

            while(left >= 0 && right < s.length && s[left] === s[right]) {

                if(right - left + 1 > res.length) {
                    res = s.slice(left, right + 1)
                }
                count++
                left--
                right++
            }
        }



        return count;
    }
}
