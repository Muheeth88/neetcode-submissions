class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;

        k = k % n;

        function rotate(start, end) {
            let left = start
            let right = end
            while(left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]]
                left++
                right--
            }
        }

        rotate(0, n - 1)
        rotate(0, k - 1)
        rotate(k, n - 1)

    }
}
