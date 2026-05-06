class Solution {

    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }

        let first = new Map()
        let second = new Map()

        for (let i = 0; i < s.length; i++) {
            if(first.has(s[i])) {
                first.set(s[i], first.get(s[i]) + 1)
            } else {
                first.set(s[i], 1)
            }

                if(second.has(t[i])) {
                second.set(t[i], second.get(t[i]) + 1)
            } else {
                second.set(t[i], 1)
            }
        }
         if(first.size !== second.size) return false

         for(let [key, value] of first) {
            if(!second.has(key)) {
                return false
            }
            if(second.get(key) !== value) {
                return false
            }
         }

         return true

    }
}
