class Solution {
    isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let str = [...s]
    let revStr = str.reverse().join("")
    if (s === revStr) return true
    return false
    }
}
