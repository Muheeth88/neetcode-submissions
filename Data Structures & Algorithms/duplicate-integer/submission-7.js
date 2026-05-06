class Solution {
    hasDuplicate(nums) {
    const setx = new Set()
    for(let num of nums) {
        if (setx.has(num)) {
            return true
        }
        setx.add(num)
    }
    return false
    }
}
