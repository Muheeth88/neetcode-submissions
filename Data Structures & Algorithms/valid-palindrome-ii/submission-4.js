class Solution {
    validPalindrome(s) {
        const cleaned = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
        let left = 0;
        let right = cleaned.length -1

        const checkPanin = (subString) => {
            let l = 0;
            let r = subString.length -1
            while(l < r) {
            if(subString[l] !== subString[r]) {
                return false
            }
            l++
            r--
        }
        return true
        }

        while(left < right) {
          if(  cleaned[left] !== cleaned[right]) {
            return checkPanin(cleaned.slice(0, left) + cleaned.slice(left+1)) || checkPanin(cleaned.slice(0, right) + cleaned.slice(right+1))
          }
          left++
          right--
        }
        return true
    }
}
