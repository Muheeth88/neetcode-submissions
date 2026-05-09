class Solution {
    encode(strs) {
        let encoded = ""
        for (let str of strs) {
            encoded = encoded + str.length + "#" + str
        }
        return encoded
    }

    decode(str) {
        let result = []
        let i = 0;
        while (i < str.length) {
            let j = i

            while(str[j] !== "#") {
                j++
            
            }

            let length = Number(str.slice(i,j))
            let word = str.slice(j+1, j+1+length)
              
            result.push(word)
            i = j + 1 + length
            console.log(i, str[i+1])
        }
        return result
    }
}
