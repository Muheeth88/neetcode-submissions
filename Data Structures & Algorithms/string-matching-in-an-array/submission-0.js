class Solution {
    stringMatching(words) {
        let map = new Map()
        for (let i = 0; i < words.length; i++) {
            let j = 0
            while(j < words.length) {
                    if(words[i].includes(words[j]) && i !== j) {
                    map.set(words[j], words[i])
                }
                j++
            }
        
        }
        return Array.from(map.keys())
    }
}
