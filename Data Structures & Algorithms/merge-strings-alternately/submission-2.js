class Solution {
    mergeAlternately(word1, word2) {
        let l1 = word1.length
        let l2 = word2.length
        let length = Math.max(l1,l2)
        let string = ""
        let i = 0
        let j = 0
        while(i < l1 || j < l2) {
            if(i<l1) {
                string = string + word1[i]
                 i++
            } 
            if(j<l2) {
                string = string + word2[j]
                 j++
            } 
        }
        return string
    }
}
