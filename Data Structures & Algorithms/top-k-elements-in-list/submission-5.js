class Solution {
    topKFrequent(nums, k) {
        let map = {};
        for (let num of nums) {
            if (map[num]) {
                map[num] = map[num] + 1
            } else {
                map[num] = 1
            }
        }
        const pairs = Object.entries(map)
        const result = pairs.sort((a,b) => b[1] - a[1]).slice(0,k).map(n => n[0])
        return result
        
    }
}
