class Solution {
    topKFrequent(nums, k) {
        const map = new Map();
        for (let num of nums) {
            if(map.has(num)) {
                map.set(num, map.get(num) + 1)
            } else {
                map.set(num, 1)
            }
        }
        console.log(map)
        const sorted = new Map([...map].sort((a,b) => b[1] - a[1]))
        const res = []
        for(let [key,value] of sorted) {
            res.push(key)
        }
        return res.slice(0,k)
    }
}
