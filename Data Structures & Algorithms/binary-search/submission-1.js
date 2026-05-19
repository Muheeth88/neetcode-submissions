class Solution {
    search(nums, target) {
        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            let midVal = Math.floor((l+r)/2) 

            if (nums[midVal] === target) {
                return midVal
            }

            if(target < nums[midVal]) {
                r = midVal - 1
            } else {
                l = midVal + 1
            }

        }
      return -1;
    }
}
