class Solution {
    isAnagram(s, t) {
        let s1 = [...s].sort().join(",")
        let s2 = [...t].sort().join(",")
        return s1 === s2 ? true : false
    }
}
