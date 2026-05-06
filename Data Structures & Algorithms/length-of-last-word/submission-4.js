class Solution {
    lengthOfLastWord(s) {
        let count = s.length - 1;
        let len = 0

        while(count >= 0 && s[count] === " ") {
            count--
        }

        while(count >= 0 && s[count] !== " ") {
            len++
            count--
        }

        return len

    }
}
