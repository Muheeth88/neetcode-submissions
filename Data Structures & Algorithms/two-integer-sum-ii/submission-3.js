class Solution {
    twoSum(numbers, target) {
        const map = new Map()
        for(let i = 0; i< numbers.length; i++) {
            const c = target - numbers[i]
            if(map.has(c)) {
                console.log([ map.get(c), i ])
                return [ map.get(c) + 1, i +1 ]
            } else {
                map.set(numbers[i], i)
            }
        }
    }
}
