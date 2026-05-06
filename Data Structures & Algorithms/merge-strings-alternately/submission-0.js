class Solution {
    mergeAlternately(word1, word2) {
        let longest
        if(word1.length > word2.length) {
            longest = word1
        } else {
            longest = word2
        }
        let res = ""
        for (let i = 0; i < longest.length;i++) {
            if(  word1[i]) {

          res = res + word1[i]
            } 
            if( word2[i] ) {

           res = res + word2[i]
            }
        }
        return res
    }
}
