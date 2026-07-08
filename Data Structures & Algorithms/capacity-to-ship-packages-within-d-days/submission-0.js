class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let sum = weights.reduce((acc, itr) => {
           return acc = acc + itr
        }, 0)

        let left = Math.max(...weights)
        let right = sum

        while(left < right) {
            let mid = left + Math.floor((right - left)/2)

            let capacity = 0
            let currentDays = 1

            for (let weight of weights) {
                if(capacity + weight <= mid) {
                    capacity = capacity + weight
                } else {
                    currentDays++
                    capacity = weight
                }
            }

            if(currentDays <= days  ) {
                right = mid 
            } else {
                left = mid + 1
            }
        }

        return left
    }
}
