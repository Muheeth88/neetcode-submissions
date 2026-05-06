class Solution {
    maxDifference(s) {
        const map = new Map()
        for (let char of s) {
            map.set(char, (map.get(char) || 0 ) + 1)
        }
        const evenValues = Array.from(map.values()).filter((num) => num % 2 === 0)
        const oddValues = Array.from(map.values()).filter((num) => num % 2 !== 0)
        if(evenValues.length === 0 || oddValues.length === 0) return 0
        return Math.max(...oddValues) - Math.min(...evenValues)
    }
}
