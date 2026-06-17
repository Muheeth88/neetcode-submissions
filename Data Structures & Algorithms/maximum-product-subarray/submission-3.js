class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
         let minProduct = nums[0]
    let maxProduct = nums[0]
    let result = nums[0]

    for(let i = 1; i < nums.length; i++) {
        let current = nums[i]
        let tempMax = Math.max(current, current * minProduct, current * maxProduct)
        let tempMin = Math.min(current, current * minProduct, current * maxProduct)

        maxProduct = tempMax
        minProduct = tempMin

        result = Math.max(result, maxProduct)
    }


    return result

    }
}
