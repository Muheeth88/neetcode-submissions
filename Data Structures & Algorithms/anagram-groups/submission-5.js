class Solution {
    groupAnagrams(strs) {
    const map = new Map();
        for(let str of strs) {
            let sorted = str.toLowerCase().split("").sort().join("")
            
              if(map.has(sorted)) {
                map.set(sorted, [...map.get(sorted), str])
            } else {
                map.set(sorted,[str])
            }
        }
        const arr = []

        for(let [key, val] of map) {
            arr.push(val)
        }
        return arr
    }
}
