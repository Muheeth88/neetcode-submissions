class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map1 = new Map()
        const map2 = new Map()
        
        for(let letter of s) {
            if(map1.has(letter)) {
                map1.set(letter, map1.get(letter) + 1)
            } else {
                map1.set(letter, 1)
            }
        }

   

          for(let letter of t) {
            if(map2.has(letter)) {
                map2.set(letter, map2.get(letter) + 1)
            } else {
                map2.set(letter, 1)
            }
        }
     if(map1.size !== map2.size) return false
        for( let [char, count] of map1) {
            if(!map2.has(char)) return false
            if (map2.get(char) !== count) return false
        }

        return true

    }
}
