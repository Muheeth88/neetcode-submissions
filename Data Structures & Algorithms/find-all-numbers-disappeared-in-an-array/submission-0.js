class Solution {
    findDisappearedNumbers(nums) {
        const set = new Set(nums)
        console.log(set)
        const res = []
        for (let i = 1; i <= nums.length; i++) {
            console.log(">>",i)
            if(!set.has(i)) {
                console.log("push>>", i)
                res.push(i)
            }
        }
        return res
    }
}
