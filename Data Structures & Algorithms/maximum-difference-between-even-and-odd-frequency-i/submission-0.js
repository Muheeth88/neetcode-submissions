class Solution {
    maxDifference(s) {
        let maxOdd = 0;
        let minEven = Infinity
        const map = new Map()
        for (let char of s) {
            map.set(char, (map.get(char) || 0 ) + 1)
        }
        const evenValues = Array.from(map.values()).filter((num) => num % 2 === 0)
        const oddValues = Array.from(map.values()).filter((num) => num % 2 !== 0)
        return Math.max(...oddValues) - Math.min(...evenValues)
    }
}
