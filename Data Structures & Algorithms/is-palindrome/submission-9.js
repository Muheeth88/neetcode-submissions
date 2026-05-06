class Solution {

    isPalindrome(s) {
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
        const arr = [...cleaned]
        let left = 0;
        let right = arr.length-1;
        while(left < right) {
            if(arr[left] === arr[right]) {
                left++
                right--
            } else {
                return false
            }
        }
        return true
    }
}
