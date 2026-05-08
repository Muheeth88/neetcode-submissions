class Solution {
    dailyTemperatures(temperatures) {
        let result = []
        let n = temperatures.length
        for (let i = 0; i < n; i++) {
            let count = 1
            let j = i + 1
            while (j < n) {
                if (temperatures[j] > temperatures[i]) {
                    break
                }
                j++
                count++
            }
        count = j === n ? 0 : count
        result[i] = count
        }
        return result
    }
}
