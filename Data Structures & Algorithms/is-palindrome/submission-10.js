class Solution {

    isPalindrome(s) {
        const cleaned = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
        let left = 0
        let right = cleaned.length -1
        console.log(cleaned)
        while(left < right) {

          if(  cleaned[left] !== cleaned[right]) {
            return false
          }
          left++
          right--
        }
        return true
    }
}
