class Solution {
    findLucky(arr) {
        let freq = new Map()
        for (let ele of arr) {
            freq.set(ele, (freq.get(ele)||0) + 1)
        }

        let res = []

        for (let [key, value] of freq) {
            if(key === value) {
                res.push(key)
            }
        }

        return Math.max(...res, -1)
    }
}
