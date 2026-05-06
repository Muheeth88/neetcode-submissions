class Solution {

    groupAnagrams(strs) {
        let map = new Map();
        for (let word of strs) {
            let sorted = [...word].sort().join("")
            map.has(sorted) ? map.set(sorted, [...map.get(sorted), word]) : map.set(sorted,[word]) 
        }
        return Array.from(map.values())
    }
}
