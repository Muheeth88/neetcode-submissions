class Solution {
    isSubsequence(s, t) {
        let covered = 0
        for (let i = 0; i < t.length; i++) {
            if(t[i] === s[covered]) {
                covered++
            }
        }
        return s.length === covered
    }
}
