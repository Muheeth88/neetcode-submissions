class Solution {
    isSubsequence(s, t) {
        let covered = 0
        for (let i = 0; i < t.length; i++) {
            if(t[i] === s[covered]) {
                    console.log(t[i], "===", s[covered])
                covered++
            }
        }
        console.log(s.length, covered)
        return s.length === covered
    }
}
