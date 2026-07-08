class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
         let n = nums.length - 1
    let left = 0
    let right = n

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        let currentNum = nums[mid]

        if (currentNum === target) {
            return true
        }
        if (
            nums[left] === nums[mid] &&
            nums[mid] === nums[right]
        ) {
            left++;
            right--;
        } else if (nums[left] <= currentNum) {
            // Left is sorted
            if (target >= nums[left] && target < currentNum) {
                right = mid - 1
            } else {
                left = mid + 1
            }

        } else {
            // right is sorted
            if (target <= nums[right] && target > currentNum) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return false
    }
}
