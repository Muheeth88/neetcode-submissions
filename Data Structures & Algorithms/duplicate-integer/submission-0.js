class Solution {
    hasDuplicate(nums) {
    let hasDups = nums.filter((x,index) => {
            return nums.indexOf(x) !== index
        })
    return hasDups.length ? true : false;
    }
}
