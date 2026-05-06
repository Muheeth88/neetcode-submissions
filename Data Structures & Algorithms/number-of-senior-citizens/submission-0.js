class Solution {
    countSeniors(details) {
        let count = 0
        for (let str of details) {
            console.log( "age>>", str.slice(11,12)
            )
            if(str.slice(11,13) > 60) {
                count++
            }
        }
        return count
        
    }
}
