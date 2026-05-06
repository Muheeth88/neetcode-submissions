class Solution {
    topKFrequent(nums, k) {
        const map = new Map()
        for(let num of nums) {
            if(map.has(num)) {
                map.set(num, map.get(num) + 1)
            } else {
                map.set(num, 1)
            }
        }

        const arr = []

        for(let [key, val] of map) {
            arr.push({key, val})
        }
        const sorted = arr.sort((a,b) => b.val - a.val)

        return sorted.slice(0, k).map(item => item.key);
    }
}
